"use client";

import { AnimatePresence, motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.28,
  delay = 0,
  yOffset = 6,
  inView = true,
  inViewMargin = "40px",
  blur = "0px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      ...(blur && blur !== "0px" ? { filter: `blur(${blur})` } : {}),
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "none",
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: Math.min(delay, 0.12),
          duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
