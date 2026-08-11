import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-16 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 border-b border-white/[0.06] pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <LogoMark size={28} />
              <span className="text-base font-bold tracking-[-0.4px] text-white">
                Block<span className="text-sky">wave</span>
              </span>
            </div>
            <p className="max-w-[280px] text-[13px] leading-[1.7] text-white/35">
              A tech consulting firm delivering software engineering, strategic consulting, and
              structured professional training.
            </p>
          </div>

          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
              Services
            </div>
            <div className="flex flex-col gap-2.5">
              <Link href="/services#software-engineering" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Software Engineering
              </Link>
              <Link href="/services#tech-consulting" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Tech Consulting
              </Link>
              <Link href="/courses" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Professional Training
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
              Programmes
            </div>
            <div className="flex flex-col gap-2.5">
              <Link href="/courses#ai-engineering" className="text-[13px] text-white/45 transition-colors hover:text-white">
                AI &amp; Automation
              </Link>
              <Link href="/courses#data-science" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Data Science
              </Link>
              <Link href="/courses#cybersecurity" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Cybersecurity
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
              Company
            </div>
            <div className="flex flex-col gap-2.5">
              <Link href="/#about" className="text-[13px] text-white/45 transition-colors hover:text-white">
                About
              </Link>
              <a href="https://Blockwaveconsults.com/apply" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Apply
              </a>
              <Link href="/contact" className="text-[13px] text-white/45 transition-colors hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[10px] tracking-wider text-white/20">
          <span>© 2025 Blockwave Consulting Ltd. All rights reserved.</span>
          <span>Blockwaveconsults.com</span>
        </div>
      </div>
    </footer>
  );
}
