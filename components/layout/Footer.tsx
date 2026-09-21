import React from "react";
import { brandData } from "@/data/brand";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050403] border-t border-[#1F1B18] text-[#9E938A] overflow-hidden pt-20 pb-12">
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#D4AF37]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#1F1B18]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.14em] text-[#F4EDE4] font-light block">
                FEEL CAFE
              </span>
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#D4AF37] font-medium block mt-1">
                Pure &amp; Simple
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#9E938A] max-w-sm">
              An intentional coffee destination located on Constitution Avenue in Islamabad. Crafted for genuine moments of calm, quality, and community.
            </p>
            <div className="pt-2">
              <a
                href={brandData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#E8C86A] hover:text-white transition-colors duration-250 group"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4EDE4]">
              Location &amp; Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1 mr-3" />
                <span className="text-[#C5BCB2] leading-relaxed">
                  {brandData.address.fullFormatted}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mr-3" />
                <a
                  href={`tel:${brandData.phone.international}`}
                  className="text-[#E8C86A] hover:underline"
                >
                  {brandData.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4EDE4]">
              Operating Hours
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 mr-3" />
                <div>
                  <div className="text-[#C5BCB2]">Monday – Saturday</div>
                  <div className="text-xs text-[#E8C86A] font-medium mt-0.5">
                    {brandData.hours.weekdays}
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#1F1B18] text-xs text-[#9E938A]/80">
                <span className="text-[#D9CDBD] font-medium">Sunday:</span>{" "}
                {brandData.hours.sunday} (Inquire directly)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E938A]/70 gap-4">
          <p>
            &copy; {currentYear} Feel Cafe | Pure &amp; Simple. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <a href="#top" className="hover:text-[#E8C86A] transition-colors">
              Back to Top &uarr;
            </a>
            <a href="#menu" className="hover:text-[#E8C86A] transition-colors">
              Menu
            </a>
            <a href="#location" className="hover:text-[#E8C86A] transition-colors">
              Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
