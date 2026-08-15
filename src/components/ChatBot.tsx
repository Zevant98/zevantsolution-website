import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { findAnswer, limitReachedAnswer } from "../data/chatbotKnowledge";

type Msg = { from: "bot" | "user"; text: string };

const QUICK_REPLIES = ["Our Services", "Pricing", "How to order?", "Contact details"];
const MAX_QUESTIONS = 10;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Namaste! 👋 I'm Zevant Bot, your advanced AI assistant. Ask me anything about Zevant Solution — services, pricing, process or how to order your website!",
    },
  ]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  function respond(question: string) {
    setMessages((m) => [...m, { from: "user", text: question }]);
    setTyping(true);
    const nextCount = count + 1;
    setCount(nextCount);

    setTimeout(() => {
      const answer = nextCount > MAX_QUESTIONS ? limitReachedAnswer : findAnswer(question);
      setMessages((m) => [...m, { from: "bot", text: answer }]);
      setTyping(false);
    }, 650 + Math.random() * 500);
  }

  function handleSend() {
    const q = input.trim();
    if (!q) return;
    setInput("");
    respond(q);
  }

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08, rotateY: 15 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-5 z-[70] flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-gold)]/60 bg-gradient-to-br from-[#1c1c1f] to-[#0a0a0b] shadow-[0_0_30px_rgba(217,178,91,0.55)] md:bottom-8 md:right-8"
        style={{ transformStyle: "preserve-3d" }}
        aria-label="Open Zevant Bot"
      >
        <motion.img
          src="/photo/AI bot.png"
          alt="Zevant Bot"
          className="h-11 w-11 object-contain"
          animate={{ y: [0, -4, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 animate-ping rounded-full bg-emerald-400" />
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-emerald-400" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 40, scale: 0.9, rotateX: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "bottom right", perspective: 1000 }}
            className="fixed bottom-24 right-4 z-[70] flex h-[70vh] max-h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-[var(--color-gold)]/40 bg-[#0c0c0e]/95 shadow-[0_25px_80px_rgba(0,0,0,0.7)] backdrop-blur-xl md:bottom-28 md:right-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-[#151517] to-[#0c0c0e] px-5 py-4">
              <div className="relative">
                <img src="/photo/AI bot.png" alt="Zevant Bot" className="float-anim-slow h-10 w-10 rounded-full object-contain" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-black bg-emerald-400" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-zinc-100">Zevant Bot</p>
                <p className="text-[11px] text-emerald-400">● Online · Advanced AI Assistant</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-gradient-to-br from-[var(--color-gold-dark)] to-[var(--color-gold)] text-black font-medium"
                        : "rounded-bl-sm border border-white/10 bg-white/5 text-zinc-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick replies */}
            <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-2.5">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => respond(q)}
                  className="rounded-full border border-[var(--color-gold)]/30 bg-black/40 px-3 py-1.5 text-[11px] text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:text-[var(--color-gold-light)] hover:shadow-[0_0_12px_rgba(217,178,91,0.4)]"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask Zevant Bot anything..."
                className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-[var(--color-gold)]"
              />
              <button
                onClick={handleSend}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold-dark)] to-[var(--color-gold-light)] text-black transition-transform hover:scale-110"
                aria-label="Send"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
