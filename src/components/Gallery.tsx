import { motion } from "framer-motion";
import Reveal3D from "./Reveal3D";
import { galleryImages } from "../data/content";

export default function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal3D className="mx-auto max-w-2xl text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[var(--color-gold-light)]">Our Craft</p>
        <h2 className="mt-3 font-display text-3xl font-black text-zinc-50 sm:text-4xl">
          Inside The <span className="gold-text">Zevant</span> Studio
        </h2>
        <p className="mt-4 text-zinc-400">A glimpse into the code, design & energy behind every website we build.</p>
      </Reveal3D>

      <div className="perspective-1200 mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <Reveal3D key={img.src} delay={i * 0.06} className={i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -6, scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
              className="gold-border-anim h-full"
            >
              <div className="relative h-full min-h-[150px] overflow-hidden rounded-[13px] bg-[#0a0a0b]">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3">
                  <p className="text-[11px] font-medium leading-tight text-zinc-200">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          </Reveal3D>
        ))}
      </div>
    </section>
  );
}
