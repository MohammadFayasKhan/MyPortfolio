"use client";

import React, { useEffect, useRef } from "react";

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  const isInitRef = useRef(false);

  useEffect(() => {
    let smootherInstance: any = null;
    let cancelled = false;

    const initScrollSmoother = () => {
      if (typeof window === "undefined") return false;
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      const ScrollSmoother = (window as any).ScrollSmoother;

      if (!gsap || !ScrollTrigger || !ScrollSmoother) return false;

      try {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        if (ScrollSmoother.get()) {
          ScrollSmoother.get().kill();
        }

        smootherInstance = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.15,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: false,
        });

        document.documentElement.classList.add("has-smooth-scroller");
        isInitRef.current = true;
        return true;
      } catch (err) {
        console.warn("GSAP ScrollSmoother init notice:", err);
        return false;
      }
    };

    if (initScrollSmoother()) {
      return () => {
        if (smootherInstance) {
          try {
            smootherInstance.kill();
          } catch (_) {}
        }
        document.documentElement.classList.remove("has-smooth-scroller");
      };
    }

    const scripts = [
      "/gsap/gsap.min.js",
      "/gsap/ScrollTrigger.min.js",
      "/gsap/ScrollToPlugin.min.js",
      "/gsap/ScrollSmoother.min.js",
    ];

    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });

    (async () => {
      for (const src of scripts) {
        if (cancelled) return;
        await loadScript(src);
      }
      if (!cancelled) {
        initScrollSmoother();
      }
    })();

    return () => {
      cancelled = true;
      if (smootherInstance) {
        try {
          smootherInstance.kill();
        } catch (_) {}
      }
      document.documentElement.classList.remove("has-smooth-scroller");
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full">
      <div id="smooth-content" className="w-full">
        {children}
      </div>
    </div>
  );
}
