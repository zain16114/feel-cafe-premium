"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";
import { brandData } from "@/data/brand";
import { MapPin, Clock, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenReservation?: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[#080706]"
    >
      {/* Cinematic subtle grain and lighting atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/[0.03] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#A88623]/[0.025] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography Choreography */}
          <div className="lg:col-span-6 z-10 text-left">
            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1715]/80 border border-[#D4AF37]/25 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#E8C86A] font-medium">
                Islamabad &bull; IHCBA Constitution Ave
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F4EDE4] leading-[1.08]"
            >
              Feel Cafe. <br />
              <span className="italic font-normal bg-gradient-to-r from-[#F4EDE4] via-[#E8C86A] to-[#D4AF37] bg-clip-text text-transparent">
                Pure &amp; Simple.
              </span>
            </motion.h1>

            {/* Creative Slogan & Grounded Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-[#C5BCB2] font-light leading-relaxed max-w-xl"
            >
              <span className="text-[#F4EDE4] font-normal">
                {brandData.creativeSlogan}
              </span>{" "}
              A serene coffee sanctuary on the 1st Floor of IHCBA. Artisanal extraction, honest craftsmanship, and pure hospitality.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
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

            {/* Quick Verified Information Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
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
          </div>

          {/* Right Column: 3D Coffee Centerpiece */}
          <div className="lg:col-span-6 relative flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-[10px] uppercase tracking-[0.24em] text-[#9E938A] hover:text-[#E8C86A] transition-colors"
      >
        <span>Discover</span>
        <ChevronDown className="w-4 h-4 mt-1 animate-bounce" />
      </motion.a>
    </section>
  );
}
