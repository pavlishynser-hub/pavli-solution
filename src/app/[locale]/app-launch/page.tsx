"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const services = [
  { key: "appStorePublishing", href: "/app-store-publishing", title: "App Store Publishing", desc: "Get your app approved and live on the Apple App Store with optimized listing.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
  { key: "googlePlayPublishing", href: "/google-play-publishing", title: "Google Play Publishing", desc: "Launch your app on Google Play with compliance review and store optimization.", icon: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" },
  { key: "appLaunchMarketing", href: "/app-launch-marketing", title: "App Launch Marketing", desc: "Comprehensive launch strategy to maximize downloads and user acquisition.", icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41" },
];

export default function AppLaunchPage() {
  const t = useTranslations("services");

  return (
    <>
      <PageHero title={t("appLaunch.title")} subtitle={t("appLaunch.description")} />

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {services.map((s, i) => (
              <motion.div key={s.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={s.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div style={{
                    height: "100%", padding: "32px 24px", borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    textAlign: "center",
                    transition: "all 0.3s",
                  }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "16px",
                      background: "rgba(124,247,201,0.08)", color: "#7CF7C9",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "20px",
                    }}>
                      <svg style={{ width: "26px", height: "26px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
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
