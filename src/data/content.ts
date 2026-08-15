export const packages = [
  {
    id: "starter",
    name: "Starter Presence",
    tagline: "Perfect for individuals & new brands",
    usdFrom: 120,
    features: [
      "Up to 5 elegant pages",
      "Mobile & tablet responsive",
      "Basic SEO setup",
      "1 free revision round",
      "5–7 days delivery",
    ],
  },
  {
    id: "business",
    name: "Business Growth",
    tagline: "Best for growing businesses & shops",
    usdFrom: 320,
    popular: true,
    features: [
      "Up to 12 dynamic pages",
      "Custom animations & 3D effects",
      "Advanced SEO + speed optimization",
      "AI chatbot integration available",
      "3 free revision rounds",
      "10–14 days delivery",
    ],
  },
  {
    id: "premium",
    name: "Premium E-Commerce",
    tagline: "For serious brands that sell online",
    usdFrom: 650,
    features: [
      "Unlimited pages & product listings",
      "Secure payment gateway integration",
      "Custom admin dashboard",
      "Full luxury 3D scroll experience",
      "Priority support for 3 months",
      "3–4 weeks delivery",
    ],
  },
];

export const faqs = [
  {
    q: "What exactly does Zevant Solution offer?",
    a: "We exclusively design and build premium, custom-coded websites — from portfolios and business sites to full e-commerce platforms. We don't offer unrelated services; websites are our craft and our only focus.",
  },
  {
    q: "How do I order a website?",
    a: "Scroll to the 'Order Your Website' section, choose a package, tell us what you need (pages, features, style) and attach your logo/brand details. Your request is sent straight to our WhatsApp or Email so we can reply personally within hours.",
  },
  {
    q: "How much will my website cost?",
    a: "Every project is unique, so the packages shown are 'starting from' prices only. For an exact quote based on your design, features and pages, please contact us directly via WhatsApp, Email or Facebook.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Depending on complexity, timelines range from 5 days for a Starter site to 3–4 weeks for a full Premium e-commerce build. We'll confirm an exact timeline after understanding your requirements.",
  },
  {
    q: "Do you provide revisions?",
    a: "Yes! Every package includes free revision rounds so your website is pixel-perfect before launch.",
  },
  {
    q: "Where is Zevant Solution based?",
    a: "We are proudly based in Nepal, serving clients worldwide with the same premium quality and dedication.",
  },
  {
    q: "Do you use AI in your workflow?",
    a: "Absolutely — we blend expert human developer skill with cutting-edge AI tools to design faster, smarter and more creatively, without compromising quality or originality.",
  },
  {
    q: "Is my data and website secure?",
    a: "Security is a top priority. We follow hardened backend practices, encrypted communication, sanitized inputs and secure coding standards across every stack we use so your project stays protected.",
  },
];

export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Crafting immersive dashboards with precision code",
  },
  {
    src: "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Late-night builds, pixel-perfect execution",
  },
  {
    src: "https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Clean, scalable front-end architecture",
  },
  {
    src: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Every line of code, crafted with intent",
  },
  {
    src: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Modern stacks powering premium experiences",
  },
  {
    src: "https://images.pexels.com/photos/1334093/pexels-photo-1334093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Focused engineering, luxury results",
  },
  {
    src: "https://images.pexels.com/photos/5380596/pexels-photo-5380596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Collaborative builds, world-class delivery",
  },
  {
    src: "https://images.pexels.com/photos/14553705/pexels-photo-14553705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    caption: "Where design meets flawless development",
  },
];

export type Review = {
  name: string;
  location: string;
  founder: string;
  niche: string;
  text: string;
  rating: number;
  image?: string;
};

// ✅ UPDATED: Now using your local images from /photo/ folder
export const featuredReviews: Review[] = [
  {
    name: "The Zambo",
    location: "United States",
    founder: "Mr. Harry Brijdo",
    niche: "Machine Manufacturing",
    text: "Zevant Solution built a robust, professional website for our manufacturing brand. It looks premium and our international clients trust us more now. Truly a world class team.",
    rating: 5,
    image: "/photo/The Zambo.png",
  },
  {
    name: "The Golden Gym",
    location: "Nepal",
    founder: "Sanjog Khatiwoda",
    niche: "Fitness & Gym",
    text: "Our gym's online bookings doubled after launching the new website. The design feels premium and matches our brand energy perfectly. Highly recommended agency!",
    rating: 4.5,
    image: "/photo/Golden gym.png",
  },
  {
    name: "Burger King",
    location: "Australia",
    founder: "Jonathan Fylnn",
    niche: "Fast Food Outlet",
    text: "Super fast delivery and an outlet website that actually converts visitors into orders. The animations and menu layout impressed our whole regional team.",
    rating: 5,
    image: "/photo/Burger king.png",
  },
  {
    name: "The Cloo",
    location: "Nepal",
    founder: "Pinky Kumari Mishra",
    niche: "Dhaka Clothing Brand",
    text: "They understood our traditional Dhaka fabric brand and turned it into a modern, elegant online store. Sales from the website have grown every single month.",
    rating: 4.5,
    image: "/photo/the cloo.png",
  },
  {
    name: "The Bar",
    location: "India",
    founder: "Abhimanyu Sharma",
    niche: "Club & Bar Lounge",
    text: "The dark luxury theme they created for our lounge website matches our vibe perfectly. Guests often mention they booked tables after seeing our site!",
    rating: 4,
    image: "/photo/the bar.png",
  },
];

export const shortReviews: Review[] = [
  {
    name: "Everest Trails Trekking",
    location: "Nepal",
    founder: "Bikash Rai",
    niche: "Trekking Agency",
    text: "Professional, fast and creative. Our booking inquiries increased right after launch. Zevant Solution truly delivers luxury quality.",
    rating: 5,
  },
  {
    name: "Aurora Skincare",
    location: "United Kingdom",
    founder: "Emily Whitmore",
    niche: "Cosmetics Brand",
    text: "Beautiful animations and a smooth checkout experience. Communication was clear from start to finish.",
    rating: 4.5,
  },
  {
    name: "Metro Auto Works",
    location: "Canada",
    founder: "Daniel Ferreira",
    niche: "Automobile Garage",
    text: "They delivered exactly what we asked for and even improved our initial ideas. Great value for the price.",
    rating: 4,
  },
  {
    name: "Spice Route Restaurant",
    location: "Qatar",
    founder: "Ahmed Al-Sayed",
    niche: "Restaurant Chain",
    text: "Very responsive team, understood our vision quickly and the final website feels premium and fast.",
    rating: 4.5,
  },
];