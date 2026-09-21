"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";

interface FloatingBeansProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

interface BeanConfig {
  id: string;
  x: number;
  y: number;
  z: number;
  scale: number;
  rotation: number;
  blur: string;
  parallaxFactor: number;
  floatDuration: number;
  floatYRange: number;
}

const beansData: BeanConfig[] = [
  // Background layer (depth of field blur, slow response)
  {
    id: "bean-bg-1",
    x: -160,
    y: -140,
    z: -70,
    scale: 0.65,
    rotation: -42,
    blur: "blur-[1.5px]",
    parallaxFactor: 0.03,
    floatDuration: 7.2,
    floatYRange: 14,
  },
  {
    id: "bean-bg-2",
    x: 180,
    y: 130,
    z: -50,
    scale: 0.7,
    rotation: 55,
    blur: "blur-[1.2px]",
    parallaxFactor: 0.04,
    floatDuration: 8.0,
    floatYRange: 16,
  },

  // Midground layer (crisp focus, aligned near cup)
  {
    id: "bean-mid-1",
    x: -180,
    y: 50,
    z: 25,
    scale: 0.95,
    rotation: 28,
    blur: "blur-0",
    parallaxFactor: 0.07,
    floatDuration: 5.8,
    floatYRange: 18,
  },
  {
    id: "bean-mid-2",
    x: 165,
    y: -70,
    z: 35,
    scale: 1.0,
    rotation: -30,
    blur: "blur-0",
    parallaxFactor: 0.08,
    floatDuration: 6.4,
    floatYRange: 20,
  },

  // Foreground layer (larger, higher parallax, slight camera proximity blur)
  {
    id: "bean-fg-1",
    x: -110,
    y: 160,
    z: 95,
    scale: 1.25,
    rotation: 65,
    blur: "blur-[0.5px]",
    parallaxFactor: 0.12,
    floatDuration: 4.8,
    floatYRange: 22,
  },
  {
    id: "bean-fg-2",
    x: 130,
    y: -155,
    z: 110,
    scale: 1.2,
    rotation: -75,
    blur: "blur-[0.5px]",
    parallaxFactor: 0.13,
    floatDuration: 5.2,
    floatYRange: 24,
  },
];

export default function FloatingBeans({ mouseX, mouseY }: FloatingBeansProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible"
      style={{ transformStyle: "preserve-3d" }}
    >
      {beansData.map((bean) => (
        <SingleBean key={bean.id} config={bean} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}

function SingleBean({
  config,
  mouseX,
  mouseY,
}: {
  config: BeanConfig;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const pX = useTransform(mouseX, (v) => v * config.parallaxFactor);
  const pY = useTransform(mouseY, (v) => v * config.parallaxFactor);

  return (
    <motion.div
      style={{
        x: pX,
        y: pY,
        transform: `translate3d(${config.x}px, ${config.y}px, ${config.z}px) rotate(${config.rotation}deg) scale(${config.scale})`,
        transformStyle: "preserve-3d",
      }}
      className={`absolute ${config.blur}`}
    >
      <motion.div
        animate={{
          y: [-config.floatYRange / 2, config.floatYRange / 2, -config.floatYRange / 2],
          rotate: [config.rotation, config.rotation + 6, config.rotation - 4, config.rotation],
        }}
        transition={{
          duration: config.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative drop-shadow-[0_12px_16px_rgba(0,0,0,0.85)] filter"
      >
        {/* Realistic Coffee Bean SVG */}
        <svg
          width="36"
          height="48"
          viewBox="0 0 36 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id={`beanGrad-${config.id}`}
              cx="35%"
              cy="35%"
              r="65%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#6E472D" />
              <stop offset="45%" stopColor="#4A2E1B" />
              <stop offset="85%" stopColor="#2A170C" />
              <stop offset="100%" stopColor="#150B05" />
            </radialGradient>
            <linearGradient
              id={`creaseGrad-${config.id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#150B05" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0B0502" />
              <stop offset="100%" stopColor="#150B05" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient
              id={`specularGrad-${config.id}`}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A8754A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A8754A" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Bean Body */}
          <ellipse
            cx="18"
            cy="24"
            rx="14"
            ry="20"
            fill={`url(#beanGrad-${config.id})`}
            stroke="#150B05"
            strokeWidth="0.8"
          />

          {/* Specular curved gloss on upper flank */}
          <path
            d="M9,14 C12,8 20,8 24,13 C21,11 14,11 9,14 Z"
            fill={`url(#specularGrad-${config.id})`}
          />

          {/* Characteristic S-Curved Furrow / Crease */}
          <path
            d="M18,6 C16,14 21,22 17,32 C15,37 17,42 18,43"
            stroke={`url(#creaseGrad-${config.id})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Subtle Crease highlight */}
          <path
            d="M19.5,8 C17.5,16 22.5,23 18.5,33"
            stroke="#6E472D"
            strokeWidth="0.8"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
