"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid h-9 w-9 place-items-center rounded-lg border border-black/[0.1] bg-white text-neutral-600 transition-colors hover:border-black/25 hover:text-ink dark:border-white/[0.14] dark:bg-transparent dark:text-neutral-300 dark:hover:border-white/30 dark:hover:text-white"
      >
        {open ? (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-black/[0.06] bg-paper px-6 py-4 shadow-lg dark:border-white/[0.08] dark:bg-[#080a0e]"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-lg px-2 py-3 text-[15px] font-medium text-neutral-700 transition-colors hover:bg-black/[0.04] dark:text-neutral-300 dark:hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={close} className="btn btn-primary mt-3">
              Email me
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
