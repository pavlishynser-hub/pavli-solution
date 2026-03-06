"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const services = [
  { key: "websiteDev", href: "/website-development", title: "Website Development", desc: "Modern, fast and SEO-optimized websites built with cutting-edge technology.", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" },
  { key: "webAppDev", href: "/web-application-development", title: "Web Applications", desc: "Full-stack web applications with real-time features and cloud infrastructure.", icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25" },
  { key: "mobileAppDev", href: "/mobile-app-development", title: "Mobile Apps", desc: "Native and cross-platform iOS and Android applications.", icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" },
  { key: "saasDev", href: "/saas-development", title: "SaaS Development", desc: "Subscription-based software platforms built to scale.", icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" },
  { key: "startupMvp", href: "/startup-mvp-development", title: "Startup MVP", desc: "Rapid MVP development to validate ideas and attract investors.", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
];

export default function DevelopmentPage() {
  const t = useTranslations("services");

  return (
    <>
      <PageHero title={t("development.title")} subtitle={t("development.description")} />

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {services.map((s, i) => (
              <motion.div key={s.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={s.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div style={{
                    height: "100%", padding: "28px", borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.3s",
                  }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "14px",
                      background: "rgba(91,140,255,0.08)", color: "#5B8CFF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "20px",
                    }}>
                      <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d={s.icon} />
                      </svg>
                    </div>
                    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{s.title}</h2>
                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>{s.desc}</p>
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
