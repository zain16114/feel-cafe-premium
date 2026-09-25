"use client";
import React from "react";
import { motion, MotionValue, useTransform, useSpring } from "motion/react";

interface Props {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const beans = [
  { id: 0, x: -185, y: -80,  size: 18, rotateZ: 30,  depth: 0.8, rotDir: 1,  dur: 11, orbitR: 0 },
  { id: 1, x: 170,  y: -60,  size: 14, rotateZ: -45, depth: 0.4, rotDir: -1, dur: 13, orbitR: 0 },
  { id: 2, x: -150, y: 100,  size: 22, rotateZ: 70,  depth: 1.0, rotDir: 1,  dur: 9,  orbitR: 0 },
  { id: 3, x: 140,  y: 90,   size: 16, rotateZ: -20, depth: 0.6, rotDir: -1, dur: 15, orbitR: 0 },
  { id: 4, x: -80,  y: -140, size: 12, rotateZ: 55,  depth: 0.3, rotDir: 1,  dur: 17, orbitR: 0 },
  { id: 5, x: 80,   y: -130, size: 20, rotateZ: -60, depth: 0.9, rotDir: -1, dur: 12, orbitR: 0 },
  { id: 6, x: -220, y: 20,   size: 10, rotateZ: 15,  depth: 0.2, rotDir: 1,  dur: 19, orbitR: 0 },
];

function Bean({
  bean,
  mouseX,
  mouseY,
}: {
  bean: (typeof beans)[0];
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const px = useTransform(mouseX, [-400, 400], [-25 * bean.depth, 25 * bean.depth]);
  const py = useTransform(mouseY, [-400, 400], [-18 * bean.depth, 18 * bean.depth]);
  const spx = useSpring(px, { stiffness: 60 + bean.depth * 40, damping: 18 });
  const spy = useSpring(py, { stiffness: 60 + bean.depth * 40, damping: 18 });

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        x: bean.x,
        y: bean.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        y: [bean.y, bean.y - 12, bean.y + 8, bean.y],
        rotateZ: [bean.rotateZ, bean.rotateZ + 40 * bean.rotDir, bean.rotateZ],
      }}
      transition={{ duration: bean.dur, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div style={{ x: spx, y: spy }}>
        <svg
          width={bean.size}
          height={bean.size * 1.6}
          viewBox="0 0 18 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="9" cy="14" rx="8" ry="13" fill="#6B3D1E" />
          <ellipse cx="9" cy="14" rx="5.5" ry="9" fill="#5A3018" />
          <path d="M9 4 Q12 14 9 24" stroke="#3D1F0E" strokeWidth="1.2" fill="none" />
          <ellipse
            cx="6"
            cy="8"
            rx="2"
            ry="1.5"
            fill="#8B5E3C"
            fillOpacity="0.5"
            transform="rotate(-20 6 8)"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function FloatingBeans({ mouseX, mouseY }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {beans.map((bean) => (
        <Bean key={bean.id} bean={bean} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}
