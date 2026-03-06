"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const services = [
  { key: "smm", href: "/smm-services", title: "Social Media Marketing", desc: "Build your brand and engage your audience across all social platforms.", icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" },
  { key: "seo", href: "/seo-services", title: "SEO Optimization", desc: "Rank higher in search results and drive sustainable organic traffic.", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { key: "googleAds", href: "/google-ads-management", title: "Google Ads / PPC", desc: "Maximize ROI with data-driven paid advertising campaigns.", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "contentMarketing", href: "/content-marketing", title: "Content Marketing", desc: "Create content that educates, engages and converts your audience.", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { key: "marketingStrategy", href: "/marketing-strategy", title: "Marketing Strategy", desc: "Comprehensive roadmap tailored to your business goals and market.", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" },
];

export default function MarketingPage() {
  const t = useTranslations("services");

  return (
    <>
      <PageHero title={t("marketing.title")} subtitle={t("marketing.description")} />

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
                      background: "rgba(124,247,201,0.08)", color: "#7CF7C9",
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
