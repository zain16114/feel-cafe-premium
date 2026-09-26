"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { MenuItem } from "@/data/menu";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({
  item,
  index,
}: MenuItemCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-5 transition-colors duration-500 hover:border-[#D4AF37]/30 hover:bg-white/[0.045] sm:px-6"
    >
      {/* Subtle premium glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#D4AF37]/[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between gap-5">
        {/* Left content */}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2">
            {item.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.08] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[#D4AF37]">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>

          <h3 className="font-serif text-lg font-medium tracking-[-0.01em] text-[#F4EDE4] transition-colors duration-300 group-hover:text-white sm:text-xl">
            {item.name}
          </h3>

          {/* Decorative line */}
          <div className="mt-3 flex items-center gap-2">
            <span className="h-px w-7 bg-[#D4AF37]/40 transition-all duration-500 group-hover:w-12 group-hover:bg-[#D4AF37]/70" />
            <span className="h-px w-2 bg-white/10" />
          </div>
        </div>

        {/* Price */}
        <div className="shrink-0 text-right">
          {item.hasSizes && item.largePrice ? (
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-medium text-[#F4EDE4] sm:text-base">
                PKR {item.price.toLocaleString()}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                Large&nbsp;&nbsp;PKR {item.largePrice.toLocaleString()}
              </span>
            </div>
          ) : (
            <span className="text-sm font-medium tracking-wide text-[#F4EDE4] sm:text-base">
              PKR {item.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Bottom hover accent */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-5 right-5 h-px origin-left bg-[#D4AF37]/60"
      />
    </motion.article>
  );
}