"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import LazyVideo from "@/components/ui/LazyVideo";
import { Link } from "@/i18n/navigation";

const features = [
  { title: "LLM-Powered Conversations", description: "Leverage GPT-4, Claude and other advanced language models for natural, context-aware conversations." },
  { title: "Multi-Channel Deployment", description: "Deploy your chatbot on website, WhatsApp, Telegram, Slack, Facebook Messenger and more." },
  { title: "Custom Knowledge Base", description: "Train the chatbot on your company data, FAQs, documentation and product catalog." },
  { title: "Lead Generation", description: "Capture and qualify leads automatically through intelligent conversation flows." },
  { title: "Analytics Dashboard", description: "Track conversations, user satisfaction, resolution rates and conversion metrics." },
  { title: "Seamless Integration", description: "Connect with your CRM, helpdesk, e-commerce platform and other business systems." },
];

const processSteps = [
  "Requirements Analysis — We understand your use cases, audience and success metrics.",
  "Conversation Design — We map out conversation flows, intents and response strategies.",
  "Development & Training — We build and train your chatbot with your custom data.",
  "Testing & QA — Rigorous testing across scenarios to ensure accuracy and reliability.",
  "Launch & Optimization — We deploy and continuously improve based on real conversations.",
];

const faqs = [
  { question: "How accurate are AI chatbots?", answer: "Modern AI chatbots achieve 85-95% accuracy on trained topics. We implement fallback mechanisms and human handoff for edge cases." },
  { question: "Can the chatbot handle multiple languages?", answer: "Yes. Our chatbots support 50+ languages out of the box and can be fine-tuned for specific regional dialects." },
  { question: "How do you ensure data security?", answer: "We implement end-to-end encryption, data anonymization and comply with GDPR, CCPA and other regulations. Your data never leaves your infrastructure if required." },
  { question: "Can the chatbot be updated after launch?", answer: "Absolutely. We provide a management dashboard where you can update knowledge base, adjust responses and monitor performance in real-time." },
  { question: "What is the typical cost of a custom AI chatbot?", answer: "Costs vary based on complexity, integrations and scale. Basic chatbots start from $500 for widget integrations, while enterprise solutions with advanced AI range from $5,000-$50,000+." },
];

const caseHighlights = [
  { label: "Google Ads Conversions", value: "+45%" },
  { label: "Setup Cost", value: "$500" },
  { label: "Time to Launch", value: "5 days" },
  { label: "Avg. Session", value: "+3 min" },
];

export default function AIChatbotPage() {
  const t = useTranslations("aiChatbot");
  const st = useTranslations("servicePage");

  return (
    <>
      {/* Hero */}
      <section className="noise" style={{ position: "relative", paddingTop: "160px", paddingBottom: "64px", overflow: "hidden" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91,140,255,0.1), transparent)", pointerEvents: "none" }} />
        <div className="orb" style={{ position: "absolute", top: "20%", left: "-200px", width: "500px", height: "500px", background: "rgba(91,140,255,0.06)" }} />
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", padding: "0 20px", textAlign: "center", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5B8CFF, #7CF7C9)", margin: "0 auto 24px" }} />
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.08, marginBottom: "20px", letterSpacing: "-0.03em" }}>
              <span className="gradient-text">{t("title")}</span>
            </h1>
            <p style={{ fontSize: "17px", color: "#6B7280", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.65 }}>{t("subtitle")}</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/contact" variant="primary" size="lg">{st("getStarted")}</Button>
              <Button href="/case-studies/ai-chatbot-cosmetics" variant="secondary" size="lg">See Case Study</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <AnimatedSection className="noise" style={{ padding: "96px 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(17,24,39,0.3)", zIndex: 0 }} />
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7CF7C9", boxShadow: "0 0 8px #7CF7C9" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#7CF7C9", textTransform: "uppercase", letterSpacing: "0.1em" }}>Featured Case Study</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em" }}>
            AI Chatbot for Online Cosmetics Store
          </h2>
          <p style={{ fontSize: "15px", color: "#4B5563", marginBottom: "40px", maxWidth: "600px" }}>
            Spain · E-commerce · Skincare & Beauty Products
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>
            {/* Video */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="premium-card" style={{ padding: 0, overflow: "hidden" }}>
                <LazyVideo src="/videos/ai-chatbot-cosmetics-demo.mp4" label="Watch AI chatbot demo" />
                <div style={{ padding: "14px 20px", textAlign: "center" }}>
                  <p style={{ fontSize: "12px", color: "#4B5563" }}>Live demo — AI assistant recommending products</p>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#5B8CFF", marginBottom: "10px" }}>The Challenge</h3>
                <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.7 }}>
                  Low conversion rates from Google Ads — customers were overwhelmed by the wide product range and unsure which products suit their skin concerns.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#7CF7C9", marginBottom: "10px" }}>What We Built</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "AI chatbot trained on full product catalog",
                    "Custom vector database (knowledge base)",
                    "Personalized recommendations by skin type",
                    "Analytics dashboard for tracking queries",
                    "Widget integrated directly on the site",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#9CA3AF" }}>
                      <span style={{ color: "#7CF7C9", fontSize: "14px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results mini grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                {caseHighlights.map((item) => (
                  <div key={item.label} style={{
                    padding: "16px", borderRadius: "14px", textAlign: "center",
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <p className="gradient-text" style={{ fontSize: "22px", fontWeight: 800, marginBottom: "2px" }}>{item.value}</p>
                    <p style={{ fontSize: "11px", color: "#4B5563" }}>{item.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/case-studies/ai-chatbot-cosmetics" style={{ fontSize: "13px", fontWeight: 600, color: "#5B8CFF", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                View full case study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, textAlign: "center", marginBottom: "48px", letterSpacing: "-0.02em" }}>
            {st("benefits")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                <div className="premium-card" style={{ padding: "28px", height: "100%" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(91,140,255,0.08)", color: "#5B8CFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{feature.title}</h3>
                  <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection style={{ padding: "80px 0", background: "rgba(17,24,39,0.3)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, textAlign: "center", marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {st("process")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div className="gradient-blue" style={{ width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.7, paddingTop: "6px" }}>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, textAlign: "center", marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {st("faq")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="premium-card" style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{faq.question}</h3>
                  <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection style={{ padding: "80px 0 96px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <div className="premium-card noise" style={{ padding: "56px 36px", position: "relative", overflow: "hidden" }}>
            <div className="orb" style={{ position: "absolute", top: "-80px", right: "-80px", width: "250px", height: "250px", background: "rgba(91,140,255,0.06)" }} />
            <div className="orb" style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "250px", height: "250px", background: "rgba(124,247,201,0.06)", animationDelay: "-10s" }} />
            <div className="gradient-line" style={{ position: "absolute", top: 0, left: "15%", right: "15%", opacity: 0.3 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, marginBottom: "12px" }}>
                <span className="gradient-text">{st("ctaTitle")}</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#4B5563", marginBottom: "32px" }}>{st("ctaDescription")}</p>
              <Button href="/contact" variant="primary" size="lg">{st("ctaButton")}</Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
