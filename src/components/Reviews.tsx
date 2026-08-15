import { motion } from "framer-motion";
import Reveal3D from "./Reveal3D";
import { featuredReviews, shortReviews, type Review } from "../data/content";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = !filled && i === full && half;
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#d9b25b" />
                <stop offset="50%" stopColor="#3d3d43" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6L12 2z"
              fill={filled ? "#d9b25b" : isHalf ? `url(#half-${i})` : "#3d3d43"}
            />
          </svg>
        );
      })}
      <span className="ml-1.5 text-xs font-semibold text-zinc-400">{rating}</span>
    </div>
  );
}

function FeaturedCard({ r, i }: { r: Review; i: number }) {
  return (
    <Reveal3D delay={i * 0.08}>
      <motion.div
        whileHover={{ rotateY: -6, rotateX: 4, y: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        style={{ transformStyle: "preserve-3d" }}
        className="gold-border-anim h-full"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[13px] bg-[#101012] p-0">
          {r.image && (
            <div className="relative h-44 w-full overflow-hidden">
              {/* ✅ FIXED: Added object-top so top of image is always visible */}
              <img 
                src={r.image} 
                alt={`${r.name} website preview`} 
                className="h-full w-full object-cover object-top" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-transparent to-transparent" />
            </div>
          )}
          <div className="flex flex-1 flex-col p-6">
            <Stars rating={r.rating} />
            <p className="mt-3 flex-1 text-sm italic leading-relaxed text-zinc-300">“{r.text}”</p>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="font-display font-bold text-zinc-100">{r.name}</p>
              <p className="text-xs text-zinc-500">
                {r.niche} · {r.location}
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--color-gold-light)]">— {r.founder}, Founder</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal3D>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Testimonials</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          Trusted By <span className="gold-text">26+ Businesses</span> Worldwide
        </h2>
        <p className="mt-4 text-zinc-400">
          Real brands, real results — see what our clients across the globe say about working with{" "}
          <span className="brand-cursive text-lg">Zevant Solution</span>.
        </p>
      </Reveal3D>

      <div className="perspective-1200 mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {featuredReviews.map((r, i) => (
          <FeaturedCard key={r.name} r={r} i={i} />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shortReviews.map((r, i) => (
          <Reveal3D key={r.name} delay={i * 0.06}>
            <div className="glass-panel h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1.5">
              <Stars rating={r.rating} />
              <p className="mt-3 text-xs italic leading-relaxed text-zinc-400">“{r.text}”</p>
              <div className="mt-4 border-t border-white/10 pt-3">
                <p className="text-sm font-bold text-zinc-100">{r.name}</p>
                <p className="text-[11px] text-zinc-500">
                  {r.niche} · {r.location}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[var(--color-gold-light)]">— {r.founder}</p>
              </div>
            </div>
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}