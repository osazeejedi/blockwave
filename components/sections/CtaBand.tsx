"use client";

import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section
      id="contact"
      className="diagonal-lines-strong relative overflow-hidden bg-blue px-6 py-20 text-center md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[640px]"
      >
        <h2 className="mb-4 text-4xl font-bold tracking-[-1.5px] text-white md:text-[42px]">
          Ready to build with us?
        </h2>
        <p className="mb-9 text-base leading-[1.65] text-white/65">
          Whether you&rsquo;re looking to upskill your team, ship a product, or make a career
          move in tech — Blockwave has a programme or engagement designed for you.
        </p>
        <a
          href="https://Blockwaveconsults.com/apply"
          className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-[15px] font-bold tracking-wide text-blue transition-all hover:-translate-y-0.5 hover:shadow-2xl"
        >
          Apply Now →
        </a>
      </motion.div>
    </section>
  );
}
