"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceLinks = [
  { href: "/ai-automation", key: "aiAutomation" },
  { href: "/marketing", key: "marketing" },
  { href: "/development", key: "development" },
  { href: "/app-launch", key: "appLaunch" },
];

const companyLinks = [
  { href: "/about", key: "about" },
  { href: "/case-studies", key: "caseStudies" },
  { href: "/reviews", key: "reviews" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
  { href: "/pay", key: "payment" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer style={{ position: "relative", background: "#0B0F1A", marginTop: "40px" }}>
      {/* Top gradient separator */}
      <div className="gradient-line" style={{ opacity: 0.25 }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 20px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "16px" }}>
              <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                <span className="gradient-text">Pavli</span>
                <span style={{ color: "#fff" }}>Solution</span>
              </span>
            </Link>
            <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px", maxWidth: "280px" }}>
              {t("description")}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["LinkedIn", "Twitter", "Instagram"].map((label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#374151", textDecoration: "none", fontSize: "12px", fontWeight: 600,
                    transition: "all 0.3s",
                  }}
                  aria-label={label}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: "#6B7280", fontSize: "11px", fontWeight: 600, marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("services")}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {serviceLinks.map((link) => (
                <li key={link.key} style={{ marginBottom: "14px" }}>
                  <Link href={link.href} style={{ color: "#374151", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-[#6B7280]">
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "#6B7280", fontSize: "11px", fontWeight: 600, marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("company")}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {companyLinks.map((link) => (
                <li key={link.key} style={{ marginBottom: "14px" }}>
                  <Link href={link.href} style={{ color: "#374151", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-[#6B7280]">
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ color: "#6B7280", fontSize: "11px", fontWeight: 600, marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("legal")}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "14px" }}>
                <a href="#" style={{ color: "#374151", fontSize: "14px", textDecoration: "none" }}>{t("privacy")}</a>
              </li>
              <li style={{ marginBottom: "14px" }}>
                <a href="#" style={{ color: "#374151", fontSize: "14px", textDecoration: "none" }}>{t("terms")}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gradient-line" style={{ marginTop: "56px", marginBottom: "32px", opacity: 0.12 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#2A2F3E", fontSize: "13px" }}>
            &copy; {new Date().getFullYear()} PavliSolution. {t("rights")}
          </p>
          <p style={{ color: "#2A2F3E", fontSize: "12px" }}>
            Crafted with AI & precision
          </p>
        </div>
      </div>
    </footer>
  );
}
