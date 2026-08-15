import Reveal3D from "./Reveal3D";
import { packages } from "../data/content";
import { formatPrice } from "../data/currency";
import { useCurrency } from "../context/CurrencyContext";

export default function Pricing() {
  const { currency } = useCurrency();

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Investment</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          Simple, Transparent <span className="gold-text">Starting Prices</span>
        </h2>
        <p className="mt-4 text-zinc-400">
          Prices shown are starting estimates in your selected currency. Every website is custom — for your exact
          quote, please connect with us via WhatsApp, Email or Facebook.
        </p>
      </Reveal3D>

      <div className="perspective-1200 mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal3D key={p.id} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-2xl p-8 transition-transform duration-500 [transform-style:preserve-3d] hover:-translate-y-3 hover:[transform:rotateY(-6deg)] ${
                p.popular
                  ? "gold-border-anim"
                  : "border border-white/10 bg-[#151517]/70"
              }`}
            >
              <div className={`${p.popular ? "rounded-[13px] bg-[#101012] p-8" : ""} flex h-full flex-col`}>
                {p.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold-light)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black shadow">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-zinc-100">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.tagline}</p>
                <p className="mt-6 font-display text-4xl font-black text-[var(--color-gold-light)]">
                  {formatPrice(p.usdFrom, currency)}
                  <span className="ml-1 text-sm font-medium text-zinc-500">starting</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-0.5 text-[var(--color-gold)]">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#order"
                  className="mt-8 rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
                >
                  Select & Order
                </a>
              </div>
            </div>
          </Reveal3D>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-zinc-500">
        * Final pricing depends on design complexity, features, and content. Contact us directly for an accurate
        quote tailored to your project.
      </p>
    </section>
  );
}
