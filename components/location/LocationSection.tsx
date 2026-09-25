"use client";

import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { brandData } from "@/data/brand";
import { Phone, Clock, ArrowUpRight, Calendar } from "lucide-react";

interface LocationSectionProps {
  onOpenReservation?: () => void;
}

function PulsingMapPin() {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      {/* Ripple rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#D4AF37]/40"
          initial={{ width: 20, height: 20, opacity: 0.8 }}
          animate={{ width: 64, height: 64, opacity: 0 }}
          transition={{
            duration: 2.2,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Pin */}
      <div className="relative z-10 w-5 h-5 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            fill="#D4AF37"
          />
          <circle cx="12" cy="9" r="2.5" fill="#080706" />
        </svg>
      </div>
    </div>
  );
}

function AnimatedClock() {
  return (
    <div className="relative w-5 h-5">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#E8C86A" strokeWidth="1.5" />
        {/* Hour hand */}
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="6"
          stroke="#E8C86A"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ originX: "12px", originY: "12px" }}
        />
        {/* Minute hand */}
        <motion.line
          x1="12"
          y1="12"
          x2="16"
          y2="12"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{ originX: "12px", originY: "12px" }}
        />
        <circle cx="12" cy="12" r="1" fill="#E8C86A" />
      </svg>
    </div>
  );
}

export default function LocationSection({ onOpenReservation }: LocationSectionProps) {
  return (
    <section
      id="location"
      className="relative bg-[#080706] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-t border-[#1C1814] overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/[0.02] blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Plan Your Visit"
          title="Constitution Avenue."
          italicWord="Islamabad."
          description="We are located on the 1st Floor of the IHCBA building in sector G-5/1. Join us for your morning espresso, afternoon lunch meeting, or an unhurried post-work conversation."
          align="left"
        />

        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#13100E] to-[#0A0908] border border-[#2B231D] p-8 sm:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Corner badge */}
            <div className="absolute top-0 right-0 px-6 py-3 rounded-bl-2xl bg-[#1C1814] border-l border-b border-[#2B231D] text-[10px] uppercase tracking-[0.24em] text-[#E8C86A]">
              1st Floor, IHCBA
            </div>

            <div>
              {/* Pulsing Map Pin + Address */}
              <div className="flex items-center gap-4 mb-6">
                <PulsingMapPin />
                <div>
                  <span className="text-xs uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mb-1">
                    Verified Address
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F4EDE4] font-normal leading-snug">
                    {brandData.address.building},
                    <br />
                    <span className="text-[#C5BCB2]">{brandData.address.street}</span>
                  </h3>
                </div>
              </div>

              <p className="mt-2 text-base text-[#9E938A] leading-relaxed pl-0">
                {brandData.address.sector}, {brandData.address.city},{" "}
                {brandData.address.postalCode}, {brandData.address.country}
              </p>

              {/* Contact */}
              <div className="mt-8 pt-8 border-t border-[#201B17] flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E938A] block mb-1">
                    Direct Contact
                  </span>
                  <a
                    href={`tel:${brandData.phone.international}`}
                    className="inline-flex items-center text-lg sm:text-xl font-serif text-[#E8C86A] hover:underline"
                  >
                    <Phone className="w-4 h-4 mr-2.5 text-[#D4AF37]" />
                    {brandData.phone.display}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E938A] block mb-1">
                    Direct Inquiries
                  </span>
                  <span className="text-sm text-[#C5BCB2]">
                    Walk-ins Welcome &bull; Orders to Go
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 pt-8 border-t border-[#201B17] flex flex-wrap items-center gap-4">
              <Button
                href={brandData.mapsUrl}
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
              <Button
                onClick={onOpenReservation}
                variant="secondary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Reserve Table / Inquire
              </Button>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#13100E] to-[#0A0908] border border-[#2B231D] p-8 sm:p-12 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
                  Operating Hours
                </span>
                <AnimatedClock />
              </div>

              <div className="space-y-6">
                <div className="pb-5 border-b border-[#201B17]">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg sm:text-xl text-[#F4EDE4]">
                      Monday – Saturday
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-[#D4AF37]/15 text-[#E8C86A] border border-[#D4AF37]/30">
                      Verified
                    </span>
                  </div>
                  <p className="mt-1 text-base sm:text-lg font-medium text-[#E8C86A]">
                    {brandData.hours.weekdays}
                  </p>
                </div>

                <div className="pb-5 border-b border-[#201B17]">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg sm:text-xl text-[#9E938A]">Sunday</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-white/[0.04] text-[#9E938A] border border-[#2B231D]">
                      Inquire Directly
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#9E938A]">
                    Schedule not officially verified. Please call in advance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#090807] border border-[#241E1A] text-xs text-[#9E938A] leading-relaxed">
              <strong className="text-[#F4EDE4] font-medium block mb-1">
                Notice on Hours &amp; Public Holidays:
              </strong>
              Operating hours may adjust during national holidays. Feel free to call us directly at{" "}
              {brandData.phone.display} for same-day confirmation.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
