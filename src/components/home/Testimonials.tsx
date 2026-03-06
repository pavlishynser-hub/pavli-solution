"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechCorp", quote: "PavliSolution transformed our business with AI automation. Revenue increased by 200% in just 6 months.", initials: "SJ" },
  { name: "Michael Chen", role: "CTO, DataFlow", quote: "The development team delivered our SaaS platform ahead of schedule. Exceptional quality and communication.", initials: "MC" },
  { name: "Emily Roberts", role: "Marketing Director, ScaleUp", quote: "Their marketing strategy doubled our organic traffic. The SEO results speak for themselves.", initials: "ER" },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} style={{ width: "14px", height: "14px", color: "#7CF7C9" }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <AnimatedSection style={{ padding: "112px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="premium-card" style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <Stars />

                {/* Quote mark */}
                <span className="gradient-text" style={{ fontSize: "48px", fontWeight: 800, lineHeight: 0.8, marginBottom: "8px", opacity: 0.2 }}>&ldquo;</span>

                <blockquote style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "28px", flex: 1 }}>
                  {item.quote}
                </blockquote>

                <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="gradient-blue" style={{
                    width: "40px", height: "40px", borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700, flexShrink: 0,
                    boxShadow: "0 0 16px rgba(91,140,255,0.15)",
                  }}>
                    {item.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{item.name}</p>
                    <p style={{ fontSize: "12px", color: "#4B5563" }}>{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
