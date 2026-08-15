import { motion } from "framer-motion";
import Reveal3D from "./Reveal3D";

const stack = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "➕" },
  { name: "C", icon: "🔷" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
];

const points = [
  { title: "Hardened Security", desc: "Encrypted, sanitized, and secure coding practices across every language we use.", icon: "🛡️" },
  { title: "Lightning Fast", desc: "Optimized, lightweight builds that load instantly and rank better on Google.", icon: "⚡" },
  { title: "Fully Custom", desc: "No cookie-cutter templates — every pixel is designed and coded around your brand.", icon: "🎯" },
  { title: "AI + Human Power", desc: "The creativity of expert developers, supercharged by intelligent AI workflows.", icon: "🤖" },
];

export default function WhyUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Why Zevant</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          Built Strong. Built <span className="gold-text">Secure</span>. Built to Last.
        </h2>
      </Reveal3D>

      <div className="perspective-1200 mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal3D key={p.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ rotateX: -6, rotateY: 6, y: -6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-panel h-full rounded-2xl p-6 text-center"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-3 font-display text-base font-bold text-zinc-100">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{p.desc}</p>
            </motion.div>
          </Reveal3D>
        ))}
      </div>

      <Reveal3D delay={0.2} className="mt-16">
        <p className="mb-6 text-center font-cinzel text-xs uppercase tracking-[0.3em] text-zinc-500">
          Powered By Secure, Industry-Trusted Technologies
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...stack, ...stack].map((t, i) => (
              <div
                key={t.name + i}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-zinc-300"
              >
                <span>{t.icon}</span> {t.name}
              </div>
            ))}
          </motion.div>
        </div>
      </Reveal3D>
    </section>
  );
}
