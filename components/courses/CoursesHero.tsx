"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COURSES } from "@/lib/courses-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function CoursesHero() {
  const [activeId, setActiveId] = useState<string>(COURSES[0].id);

  useEffect(() => {
    const ids = COURSES.map((c) => c.id);
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

  const handleClick = (e: React.MouseEvent, id: string) => {
    // Lenis intercepts hash links automatically — but these tabs use buttons,
    // so we manually trigger the same anchor behaviour.
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const trackLabels = [
    { id: "ai-engineering", label: "AI & Automation" },
    { id: "data-science", label: "Data Science" },
    { id: "cybersecurity", label: "Cybersecurity" },
  ];

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
          Professional Training
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
          Build skills that
          <br />
          <em className="not-italic text-sky">ship products.</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-[640px] text-base leading-[1.7] text-white/45"
        >
          Three structured, project-led programmes — designed for working professionals who
          want to move into the roles that matter in modern tech.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {trackLabels.map((t) => (
            <button
              key={t.id}
              onClick={(e) => handleClick(e, t.id)}
              className={`rounded-md border px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all ${
                activeId === t.id
                  ? "border-sky bg-sky/15 text-white"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
