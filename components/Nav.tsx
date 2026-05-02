"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoMark from "./LogoMark";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Training" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname?.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-[200] border-b border-white/[0.06] backdrop-blur-xl px-6 md:px-12"
        style={{ background: "rgba(17,27,39,0.96)" }}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <LogoMark size={32} />
            <span className="text-[18px] font-bold tracking-[-0.5px] text-white">
              White<span className="text-sky">Box</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[13px] font-medium tracking-wide transition-colors hover:text-white ${
                  isActive(href) ? "text-white" : "text-white/55"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              className={`hidden rounded-md px-5 py-2 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-sky md:inline-flex ${
                isActive("/apply") ? "bg-sky" : "bg-blue"
              }`}
            >
              Apply Now →
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.18 }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4 4l12 12M16 4L4 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="open"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.18 }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3 5h14M3 10h14M3 15h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[190] bg-black/60 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-16 z-[195] md:hidden"
              style={{ background: "rgba(17,27,39,0.98)" }}
            >
              <div className="flex flex-col px-6 pt-4 pb-8">
                {/* Nav links */}
                <nav className="flex flex-col divide-y divide-white/[0.06]">
                  {NAV_LINKS.map(({ href, label }, i) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={href}
                        className={`block py-4 text-[16px] font-medium tracking-wide transition-colors hover:text-white ${
                          isActive(href) ? "text-white" : "text-white/60"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                  className="mt-6"
                >
                  <Link
                    href="/apply"
                    className={`flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[14px] font-semibold tracking-wide text-white transition-colors hover:bg-sky ${
                      isActive("/apply") ? "bg-sky" : "bg-blue"
                    }`}
                  >
                    Apply Now →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
