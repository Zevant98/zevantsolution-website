export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0b]/80 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <img src="/photo/logo.png" alt="Zevant Solution" className="h-9 w-9 object-contain" />
          <span className="brand-cursive text-xl">Zevant Solution</span>
        </div>
        <p className="max-w-md text-xs text-zinc-500">
          <span className="brand-cursive text-sm">Zevant Solution</span> is a proud member of Zevant Group — crafting
          luxury, AI-enhanced websites for businesses worldwide.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/zevantsolution"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]"
          >
            <svg width="18" height="18" viewBox="0 0 32 32" fill="#1877F2">
              <path d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.99 4.388 10.954 10.125 11.854V19.53h-3.047V16h3.047v-2.69c0-3.008 1.792-4.669 4.533-4.669 1.313 0 2.686.234 2.686.234v2.953H19.83c-1.491 0-1.956.925-1.956 1.874V16h3.328l-.532 3.53h-2.796v8.324C23.612 26.954 28 21.99 28 16z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@zevantsolution"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.6 2h-3.2v13.2c0 1.5-1.2 2.7-2.7 2.7a2.7 2.7 0 01-2.7-2.7c0-1.5 1.2-2.7 2.7-2.7.3 0 .5 0 .8.1v-3.3a6 6 0 00-.8-.1 6 6 0 00-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6V8.4a8.2 8.2 0 004.9 1.6V6.8a4.9 4.9 0 01-4.9-4.8z"
                fill="#fff"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/9779703069187"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]"
          >
            <svg width="18" height="18" viewBox="0 0 32 32" fill="#25D366">
              <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.902 6.47L4 29l7.73-1.876A11.94 11.94 0 0016.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3zm6.997 16.72c-.297.837-1.47 1.53-2.404 1.727-.638.133-1.47.24-4.27-.914-3.583-1.482-5.89-5.1-6.07-5.34-.178-.24-1.448-1.928-1.448-3.68 0-1.752.913-2.614 1.24-2.972.325-.36.71-.45.947-.45.238 0 .474.002.68.012.218.01.512-.083.8.611.297.712 1.01 2.464 1.098 2.643.09.18.15.39.03.63-.12.24-.18.39-.357.6-.178.21-.375.47-.535.63-.178.178-.363.372-.156.73.208.36.923 1.523 1.982 2.467 1.362 1.215 2.51 1.59 2.87 1.77.36.18.57.15.78-.09.208-.24.892-1.04 1.13-1.4.238-.36.475-.3.8-.18.327.12 2.077.98 2.434 1.158.357.18.594.27.68.42.09.15.09.87-.207 1.707z" />
            </svg>
          </a>
        </div>

        <div className="h-px w-full max-w-md bg-white/10" />

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Copyright by{" "}
          <a
            href="https://www.zevantgroup.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-yellow-400 underline decoration-yellow-400/40 underline-offset-2 transition-colors hover:text-yellow-300"
          >
            Zevant Group
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
