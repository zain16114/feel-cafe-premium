"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  CheckCircle2,
} from "lucide-react";
import { brandData } from "@/data/brand";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
      setSubmitting(false);
      setError("");
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          date,
          time,
          guests,
          notes,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to submit your reservation."
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Reservation submission error:", err);

      setError(
        "We couldn't submit your reservation. Please try again or call our team directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${brandData.phone.international}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#14110F] to-[#0A0908] border border-[#2E251E] p-6 sm:p-8 shadow-2xl z-10 my-auto text-left"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#9E938A] hover:text-[#F4EDE4] transition-colors rounded-full hover:bg-white/[0.05] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
                    Table Inquiries &bull; Feel Cafe
                  </span>

                  <h3
                    id="modal-title"
                    className="font-serif text-2xl sm:text-3xl text-[#F4EDE4] font-normal"
                  >
                    Plan Your Visit
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#9E938A] leading-relaxed">
                    Submit your reservation details below, or call our team
                    directly at{" "}
                    <button
                      type="button"
                      onClick={handleCall}
                      className="text-[#E8C86A] underline underline-offset-2"
                    >
                      {brandData.phone.display}
                    </button>
                    .
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9E938A] mb-1.5">
                      Full Name
                    </label>

                    <div className="relative">
                      <User className="w-4 h-4 text-[#9E938A] absolute left-3.5 top-1/2 -translate-y-1/2" />

                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Tariq Khan"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#0A0807] text-[#F4EDE4] text-sm rounded-xl border border-[#241E19] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9E938A] mb-1.5">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#9E938A] absolute left-3.5 top-1/2 -translate-y-1/2" />

                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0300 1234567"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#0A0807] text-[#F4EDE4] text-sm rounded-xl border border-[#241E19] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E938A] mb-1.5">
                        Date
                      </label>

                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#9E938A] absolute left-3.5 top-1/2 -translate-y-1/2" />

                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#0A0807] text-[#F4EDE4] text-sm rounded-xl border border-[#241E19] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9E938A] mb-1.5">
                        Time (8am–5pm)
                      </label>

                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#9E938A] absolute left-3.5 top-1/2 -translate-y-1/2" />

                        <input
                          type="time"
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#0A0807] text-[#F4EDE4] text-sm rounded-xl border border-[#241E19] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9E938A] mb-1.5">
                      Party Size
                    </label>

                    <div className="relative">
                      <Users className="w-4 h-4 text-[#9E938A] absolute left-3.5 top-1/2 -translate-y-1/2" />

                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#0A0807] text-[#F4EDE4] text-sm rounded-xl border border-[#241E19] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 to 4 Guests</option>
                        <option>5 to 8 Guests</option>
                        <option>Large Group (8+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Note */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9E938A] mb-1.5">
                      Special Requests (Optional)
                    </label>

                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Quiet corner, window seating, business discussion"
                      className="w-full px-4 py-2.5 bg-[#0A0807] text-[#F4EDE4] text-sm rounded-xl border border-[#241E19] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C86A] text-[#080706] shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Submitting..." : "Confirm Inquiry"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mx-auto text-[#E8C86A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="font-serif text-2xl text-[#F4EDE4]">
                  Inquiry Received
                </h4>

                <p className="text-sm text-[#9E938A] max-w-sm mx-auto leading-relaxed">
                  Thank you,{" "}
                  <strong className="text-[#F4EDE4]">{name}</strong>. Your
                  request for {guests} on {date} at {time} has been logged. Our
                  cafe team will confirm via {phone}.
                </p>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 text-xs uppercase tracking-wider rounded-full bg-[#1A1715] text-[#E8C86A] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}