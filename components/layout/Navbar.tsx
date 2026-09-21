"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu as MenuIcon, X, MapPin } from "lucide-react";
import { brandData } from "@/data/brand";

interface NavbarProps {
  onOpenReservation?: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3.5 bg-[#080706]/85 backdrop-blur-xl border-b border-[#2E2824]/60 shadow-2xl shadow-black/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Identity / Wordmark */}
          <a
            href="#top"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] text-[#F4EDE4] font-light transition-colors duration-300 group-hover:text-[#E8C86A]">
              FEEL CAFE
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#D4AF37] font-medium -mt-0.5">
              Pure &amp; Simple
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.22em] text-[#C5BCB2] hover:text-[#E8C86A] transition-colors duration-250 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${brandData.phone.international}`}
              className="flex items-center text-xs tracking-wider text-[#9E938A] hover:text-[#F4EDE4] transition-colors duration-200"
              title="Call Feel Cafe"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
              <span className="hidden lg:inline">{brandData.phone.display}</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C86A] text-[#080706] shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F4EDE4] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#E8C86A]" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[60px] z-40 bg-[#080706]/98 backdrop-blur-2xl border-b border-[#2E2824] px-6 py-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]/70 font-semibold">
                Menu Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="font-serif text-2xl tracking-wide text-[#F4EDE4] hover:text-[#E8C86A] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#2E2824] space-y-4">
              <div className="flex items-center text-sm text-[#9E938A]">
                <MapPin className="w-4 h-4 mr-2 text-[#D4AF37]" />
                <span>1st Floor, IHCBA, Constitution Ave</span>
              </div>
              <a
                href={`tel:${brandData.phone.international}`}
                className="flex items-center text-sm text-[#E8C86A] font-medium"
              >
                <Phone className="w-4 h-4 mr-2 text-[#D4AF37]" />
                <span>{brandData.phone.display}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenReservation) onOpenReservation();
                }}
                className="w-full mt-4 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C86A] text-[#080706] shadow-lg"
              >
                Visit Us / Inquire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
