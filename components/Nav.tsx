"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[200] border-b border-white/[0.06] backdrop-blur-xl px-6 md:px-12"
         style={{ background: "rgba(17,27,39,0.96)" }}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={32} />
          <span className="text-[18px] font-bold tracking-[-0.5px] text-white">
            White<span className="text-sky">Box</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className={`text-[13px] font-medium tracking-wide transition-colors hover:text-white ${
              isActive("/services") ? "text-white" : "text-white/55"
            }`}
          >
            Services
          </Link>
          <Link
            href="/courses"
            className={`text-[13px] font-medium tracking-wide transition-colors hover:text-white ${
              isActive("/courses") ? "text-white" : "text-white/55"
            }`}
          >
            Training
          </Link>
          <Link
            href="/#about"
            className="text-[13px] font-medium tracking-wide text-white/55 transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-[13px] font-medium tracking-wide transition-colors hover:text-white ${
              isActive("/contact") ? "text-white" : "text-white/55"
            }`}
          >
            Contact
          </Link>
        </div>

        <Link
          href="/courses"
          className="rounded-md bg-blue px-5 py-2 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-sky"
        >
          Explore Programmes →
        </Link>
      </div>
    </nav>
  );
}
