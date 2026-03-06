"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const sizes: Record<string, React.CSSProperties> = {
    sm: { padding: "10px 20px", fontSize: "13px" },
    md: { padding: "12px 28px", fontSize: "14px" },
    lg: { padding: "15px 36px", fontSize: "15px" },
  };

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    borderRadius: "14px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
    whiteSpace: "nowrap",
    lineHeight: 1.4,
    minWidth: size === "lg" ? "180px" : size === "md" ? "140px" : "auto",
    textAlign: "center",
    letterSpacing: "-0.01em",
    ...sizes[size],
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
      color: "#0B0F1A",
      border: "none",
      boxShadow: "0 0 24px rgba(91,140,255,0.2), 0 4px 12px rgba(0,0,0,0.2)",
    },
    secondary: {
      background: "rgba(255,255,255,0.04)",
      color: "#D1D5DB",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(8px)",
    },
    outline: {
      background: "transparent",
      color: "#5B8CFF",
      border: "1px solid rgba(91,140,255,0.25)",
    },
  };

  const style = { ...base, ...variantStyles[variant] };

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
        <Link href={href} style={style} className={className}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} style={style} className={className} onClick={onClick} type={type}>
      {children}
    </motion.button>
  );
}
