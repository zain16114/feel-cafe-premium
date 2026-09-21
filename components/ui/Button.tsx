"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      icon,
      iconPosition = "right",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-xs tracking-[0.16em]",
      md: "px-6 py-3 text-xs sm:text-sm tracking-[0.18em]",
      lg: "px-8 py-4 text-sm sm:text-base tracking-[0.2em]",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-b from-[#E8C86A] via-[#D4AF37] to-[#A88623] text-[#080706] font-semibold shadow-lg shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 hover:brightness-110 border border-[#E8C86A]/40",
      secondary:
        "bg-[#1A1715]/80 hover:bg-[#26201B] text-[#F4EDE4] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 shadow-md backdrop-blur-md",
      outline:
        "bg-transparent hover:bg-[#D4AF37]/10 text-[#F4EDE4] border border-[#F4EDE4]/20 hover:border-[#D4AF37]/50",
      ghost:
        "bg-transparent hover:bg-white/[0.04] text-[#D9CDBD] hover:text-[#F4EDE4]",
    };

    const baseClasses =
      "relative inline-flex items-center justify-center uppercase font-sans font-medium rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080706] disabled:opacity-50 disabled:cursor-not-allowed select-none overflow-hidden group";

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="mr-2.5 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
