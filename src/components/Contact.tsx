import Reveal3D from "./Reveal3D";

const cards = [
  {
    label: "Email Us",
    value: "support@zevantsolution.com",
    href: "mailto:support@zevantsolution.com",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d9b25b" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+977 9703069187",
    href: "https://wa.me/9779703069187",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="#25D366">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.902 6.47L4 29l7.73-1.876A11.94 11.94 0 0016.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3zm6.997 16.72c-.297.837-1.47 1.53-2.404 1.727-.638.133-1.47.24-4.27-.914-3.583-1.482-5.89-5.1-6.07-5.34-.178-.24-1.448-1.928-1.448-3.68 0-1.752.913-2.614 1.24-2.972.325-.36.71-.45.947-.45.238 0 .474.002.68.012.218.01.512-.083.8.611.297.712 1.01 2.464 1.098 2.643.09.18.15.39.03.63-.12.24-.18.39-.357.6-.178.21-.375.47-.535.63-.178.178-.363.372-.156.73.208.36.923 1.523 1.982 2.467 1.362 1.215 2.51 1.59 2.87 1.77.36.18.57.15.78-.09.208-.24.892-1.04 1.13-1.4.238-.36.475-.3.8-.18.327.12 2.077.98 2.434 1.158.357.18.594.27.68.42.09.15.09.87-.207 1.707z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    value: "@zevantsolution",
    href: "https://www.facebook.com/zevantsolution",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="#1877F2">
        <path d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.99 4.388 10.954 10.125 11.854V19.53h-3.047V16h3.047v-2.69c0-3.008 1.792-4.669 4.533-4.669 1.313 0 2.686.234 2.686.234v2.953H19.83c-1.491 0-1.956.925-1.956 1.874V16h3.328l-.532 3.53h-2.796v8.324C23.612 26.954 28 21.99 28 16z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    value: "@zevantsolution",
    href: "https://www.tiktok.com/@zevantsolution",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M16.6 2h-3.2v13.2c0 1.5-1.2 2.7-2.7 2.7a2.7 2.7 0 01-2.7-2.7c0-1.5 1.2-2.7 2.7-2.7.3 0 .5 0 .8.1v-3.3a6 6 0 00-.8-.1 6 6 0 00-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6V8.4a8.2 8.2 0 004.9 1.6V6.8a4.9 4.9 0 01-4.9-4.8z"
          fill="#fff"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Get In Touch</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          Let's Create Something <span className="gold-text">Extraordinary</span>
        </h2>
        <p className="mt-4 text-zinc-400">
          For exact pricing and project discussions, reach us directly — we respond fastest on WhatsApp.
        </p>
      </Reveal3D>

      <div className="perspective-1200 mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal3D key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group glass-panel flex h-full flex-col items-center gap-3 rounded-2xl p-7 text-center transition-transform duration-500 [transform-style:preserve-3d] hover:-translate-y-2 hover:[transform:rotateY(8deg)] hover:shadow-[0_15px_40px_rgba(217,178,91,0.25)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 transition-transform duration-500 group-hover:scale-110">
                {c.icon}
              </div>
              <p className="font-display font-bold text-zinc-100">{c.label}</p>
              <p className="text-xs text-zinc-500">{c.value}</p>
            </a>
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}
