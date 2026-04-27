"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/services-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesHero() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  useEffect(() => {
    const ids = SERVICES.map((s) => s.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="diagonal-lines relative overflow-hidden bg-ink px-6 pt-36 pb-24 md:px-12 md:pt-40 md:pb-28">
      <motion.div
        className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 md:grid-cols-2 md:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-sky"
          >
            <span className="block h-px w-8 bg-sky" />
            Our Services
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mb-5 text-white"
            style={{
              fontSize: "clamp(40px, 4.5vw, 62px)",
              fontWeight: 700,
              letterSpacing: "-2.5px",
              lineHeight: 1.05,
            }}
          >
            Work that
            <br />
            <em className="not-italic text-sky">ships.</em> Thinking
            <br />
            that scales.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-[480px] text-base leading-[1.7] text-white/45"
          >
            We engage in three disciplines — but operate to one standard. Whether you need
            engineers, advisors, or a programme to grow your team, we bring rigour, structure,
            and clarity.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className={`flex cursor-pointer items-center gap-4 rounded-[10px] border px-5 py-4 transition-all ${
                activeId === s.id
                  ? "border-sky/40 bg-blue/20"
                  : "border-white/[0.08] bg-white/[0.05] hover:border-sky/40 hover:bg-blue/20"
              }`}
            >
              <span className="w-8 shrink-0 font-mono text-[10px] tracking-wider text-sky">
                {s.num}
              </span>
              <span className="text-[15px] font-semibold text-white">
                {s.eyebrow.split(" — ")[1]}
              </span>
              <span
                className={`ml-auto text-sm transition-colors ${
                  activeId === s.id ? "text-sky" : "text-white/30"
                }`}
              >
                →
              </span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
