"use client";

import { motion } from "framer-motion";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass p-6 ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      style={hover ? { willChange: "transform" } : undefined}
    >
      {children}
    </motion.div>
  );
}
