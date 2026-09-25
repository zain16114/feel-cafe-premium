"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Search, ChevronDown, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import MenuItemCard from "./MenuItemCard";
import { menuCategories, menuItems } from "@/data/menu";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleItems = useMemo(() => {
    if (searchQuery.trim() || showAll) {
      return filteredItems;
    }

    const featured = filteredItems.filter((item) => item.featured);
    const remaining = filteredItems.filter((item) => !item.featured);

    return [...featured, ...remaining].slice(0, 6);
  }, [filteredItems, searchQuery, showAll]);

  const hasMoreItems =
    !searchQuery.trim() && filteredItems.length > visibleItems.length;

  const activeCategoryName =
    menuCategories.find((category) => category.id === activeCategory)?.name ??
    "All Selections";

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowAll(false);
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden border-t border-[#1C1814] bg-[#080706] px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.035] blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#A88623]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
        >
          <SectionHeader
            kicker="The Menu"
            title="Curated for Taste."
            italicWord="Crafted to Order."
            description="A considered selection of coffee, food and refreshments prepared with care. Explore a category, discover a favorite, and let the rest wait for your next visit."
            align="center"
          />
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mx-auto mt-12 max-w-xl"
        >
          <div className="group relative">

            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9E938A] transition-colors duration-300 group-focus-within:text-[#D4AF37]" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search the menu..."
              className="w-full rounded-full border border-[#2B231D] bg-[#100D0B]/90 py-4 pl-12 pr-20 text-sm text-[#F4EDE4] outline-none transition-all duration-300 placeholder:text-[#9E938A]/50 focus:border-[#D4AF37]/60 focus:bg-[#14100D] focus:ring-1 focus:ring-[#D4AF37]/20"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.16em] text-[#9E938A] transition-colors hover:text-[#E8C86A]"
              >
                Clear
              </button>
            )}

          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="relative mt-10"
        >
          <div className="no-scrollbar -mx-4 overflow-x-auto px-4 pb-3">
            <div className="flex min-w-max items-center justify-center gap-2 lg:flex-wrap">

              {menuCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`relative cursor-pointer overflow-hidden rounded-full border px-4 py-2.5 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 sm:text-[11px] ${
                      isActive
                        ? "border-transparent text-[#080706]"
                        : "border-[#28211B] bg-[#120F0D]/70 text-[#9E938A] hover:border-[#4A3B2B] hover:text-[#F4EDE4]"
                    }`}
                  >

                    {isActive && (
                      <motion.div
                        layoutId="menu-active-category"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C86A]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {category.shortName}

                      <span
                        className={`ml-1.5 ${
                          isActive
                            ? "text-[#080706]/60"
                            : "text-[#D4AF37]/60"
                        }`}
                      >
                        {category.count}
                      </span>
                    </span>

                  </button>
                );
              })}

            </div>
          </div>
        </motion.div>

        {/* Category Heading */}
        <motion.div
          layout
          className="mt-10 flex flex-col gap-4 border-b border-[#211B17] pb-5 sm:flex-row sm:items-end sm:justify-between"
        >

          <div>
            <div className="mb-2 flex items-center gap-2">

              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
                {activeCategory === "all"
                  ? "Our selections"
                  : "Selected category"}
              </span>

            </div>

            <h3 className="font-serif text-2xl font-normal text-[#F4EDE4] sm:text-3xl">
              {activeCategoryName}
            </h3>
          </div>

          <div className="text-xs text-[#9E938A]">

            {searchQuery ? (
              <>
                <span className="text-[#E8C86A]">
                  {filteredItems.length}
                </span>{" "}
                result{filteredItems.length === 1 ? "" : "s"}
              </>
            ) : (
              <>
                <span className="text-[#E8C86A]">
                  {filteredItems.length}
                </span>{" "}
                selections
              </>
            )}

          </div>

        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">

          <motion.div
            key={`${activeCategory}-${searchQuery}-${showAll}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2"
          >

            {visibleItems.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants}>
                <MenuItemCard
                  item={item}
                  index={index}
                />
              </motion.div>
            ))}

          </motion.div>

        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-10 max-w-xl rounded-3xl border border-dashed border-[#2B231D] px-6 py-16 text-center"
          >

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#3A2F25] bg-[#120F0D]">
              <Search className="h-4 w-4 text-[#D4AF37]" />
            </div>

            <h4 className="mt-5 font-serif text-xl text-[#F4EDE4]">
              Nothing found
            </h4>

            <p className="mt-2 text-sm leading-6 text-[#9E938A]">
              We could not find a menu item matching &ldquo;
              {searchQuery}
              &rdquo;.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setShowAll(false);
              }}
              className="mt-6 rounded-full border border-[#D4AF37]/30 bg-[#17120E] px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[#E8C86A] transition-colors hover:border-[#D4AF37] hover:bg-[#211A13]"
            >
              Reset Menu
            </button>

          </motion.div>
        )}

        {/* View Full Menu */}
        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease }}
            className="mt-10 flex justify-center"
          >

            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3 rounded-full border border-[#3A3027] bg-[#120F0D] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#E8C86A] transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-[#18130F]"
            >
              <span>
                View Full {activeCategoryName}
              </span>

              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

          </motion.div>
        )}

        {/* Show Less */}
        {showAll && filteredItems.length > 6 && !searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex justify-center"
          >

            <button
              type="button"
              onClick={() => {
                setShowAll(false);

                window.setTimeout(() => {
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
              className="rounded-full border border-[#2B231D] px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[#9E938A] transition-all hover:border-[#D4AF37]/40 hover:text-[#E8C86A]"
            >
              Show Less
            </button>

          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#70665F]">
            Prices in PKR &bull; Tax applicable per local regulation
          </p>
        </motion.div>

      </div>
    </section>
  );
}