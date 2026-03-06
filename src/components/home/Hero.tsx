"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "95%", label: "Client Retention" },
  { value: "12+", label: "Countries" },
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="noise" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Background layers */}
      <div className="bg-grid" style={{ position: "absolute", inset: 0 }} />

      {/* Animated orbs */}
      <div className="orb" style={{ position: "absolute", top: "10%", left: "-10%", width: "600px", height: "600px", background: "rgba(91,140,255,0.07)" }} />
      <div className="orb" style={{ position: "absolute", bottom: "5%", right: "-15%", width: "700px", height: "700px", background: "rgba(124,247,201,0.05)", animationDelay: "-7s" }} />
      <div className="orb" style={{ position: "absolute", top: "50%", left: "50%", width: "400px", height: "400px", background: "rgba(91,140,255,0.04)", animationDelay: "-14s" }} />

      {/* Top radial glow */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "70%", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91,140,255,0.12), transparent)", pointerEvents: "none" }} />

      {/* Floating decorative elements */}
      <div className="float-slow" style={{ position: "absolute", top: "20%", left: "8%", width: "3px", height: "3px", borderRadius: "50%", background: "#5B8CFF", boxShadow: "0 0 12px #5B8CFF", opacity: 0.6 }} />
      <div className="float" style={{ position: "absolute", top: "35%", right: "12%", width: "4px", height: "4px", borderRadius: "50%", background: "#7CF7C9", boxShadow: "0 0 12px #7CF7C9", opacity: 0.5 }} />
      <div className="float-reverse" style={{ position: "absolute", bottom: "30%", left: "15%", width: "2px", height: "2px", borderRadius: "50%", background: "#7CF7C9", boxShadow: "0 0 10px #7CF7C9", opacity: 0.4 }} />
      <div className="float-slow" style={{ position: "absolute", top: "60%", right: "20%", width: "3px", height: "3px", borderRadius: "50%", background: "#5B8CFF", boxShadow: "0 0 10px #5B8CFF", opacity: 0.3 }} />

      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", padding: "140px 20px 60px", textAlign: "center", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}>

          {/* Badge with shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="shimmer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "10px 22px", borderRadius: "100px",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              fontSize: "13px", color: "#9CA3AF", marginBottom: "44px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7CF7C9" }} />
            AI-Powered Agency
          </motion.div>

          {/* Heading */}
          <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.06, marginBottom: "28px", letterSpacing: "-0.035em" }}>
            <span className="gradient-text">{t("title")}</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: "18px", color: "#6B7280", maxWidth: "560px", margin: "0 auto 44px", lineHeight: 1.65 }}>
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "72px" }}>
            <Button href="/contact" variant="primary" size="lg">{t("cta1")}</Button>
            <Button href="/contact" variant="secondary" size="lg">{t("cta2")}</Button>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} style={{
                padding: "28px 16px",
                background: "#0B0F1A",
                textAlign: "center",
                position: "relative",
              }}>
                <p className="gradient-text" style={{ fontSize: "28px", fontWeight: 800, marginBottom: "4px", letterSpacing: "-0.02em" }}>{stat.value}</p>
                <p style={{ fontSize: "12px", color: "#4B5563", fontWeight: 500 }}>{stat.label}</p>
                {i < stats.length - 1 && (
                  <div style={{ position: "absolute", right: 0, top: "20%", bottom: "20%", width: "1px", background: "rgba(255,255,255,0.04)" }} />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, #0B0F1A, transparent)", pointerEvents: "none" }} />
    </section>
  );
}
