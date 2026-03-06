"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

const pricingCards = [
  {
    title: "Landing Page / Website",
    price: "from $3,000",
    timeline: "2–4 weeks",
    color: "#5B8CFF",
    features: [
      "Custom design & development",
      "Mobile responsive",
      "SEO optimized (90+ PageSpeed)",
      "CMS integration",
      "Contact forms & analytics",
    ],
  },
  {
    title: "AI Chatbot / Automation",
    price: "from $5,000",
    timeline: "3–6 weeks",
    color: "#7CF7C9",
    popular: true,
    features: [
      "Custom AI model training",
      "Multi-channel (web, WhatsApp, Telegram)",
      "CRM integration",
      "Analytics dashboard",
      "Ongoing support & optimization",
    ],
  },
  {
    title: "Web / Mobile Application",
    price: "from $8,000",
    timeline: "6–12 weeks",
    color: "#5B8CFF",
    features: [
      "Full-stack development",
      "iOS & Android (React Native)",
      "Real-time features",
      "Cloud infrastructure",
      "App Store / Google Play launch",
    ],
  },
  {
    title: "Marketing Strategy + Execution",
    price: "from $2,000/mo",
    timeline: "Ongoing",
    color: "#7CF7C9",
    features: [
      "SEO & content strategy",
      "Google Ads / PPC management",
      "Social media marketing",
      "Monthly reporting & analytics",
      "Dedicated marketing manager",
    ],
  },
];

const whyVaries = [
  { icon: "📐", title: "Scope & Complexity", desc: "A 5-page website differs from a 50-page platform with user dashboards. We tailor every estimate to your exact requirements." },
  { icon: "🎨", title: "Design Requirements", desc: "Standard templates vs. fully custom UI/UX design with animations and illustrations — each level has its own investment." },
  { icon: "🔗", title: "Integrations", desc: "Connecting to payment systems, CRMs, APIs, or building custom AI models adds to the project scope." },
  { icon: "⏱️", title: "Timeline", desc: "Rush delivery is possible but may affect pricing. We'll always find the right balance of speed and quality." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Typical Project Pricing"
        subtitle="Transparent estimates based on hundreds of completed projects. Every business is unique — get a personalized quote in 24 hours."
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px 96px" }}>

        {/* Pricing Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px", marginBottom: "80px" }}>
          {pricingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              style={{
                padding: "32px 28px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.03)",
                border: card.popular ? `1px solid ${card.color}30` : "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {card.popular && (
                <span style={{
                  position: "absolute", top: "16px", right: "16px",
                  fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                  padding: "4px 12px", borderRadius: "20px",
                  background: `${card.color}15`, color: card.color,
                  letterSpacing: "0.05em",
                }}>
                  Popular
                </span>
              )}

              {/* Title */}
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "16px", lineHeight: 1.3, paddingRight: card.popular ? "70px" : 0 }}>
                {card.title}
              </h3>

              {/* Price */}
              <div style={{ marginBottom: "6px" }}>
                <span style={{ fontSize: "28px", fontWeight: 800, color: card.color }}>{card.price}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#4B5563", marginBottom: "24px" }}>
                Timeline: {card.timeline}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "20px" }} />

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                {card.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={card.color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div style={{ marginTop: "24px" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    background: card.popular ? `linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)` : "rgba(255,255,255,0.04)",
                    color: card.popular ? "#0B0F1A" : "#D1D5DB",
                    border: card.popular ? "none" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Get Estimate
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Pricing Varies */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textAlign: "center", marginBottom: "16px" }}>
            Why Pricing Varies
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", textAlign: "center", maxWidth: "560px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            No two projects are the same. Here are the key factors that influence your investment.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "80px" }}>
            {whyVaries.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>{item.icon}</span>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <div style={{
            padding: "48px 32px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "250px", height: "250px", background: "rgba(91,140,255,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "250px", height: "250px", background: "rgba(124,247,201,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: "12px" }}>
                Ready to Start Your Project?
              </h2>
              <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
                Tell us about your project and get a detailed estimate within 24 hours. No commitment required.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Button href="/contact" variant="primary" size="lg">Get Free Estimate</Button>
                <Button href="/pay" variant="secondary" size="lg">Make a Payment</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
