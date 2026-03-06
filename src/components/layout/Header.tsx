"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  {
    key: "services",
    href: "/services",
    children: [
      { key: "aiAutomation", href: "/ai-automation" },
      { key: "marketing", href: "/marketing" },
      { key: "development", href: "/development" },
      { key: "appLaunch", href: "/app-launch" },
    ],
  },
  { key: "caseStudies", href: "/case-studies" },
  { key: "reviews", href: "/reviews" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "pricing", href: "/pricing" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div style={{
        backgroundColor: scrolled ? "rgba(11, 15, 26, 0.95)" : "rgba(11, 15, 26, 0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        transition: "background-color 0.3s ease",
      }}>
        <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
              <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                <span className="gradient-text">Pavli</span>
                <span style={{ color: "#fff" }}>Solution</span>
              </span>
            </Link>

            <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.key}
                    style={{ position: "relative" }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      style={{
                        padding: "8px 16px", borderRadius: "8px",
                        fontSize: "14px", fontWeight: 500,
                        color: pathname.startsWith(item.href) ? "#5B8CFF" : "#6B7280",
                        textDecoration: "none", transition: "color 0.2s",
                      }}
                      className="hover:!text-white"
                    >
                      {t(item.key)}
                    </Link>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          style={{
                            position: "absolute", top: "100%", left: 0, marginTop: "8px",
                            borderRadius: "16px", padding: "8px 0", minWidth: "220px",
                            backgroundColor: "rgba(17, 24, 39, 0.98)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                            backdropFilter: "blur(24px)",
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.key}
                              href={child.href}
                              style={{
                                display: "block", padding: "10px 20px",
                                fontSize: "14px", color: "#6B7280",
                                textDecoration: "none", transition: "all 0.2s",
                              }}
                              className="hover:!text-white hover:!bg-white/5"
                            >
                              {t(child.key)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    style={{
                      padding: "8px 16px", borderRadius: "8px",
                      fontSize: "14px", fontWeight: 500,
                      color: pathname === item.href ? "#5B8CFF" : "#6B7280",
                      textDecoration: "none", transition: "color 0.2s",
                    }}
                    className="hover:!text-white"
                  >
                    {t(item.key)}
                  </Link>
                )
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="hidden md:inline-flex"
                style={{
                  padding: "10px 22px", borderRadius: "12px",
                  fontSize: "13px", fontWeight: 600, textDecoration: "none",
                  background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
                  color: "#0B0F1A",
                  boxShadow: "0 0 20px rgba(91,140,255,0.2)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {t("contact")}
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden"
                style={{ padding: "8px", color: "#9CA3AF", background: "none", border: "none", cursor: "pointer" }}
                aria-label="Toggle menu"
              >
                <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* Gradient accent line under header */}
      <div className="gradient-line" style={{ opacity: scrolled ? 0.3 : 0.15, transition: "opacity 0.3s ease" }} />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden", backgroundColor: "rgba(11,15,26,0.98)", backdropFilter: "blur(24px)" }}
            className="lg:hidden"
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 20px 24px" }}>
              {navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.href}
                    style={{ display: "block", padding: "12px 0", fontSize: "16px", fontWeight: 500, color: "#D1D5DB", textDecoration: "none" }}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <div style={{ paddingLeft: "16px" }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          style={{ display: "block", padding: "10px 0", fontSize: "14px", color: "#4B5563", textDecoration: "none" }}
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ paddingTop: "16px" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "block", textAlign: "center", padding: "14px 20px",
                    borderRadius: "14px", fontSize: "14px", fontWeight: 600,
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
                    color: "#0B0F1A",
                  }}
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
