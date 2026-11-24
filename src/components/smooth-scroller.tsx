"use client";

import React from "react";

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <div id="smooth-wrapper" className="w-full">
      <div id="smooth-content" className="w-full">
        {children}
      </div>
    </div>
  );
}
