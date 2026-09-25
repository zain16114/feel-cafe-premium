"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import SteamEffect from "./SteamEffect";
import FloatingBeans from "./FloatingBeans";

const orbitalRings = [
  {
    id: 0,
    rx: 210,
    ry: 70,
    rotX: 75,
    rotZ: 15,
    dasharray: "8 16",
    dur: 18,
    opacity: 0.25,
    color: "#D4AF37",
    width: 1,
  },
  {
    id: 1,
    rx: 160,
    ry: 52,
    rotX: 72,
    rotZ: -25,
    dasharray: "4 20",
    dur: 26,
    opacity: 0.18,
    color: "#E8C86A",
    width: 0.8,
  },
  {
    id: 2,
    rx: 260,
    ry: 88,
    rotX: 78,
    rotZ: 5,
    dasharray: "2 28",
    dur: 40,
    opacity: 0.12,
    color: "#A88623",
    width: 0.6,
  },
];

export default function HeroVisual() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 90, damping: 22, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-400, 400], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-400, 400], [-14, 14]);

  // Ring tilt linked to mouse
  const ringTiltX = useTransform(smoothMouseY, [-400, 400], [3, -3]);
  const ringTiltY = useTransform(smoothMouseX, [-400, 400], [-4, 4]);

  const lightShiftX = useTransform(smoothMouseX, [-400, 400], [-30, 30]);
  const lightShiftY = useTransform(smoothMouseY, [-400, 400], [-20, 20]);
  const shadowX = useTransform(smoothMouseX, [-400, 400], [25, -25]);
  const shadowY = useTransform(smoothMouseY, [-400, 400], [30, 10]);

  // Specular highlight shift on cup surface
  const specX = useTransform(smoothMouseX, [-400, 400], [4, 20]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return (
      <div className="relative flex h-[480px] sm:h-[540px] lg:h-[620px] w-full items-center justify-center">
        <div className="w-56 h-56 rounded-full bg-[#1A1715]/40 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative flex h-[480px] sm:h-[560px] lg:h-[640px] w-full items-center justify-center overflow-visible select-none">
      {/* Cinematic Ambient Backdrop Lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.28, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="pointer-events-none absolute w-[360px] sm:w-[480px] lg:w-[580px] h-[360px] sm:h-[480px] lg:h-[580px] rounded-full bg-gradient-to-tr from-[#A88623]/20 via-[#D4AF37]/15 to-transparent blur-[110px]"
      />

      {/* Dynamic Specular Ray */}
      <motion.div
        style={{ x: lightShiftX, y: lightShiftY }}
        className="pointer-events-none absolute w-[260px] h-[260px] rounded-full bg-[#E8C86A]/[0.08] blur-[80px]"
      />

      {/* Orbital Rings — 3D ellipses */}
      <motion.div
        style={{ rotateX: ringTiltX, rotateY: ringTiltY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {orbitalRings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute flex items-center justify-center"
            style={{
              width: ring.rx * 2,
              height: ring.ry * 2,
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: 360 }}
            transition={{
              duration: ring.dur,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              width={ring.rx * 2}
              height={ring.ry * 2}
              viewBox={`0 0 ${ring.rx * 2} ${ring.ry * 2}`}
              style={{
                transform: `rotateX(${ring.rotX}deg) rotateZ(${ring.rotZ}deg)`,
                overflow: "visible",
              }}
            >
              <ellipse
                cx={ring.rx}
                cy={ring.ry}
                rx={ring.rx - 1}
                ry={ring.ry - 1}
                stroke={ring.color}
                strokeWidth={ring.width}
                fill="none"
                strokeDasharray={ring.dasharray}
                strokeOpacity={ring.opacity}
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* 3D Perspective Stage */}
      <motion.div
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.88, rotateX: 18 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-center w-full h-full"
      >
        {/* Tilting 3D Rig */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative flex items-center justify-center"
        >
          {/* Layer 1: Ambient Contact Shadow */}
          <motion.div
            style={{ x: shadowX, y: shadowY, transform: "translateZ(-70px)" }}
            className="absolute w-[290px] sm:w-[350px] h-[80px] rounded-[100%] bg-black/90 blur-[28px]"
          />

          {/* Warm Table Bounce Light */}
          <div
            style={{ transform: "translateZ(-50px)" }}
            className="absolute w-[340px] sm:w-[400px] h-[95px] rounded-[100%] bg-[#D4AF37]/[0.05] blur-[35px]"
          />

          {/* Layer 2: Ceramic Saucer */}
          <div
            style={{ transform: "translateZ(-20px)", transformStyle: "preserve-3d" }}
            className="relative w-[280px] sm:w-[340px] h-[100px] rounded-[100%] bg-gradient-to-b from-[#1C1815] via-[#120F0D] to-[#0A0807] p-[1.5px] shadow-[0_25px_50px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute inset-0 rounded-[100%] border border-[#D4AF37]/35 shadow-[inset_0_0_8px_rgba(212,175,55,0.18)]" />
            <div className="absolute inset-[14px] sm:inset-[18px] rounded-[100%] bg-gradient-to-b from-[#0E0C0A] via-[#161311] to-[#1F1B17] border border-[#2E2824] shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Layer 3: Coffee Cup Assembly */}
          <div
            style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
            className="absolute -top-12 flex items-center justify-center"
          >
            <div className="relative w-[190px] sm:w-[225px] h-[135px] sm:h-[155px]">
              {/* Cup Exterior */}
              <div className="absolute inset-0 rounded-b-[75px] rounded-t-[20px] bg-gradient-to-r from-[#241E1A] via-[#191512] to-[#0D0B09] border-x border-b border-[#382E26] shadow-[0_20px_40px_rgba(0,0,0,0.85),inset_2px_0_4px_rgba(255,255,255,0.12),inset_-2px_0_6px_rgba(0,0,0,0.7)]" />

              {/* Dynamic Specular Glaze */}
              <motion.div
                style={{ x: specX }}
                className="absolute top-3 bottom-4 w-4 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent rounded-full blur-[2px]"
              />

              {/* Ceramic Handle */}
              <div
                style={{ transform: "rotateY(25deg) translateZ(8px)" }}
                className="absolute -right-7 sm:-right-8 top-6 w-11 sm:w-13 h-20 sm:h-24 rounded-r-[32px] border-[10px] sm:border-[12px] border-[#221C18] border-l-0 shadow-[4px_6px_14px_rgba(0,0,0,0.8)]"
              />

              {/* Layer 4: Cup Mouth & Crema Surface */}
              <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="absolute -top-3.5 left-0 right-0 h-[48px] sm:h-[54px] rounded-[100%] bg-gradient-to-b from-[#2E2620] via-[#171310] to-[#0D0B09] p-[2px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.95)]"
              >
                <div className="absolute inset-0 rounded-[100%] border border-[#D4AF37]/50" />

                <div className="relative w-full h-full rounded-[100%] overflow-hidden bg-gradient-to-br from-[#966336] via-[#633D1E] to-[#3B210E] p-1 shadow-inner">
                  {/* Crema Marbling */}
                  <div className="absolute inset-0 opacity-85 mix-blend-screen bg-[radial-gradient(ellipse_at_35%_35%,rgba(244,237,228,0.35)_0%,transparent_50%),radial-gradient(ellipse_at_70%_65%,rgba(212,175,55,0.3)_0%,transparent_55%)]" />

                  {/* Animated Latte Art — SVG path draw-on */}
                  <svg
                    viewBox="0 0 100 60"
                    className="w-full h-full opacity-65 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M50 48 C42 40, 24 32, 28 18 C32 6, 48 10, 50 20 C52 10, 68 6, 72 18 C76 32, 58 40, 50 48 Z"
                      fill="#F4EDE4"
                      fillOpacity="0.75"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.75 }}
                      transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M50 42 C44 35, 30 28, 33 18 C36 8, 48 12, 50 20 C52 12, 64 8, 67 18 C70 28, 56 35, 50 42 Z"
                      fill="#E8C86A"
                      fillOpacity="0.45"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.45 }}
                      transition={{ duration: 1, delay: 2.2 }}
                    />
                    <circle cx="50" cy="50" r="1.5" fill="#F4EDE4" fillOpacity="0.8" />
                  </svg>
                </div>
              </div>

              {/* Layer 5: Steam */}
              <SteamEffect />
            </div>
          </div>

          {/* Layer 6: Floating Coffee Beans */}
          <FloatingBeans mouseX={smoothMouseX} mouseY={smoothMouseY} />
        </motion.div>
      </motion.div>
    </div>
  );
}
