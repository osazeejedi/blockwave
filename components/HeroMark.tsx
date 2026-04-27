"use client";

import { motion } from "framer-motion";

export default function HeroMark() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-10"
        style={{
          background:
            "radial-gradient(circle, rgba(43,108,176,.25) 0%, transparent 70%)",
        }}
      />
      <motion.svg
        viewBox="0 0 300 300"
        width={380}
        height={380}
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <rect width="300" height="300" fill="none" />

        {/* Outer-most square — rotates very slowly */}
        <motion.rect
          x="20"
          y="20"
          width="260"
          height="260"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          style={{ originX: "150px", originY: "150px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        {/* Layer 2 */}
        <motion.rect
          x="42"
          y="42"
          width="216"
          height="216"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          style={{ originX: "150px", originY: "150px" }}
          initial={{ rotate: 8 }}
          animate={{ rotate: 8 + 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        {/* Layer 3 */}
        <motion.rect
          x="64"
          y="64"
          width="172"
          height="172"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          style={{ originX: "150px", originY: "150px" }}
          initial={{ rotate: 16 }}
          animate={{ rotate: 16 - 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        {/* Layer 4 */}
        <motion.rect
          x="86"
          y="86"
          width="128"
          height="128"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          style={{ originX: "150px", originY: "150px" }}
          initial={{ rotate: 27 }}
          animate={{ rotate: 27 + 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        {/* Layer 5 */}
        <motion.rect
          x="108"
          y="108"
          width="84"
          height="84"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          style={{ originX: "150px", originY: "150px" }}
          initial={{ rotate: 36 }}
          animate={{ rotate: 36 - 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner squares — static rotated 45° */}
        <rect
          x="126"
          y="126"
          width="48"
          height="48"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="2"
          strokeOpacity="0.7"
          transform="rotate(45 150 150)"
        />
        <rect
          x="138"
          y="138"
          width="24"
          height="24"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="3"
          transform="rotate(45 150 150)"
        />

        {/* Pulsing center */}
        <motion.circle
          cx="150"
          cy="150"
          r="5"
          fill="#63A8D8"
          animate={{ opacity: [1, 0.55, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="150"
          cy="150"
          r="12"
          fill="none"
          stroke="#63A8D8"
          strokeWidth="1"
          strokeOpacity="0.3"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          style={{ originX: "150px", originY: "150px" }}
        />
      </motion.svg>
    </div>
  );
}
