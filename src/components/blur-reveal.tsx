"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

export const linearTransition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const };

export const linearVariants: Variants = {
  hidden: { filter: "blur(10px)", y: 16, opacity: 0 },
  visible: { filter: "blur(0px)", y: 0, opacity: 1, transition: linearTransition },
};

export const linearContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
};

interface BlurRevealProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BlurReveal({ children, className }: BlurRevealProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={linearContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
