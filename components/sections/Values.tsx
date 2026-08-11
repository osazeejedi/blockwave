"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";

const values = [
  {
    num: "01",
    name: "Transparency",
    desc: "We operate with full visibility — no black boxes. Every recommendation, every decision, every line of curriculum is reasoned and explained.",
  },
  {
    num: "02",
    name: "Excellence",
    desc: "We hold our work to production standards — whether it's a code review, a strategy document, or a training module. Good enough isn't good enough.",
  },
  {
    num: "03",
    name: "Clarity",
    desc: "Complex systems become manageable when you understand them fully. We teach and consult with precision — no jargon, no hand-waving.",
  },
  {
    num: "04",
    name: "Structured Thinking",
    desc: "Every engagement, project, and programme is designed with a clear architecture. First principles before frameworks. Systems before shortcuts.",
  },
];

export default function Values() {
  return (
    <section id="about" className="bg-white px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
            Why Blockwave
          </div>
          <h2 className="section-h2">Principles we build on.</h2>
        </Reveal>

        <div className="mt-16 grid gap-0.5 md:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-[10px] px-8 py-10 ${
                i % 2 === 1 ? "border border-rule bg-white" : "bg-surface"
              }`}
            >
              <div className="mb-4 font-mono text-[10px] tracking-[0.1em] text-sky">
                {v.num}
              </div>
              <div className="mb-2 text-xl font-bold tracking-[-0.4px]">{v.name}</div>
              <p className="text-[13px] leading-[1.65] text-[#3A4A5C]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
