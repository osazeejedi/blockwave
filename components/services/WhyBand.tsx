"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";

const items = [
  {
    name: "We show our reasoning",
    desc: "Every recommendation comes with a rationale. We don't deliver conclusions — we deliver thinking. Clients leave every engagement understanding why, not just what.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="28" height="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <rect x="9" y="9" width="18" height="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" transform="rotate(15 18 18)" />
        <circle cx="18" cy="18" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Outcomes over outputs",
    desc: 'We measure success by business impact, not lines of code or slide count. Every engagement starts with defining what "done" looks like — and we hold ourselves to it.',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28l8-10 6 6 6-8 4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="4" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Practitioners, not theorists",
    desc: "Our consultants and instructors are actively building — not retired. What we teach and advise on reflects what's working in production today, not yesterday's best practice.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M11 18h14M18 11v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "No black boxes",
    desc: "We document everything we build and explain every decision we make. When we leave, your team is smarter — not dependent on us.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="16" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M12 16v-4a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="23" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Consulting meets training",
    desc: "The same rigour that drives our consulting practice shapes our training curriculum. Students learn from active practitioners; clients get teams trained in real methods.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Structured from day one",
    desc: "Every engagement has a clear architecture: phases, milestones, owners, and exit criteria. You always know where you are and what comes next.",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 4l3.5 7 7.5 1.1-5.5 5.3 1.3 7.6L18 21.5l-6.8 3.5 1.3-7.6L7 12.1l7.5-1.1z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeOpacity="0.8"
        />
      </svg>
    ),
  },
];

export default function WhyBand() {
  return (
    <section className="bg-ink px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mb-3 font-mono text-[11px] tracking-[0.14em] text-sky">Why Blockwave</div>
          <h2 className="section-h2 mb-16 text-white">What makes us different.</h2>
        </Reveal>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 h-9 w-9 text-sky">{item.icon}</div>
              <div className="mb-3 text-[17px] font-bold tracking-tight text-white">
                {item.name}
              </div>
              <p className="text-[13px] leading-[1.65] text-white/45">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
