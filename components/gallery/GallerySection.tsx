"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  aspect: string;
  span: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Pure Extraction",
    subtitle: "Espresso Craft",
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
    span: "md:col-span-7",
  },
  {
    id: "gal-2",
    title: "Warm Ambiance",
    subtitle: "Serene Seating",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/3] md:aspect-[4/3]",
    span: "md:col-span-5",
  },
  {
    id: "gal-3",
    title: "Ceramic & Foam",
    subtitle: "Latte Art",
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/3] md:aspect-[4/3]",
    span: "md:col-span-5",
  },
  {
    id: "gal-4",
    title: "Constitution Avenue",
    subtitle: "Islamabad Sanctuary",
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop",
    aspect: "aspect-[16/10] md:aspect-[16/9]",
    span: "md:col-span-7",
  },
];

function GalleryCard({ item, idx }: { item: GalleryItem; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), { stiffness: 200, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay: idx * 0.13, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
      className={`group ${item.span}`}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden bg-[#120F0E] border border-[#2B231D] hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl cursor-default"
      >
        <div className={`relative w-full ${item.aspect} overflow-hidden`}>
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.88] contrast-[1.05]"
            loading="lazy"
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Gold vignette on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Content overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between"
            style={{ transform: "translateZ(25px)" }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] font-medium mb-1">
                {item.subtitle}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4EDE4] font-normal">
                {item.title}
              </h3>
            </div>
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
              0{idx + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative bg-[#080706] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-t border-[#1C1814] overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div style={{ y: headerY }}>
          <SectionHeader
            kicker="Atmosphere &amp; Space"
            title="Moments of Quiet."
            italicWord="Captured."
            description="A visual glimpse into our Islamabad lounge. Simple textures, honest materials, and an atmosphere designed to let you breathe."
            align="left"
          />
        </motion.div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {galleryItems.map((item, idx) => (
            <GalleryCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
