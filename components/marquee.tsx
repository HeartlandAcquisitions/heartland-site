"use client"

import { useEffect, useRef } from "react"

const ITEMS = [
  "CASH CLOSE",
  "NO FINANCING CONTINGENCY",
  "7-14 DAY CLOSE",
  "LOCAL KC BUYERS",
  "FULL COMMISSION TO LISTING AGENT",
  "WE BUY AS-IS",
  "NO INSPECTION CONTINGENCY",
  "CONFIDENTIAL · OFF-MARKET",
] as const

// Pixels per second. The old CSS animation was 25s for one full loop of
// the duplicated track at typical viewport widths — this matches that
// visual pace within ~10%.
const SPEED_PX_PER_SEC = 60

/**
 * Auto-scrolling marquee driven by requestAnimationFrame.
 *
 * Why not pure CSS @keyframes:
 *  - Browsers throttle or pause CSS animations in backgrounded tabs.
 *    On tab return, Chrome/Safari snap the transform forward to wherever
 *    the timeline says it "should" be, producing the visible jump
 *    Chase reported ("stops bringing new phrases, then suddenly loads in").
 *  - rAF doesn't fire while the tab is hidden, so it naturally pauses.
 *    The `visibilitychange` listener resets the time baseline so we
 *    resume from exactly where we left off — no jump.
 *
 * Items are rendered twice; once the offset reaches the width of one
 * set we wrap to 0, so the loop is seamless.
 */
export function Marquee() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Respect users who've asked for less animation. Don't even start
    // rAF — leave the track at offset 0 (a static phrase strip).
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    let halfWidth = track.scrollWidth / 2
    let offset = 0
    let lastTime: number | null = null
    let frame = 0

    const tick = (now: number) => {
      // First frame after start or after a visibility resume: don't
      // accumulate a giant dt — just establish the baseline.
      if (lastTime === null) lastTime = now
      const dt = (now - lastTime) / 1000
      lastTime = now

      offset += SPEED_PX_PER_SEC * dt
      if (halfWidth > 0 && offset >= halfWidth) offset -= halfWidth
      track.style.transform = `translate3d(${-offset}px, 0, 0)`

      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    // Reset the time baseline when the tab becomes visible again so we
    // don't apply a large dt from the "lost" hidden time.
    const onVisibility = () => {
      if (document.visibilityState === "visible") lastTime = null
    }
    document.addEventListener("visibilitychange", onVisibility)

    // Re-measure on resize — content width can change with viewport.
    const onResize = () => {
      halfWidth = track.scrollWidth / 2
      // Keep offset within the new bounds so we don't briefly translate
      // beyond the duplicated content.
      if (halfWidth > 0) offset = offset % halfWidth
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // Render the items twice for the seamless loop.
  const items = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand-ink border-y border-brand-border py-4">
      <div
        ref={trackRef}
        // will-change + initial translate3d hints the browser to promote
        // this to its own compositor layer (GPU), which prevents the
        // sub-pixel stutter you'd get from CPU repaint.
        className="flex w-max will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="px-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-brand-bg-warm"
          >
            {item}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  )
}
