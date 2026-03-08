"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const cases = [
  { slug: "ai-chatbot-cosmetics", title: "AI Chatbot for Online Cosmetics Store", category: "AI Chatbot", result: "+45% Google Ads conversions", color: "#7CF7C9", featured: true },
  { slug: "ai-chatbot-ecommerce", title: "AI Chatbot for E-Commerce Platform", category: "AI Solutions", result: "+340% customer engagement", color: "#5B8CFF" },
  { slug: "seo-saas-startup", title: "SEO Strategy for SaaS Startup", category: "Marketing", result: "+520% organic traffic", color: "#7CF7C9" },
  { slug: "fintech-mobile-app", title: "Fintech Mobile App Development", category: "Development", result: "50K+ downloads in first month", color: "#5B8CFF" },
  { slug: "app-launch-health", title: "Health App Launch Strategy", category: "App Launch", result: "Top 10 Health & Fitness", color: "#7CF7C9" },
  { slug: "ai-automation-logistics", title: "AI Automation for Logistics Company", category: "AI Solutions", result: "60% cost reduction", color: "#5B8CFF" },
  { slug: "ecommerce-redesign", title: "E-Commerce Website Redesign", category: "Development", result: "+180% conversion rate", color: "#7CF7C9" },
];

export default function CaseStudiesPage() {
  const t = useTranslations("caseStudies");

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "160px", paddingBottom: "40px", overflow: "hidden" }}>
        <div className="bg-grid bg-radial-glow" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.02em" }}
          >
            <span className="gradient-text">{t("title")}</span>
          </motion.h1>
          <p style={{ fontSize: "17px", color: "#6B7280" }}>{t("subtitle")}</p>
        </div>
      </section>

      {/* Cases Grid */}
      <AnimatedSection style={{ padding: "48px 0 96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}>
            {cases.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link href={`/case-studies/${item.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div style={{
                    height: "100%",
                    padding: "24px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.3s ease",
                  }}>
                    <div style={{
                      width: "100%",
                      height: "140px",
                      borderRadius: "12px",
                      background: "rgba(17,24,39,0.5)",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "50%",
                        background: `${item.color}15`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg style={{ width: "18px", height: "18px", color: "rgba(255,255,255,0.5)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    <span style={{
                      fontSize: "11px", fontWeight: 600,
                      padding: "4px 12px", borderRadius: "20px",
                      background: `${item.color}12`, color: item.color,
                    }}>
                      {item.category}
                    </span>
                    <h2 style={{ fontSize: "17px", fontWeight: 600, color: "#fff", margin: "12px 0 8px" }}>{item.title}</h2>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#7CF7C9" }}>{item.result}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
