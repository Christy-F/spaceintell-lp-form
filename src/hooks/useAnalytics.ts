"use client";

import { useEffect } from "react";

/**
 * A configurable hook for integrating GA4 or other analytics tracking.
 * Currently stubs out events to the console until a Measurement ID is provided.
 */
export function useAnalytics() {
  useEffect(() => {
    // Initialize analytics script here when ID is provided
    // e.g., window.dataLayer = window.dataLayer || [];
  }, []);

  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    // TODO: Replace with actual GA4 window.gtag call when configured
    console.log(`[Analytics Event] ${eventName}`, eventParams);
  };

  return { trackEvent };
}
