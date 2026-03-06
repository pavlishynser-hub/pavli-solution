"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <AnimatedSection style={{ padding: "64px 0 112px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
        <div className="noise" style={{
          padding: "64px 40px",
          borderRadius: "28px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, rgba(91,140,255,0.05) 0%, rgba(124,247,201,0.03) 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          {/* Orbs */}
          <div className="orb" style={{ position: "absolute", top: "-100px", right: "-80px", width: "300px", height: "300px", background: "rgba(91,140,255,0.08)" }} />
          <div className="orb" style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "300px", height: "300px", background: "rgba(124,247,201,0.06)", animationDelay: "-10s" }} />

          {/* Gradient lines top & bottom */}
          <div className="gradient-line" style={{ position: "absolute", top: 0, left: "15%", right: "15%", opacity: 0.4 }} />
          <div className="gradient-line" style={{ position: "absolute", bottom: 0, left: "15%", right: "15%", opacity: 0.4 }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.03em" }}>
              <span className="gradient-text">{t("title")}</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#4B5563", marginBottom: "36px", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.6 }}>
              {t("subtitle")}
            </p>
            <Button href="/contact" variant="primary" size="lg">{t("button")}</Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
