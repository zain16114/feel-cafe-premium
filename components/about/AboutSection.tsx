"use client";

import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Coffee, Compass, Sparkles } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Coffee,
      title: "Artisanal Focus",
      subtitle: "Pure Extraction",
      description:
        "Every cup is pulled with disciplined precision. Freshly ground beans, calibrated temperature, and smooth milk steaming designed to celebrate clean, authentic flavor profiles.",
    },
    {
      icon: Compass,
      title: "Constitution Avenue",
      subtitle: "A Peaceful Sanctuary",
      description:
        "Perched on the first floor of IHCBA in G-5/1, Feel Cafe offers an intimate escape from the city tempo—warm ambiance, uncluttered acoustics, and natural light.",
    },
    {
      icon: Sparkles,
      title: "Genuine Hospitality",
      subtitle: "Simple Moments",
      description:
        "Hospitality stripped of artificial pretension. Whether meeting colleagues, reading quietly, or starting your morning, our space is designed for intentional presence.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#080706] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-[#1C1814]"
    >
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#D4AF37]/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Our Philosophy"
          title="Designed for Clarity."
          italicWord="Pure & Simple."
          description="We believe in the beauty of subtraction. In a world full of noise, Feel Cafe stands as an unhurried space devoted to fine coffee, wholesome dining, and genuine company."
          align="left"
        />

        {/* 3 Pillars Grid with 3D Depth on Hover */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#14110F] to-[#0D0B0A] border border-[#26201B] hover:border-[#D4AF37]/40 p-8 sm:p-10 shadow-xl transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-sm" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1A1613] border border-[#2E2824] flex items-center justify-center text-[#E8C86A] mb-8 group-hover:scale-105 group-hover:border-[#D4AF37]/50 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>

                    <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-medium mb-2">
                      {pillar.subtitle}
                    </p>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EDE4] font-normal tracking-wide">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9E938A] group-hover:text-[#C5BCB2] transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1F1B18] flex items-center justify-between text-xs text-[#9E938A]">
                    <span className="tracking-widest uppercase font-mono text-[11px] text-[#D4AF37]/70">
                      0{idx + 1}
                    </span>
                    <span className="text-[#E8C86A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif italic">
                      Pure &amp; Simple
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
