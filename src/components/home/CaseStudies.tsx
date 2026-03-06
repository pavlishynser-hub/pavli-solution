"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const cases = [
  { slug: "ai-chatbot-ecommerce", title: "AI Chatbot for E-Commerce", category: "AI Solutions", result: "+340%", resultLabel: "engagement", gradient: "linear-gradient(135deg, #1a1f3d 0%, #0d1a2d 100%)" },
  { slug: "seo-saas-startup", title: "SEO Strategy for SaaS", category: "Marketing", result: "+520%", resultLabel: "organic traffic", gradient: "linear-gradient(135deg, #0d2a1f 0%, #0d1a2d 100%)" },
  { slug: "fintech-mobile-app", title: "Fintech Mobile App", category: "Development", result: "50K+", resultLabel: "downloads", gradient: "linear-gradient(135deg, #1a1a3d 0%, #0d1a2d 100%)" },
  { slug: "app-launch-health", title: "Health App Launch", category: "App Launch", result: "Top 10", resultLabel: "category", gradient: "linear-gradient(135deg, #0d2a1f 0%, #1a1a2d 100%)" },
];

export default function CaseStudies() {
  const t = useTranslations("caseStudies");

  return (
    <AnimatedSection className="noise" style={{ padding: "112px 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(17,24,39,0.25)", zIndex: 0 }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {cases.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={`/case-studies/${item.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div className="premium-card" style={{ padding: "0", overflow: "hidden" }}>
                  {/* Gradient thumbnail */}
                  <div style={{
                    height: "140px",
                    background: item.gradient,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}>
                    <p className="gradient-text" style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em" }}>{item.result}</p>
                    <p style={{ fontSize: "12px", color: "#4B5563", fontWeight: 500 }}>{item.resultLabel}</p>
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 600,
                      padding: "4px 12px", borderRadius: "20px",
                      background: "rgba(91,140,255,0.08)", color: "#5B8CFF",
                    }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#D1D5DB", marginTop: "12px", lineHeight: 1.4 }}>{item.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Button href="/case-studies" variant="outline">{t("viewAll")}</Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
