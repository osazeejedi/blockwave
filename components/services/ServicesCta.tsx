"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesCta() {
  return (
    <section className="diagonal-lines-strong relative overflow-hidden bg-blue px-6 py-20 text-center md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-[640px]"
      >
        <h2 className="mb-4 text-4xl font-bold tracking-[-1.5px] text-white md:text-[42px]">
          Ready to work together?
        </h2>
        <p className="mb-9 text-base leading-[1.65] text-white/65">
          Tell us what you&rsquo;re building or where you&rsquo;re stuck. We&rsquo;ll come back
          with a clear proposal within 48 hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-[15px] font-bold tracking-wide text-blue transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Start a Conversation →
          </Link>
          <Link
            href="/courses"
            className="rounded-md border-[1.5px] border-white/30 px-7 py-3 text-[15px] font-medium tracking-wide text-white transition-colors hover:border-white/70"
          >
            Explore Programmes
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
