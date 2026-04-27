"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroMark from "../HeroMark";
import Parallax from "../Parallax";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="diagonal-lines relative grid min-h-screen items-center gap-10 overflow-hidden bg-ink px-6 pt-32 pb-20 md:grid-cols-2 md:px-12">
      <motion.div
        className="relative z-10 max-w-[580px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-sky"
        >
          <span className="block h-px w-8 bg-sky" />
          Tech Consulting &amp; Training
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-white"
          style={{
            fontSize: "clamp(48px, 5vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-2.5px",
            lineHeight: 1.02,
          }}
        >
          Engineer
          <br />
          <em className="not-italic text-sky">Clarity.</em>
          <br />
          Build the Future.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-[460px] text-[17px] leading-[1.7] text-white/50"
        >
          WhiteBox is a tech consulting firm delivering software engineering, strategic
          consulting, and structured professional training — built for teams and individuals
          who think in systems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3.5">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-md bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-sky"
          >
            Explore Programmes →
          </Link>
          <Link
            href="#services"
            className="rounded-md border-[1.5px] border-white/20 px-7 py-3 text-sm font-medium tracking-wide text-white/70 transition-colors hover:border-white/50 hover:text-white"
          >
            Our Services
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative z-10 flex items-center justify-center">
        <Parallax speed={-0.15}>
          <HeroMark />
        </Parallax>
      </div>

      {/* Stats */}
      <div className="relative z-10 col-span-full mt-16 flex flex-wrap border-t border-white/[0.08] pt-10">
        {[
          { num: "3", suffix: "+", label: "Service Disciplines" },
          { num: "3", suffix: "", label: "Training Programmes" },
          { num: "14", suffix: "mo", label: "Longest Track to Industry Ready" },
          { num: "100", suffix: "%", label: "Project-Led Curriculum" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`flex-1 px-8 ${i > 0 ? "border-l border-white/[0.08]" : ""}`}
            style={{ minWidth: 180 }}
          >
            <div
              className="mb-1 text-white"
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-1.5px",
              }}
            >
              {stat.num}
              <span className="text-sky">{stat.suffix}</span>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/35">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
