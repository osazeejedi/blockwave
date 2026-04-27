"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";

const FAQS = [
  {
    q: "Do I need prior experience to apply to a programme?",
    a: "The AI & Automation Engineering and Data Science tracks require basic comfort with Python or a willingness to learn quickly. The Cybersecurity track is open to anyone with a technical background. No prior specialisation is required — that's what we teach.",
  },
  {
    q: "How are the training programmes delivered?",
    a: "All programmes are delivered online and part-time. You'll attend two live instructor-led workshops per week, plus have access to recorded sessions, async support on Discord, and office hours twice weekly.",
  },
  {
    q: "What does a consulting engagement look like?",
    a: "Engagements typically begin with a scoping call to understand your needs, followed by a proposal outlining deliverables, timelines, and fees. We work in two-week sprints with clear outputs at each stage. Most engagements run 4–12 weeks.",
  },
  {
    q: "Can companies send multiple employees to a programme?",
    a: "Yes — we offer group enrolment for teams of 3 or more, with a custom onboarding session and dedicated support. Contact us at consulting@whiteboxconsults.com to discuss team pricing.",
  },
  {
    q: "Is there a payment plan available?",
    a: "Yes. We offer income share agreements and instalment plans for qualifying applicants. Details are discussed during the admissions process. Reach out to admissions@whiteboxconsults.com for more information.",
  },
  {
    q: "What is WhiteBox's refund policy?",
    a: "Students who withdraw within the first week of a programme receive a full refund. After the first week, pro-rated refunds apply up to the midpoint of the programme. No refunds after the programme midpoint. Consulting engagements are governed by the terms in your service agreement.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-surface px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue">
            FAQ
          </div>
          <h2 className="section-h2 mb-12">Common questions.</h2>
        </Reveal>

        <div className="overflow-hidden rounded-xl border border-rule bg-white">
          {FAQS.map((f, i) => (
            <FaqItem
              key={i}
              question={f.q}
              answer={f.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              isLast={i === FAQS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={isLast ? "" : "border-b border-rule"}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface md:px-8"
      >
        <span className="text-[15px] font-semibold tracking-tight md:text-base">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-light text-blue"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[14px] leading-[1.75] text-[#3A4A5C] md:px-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
