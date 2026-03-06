"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="noise" style={{ position: "relative", paddingTop: "160px", paddingBottom: "56px", overflow: "hidden" }}>
      <div className="bg-grid" style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91,140,255,0.1), transparent)", pointerEvents: "none" }} />

      {/* Floating dots */}
      <div className="float-slow" style={{ position: "absolute", top: "30%", left: "10%", width: "3px", height: "3px", borderRadius: "50%", background: "#5B8CFF", boxShadow: "0 0 12px #5B8CFF", opacity: 0.4 }} />
      <div className="float" style={{ position: "absolute", top: "40%", right: "15%", width: "3px", height: "3px", borderRadius: "50%", background: "#7CF7C9", boxShadow: "0 0 12px #7CF7C9", opacity: 0.3 }} />

      <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5B8CFF, #7CF7C9)", margin: "0 auto 28px" }} />
          <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 800, marginBottom: subtitle ? "18px" : 0, letterSpacing: "-0.03em", lineHeight: 1.08 }}>
            <span className="gradient-text">{title}</span>
          </h1>
          {subtitle && <p style={{ fontSize: "17px", color: "#4B5563", lineHeight: 1.65 }}>{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
