"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>

          {/* Contact Info Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              { label: "Email", value: t("info.email"), color: "#5B8CFF", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
              { label: "Phone", value: t("info.phone"), color: "#7CF7C9", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
              { label: "Location", value: t("info.address"), color: "#5B8CFF", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: `${item.color}10`, color: item.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "4px" }}>{item.label}</h3>
                  <p style={{ fontSize: "13px", color: "#6B7280" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{
            padding: "36px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "28px" }}>Send us a message</h2>
            <form>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("form.name")}</label>
                  <input type="text" style={inputStyle} placeholder="John Doe" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("form.email")}</label>
                  <input type="email" style={inputStyle} placeholder="john@company.com" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("form.company")}</label>
                  <input type="text" style={inputStyle} placeholder="Company Inc." />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("form.service")}</label>
                  <select style={inputStyle}>
                    <option value="" style={{ background: "#111827" }}>Select a service</option>
                    <option value="ai" style={{ background: "#111827" }}>AI & Automation</option>
                    <option value="marketing" style={{ background: "#111827" }}>Digital Marketing</option>
                    <option value="development" style={{ background: "#111827" }}>Development</option>
                    <option value="app-launch" style={{ background: "#111827" }}>App Launch</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("form.message")}</label>
                <textarea rows={5} style={{ ...inputStyle, resize: "none" as const }} placeholder="Tell us about your project..." />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-blue"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  color: "#0B0F1A",
                }}
              >
                {t("form.submit")}
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
