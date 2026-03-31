"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { init, track } from "@plausible-analytics/tracker";

export default function PlausibleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);

  // Initialize once on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    init({
      domain: window.location.hostname,
      autoCapturePageviews: true,
      outboundLinks: true,
    });
  }, []);

  // Track pageview on every route change (SPA navigations)
  useEffect(() => {
    if (!initialized.current) return;
    track("pageview");
  }, [pathname, searchParams]);

  return null;
}
