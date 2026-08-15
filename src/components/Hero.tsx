import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 7;
const frameCaptions = [
  "Concept & Discovery",
  "Wireframing the Vision",
  "UI Crafted in Detail",
  "Building the Structure",
  "Animating Every Pixel",
  "Testing & Polishing",
  "Your Website — Delivered",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameFloat = useTransform(scrollYProgress, [0, 0.92], [1, TOTAL_FRAMES]);
  useMotionValueEvent(frameFloat, "change", (v) => {
    const idx = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(v)));
    setFrame(idx);
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-14, 0, 14]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.92, 1, 1, 0.96]);
  const progressWidth = useTransform(scrollYProgress, [0, 0.92], ["0%", "100%"]);

  const headingOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 1]);

  return (
    <section id="top" ref={containerRef} className="relative" style={{ height: "620vh" }}>
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden pt-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 md:grid-cols-2 md:px-10">
          {/* LEFT: 3D scroll frame "video" */}
          <motion.div
            style={{ opacity: headingOpacity }}
            className="perspective-1200 relative order-2 mx-auto w-full max-w-[600px] md:order-1"
          >
            <motion.div
              style={{ rotateY, rotateX, scale, transformStyle: "preserve-3d" }}
              className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/30 bg-gradient-to-br from-[#1c1c1f] to-[#0a0a0b] shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(217,178,91,0.18),transparent_60%)]" />
              {Array.from({ length: TOTAL_FRAMES }).map((_, i) => (
                <img
                  key={i}
                  src={`/photo/frame_${i + 1}.png`}
                  alt={`Zevant Solution website build process frame ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-contain p-3 transition-opacity duration-150"
                  style={{ opacity: frame === i + 1 ? 1 : 0 }}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--color-gold)]/20" />
            </motion.div>

            {/* progress bar */}
            <div className="mx-auto mt-4 h-1.5 w-4/5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                style={{ width: progressWidth }}
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-skyblue)]"
              />
            </div>
            <p className="mt-2 text-center font-cinzel text-xs uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
              {frameCaptions[frame - 1]}
            </p>
            <p className="mt-1 text-center text-[11px] text-zinc-500">Scroll to watch your website come to life · {frame}/7</p>
          </motion.div>

          {/* RIGHT: animated big header */}
          <div className="order-1 md:order-2">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-4 inline-block rounded-full border border-[var(--color-gold)]/40 bg-black/30 px-4 py-1.5 font-cinzel text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-light)]"
            >
              Human Skill × Artificial Intelligence
            </motion.p>

            <h1 className="font-display text-4xl font-black leading-[1.08] text-zinc-50 sm:text-5xl lg:text-6xl">
              {["We", "Craft", "Luxury"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 * i }}
                  className="mr-3 inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="gold-text inline-block"
              >
                Websites That Convert
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400"
            >
              <span className="brand-cursive text-xl">Zevant Solution</span> designs and develops premium,
              custom-coded websites with cinematic 3D animation — built by skilled developers, elevated by AI.
              We only build websites, and we build them to make people say <span className="text-[var(--color-gold-light)]">WOW</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#order"
                className="pulse-glow rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] px-7 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-transform hover:scale-105"
              >
                Order Your Website
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-200 backdrop-blur transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 flex items-center gap-6 text-zinc-500"
            >
              <div>
                <p className="font-display text-2xl font-bold text-[var(--color-gold-light)]">26+</p>
                <p className="text-xs uppercase tracking-wide">Businesses Trust Us</p>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <p className="font-display text-2xl font-bold text-[var(--color-gold-light)]">100%</p>
                <p className="text-xs uppercase tracking-wide">Custom Coded</p>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <p className="font-display text-2xl font-bold text-[var(--color-gold-light)]">24/7</p>
                <p className="text-xs uppercase tracking-wide">AI + Human Support</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
            <rect x="1" y="1" width="20" height="32" rx="10" stroke="#d9b25b" strokeWidth="1.4" />
            <circle cx="11" cy="10" r="2.5" fill="#d9b25b" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
