"use client"

import posthog from "posthog-js"
import { PostHogProvider as Provider } from "posthog-js/react"
import { useEffect } from "react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
    if (!key || !host) return
    if (posthog.__loaded) return
    posthog.init(key, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      session_recording: {
        maskAllInputs: true,
        maskTextSelector: "[data-sensitive]",
      },
      loaded: () => {
        if (process.env.NODE_ENV !== "production") {
          posthog.debug(false)
          posthog.opt_out_capturing()
        }
      },
    })
  }, [])
  return <Provider client={posthog}>{children}</Provider>
}
