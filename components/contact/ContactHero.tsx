"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactHero() {
  return (
    <section className="diagonal-lines relative overflow-hidden bg-ink px-6 pt-36 pb-20 md:px-12 md:pt-40 md:pb-24">
      <motion.div
        className="relative z-10 mx-auto max-w-[1280px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-sky"
        >
          <span className="block h-px w-8 bg-sky" />
          Get in Touch
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-5 max-w-[900px] text-white"
          style={{
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 700,
            letterSpacing: "-2.5px",
            lineHeight: 1.04,
          }}
        >
          Let&rsquo;s build
          <br />
          <em className="not-italic text-sky">something together.</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-[640px] text-base leading-[1.7] text-white/45"
        >
          Whether you&rsquo;re exploring a consulting engagement, applying to a programme, or
          just want to ask a question — we respond within one business day.
        </motion.p>
      </motion.div>
    </section>
  );
}
