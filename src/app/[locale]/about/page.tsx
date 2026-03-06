"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const team = [
  { name: "Alex Pavlenko", role: "Founder & CEO", initial: "AP" },
  { name: "Maria K.", role: "Head of AI", initial: "MK" },
  { name: "David R.", role: "Lead Developer", initial: "DR" },
  { name: "Sarah L.", role: "Marketing Director", initial: "SL" },
];

const values = [
  { key: "innovation", color: "#5B8CFF" },
  { key: "results", color: "#7CF7C9" },
  { key: "transparency", color: "#5B8CFF" },
  { key: "partnership", color: "#7CF7C9" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      {/* Mission */}
      <AnimatedSection style={{ padding: "24px 0 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            padding: "40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}>
            <h2 className="gradient-text" style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>{t("mission.title")}</h2>
            <p style={{ fontSize: "16px", color: "#D1D5DB", lineHeight: 1.7 }}>{t("mission.description")}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection style={{ padding: "0 0 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>{t("values.title")}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {values.map((v, i) => (
              <motion.div key={v.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  height: "100%",
                }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: v.color, marginBottom: "8px" }}>
                    {t(`values.${v.key}`)}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>{t(`values.${v.key}Desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>Our Team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div style={{
                  padding: "28px 16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textAlign: "center",
                }}>
                  <div className="gradient-blue" style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "18px", fontWeight: 700,
                  }}>
                    {member.initial}
                  </div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>{member.name}</h3>
                  <p style={{ fontSize: "12px", color: "#6B7280" }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
