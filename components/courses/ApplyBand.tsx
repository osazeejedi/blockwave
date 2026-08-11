"use client";

import { motion } from "framer-motion";

export default function ApplyBand() {
  return (
    <section className="diagonal-lines-strong relative overflow-hidden bg-blue px-6 py-24 text-center md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[720px]"
      >
        <h2
          className="mb-5 text-white"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1.8px",
            lineHeight: 1.05,
          }}
        >
          Applications are open
          <br />
          for the 2025–26 cohort.
        </h2>
        <p className="mb-7 text-base leading-[1.65] text-white/70">
          Seats are limited to maintain the quality of mentorship and community that defines
          the Blockwave experience.
        </p>
        <div className="mb-9 font-mono text-[11px] tracking-[0.14em] text-white/55">
          PROGRAMME START · SEPTEMBER 2025 · PART-TIME · ONLINE
        </div>
        <a
          href="/apply"
          className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-[15px] font-bold tracking-wide text-blue transition-all hover:-translate-y-0.5 hover:shadow-2xl"
        >
          Apply Now →
        </a>
      </motion.div>
    </section>
  );
}
