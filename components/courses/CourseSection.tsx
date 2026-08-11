"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import PhaseItem from "./PhaseItem";
import type { CourseData } from "@/lib/courses-data";

interface CourseSectionProps {
  course: CourseData;
  background: "white" | "surface";
}

export default function CourseSection({ course, background }: CourseSectionProps) {
  return (
    <section
      id={course.id}
      className={`px-6 py-24 md:px-12 md:py-28 ${
        background === "surface" ? "bg-surface" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_360px] md:gap-16">
          {/* LEFT — content */}
          <div>
            <Reveal>
              <div className="mb-3 font-mono text-[11px] tracking-[0.14em] text-blue">
                {course.trackLabel.toUpperCase()}
              </div>
              <h2
                className="mb-5"
                style={{
                  fontSize: "clamp(36px, 4vw, 54px)",
                  fontWeight: 700,
                  letterSpacing: "-2px",
                  lineHeight: 1.04,
                }}
              >
                {course.title}
                <br />
                <em className="not-italic">{course.titleAccent}</em>
              </h2>
              <p className="mb-7 max-w-[640px] text-base leading-[1.75] text-[#3A4A5C]">
                {course.summary}
              </p>

              <div className="mb-10 flex flex-wrap gap-2">
                {course.chips.map((chip, i) => (
                  <span
                    key={i}
                    className={`rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-wider ${
                      chip.highlight
                        ? "border-blue bg-blue text-white"
                        : "border-rule bg-white text-navy"
                    }`}
                  >
                    {chip.text}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
                Programme Phases
              </div>
              <div className="rounded-xl border border-rule bg-white">
                {course.phases.map((p, i) => (
                  <PhaseItem key={p.num} phase={p} defaultOpen={i === 0} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — info card */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:sticky md:top-24"
          >
            <div className="rounded-xl border border-rule bg-white p-7 shadow-sm">
              {course.info.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between py-3 ${
                    i === course.info.length - 1
                      ? ""
                      : "border-b border-rule"
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#3A4A5C]/70">
                    {row.label}
                  </span>
                  <span className="text-[13px] font-semibold text-ink">{row.value}</span>
                </div>
              ))}
              <a
                href="https://Blockwaveconsults.com/apply"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-sky"
              >
                Apply for This Programme →
              </a>
              <div className="mt-3 text-center font-mono text-[10px] tracking-wider text-[#3A4A5C]/60">
                {course.applyNote}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
