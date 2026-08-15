import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Reveal3D from "./Reveal3D";
import { packages } from "../data/content";
import { formatPrice } from "../data/currency";
import { useCurrency } from "../context/CurrencyContext";

const WHATSAPP_NUMBER = "9779703069187";
const EMAIL = "support@zevantsolution.com";

export default function OrderForm() {
  const { currency } = useCurrency();
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");
  const [pkg, setPkg] = useState(packages[1].id);
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const selectedPackage = packages.find((p) => p.id === pkg)!;

  function buildMessage() {
    return `Hello Zevant Solution! I would like to order a website. 

*Name:* ${name || "-"}
*Business/Brand:* ${business || "-"}
*Contact:* ${contact || "-"}
*Package:* ${selectedPackage.name} (starting ${formatPrice(selectedPackage.usdFrom, currency)})
*Requirements:* ${details || "-"}

(I will attach my logo & references here in the chat.)`;
  }

  function handleWhatsApp(e: FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  }

  function handleEmail() {
    const msg = encodeURIComponent(buildMessage());
    window.open(`mailto:${EMAIL}?subject=${encodeURIComponent("Website Order - " + (business || "New Client"))}&body=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <section id="order" className="relative mx-auto max-w-6xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Let's Build It</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          Order Your <span className="gold-text">Dream Website</span>
        </h2>
        <p className="mt-4 text-zinc-400">
          Fill in your details below — your request will be sent straight to our WhatsApp or Email so we can start
          crafting your website right away.
        </p>
      </Reveal3D>

      <Reveal3D delay={0.15} className="perspective-1200 mt-14">
        <motion.form
          onSubmit={handleWhatsApp}
          whileHover={{ rotateX: 1, rotateY: -1 }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass-panel grid grid-cols-1 gap-6 rounded-3xl p-6 shadow-2xl md:grid-cols-2 md:p-10"
        >
          <div className="md:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">Your Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sujan Shrestha"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition-all focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(217,178,91,0.15)]"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">Business / Brand Name</label>
            <input
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="e.g. The Golden Gym"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition-all focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(217,178,91,0.15)]"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">Email or WhatsApp Number</label>
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="you@email.com or +977..."
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition-all focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(217,178,91,0.15)]"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">Select Package</label>
            <div className="perspective-1200 grid grid-cols-3 gap-2">
              {packages.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setPkg(p.id)}
                  className={`rounded-xl border px-2 py-3 text-center text-[11px] font-semibold transition-all duration-300 [transform-style:preserve-3d] hover:-translate-y-1 hover:rotate-1 ${
                    pkg === p.id
                      ? "border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-gold-light)] shadow-[0_8px_20px_rgba(217,178,91,0.3)]"
                      : "border-white/10 text-zinc-400 hover:border-[var(--color-gold)]/40"
                  }`}
                >
                  {p.name.split(" ")[0]}
                  <br />
                  <span className="text-[10px] font-normal">{formatPrice(p.usdFrom, currency)}+</span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">
              What do you need? (pages, features, style, logo notes)
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={4}
              placeholder="e.g. I need a 5-page business website with booking form, my brand colors are gold & black, logo attached in chat..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition-all focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(217,178,91,0.15)]"
            />
            <p className="mt-1.5 text-[11px] text-zinc-500">
              📎 Tip: You can directly attach your logo & reference images once the chat opens in WhatsApp or Email.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:col-span-2">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-400 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>📱</span> Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={handleEmail}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-gold)]/50 bg-black/40 py-3.5 text-sm font-bold uppercase tracking-wide text-[var(--color-gold-light)] transition-transform hover:scale-[1.02]"
            >
              <span>✉️</span> Send via Email
            </button>
          </div>

          {sent && (
            <p className="text-center text-xs text-emerald-400 md:col-span-2">
              ✅ Your order window has been opened — please send the message to complete your request!
            </p>
          )}
        </motion.form>
      </Reveal3D>
    </section>
  );
}
