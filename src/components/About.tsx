import Reveal3D from "./Reveal3D";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal3D direction="left">
          <div className="perspective-1200 relative mx-auto max-w-md">
            <div className="gold-border-anim">
              <img
                src="https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900"
                alt="Zevant Solution web development team at work"
                className="h-[420px] w-full rounded-[14px] object-cover shadow-2xl transition-transform duration-700 hover:scale-105 hover:rotate-1"
              />
            </div>
            <div className="float-anim absolute -bottom-8 -right-6 w-48 rounded-xl border border-[var(--color-gold)]/30 bg-[#101012]/90 p-4 shadow-2xl backdrop-blur">
              <p className="font-display text-2xl font-bold text-[var(--color-gold-light)]">🇳🇵 Nepal</p>
              <p className="text-xs text-zinc-400">Proudly building from Nepal for clients worldwide</p>
            </div>
          </div>
        </Reveal3D>

        <Reveal3D direction="right" delay={0.15}>
          <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
            Who is <span className="brand-cursive text-4xl sm:text-5xl">Zevant Solution</span>?
          </h2>
          <p className="mt-6 leading-relaxed text-zinc-400">
            <span className="brand-cursive text-lg">Zevant Solution</span> is a premium website design & development
            agency, proudly based in Nepal, serving clients across the globe. We are a proud member of{" "}
            <span className="font-semibold text-[var(--color-gold-light)]">Zevant Group</span>. We exclusively focus
            on one craft — building world-class websites — combining the precision of experienced human developers
            with the speed and intelligence of modern AI tools.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            From luxury landing pages to full 3D-animated e-commerce experiences, every project we deliver is
            custom-coded, secure, and designed to make your brand unforgettable the moment someone lands on your
            site.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: "Only Websites", icon: "💻" },
              { label: "AI-Powered", icon: "🤖" },
              { label: "Luxury Design", icon: "✨" },
              { label: "Secure Code", icon: "🔒" },
              { label: "3D Animation", icon: "🧊" },
              { label: "Global Clients", icon: "🌍" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-panel flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(217,178,91,0.25)]"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium text-zinc-300">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}
