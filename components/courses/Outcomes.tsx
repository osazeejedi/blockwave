"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { OUTCOMES } from "@/lib/courses-data";

export default function Outcomes() {
  return (
    <section className="bg-ink px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-sky">
            Career Outcomes
          </div>
          <h2 className="section-h2 mb-16 text-white">Where graduates go.</h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <motion.div
              key={o.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-7 transition-all hover:border-sky/40 hover:bg-white/[0.07]"
            >
              <div className="mb-2 text-lg font-bold tracking-tight text-white">{o.role}</div>
              <div className="mb-4 font-mono text-[12px] tracking-wider text-sky">{o.salary}</div>
              <p className="text-[13px] leading-[1.65] text-white/45">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
