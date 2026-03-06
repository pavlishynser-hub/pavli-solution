"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const categories = [
  {
    key: "ai", href: "/ai-automation", color: "#5B8CFF",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M14.25 3.104v5.714c0 .597.237 1.17.659 1.591L19.8 15.3",
    services: [
      { name: "AI Automation", href: "/ai-automation" },
      { name: "AI Chatbots", href: "/ai-chatbot-development" },
      { name: "AI Assistant", href: "/ai-business-assistant" },
      { name: "AI Support", href: "/ai-customer-support" },
    ],
  },
  {
    key: "marketing", href: "/marketing", color: "#7CF7C9",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z",
    services: [
      { name: "SMM", href: "/smm-services" },
      { name: "SEO", href: "/seo-services" },
      { name: "Google Ads", href: "/google-ads-management" },
      { name: "Content Marketing", href: "/content-marketing" },
      { name: "Strategy", href: "/marketing-strategy" },
    ],
  },
  {
    key: "development", href: "/development", color: "#5B8CFF",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    services: [
      { name: "Websites", href: "/website-development" },
      { name: "Web Apps", href: "/web-application-development" },
      { name: "Mobile Apps", href: "/mobile-app-development" },
      { name: "SaaS", href: "/saas-development" },
      { name: "MVP", href: "/startup-mvp-development" },
    ],
  },
  {
    key: "appLaunch", href: "/app-launch", color: "#7CF7C9",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12",
    services: [
      { name: "App Store", href: "/app-store-publishing" },
      { name: "Google Play", href: "/google-play-publishing" },
      { name: "App Marketing", href: "/app-launch-marketing" },
    ],
  },
];

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div style={{
                padding: "32px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "16px",
                    background: `${cat.color}10`, color: cat.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg style={{ width: "28px", height: "28px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={cat.icon} />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Link href={cat.href} style={{ textDecoration: "none" }}>
                      <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px", transition: "color 0.2s" }}>
                        {t(`${cat.key}.title`)}
                      </h2>
                    </Link>
                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7, marginBottom: "16px" }}>
                      {t(`${cat.key}.description`)}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {cat.services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          style={{
                            padding: "8px 16px", borderRadius: "8px",
                            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "13px", color: "#9CA3AF", textDecoration: "none",
                            transition: "all 0.2s",
                          }}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
