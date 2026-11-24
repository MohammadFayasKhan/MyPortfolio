"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glareEffect?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 6,
  scale = 1.012,
  glareEffect = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 24, stiffness: 260, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
    ref.current.style.setProperty("--mouse-x", `${(px * 100).toFixed(1)}%`);
    ref.current.style.setProperty("--mouse-y", `${(py * 100).toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    if (ref.current) {
      ref.current.style.setProperty("--mouse-x", "50%");
      ref.current.style.setProperty("--mouse-y", "50%");
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        rotateX,
        rotateY,
      }}
      whileHover={{ scale }}
      transition={{ duration: 0.2 }}
      className={cn("group relative h-full", className)}
    >
      {children}

      {glareEffect && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08), transparent 75%)",
          }}
        />
      )}
    </motion.div>
  );
}
