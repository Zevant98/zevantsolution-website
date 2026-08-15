import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setHidden(false);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0)`;
      }
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden select-none transition-opacity duration-200 md:block"
      style={{ opacity: hidden ? 0 : 1, willChange: "transform" }}
    >
      <div
        className={`transition-transform duration-150 ease-out ${clicking ? "scale-75 -rotate-12" : "scale-100 rotate-0"}`}
        style={{ filter: "drop-shadow(0 0 6px rgba(217,178,91,0.85))" }}
      >
        <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="22" width="52" height="24" rx="12" fill="url(#body)" stroke="#f3d98a" strokeWidth="1.5" />
          <circle cx="20" cy="34" r="6.5" fill="#0c0c0d" stroke="#6fd0ff" strokeWidth="1.2" />
          <rect x="17.3" y="31.3" width="5.4" height="1.6" rx="0.8" fill="#6fd0ff" />
          <rect x="19.2" y="29.3" width="1.6" height="5.4" rx="0.8" fill="#6fd0ff" />
          <circle cx="44" cy="30" r="3.2" fill="#d9b25b" />
          <circle cx="50" cy="36" r="3.2" fill="#d9b25b" />
          <defs>
            <linearGradient id="body" x1="6" y1="22" x2="58" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2b2b30" />
              <stop offset="1" stopColor="#0c0c0d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
