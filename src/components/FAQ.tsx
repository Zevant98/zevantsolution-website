import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal3D from "./Reveal3D";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Got Questions?</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">Frequently Asked Questions</h2>
      </Reveal3D>

      <div className="perspective-1200 mt-14 space-y-4">
        {faqs.map((f, i) => (
          <Reveal3D key={f.q} delay={i * 0.05}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                openIndex === i ? "border-[var(--color-gold)]/50 bg-[var(--color-gold)]/5" : "border-white/10 bg-[#141416]/60"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display font-semibold text-zinc-100">{f.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 135 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/50 text-[var(--color-gold-light)]"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}
