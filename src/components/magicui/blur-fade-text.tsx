"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import React, { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: Variants;
  duration?: number;
  wordDelay?: number;
  delay?: number;
  yOffset?: number;
}

const linearTransition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const };
const defaultLinearVariants: Variants = {
  hidden: { filter: "blur(10px)", y: 16, opacity: 0 },
  visible: { filter: "blur(0px)", y: 0, opacity: 1 },
};

const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.8,
  wordDelay = 0.04,
  delay = 0,
}: BlurFadeTextProps) => {
  const words = useMemo(() => text.split(" "), [text]);
  const activeVariants = variant || defaultLinearVariants;

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: wordDelay, delayChildren: delay }}
      className={cn("inline-flex flex-wrap gap-x-2 gap-y-1", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          transition={{ ...linearTransition, duration }}
          variants={activeVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default BlurFadeText;
