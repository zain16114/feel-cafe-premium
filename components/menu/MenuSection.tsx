"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import MenuItemCard from "./MenuItemCard";
import { menuCategories, menuItems } from "@/data/menu";
import { Search } from "lucide-react";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="menu"
      className="relative bg-[#080706] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-t border-[#1C1814] overflow-hidden"
    >
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/[0.02] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#A88623]/[0.02] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="The Complete Menu"
          title="Curated for Taste."
          italicWord="Crafted to Order."
          description="Every dish and beverage prepared fresh with disciplined attention. Browse our complete verified selections, from single-origin espresso pulls to gourmet entrees."
          align="center"
        />

        {/* Search & Fast Filtering Bar */}
        <div className="mt-12 max-w-md mx-auto relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-[#9E938A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, drinks, desserts..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-[#120F0E] text-[#F4EDE4] placeholder-[#9E938A]/60 rounded-full border border-[#2B231D] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 text-xs text-[#9E938A] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Horizontal Scrolling Navigation */}
        <div className="mt-10 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-max">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                  }}
                  className={`relative px-4 py-2 text-xs uppercase tracking-[0.16em] rounded-full transition-all duration-250 cursor-pointer ${
                    isActive
                      ? "text-[#080706] font-semibold"
                      : "text-[#9E938A] hover:text-[#F4EDE4] bg-[#14110F]/60 border border-[#26201B] hover:border-[#3D332B]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C86A]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category.shortName}
                    <span
                      className={`ml-1.5 text-[10px] ${
                        isActive ? "text-[#080706]/70" : "text-[#D4AF37]/70"
                      }`}
                    >
                      ({category.count})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description & Item Count Status */}
        <div className="mt-6 flex items-center justify-between text-xs text-[#9E938A] border-b border-[#1C1814] pb-3">
          <span>
            Showing{" "}
            <strong className="text-[#E8C86A]">{filteredItems.length}</strong>{" "}
            verified items
          </span>
          <span className="text-[11px] text-[#9E938A]/80 hidden sm:inline">
            Prices in PKR &bull; Tax applicable per local regulation
          </span>
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuItemCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="mt-16 text-center py-16 rounded-2xl border border-dashed border-[#2B231D] max-w-lg mx-auto">
            <p className="font-serif text-xl text-[#F4EDE4]">
              No dishes found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-2 text-xs text-[#9E938A]">
              Try searching for espresso, burger, soup, or select a category above.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-6 px-5 py-2 text-xs uppercase tracking-wider rounded-full bg-[#1C1814] text-[#E8C86A] border border-[#D4AF37]/30"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
