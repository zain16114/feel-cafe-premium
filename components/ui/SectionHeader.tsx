"use client";

import React from "react";
import { motion } from "motion/react";

export interface SectionHeaderProps {
  kicker?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  italicWord,
  description,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`relative max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D4AF37]"
        >
          {kicker}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#F4EDE4] leading-[1.12]"
      >
        {title}{" "}
        {italicWord && (
          <span className="italic font-normal text-[#E8C86A]">
            {italicWord}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-6 text-sm sm:text-base leading-relaxed text-[#9E938A] ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
