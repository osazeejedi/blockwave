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

export default function ApplyHero() {
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
          Applications · 2025–26 Cohort
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
          Apply to
          <br />
          <em className="not-italic text-sky">Blockwave.</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-[600px] text-base leading-[1.7] text-white/45"
        >
          Three tracks. Limited cohort sizes. Project-led learning with direct mentorship.
          Fill in the form below and our admissions team will be in touch within 3 business days.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4"
        >
          {[
            { label: "AI & Automation Engineering", seats: "40 seats" },
            { label: "Data Science for Business", seats: "30 seats" },
            { label: "Cybersecurity", seats: "25 seats" },
          ].map((track) => (
            <div
              key={track.label}
              className="flex items-center gap-2.5 rounded-md border border-white/[0.1] bg-white/[0.04] px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky" />
              <span className="text-[12px] font-medium text-white/70">{track.label}</span>
              <span className="font-mono text-[10px] tracking-wider text-white/35">
                {track.seats}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
