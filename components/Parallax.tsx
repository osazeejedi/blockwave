"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // negative = moves up faster than scroll, positive = moves down
  className?: string;
}

/**
 * A subtle vertical parallax wrapper. `speed` controls intensity:
 *   speed = -0.3 → element moves up 30% slower than scroll feel (rises)
 *   speed = 0.3 → element drifts down (lags scroll)
 */
export default function Parallax({
  children,
  speed = -0.2,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map progress (0 → 1) to a translateY range based on speed
  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [speed * 200, speed * -200]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
