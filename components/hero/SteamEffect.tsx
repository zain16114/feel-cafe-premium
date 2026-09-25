"use client";
import React from "react";
import { motion } from "motion/react";

const threads = [
  { id: 0, x: 45,  ampX: 8,   dur: 2.8, delay: 0,    blur: 3, opacity: 0.55, height: 110 },
  { id: 1, x: 70,  ampX: -10, dur: 3.4, delay: 0.5,  blur: 5, opacity: 0.45, height: 130 },
  { id: 2, x: 90,  ampX: 6,   dur: 2.6, delay: 0.9,  blur: 2, opacity: 0.6,  height: 95  },
  { id: 3, x: 120, ampX: -8,  dur: 3.8, delay: 0.25, blur: 6, opacity: 0.4,  height: 140 },
  { id: 4, x: 145, ampX: 12,  dur: 3.1, delay: 0.7,  blur: 4, opacity: 0.5,  height: 120 },
  { id: 5, x: 165, ampX: -6,  dur: 4.0, delay: 1.1,  blur: 7, opacity: 0.35, height: 150 },
];

export default function SteamEffect() {
  return (
    <div
      style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
      className="pointer-events-none absolute -top-16 left-0 right-0 h-44 overflow-visible"
    >
      {threads.map((t) => (
        <motion.div
          key={t.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: t.x - 4,
            width: 8,
            background: `radial-gradient(ellipse at center, rgba(244,237,228,${t.opacity}) 0%, transparent 70%)`,
            filter: `blur(${t.blur}px)`,
          }}
          animate={{
            y: [0, -t.height],
            x: [0, t.ampX, -t.ampX * 0.7, t.ampX * 0.4, 0],
            opacity: [0, t.opacity * 0.6, t.opacity, t.opacity * 0.7, 0],
            scaleX: [0.8, 1.3, 1.6, 1.8, 2.0],
            scaleY: [1, 0.9, 0.8, 0.6, 0.4],
          }}
          transition={{
            duration: t.dur,
            delay: t.delay,
            repeat: Infinity,
            ease: [0.33, 0, 0.66, 1],
          }}
        />
      ))}
    </div>
  );
}
