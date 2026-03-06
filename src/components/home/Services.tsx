"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  { key: "ai", href: "/ai-automation", color: "#5B8CFF", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M14.25 3.104v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" },
  { key: "marketing", href: "/marketing", color: "#7CF7C9", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { key: "development", href: "/development", color: "#5B8CFF", icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" },
  { key: "appLaunch", href: "/app-launch", color: "#7CF7C9", icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41" },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <AnimatedSection style={{ padding: "112px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={service.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="premium-card" style={{ height: "100%", padding: "32px 28px" }}>
                  {/* Icon with glow */}
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "16px",
                    background: `${service.color}10`, color: service.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "24px",
                    boxShadow: `0 0 24px ${service.color}10`,
                  }}>
                    <svg style={{ width: "26px", height: "26px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                    {t(`${service.key}.title`)}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>
                    {t(`${service.key}.description`)}
                  </p>
                  {/* Arrow hint */}
                  <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "8px", color: service.color, fontSize: "13px", fontWeight: 600, opacity: 0.6 }}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
