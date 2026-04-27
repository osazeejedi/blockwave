"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Phase } from "@/lib/courses-data";

interface PhaseItemProps {
  phase: Phase;
  defaultOpen?: boolean;
}

export default function PhaseItem({ phase, defaultOpen = false }: PhaseItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-rule last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-white/40"
      >
        <span className="w-[88px] shrink-0 font-mono text-[11px] font-medium tracking-[0.1em] text-sky">
          {phase.num}
        </span>
        <span className="flex-1 text-[15px] font-semibold tracking-tight">{phase.name}</span>
        <span className="hidden font-mono text-[11px] tracking-wider text-[#3A4A5C] md:inline">
          {phase.duration}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 text-xs text-[#3A4A5C]"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pr-1 pl-[104px] max-md:pl-0">
              <p className="mb-5 text-sm leading-[1.7] text-[#3A4A5C]">{phase.desc}</p>
              <div className="grid gap-3 md:grid-cols-2">
                {phase.skills.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span className="text-[13px] leading-[1.55] text-[#3A4A5C]">
                      <span className="mr-2 inline-block min-w-[44px] font-mono text-[9px] font-semibold uppercase tracking-wider text-sky">
                        {s.type}
                      </span>
                      {s.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
