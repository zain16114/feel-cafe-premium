"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { MenuItem } from "@/data/menu";
import { Coffee, Utensils, Sparkles } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  const [selectedSize, setSelectedSize] = useState<"regular" | "large">(
    "regular"
  );

  const currentPrice =
    selectedSize === "large" && item.largePrice !== undefined
      ? item.largePrice
      : item.price;

  // Determine icon archetype based on category
  const isCoffee = [
    "espresso",
    "cold-coffee",
    "frappes",
    "hot-teas",
    "shakes",
    "mohitos",
  ].includes(item.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25 },
      }}
      className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#13110F] via-[#0E0C0B] to-[#090807] border border-[#241E1A] hover:border-[#D4AF37]/45 p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:shadow-black/70 transition-all duration-300"
    >
      {/* Ambient brass border sheen */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent" />

      <div className="relative z-10">
        {/* Top Header: Category badge & Icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E938A] group-hover:text-[#D4AF37] transition-colors">
            {item.category.replace("-", " ")}
          </span>

          <div className="w-8 h-8 rounded-full bg-[#181512] border border-[#2B241E] flex items-center justify-center text-[#D4AF37]/60 group-hover:text-[#E8C86A] group-hover:border-[#D4AF37]/40 transition-colors">
            {isCoffee ? (
              <Coffee className="w-3.5 h-3.5" />
            ) : item.category === "desserts" ? (
              <Sparkles className="w-3.5 h-3.5" />
            ) : (
              <Utensils className="w-3.5 h-3.5" />
            )}
          </div>
        </div>

        {/* Item Name */}
        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F4EDE4] leading-snug group-hover:text-white transition-colors">
          {item.name}
        </h3>
      </div>

      {/* Bottom Row: Sizing Toggle & Exact PKR Price */}
      <div className="relative z-10 mt-6 pt-5 border-t border-[#1C1714] flex items-end justify-between gap-3">
        {/* Size Selector for drinks with dual sizing */}
        {item.hasSizes && item.largePrice !== undefined ? (
          <div className="inline-flex rounded-full bg-[#080706] p-0.5 border border-[#241E1A]">
            <button
              onClick={() => setSelectedSize("regular")}
              className={`px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedSize === "regular"
                  ? "bg-[#D4AF37] text-[#080706] font-semibold"
                  : "text-[#9E938A] hover:text-[#F4EDE4]"
              }`}
            >
              Regular
            </button>
            <button
              onClick={() => setSelectedSize("large")}
              className={`px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedSize === "large"
                  ? "bg-[#D4AF37] text-[#080706] font-semibold"
                  : "text-[#9E938A] hover:text-[#F4EDE4]"
              }`}
            >
              Large
            </button>
          </div>
        ) : (
          <span className="text-[11px] uppercase tracking-wider text-[#9E938A]/70">
            Standard Serving
          </span>
        )}

        {/* Price Tag in PKR */}
        <div className="text-right shrink-0">
          <span className="text-[10px] uppercase tracking-wider text-[#9E938A] mr-1">
            PKR
          </span>
          <span className="font-serif text-xl sm:text-2xl font-medium text-[#E8C86A] tracking-tight">
            {currentPrice.toLocaleString("en-PK")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
