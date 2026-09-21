import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "brass" | "subtle" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "brass",
  className = "",
}) => {
  const variantClasses = {
    brass: "bg-[#D4AF37]/10 text-[#E8C86A] border-[#D4AF37]/30",
    subtle: "bg-white/[0.04] text-[#D9CDBD] border-white/10",
    outline: "bg-transparent text-[#9E938A] border-[#2E2824]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.24em] rounded-full border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
