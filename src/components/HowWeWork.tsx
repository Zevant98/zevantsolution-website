import Reveal3D from "./Reveal3D";

const steps = [
  {
    step: "01",
    title: "Share Your Vision",
    desc: "Tell us about your business, style preferences, logo and what pages/features you need.",
  },
  {
    step: "02",
    title: "We Design & Build",
    desc: "Our developers craft your website with luxury animation and AI-assisted precision.",
  },
  {
    step: "03",
    title: "Review & Refine",
    desc: "You review the build and we polish every detail with free revision rounds.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Your website goes live, with ongoing support whenever you need us.",
  },
];

export default function HowWeWork() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Our Process</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">How We Work</h2>
      </Reveal3D>

      <div className="perspective-1200 relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent md:block" />
        {steps.map((s, i) => (
          <Reveal3D key={s.step} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="group relative flex flex-col items-center rounded-2xl px-4 py-6 text-center transition-transform duration-500 hover:-translate-y-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--color-gold)]/50 bg-gradient-to-br from-[#1c1c1f] to-[#0a0a0b] font-display text-2xl font-black text-[var(--color-gold-light)] shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
                {s.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-zinc-100">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
            </div>
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}
