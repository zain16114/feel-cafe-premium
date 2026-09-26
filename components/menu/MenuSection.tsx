"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, Sparkles } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import MenuItemCard from "./MenuItemCard";
import { menuCategories, menuItems } from "@/data/menu";
import { menuCategoryImages } from "@/lib/menuCategoryImages";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategoryData = menuCategories.find(
    (category) => category.id === activeCategory
  );

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesSearch =
        !query || item.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoryImage =
    activeCategory === "all"
      ? menuCategoryImages.espresso
      : menuCategoryImages[activeCategory];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery("");

    setTimeout(() => {
      document.getElementById("menu-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#080706] py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-white/[0.012] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <SectionHeader
          title="Pure & Simple"
          description="Thoughtfully prepared coffee, food and refreshments for every moment."
        />

        {/* Search */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search our menu..."
              className="h-14 w-full rounded-full border border-white/[0.09] bg-white/[0.035] pl-12 pr-5 text-sm text-[#F4EDE4] outline-none placeholder:text-white/25 transition-all duration-300 focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
            />
          </div>
        </div>

        {/* Category navigation */}
        <div className="mt-10">
          <div className="relative">
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-4">
              {menuCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(category.id)
                    }
                    className="relative shrink-0 rounded-full px-5 py-3 text-[11px] font-medium uppercase tracking-[0.12em]"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="menu-active-category"
                        className="absolute inset-0 rounded-full bg-[#D4AF37]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-[#080706]"
                          : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      {category.shortName || category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected category */}
        <div
          id="menu-content"
          className="scroll-mt-24 mt-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Category hero */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#12100E]">
                <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
                  {categoryImage && (
                    <img
                      src={categoryImage}
                      alt={
                        activeCategory === "all"
                          ? "Feel Cafe menu"
                          : `${activeCategoryData?.name || "Menu"}`
                      }
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.035]"
                    />
                  )}

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/35 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/50 via-transparent to-transparent" />

                  {/* Category content */}
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="h-px w-10 bg-[#D4AF37]" />

                          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
                            Feel Café
                          </span>
                        </div>

                        <h2 className="font-serif text-4xl font-medium tracking-[-0.025em] text-[#F4EDE4] sm:text-5xl lg:text-6xl">
                          {activeCategory === "all"
                            ? "Our Menu"
                            : activeCategoryData?.name}
                        </h2>

                        <p className="mt-3 text-sm text-white/50">
                          {filteredItems.length}{" "}
                          {filteredItems.length === 1
                            ? "selection"
                            : "selections"}
                        </p>
                      </div>

                      <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-md sm:flex">
                        <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />

                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                          Crafted with care
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu list */}
              <div className="mt-8">
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                    {filteredItems.map((item, index) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center">
                    <Search className="mx-auto h-7 w-7 text-white/20" />

                    <h3 className="mt-5 font-serif text-2xl text-[#F4EDE4]">
                      No selections found
                    </h3>

                    <p className="mt-2 text-sm text-white/35">
                      Try another search or select a different
                      category.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] transition-colors hover:text-[#F4EDE4]"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom detail */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-white/10" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            Feel Café · Pure & Simple
          </span>

          <span className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}