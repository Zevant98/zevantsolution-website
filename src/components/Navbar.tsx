import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { currencies } from "../data/currency";
import { useCurrency } from "../context/CurrencyContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeCurrency = currencies.find((c) => c.code === currency)!;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/photo/logo.png"
            alt="Zevant Solution Logo"
            className="h-10 w-10 object-contain float-anim-slow drop-shadow-[0_0_10px_rgba(217,178,91,0.6)]"
          />
          <span className="brand-cursive text-2xl leading-none">Zevant Solution</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-cinzel text-[13px] uppercase tracking-wider text-zinc-300 transition-colors hover:text-[var(--color-gold)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Currency selector - 3D */}
          <div className="relative">
            <button
              onClick={() => setCurrencyOpen((v) => !v)}
              className="perspective-1200 flex items-center gap-1.5 rounded-full border border-[var(--color-gold)]/40 bg-black/40 px-3 py-1.5 text-xs font-semibold text-[var(--color-gold-light)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(217,178,91,0.35)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span>{activeCurrency.flag}</span>
              <span>{activeCurrency.code}</span>
              <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${currencyOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" stroke="#d9b25b" strokeWidth="1.4" fill="none" />
              </svg>
            </button>

            <AnimatePresence>
              {currencyOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setCurrencyOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, rotateX: -35, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateX: -25, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    style={{ transformOrigin: "top", perspective: 800 }}
                    className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-[var(--color-gold)]/40 bg-[#101012]/95 shadow-2xl shadow-black/70 backdrop-blur-xl"
                  >
                    {currencies.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCurrency(c.code);
                          setCurrencyOpen(false);
                        }}
                        className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--color-gold)]/15 ${
                          c.code === currency ? "text-[var(--color-gold-light)]" : "text-zinc-300"
                        }`}
                      >
                        <span>{c.flag}</span>
                        <span className="font-medium">{c.code}</span>
                        <span className="ml-auto text-[11px] text-zinc-500">{c.label}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#order"
            className="hidden rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black shadow-lg shadow-black/40 transition-transform hover:scale-105 sm:block"
          >
            Order Website
          </a>

          <button className="text-zinc-200 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--color-gold)]/20 bg-[#0c0c0d]/95 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-cinzel text-sm uppercase tracking-wide text-zinc-300 hover:text-[var(--color-gold)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
