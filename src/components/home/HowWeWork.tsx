"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  { key: "strategy", number: "01", color: "#5B8CFF" },
  { key: "development", number: "02", color: "#7CF7C9" },
  { key: "launch", number: "03", color: "#5B8CFF" },
  { key: "growth", number: "04", color: "#7CF7C9" },
];

export default function HowWeWork() {
  const t = useTranslations("howWeWork");

  return (
    <AnimatedSection style={{ padding: "112px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div className="gradient-line" style={{ position: "absolute", top: "42px", left: "12%", right: "12%", opacity: 0.15, display: "block" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "24px", position: "relative" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{ textAlign: "center" }}
              >
                {/* Step number circle */}
                <div style={{
                  width: "84px", height: "84px",
                  borderRadius: "50%",
                  background: `${step.color}08`,
                  border: `2px solid ${step.color}20`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                  position: "relative",
                }}>
                  <span style={{ fontSize: "24px", fontWeight: 800, color: step.color }}>{step.number}</span>
                  <div style={{
                    position: "absolute", inset: "-6px", borderRadius: "50%",
                    border: `1px solid ${step.color}08`,
                  }} />
                </div>

                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>
                  {t(`steps.${step.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
