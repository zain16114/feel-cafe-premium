"use client";

import React from "react";
import { motion } from "motion/react";

export default function SteamEffect() {
  // Multiple organic steam wisps with staggered heights, paths, and durations
  const steamPlumes = [
    {
      id: "plume-1",
      path: "M20,120 Q12,85 24,55 T18,10",
      duration: 4.8,
      delay: 0,
      xOffset: -12,
      scale: 1.1,
    },
    {
      id: "plume-2",
      path: "M20,120 Q28,90 14,60 T22,10",
      duration: 5.6,
      delay: 1.2,
      xOffset: 0,
      scale: 1.25,
    },
    {
      id: "plume-3",
      path: "M20,120 Q10,80 25,50 T15,10",
      duration: 6.2,
      delay: 2.4,
      xOffset: 12,
      scale: 0.95,
    },
    {
      id: "plume-4",
      path: "M20,120 Q26,85 16,55 T24,10",
      duration: 5.2,
      delay: 3.1,
      xOffset: 5,
      scale: 1.05,
    },
  ];

  return (
    <div
      className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-48 h-48 overflow-visible flex items-center justify-center"
      style={{ transform: "translateZ(65px)" }}
    >
      <svg
        viewBox="0 0 40 140"
        className="w-36 h-48 overflow-visible filter blur-[2.5px] opacity-75"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="25%" stopColor="#F4EDE4" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#E8C86A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {steamPlumes.map((plume) => (
          <motion.path
            key={plume.id}
            d={plume.path}
            fill="none"
            stroke="url(#steamGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#softGlow)"
            initial={{
              pathLength: 0.1,
              pathOffset: 0,
              opacity: 0,
              scaleY: 0.8,
              x: plume.xOffset,
            }}
            animate={{
              pathLength: [0.2, 0.7, 0.4],
              pathOffset: [0, 0.6, 1.2],
              opacity: [0, 0.6, 0.8, 0.4, 0],
              scaleY: [0.85, 1.2, 1.35],
              x: [plume.xOffset - 4, plume.xOffset + 6, plume.xOffset - 2],
            }}
            transition={{
              duration: plume.duration,
              delay: plume.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
