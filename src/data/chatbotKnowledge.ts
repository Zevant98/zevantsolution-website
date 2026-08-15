export type KnowledgeEntry = {
  keywords: string[];
  answer: string;
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["hello", "hi", "hey", "namaste", "greetings"],
    answer: "Hello! 👋 I'm Zevant Bot, the AI assistant of Zevant Solution. Ask me anything about our website design services, pricing, process, or how to order your dream website!",
  },
  {
    keywords: ["what is zevant", "who is zevant", "about zevant", "what does zevant solution do", "company"],
    answer: "Zevant Solution is a premium software & web development agency that blends skilled human developers with powerful AI tools to craft luxury, high-performing websites. We are a proud part of Zevant Group.",
  },
  {
    keywords: ["service", "offer", "what do you do", "what can you build"],
    answer: "We exclusively design and develop custom websites — portfolios, business sites, landing pages and full e-commerce stores with 3D animation, luxury design, and AI-powered features. Website creation is our only focus, and we do it best.",
  },
  {
    keywords: ["price", "cost", "how much", "pricing", "charge", "fee"],
    answer: "Our packages start from $120 for a Starter site up to $650+ for a Premium e-commerce build (see the Pricing section, viewable in NPR, USD, EUR or GBP). The exact price depends on your design & features — please contact us on WhatsApp, Email or Facebook for a precise quote!",
  },
  {
    keywords: ["order", "how to order", "hire you", "start project", "buy website"],
    answer: "Simply scroll to the 'Order Your Website' section, choose a package, tell us your requirements & attach your logo, then hit submit — it opens WhatsApp with your details ready to send straight to our team!",
  },
  {
    keywords: ["time", "how long", "delivery", "duration", "deadline"],
    answer: "Timelines range from 5–7 days for Starter websites to 3–4 weeks for full Premium e-commerce builds, depending on complexity and content readiness.",
  },
  {
    keywords: ["nepal", "location", "based", "country", "where are you"],
    answer: "Zevant Solution is proudly based in Nepal 🇳🇵, while serving clients across the globe with the same premium standard.",
  },
  {
    keywords: ["ai", "artificial intelligence", "use ai"],
    answer: "We combine expert developer craftsmanship with modern AI tools to design and build faster, smarter and more creative websites — without ever compromising quality or originality.",
  },
  {
    keywords: ["contact", "email", "mail", "reach", "support"],
    answer: "You can reach us anytime at support@zevantsolution.com ✉️ or WhatsApp us directly at +977 9703069187 📱.",
  },
  {
    keywords: ["whatsapp", "number", "phone", "call"],
    answer: "Our WhatsApp number is +977 9703069187 — tap the WhatsApp button on the Contact section to chat with us instantly!",
  },
  {
    keywords: ["facebook", "fb"],
    answer: "Follow and message us on Facebook: https://www.facebook.com/zevantsolution",
  },
  {
    keywords: ["tiktok", "tik tok"],
    answer: "Catch our behind-the-scenes content on TikTok: https://www.tiktok.com/@zevantsolution",
  },
  {
    keywords: ["revision", "changes", "edit after"],
    answer: "Every package includes free revision rounds, so we'll refine your website together until it's flawless.",
  },
  {
    keywords: ["secure", "security", "safe", "hack", "data leak"],
    answer: "Security is core to how we build. We use hardened backend practices, encrypted communication, input sanitization, and secure coding standards across every language we work in — keeping your website and data safe.",
  },
  {
    keywords: ["currency", "npr", "usd", "eur", "gbp", "pound", "euro", "dollar", "rupee"],
    answer: "You can switch the currency selector (top navigation) between NPR, USD, EUR and GBP to preview our starting package prices in your preferred currency.",
  },
  {
    keywords: ["logo", "brand", "design my logo"],
    answer: "While ordering your website, you can share your existing logo and brand details through WhatsApp or Email so we can match your website perfectly to your brand identity.",
  },
  {
    keywords: ["ecommerce", "online store", "sell online", "shop"],
    answer: "Yes! Our Premium E-Commerce package includes product listings, secure payment gateway integration and a custom admin dashboard to manage your online store easily.",
  },
  {
    keywords: ["zevant group"],
    answer: "Zevant Solution is a proud member of Zevant Group. Learn more at www.zevantgroup.com.",
  },
  {
    keywords: ["hosting", "domain"],
    answer: "We can guide you on getting the right hosting & domain for your project, or manage the full setup for you as part of your package — just ask us when you order!",
  },
  {
    keywords: ["review", "trusted", "clients", "portfolio"],
    answer: "We're trusted by 26+ businesses worldwide — from gyms and restaurants to clothing brands and manufacturing companies. Check out the Reviews section for real feedback!",
  },
  {
    keywords: ["technology", "tech stack", "language", "framework"],
    answer: "We build with modern, secure technologies including React, JavaScript, HTML/CSS, along with backend languages like Python, Java, C and C++ depending on project needs.",
  },
  {
    keywords: ["thank", "thanks"],
    answer: "You're most welcome! 🙏 Feel free to ask anything else about Zevant Solution.",
  },
];

export const fallbackAnswer =
  "That's a great question! For a detailed answer tailored to your project, please reach out directly — Email: support@zevantsolution.com, WhatsApp: +977 9703069187, or Facebook: facebook.com/zevantsolution.";

export const limitReachedAnswer =
  "You've reached the free question limit for this session 🙏. For further personalised assistance, please contact Zevant Solution directly via Email (support@zevantsolution.com), WhatsApp (+977 9703069187) or Facebook.";

export function findAnswer(question: string): string {
  const q = question.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const entry of knowledgeBase) {
    for (const kw of entry.keywords) {
      if (q.includes(kw)) {
        const score = kw.length;
        if (!best || score > best.score) {
          best = { score, answer: entry.answer };
        }
      }
    }
  }
  return best ? best.answer : fallbackAnswer;
}
