"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
};

const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.8,
  delay = 0,
}: BlurFadeTextProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = text.split(" ");
  const activeVariants = variant || variants;
  const activeTransition = { duration, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className="inline-flex flex-wrap items-baseline gap-x-2"
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            className={cn("inline-block", className)}
            transition={activeTransition}
            variants={activeVariants}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default BlurFadeText;
