"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { MenuItem } from "@/data/menu";
import { getMenuImage } from "@/lib/menuImages";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuItemCard({
  item,
  index,
}: MenuItemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [2.2, -2.2]),
    {
      stiffness: 220,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-2.2, 2.2]),
    {
      stiffness: 220,
      damping: 25,
    }
  );

  const imageSrc = getMenuImage(item);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const priceLabel =
    item.hasSizes && item.largePrice
      ? `PKR ${item.price} / ${item.largePrice}`
      : `PKR ${item.price}`;

  return (
    <motion.article
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.045, 0.25),
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#29221C]
        bg-[#100D0B]
        transition-all
        duration-500
        hover:border-[#D4AF37]/40
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* IMAGE */}

      <div className="relative h-40 overflow-hidden bg-[#17120F] sm:h-44">
        {imageSrc ? (
          <motion.img
            src={imageSrc}
            alt={`${item.name} at Feel Cafe`}
            loading="lazy"
            whileHover={{
              scale: 1.055,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-gradient-to-br
              from-[#211A14]
              via-[#15110E]
              to-[#0C0A09]
            "
          >
            <span
              className="
                font-serif
                text-xl
                italic
                text-[#D4AF37]/40
              "
            >
              Feel Cafe
            </span>
          </div>
        )}

        {/* IMAGE GRADIENT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#100D0B]
            via-transparent
            to-black/10
          "
        />

        {/* PREMIUM LIGHT SWEEP */}

        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          whileHover={{
            opacity: 1,
            x: "100%",
          }}
          transition={{
            duration: 0.85,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            blur-xl
          "
        />

        {/* FEATURED */}

        {item.featured && (
          <div className="absolute left-3 top-3">
            <motion.span
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  Math.min(index * 0.045, 0.25) +
                  0.1,
                duration: 0.35,
              }}
              className="
                inline-flex
                rounded-full
                border
                border-[#D4AF37]/30
                bg-[#080706]/80
                px-2.5
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#E8C86A]
                backdrop-blur-md
              "
            >
              Chef's Pick
            </motion.span>
          </div>
        )}

        {/* CATEGORY */}

        <div className="absolute bottom-3 left-3">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              bg-black/45
              px-2.5
              py-1
              text-[9px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-white/75
              backdrop-blur-md
            "
          >
            {item.category.replace(/-/g, " ")}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative p-4 sm:p-5">
        <h4
          className="
            min-h-[3rem]
            font-serif
            text-lg
            leading-tight
            text-[#F4EDE4]
            transition-colors
            duration-300
            group-hover:text-[#E8C86A]
            sm:text-xl
          "
        >
          {item.name}
        </h4>

        {/* GOLD DETAIL */}

        <motion.div
          initial={{
            width: 22,
          }}
          whileHover={{
            width: 45,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            my-3
            h-px
            bg-[#D4AF37]/50
          "
        />

        {/* PRICE */}

        <div className="flex items-end justify-between gap-3">
          <div>
            <p
              className="
                mb-0.5
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-[#9E938A]
              "
            >
              From
            </p>

            <p
              className="
                font-serif
                text-base
                text-[#D4AF37]
                sm:text-lg
              "
            >
              {priceLabel}
            </p>
          </div>

          {item.hasSizes && (
            <span
              className="
                pb-0.5
                text-[8px]
                uppercase
                tracking-[0.12em]
                text-[#9E938A]
              "
            >
              Regular / Large
            </span>
          )}
        </div>
      </div>

      {/* GOLD HOVER BORDER */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          ring-1
          ring-inset
          ring-[#D4AF37]/20
        "
      />
    </motion.article>
  );
}