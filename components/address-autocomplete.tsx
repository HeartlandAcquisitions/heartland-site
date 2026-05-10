"use client"

/**
 * Debounced address autocomplete dropdown for the lead form.
 *
 * - Calls /api/autocomplete-address (server route → CRM → RealEstateAPI)
 * - 250ms debounce so we don't hit the upstream on every keystroke
 * - Aborts in-flight requests when a newer query is typed
 * - Closes on click-outside, Escape, blur, or Enter
 * - Keyboard nav: ArrowDown / ArrowUp / Enter / Escape
 *
 * Renders a real text input — the parent owns the value via `value`/`onChange`.
 * When a suggestion is picked the parent's onChange fires with the full
 * formatted address (RealEstateAPI's `title` field).
 */
import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"

interface Suggestion {
  title?: string
  address?: string
  // RealEstateAPI returns more (id, street, city, state, zip, etc.) but the
  // form only needs a string to fill the input; the rest is on the lead
  // record once the form submits.
}

interface AddressAutocompleteProps {
  value: string
  onChange: (value: string) => void
  /** Fires when the user picks a suggestion (vs typing). Useful if you
   *  want to auto-advance to the next step. */
  onSelect?: (value: string, suggestion: Suggestion) => void
  id?: string
  className?: string
  placeholder?: string
  required?: boolean
  autoComplete?: string
  "aria-label"?: string
}

const DEBOUNCE_MS = 250
const MIN_CHARS = 3

export function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  id,
  className,
  placeholder,
  required,
  autoComplete = "street-address",
  "aria-label": ariaLabel,
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [loading, setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  // Track the last value the user *picked* — if it equals the current input,
  // suppress the dropdown so it doesn't pop right back open after selection.
  const lastPickedRef = useRef<string>("")

  // Debounced fetch. Aborts any in-flight request when the query changes.
  useEffect(() => {
    const trimmed = value.trim()
    if (trimmed === lastPickedRef.current) {
      setSuggestions([])
      setOpen(false)
      return
    }
    if (trimmed.length < MIN_CHARS) {
      setSuggestions([])
      setOpen(false)
      setLoading(false)
      return
    }

    const handle = setTimeout(async () => {
      abortRef.current?.abort()
      const ctrl = new AbortController()
      abortRef.current = ctrl
      setLoading(true)
      try {
        const res = await fetch(
          `/api/autocomplete-address?q=${encodeURIComponent(trimmed)}`,
          { signal: ctrl.signal },
        )
        if (!res.ok) throw new Error(`autocomplete ${res.status}`)
        const data = (await res.json()) as Suggestion[]
        if (ctrl.signal.aborted) return
        setSuggestions(Array.isArray(data) ? data.slice(0, 6) : [])
        setOpen(Array.isArray(data) && data.length > 0)
        setActiveIndex(-1)
      } catch {
        // Network errors silently degrade to no-suggestions; the form
        // still works as a plain text input.
        setSuggestions([])
        setOpen(false)
      } finally {
        setLoading(false)
      }
    }, DEBOUNCE_MS)

    return () => clearTimeout(handle)
  }, [value])

  // Click-outside to close
  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [open])

  const pick = (s: Suggestion) => {
    const text = s.title ?? s.address ?? ""
    if (!text) return
    lastPickedRef.current = text
    onChange(text)
    setOpen(false)
    setSuggestions([])
    setActiveIndex(-1)
    onSelect?.(text, s)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) {
      // Let the parent form's submit handler take Enter.
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, -1))
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault()
        pick(suggestions[activeIndex]!)
      }
    } else if (e.key === "Escape") {
      e.preventDefault()
      setOpen(false)
      setActiveIndex(-1)
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <Input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          // Typing after a pick reopens the dropdown when results return.
          lastPickedRef.current = ""
        }}
        onFocus={() => {
          if (suggestions.length > 0 && value.trim() !== lastPickedRef.current) {
            setOpen(true)
          }
        }}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-label={ariaLabel}
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={open ? `${id}-listbox` : undefined}
        aria-activedescendant={
          open && activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
        }
        role="combobox"
        className={className}
      />
      {open && suggestions.length > 0 ? (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-1 max-h-72 overflow-y-auto rounded-lg border border-brand-text/15 bg-white shadow-lg"
        >
          {suggestions.map((s, i) => {
            const text = s.title ?? s.address ?? ""
            const isActive = i === activeIndex
            return (
              <li
                key={`${text}-${i}`}
                id={`${id}-option-${i}`}
                role="option"
                aria-selected={isActive}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  isActive ? "bg-brand-primary/10 text-brand-text" : "text-brand-text hover:bg-brand-primary/5"
                }`}
                // mousedown (not click) so we beat the input's blur and the
                // dropdown doesn't disappear before the click registers.
                onMouseDown={(e) => {
                  e.preventDefault()
                  pick(s)
                }}
              >
                {text}
              </li>
            )
          })}
        </ul>
      ) : null}
      {loading && open ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brand-text/50">
          …
        </div>
      ) : null}
    </div>
  )
}
