"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";
import { brandData } from "@/data/brand";
import { MapPin, Clock, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenReservation?: () => void;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    rotateX: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const headlineWords = ["Feel", "Cafe."];
const taglineWords = ["Pure", "&", "Simple."];

export default function Hero({ onOpenReservation }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax — text drifts up faster than scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[#080706]"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />

      <div className="pointer-events-none absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#A88623]/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography Choreography */}
          <motion.div
            style={{ y: textY, opacity }}
            className="lg:col-span-6 z-10 text-left"
          >
            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1715]/80 border border-[#D4AF37]/25 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A] animate-pulse" />

              <span className="text-[11px] uppercase tracking-[0.26em] text-[#E8C86A] font-medium">
                Islamabad &bull; IHCBA Constitution Ave
              </span>
            </motion.div>

            {/* Main Editorial Headline — word stagger */}
            <div style={{ perspective: 800 }}>
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F4EDE4] leading-[1.08] flex flex-wrap gap-x-4 gap-y-1"
              >
                {headlineWords.map((word) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}

                <br className="w-full" />

                <span className="inline-flex flex-wrap gap-x-3 italic font-normal bg-gradient-to-r from-[#F4EDE4] via-[#E8C86A] to-[#D4AF37] bg-clip-text text-transparent">
                  {taglineWords.map((word) => (
                    <motion.span
                      key={word}
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>

            {/* Creative Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="mt-6 text-base sm:text-lg text-[#C5BCB2] font-light leading-relaxed max-w-xl"
            >
              <span className="text-[#F4EDE4] font-normal">
                {brandData.creativeSlogan}
              </span>{" "}
              A serene coffee sanctuary on the 1st Floor of IHCBA. Artisanal
              extraction, honest craftsmanship, and pure hospitality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <Button href="#menu" variant="primary" size="lg">
                Explore Menu
              </Button>

              <Button
                onClick={onOpenReservation}
                variant="secondary"
                size="lg"
              >
                Visit Us
              </Button>
            </motion.div>

            {/* Quick Info Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.0,
              }}
              className="mt-12 pt-6 border-t border-[#261F1A] grid grid-cols-2 gap-4 max-w-md text-xs"
            >
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />

                <div>
                  <div className="text-[#9E938A] uppercase tracking-wider text-[10px]">
                    Mon – Sat Hours
                  </div>

                  <div className="text-[#F4EDE4] font-medium mt-0.5">
                    {brandData.hours.weekdays}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />

                <div>
                  <div className="text-[#9E938A] uppercase tracking-wider text-[10px]">
                    Verified Location
                  </div>

                  <div className="text-[#F4EDE4] font-medium mt-0.5">
                    1st Floor, IHCBA, G-5/1
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Coffee Centerpiece */}
          <motion.div
            style={{ y: visualY }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-[10px] uppercase tracking-[0.24em] text-[#9E938A] hover:text-[#E8C86A] transition-colors"
      >
        <span>Discover</span>

        <ChevronDown className="w-4 h-4 mt-1 animate-bounce" />
      </motion.a>
    </section>
  );
}