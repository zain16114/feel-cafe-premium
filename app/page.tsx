"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import MenuSection from "@/components/menu/MenuSection";
import GallerySection from "@/components/gallery/GallerySection";
import LocationSection from "@/components/location/LocationSection";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/reservation/ReservationModal";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#080706] text-[#F4EDE4] selection:bg-[#D4AF37]/30 selection:text-[#FFF]">
      {/* Floating Glass Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Cinematic 3D Coffee Hero */}
      <Hero onOpenReservation={handleOpenReservation} />

      {/* Pure & Simple Philosophy Narrative */}
      <AboutSection />

      {/* Complete Verified 20-Category Restaurant Menu */}
      <MenuSection />

      {/* Atmosphere & Space Gallery */}
      <GallerySection />

      {/* Verified IHCBA Constitution Ave Location & Schedule */}
      <LocationSection onOpenReservation={handleOpenReservation} />

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Table Booking & Inquiry Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={handleCloseReservation}
      />
    </main>
  );
}
