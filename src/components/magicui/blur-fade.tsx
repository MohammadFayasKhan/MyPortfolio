"use client";

import { motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
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
  duration = 0.7,
  delay = 0,
  yOffset = 16,
  inView = true,
  inViewMargin = "0px 0px -40px 0px",
  blur = "10px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: {
      filter: blur && blur !== "0px" ? `blur(${blur})` : "blur(10px)",
      transform: `translateY(${yOffset}px)`,
      opacity: 0,
    },
    visible: {
      filter: "blur(0px)",
      transform: "translateY(0px)",
      opacity: 1,
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: Math.min(delay, 0.2),
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
