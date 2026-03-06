"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";

const clients = ["TechCorp", "InnovateLab", "DataFlow", "CloudFirst", "NextGen AI", "ScaleUp"];

export default function Trust() {
  const t = useTranslations("trust");

  return (
    <AnimatedSection style={{ padding: "64px 0", position: "relative" }}>
      <div className="gradient-line" style={{ position: "absolute", top: 0, left: "10%", right: "10%" }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <p style={{ textAlign: "center", color: "#374151", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 500, marginBottom: "40px" }}>
          {t("title")}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "48px" }}>
          {clients.map((client) => (
            <span
              key={client}
              style={{
                color: "#2A2F3E",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                cursor: "default",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",
              }}
              className="hover:!text-[#4B5563]"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
      <div className="gradient-line" style={{ position: "absolute", bottom: 0, left: "10%", right: "10%" }} />
    </AnimatedSection>
  );
}
