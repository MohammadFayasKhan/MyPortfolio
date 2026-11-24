"use client";

import React, { useEffect, useRef } from "react";

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  const isInitRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let smootherInstance: any = null;
    let resizeObserver: ResizeObserver | null = null;
    let cancelled = false;

    const initScrollSmoother = () => {
      if (typeof window === "undefined") return false;
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      const ScrollSmoother = (window as any).ScrollSmoother;
      const ScrollToPlugin = (window as any).ScrollToPlugin;

      if (!gsap || !ScrollTrigger || !ScrollSmoother) return false;

      try {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

        if (ScrollSmoother.get()) {
          ScrollSmoother.get().kill();
        }

        smootherInstance = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 0.75,
          effects: false,
          smoothTouch: 0,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });

        document.documentElement.classList.add("smoother-active");
        isInitRef.current = true;

        const contentElem = document.getElementById("smooth-content");
        if (contentElem && typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(() => {
            if ((window as any).ScrollTrigger) {
              (window as any).ScrollTrigger.refresh();
            }
          });
          resizeObserver.observe(contentElem);
        }

        return true;
      } catch (err) {
        console.warn("ScrollSmoother initialization notice:", err);
        return false;
      }
    };

    if (initScrollSmoother()) {
      return () => {
        if (resizeObserver) resizeObserver.disconnect();
        if (smootherInstance) {
          try {
            smootherInstance.kill();
          } catch (_) {}
        }
        document.documentElement.classList.remove("smoother-active");
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
      if (resizeObserver) resizeObserver.disconnect();
      if (smootherInstance) {
        try {
          smootherInstance.kill();
        } catch (_) {}
      }
      document.documentElement.classList.remove("smoother-active");
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
