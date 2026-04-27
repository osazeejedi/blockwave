"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

const courses = [
  {
    tag: "Track 01 · 3 Months",
    name: "AI & Automation Engineering",
    desc: "From Python fundamentals to production-grade agentic AI systems. You'll master LLM engineering, autonomous pipelines, and deployment — with 11+ shipped projects in your portfolio.",
    phases: 5,
    href: "/courses#ai-engineering",
  },
  {
    tag: "Track 02 · 3 Months",
    name: "Data Science for Business",
    desc: "Statistical thinking, machine learning, and business intelligence — taught through real datasets and stakeholder-facing deliverables. For analysts ready to move from spreadsheets to systems.",
    phases: 4,
    href: "/courses#data-science",
  },
  {
    tag: "Track 03 · 3 Months",
    name: "Cybersecurity",
    desc: "Threat analysis, ethical hacking, and defensive security — grounded in real incident response and compliance frameworks. For engineers stepping into security roles.",
    phases: 4,
    href: "/courses#cybersecurity",
  },
];

export default function CoursesPreview() {
  return (
    <section className="bg-ink px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <Reveal>
            <div>
              <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-sky">
                Training Programmes
              </div>
              <h2 className="section-h2 text-white">
                Three tracks.
                <br />
                One standard of
                <br />
                excellence.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[540px] text-base leading-[1.7] text-white/45">
              Part-time, online programmes built around real projects. Every cohort is limited
              — quality of mentorship is non-negotiable.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.04] p-9 transition-all duration-200 hover:border-sky/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-sky">
                {c.tag}
              </div>
              <div className="mb-3 text-2xl font-bold leading-tight tracking-[-0.5px] text-white">
                {c.name}
              </div>
              <p className="mb-7 flex-1 text-sm leading-[1.65] text-white/45">{c.desc}</p>
              <div className="mb-7 flex gap-5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-white/30">
                  <b className="font-medium text-white/70">Online</b> · Part-time
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-white/30">
                  <b className="font-medium text-white/70">{c.phases}</b> phases
                </div>
              </div>
              <Link
                href={c.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-sky transition-all group-hover:gap-2.5"
              >
                View curriculum →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
