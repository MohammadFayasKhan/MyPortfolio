"use client";

import { motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  yOffset = 14,
  inView = true,
  inViewMargin = "60px",
  blur = "10px",
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const [hasRevealed, setHasRevealed] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (inViewResult || !inView) {
      setHasRevealed(true);
    }
  }, [inViewResult, inView]);

  if (animationDone) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial={hasRevealed ? false : "hidden"}
      animate={hasRevealed || inViewResult || !inView ? "visible" : "hidden"}
      variants={combinedVariants}
      onAnimationComplete={() => setAnimationDone(true)}
      transition={{
        delay: hasRevealed ? 0 : Math.min(delay, 0.12),
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
