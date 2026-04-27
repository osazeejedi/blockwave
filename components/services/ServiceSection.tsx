"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import type { ServiceData } from "@/lib/services-data";

interface ServiceSectionProps {
  service: ServiceData;
  background: "white" | "surface";
}

export default function ServiceSection({ service, background }: ServiceSectionProps) {
  return (
    <section
      id={service.id}
      className={`border-b border-rule px-6 py-24 md:px-12 md:py-28 ${
        background === "surface" ? "bg-surface" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 grid items-start gap-16 md:grid-cols-2 md:gap-20">
          {/* Left column */}
          <Reveal>
            <div>
              <div className="mb-3 font-mono text-[11px] tracking-[0.14em] text-blue">
                {service.eyebrow.toUpperCase()}
              </div>
              <h2
                className="mb-5"
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 700,
                  letterSpacing: "-2px",
                  lineHeight: 1.04,
                }}
              >
                {service.title}
                <br />
                <em className="not-italic">{service.titleAccent}</em>
              </h2>
              <p className="mb-7 text-base leading-[1.75] text-[#3A4A5C]">
                {service.summary}
              </p>
              <Link
                href={service.ctaHref}
                className="inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-sky"
              >
                {service.ctaLabel}
              </Link>
              <div className="mt-7 flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-rule bg-white px-3 py-1.5 font-mono text-[10px] tracking-wider text-navy"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right column - capabilities */}
          <Reveal delay={0.1}>
            <div className="flex flex-col">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={cap.name}
                  className={`flex items-start gap-4 py-4 ${
                    idx === service.capabilities.length - 1 ? "" : "border-b border-rule"
                  } ${idx === 0 ? "pt-0" : ""}`}
                >
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" />
                  <div>
                    <div className="mb-1 text-[15px] font-semibold tracking-tight">
                      {cap.name}
                    </div>
                    <p className="text-[13px] leading-[1.65] text-[#3A4A5C]">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Process steps */}
        {service.steps.length > 0 && (
          <Reveal>
            <div className="mt-12 border-t border-rule pt-10">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
                {service.processLabel}
              </div>
              <div className="grid gap-6 md:grid-cols-4">
                {service.steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="mb-2 font-mono text-[11px] tracking-wider text-sky">
                      {step.num}
                    </div>
                    <div className="mb-2 text-base font-bold tracking-tight">{step.name}</div>
                    <p className="text-[13px] leading-[1.65] text-[#3A4A5C]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Engagement types */}
        <div className="mt-12">
          <Reveal>
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
              {service.steps.length > 0
                ? "Engagement Types"
                : service.processLabel}
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {service.engagements.map((eng, i) => (
              <motion.div
                key={eng.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-xl border border-rule bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 inline-block rounded-full border border-rule bg-surface px-2.5 py-1 font-mono text-[10px] tracking-wider text-navy">
                  {eng.type}
                </div>
                <div className="mb-2 text-lg font-bold tracking-tight">{eng.name}</div>
                <p className="mb-4 text-sm leading-[1.65] text-[#3A4A5C]">{eng.desc}</p>
                <div className="font-mono text-[10px] tracking-wider text-[#3A4A5C]/70">
                  {eng.duration}
                </div>
                {eng.href && (
                  <Link
                    href={eng.href}
                    className="mt-3 inline-block text-[13px] font-semibold text-blue"
                  >
                    View curriculum →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
