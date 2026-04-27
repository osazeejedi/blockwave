"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";

const services = [
  {
    num: "01",
    name: "Software Engineering",
    desc: "We embed with your team to architect, build, and deliver production-grade systems. From greenfield products to legacy modernisation, we bring engineering clarity at every layer.",
    tags: ["Architecture", "API Design", "Cloud", "AI Integration", "DevOps"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 22l-6 4 6 4M32 22l6 4-6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="34" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Tech Consulting",
    desc: "We help CTOs and engineering leaders make the hard calls — technology strategy, team structure, build-vs-buy decisions, and AI adoption roadmaps grounded in first principles.",
    tags: ["Strategy", "AI Adoption", "Team Design", "Due Diligence", "Roadmapping"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 38l4-4M38 38l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Professional Training",
    desc: "Structured, project-led programmes that take individuals from fundamentals to industry-ready. We train engineers, analysts, and security professionals for the roles that matter now.",
    tags: ["AI Engineering", "Data Science", "Cybersecurity", "Online", "Part-time"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="16" x2="40" y2="16" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="12" r="1.5" fill="currentColor" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" />
        <path d="M20 38h8M24 32v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
          <Reveal>
            <div>
              <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
                What We Do
              </div>
              <h2 className="section-h2">
                Three disciplines.
                <br />
                One standard.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[540px] text-base leading-[1.7] text-[#3A4A5C]">
              From architecture reviews to hands-on engineering delivery — we work where
              clarity is needed most.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-0.5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden bg-white px-10 py-12 ${
                i === 0 ? "md:rounded-l-xl" : ""
              } ${i === 2 ? "md:rounded-r-xl" : ""}`}
            >
              <div className="mb-6 font-mono text-[11px] tracking-[0.1em] text-sky">
                {s.num}
              </div>
              <div className="mb-6 h-12 w-12 text-blue">{s.icon}</div>
              <div className="mb-3 text-[22px] font-bold tracking-[-0.5px]">{s.name}</div>
              <p className="mb-6 text-sm leading-[1.7] text-[#3A4A5C]">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-rule bg-surface px-2.5 py-1 font-mono text-[10px] tracking-wider text-navy"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom accent — animates in on hover */}
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-blue transition-transform duration-200 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
