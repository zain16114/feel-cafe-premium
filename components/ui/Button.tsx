"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  target,
  rel,
  type = "button",
  disabled,
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const magnetX = useSpring(useTransform(mouseX, [-1, 1], [-6, 6]), {
    stiffness: 300,
    damping: 20,
  });
  const magnetY = useSpring(useTransform(mouseY, [-1, 1], [-4, 4]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const sizeClasses = {
    sm: "px-5 py-2 text-[11px]",
    md: "px-6 py-2.5 text-xs",
    lg: "px-8 py-3 text-xs sm:text-sm",
  };

  const baseClass = `relative inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] rounded-full transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${sizeClasses[size]} ${className}`;

  const variantClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#D4AF37] to-[#E8C86A] text-[#080706] shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/25 active:scale-[0.97]"
      : "bg-transparent border border-[#D4AF37]/40 text-[#E8C86A] hover:border-[#D4AF37]/80 hover:bg-[#D4AF37]/[0.06] active:scale-[0.97]";

  const content = (
    <>
      {children}
      {icon && <span className="ml-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClass} ${variantClass}`}
        style={{ x: magnetX, y: magnetY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.96 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass}`}
      style={{ x: magnetX, y: magnetY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      {content}
    </motion.button>
  );
}
