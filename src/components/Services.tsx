import Reveal3D from "./Reveal3D";

const services = [
  {
    title: "Portfolio & Personal Sites",
    desc: "Elegant, animated personal or portfolio websites that showcase your work with a luxury touch.",
    icon: "🧑‍💼",
  },
  {
    title: "Business Websites",
    desc: "Professional multi-page websites with 3D scroll storytelling built to convert visitors into customers.",
    icon: "🏢",
  },
  {
    title: "E-Commerce Stores",
    desc: "Full online stores with secure payments, product catalogues and a smooth luxury shopping experience.",
    icon: "🛍️",
  },
  {
    title: "Landing Pages",
    desc: "High-converting single-page sites designed for campaigns, launches and lead generation.",
    icon: "🚀",
  },
  {
    title: "AI Chatbot Integration",
    desc: "Add a smart AI-powered chatbot like Zevant Bot to your own website to answer visitors instantly.",
    icon: "🤖",
  },
  {
    title: "Website Revamp",
    desc: "Transform your outdated website into a premium, animated, modern 3D experience.",
    icon: "♻️",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">What We Offer</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          We Only Build <span className="gold-text">Websites</span> — And We Build Them Best
        </h2>
        <p className="mt-4 text-zinc-400">
          No distractions, no generic packages — just focused expertise in crafting premium websites tailored to
          your brand.
        </p>
      </Reveal3D>

      <div className="perspective-1200 mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal3D key={s.title} delay={i * 0.08}>
            <div className="group glass-panel relative h-full overflow-hidden rounded-2xl p-7 transition-transform duration-500 [transform-style:preserve-3d] hover:-translate-y-2 hover:[transform:rotateY(6deg)_rotateX(4deg)]">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--color-gold)]/10 blur-2xl transition-all duration-500 group-hover:bg-[var(--color-gold)]/25" />
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-zinc-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}
