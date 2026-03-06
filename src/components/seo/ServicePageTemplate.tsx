"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

type Feature = { title: string; description: string };

type ServicePageProps = {
  translationKey: string;
  features: Feature[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string }[];
};

export default function ServicePageTemplate({
  translationKey,
  features,
  processSteps,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const t = useTranslations(translationKey);
  const st = useTranslations("servicePage");

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "160px", paddingBottom: "64px", overflow: "hidden" }}>
        <div className="bg-grid bg-radial-glow" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", top: "20%", left: "-200px", width: "500px", height: "500px", background: "rgba(91,140,255,0.08)", borderRadius: "50%", filter: "blur(150px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-0.02em" }}>
              <span className="gradient-text">{t("title")}</span>
            </h1>
            <p style={{ fontSize: "17px", color: "#9CA3AF", marginBottom: "12px" }}>{t("subtitle")}</p>
            <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>{t("description")}</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/contact" variant="primary" size="lg">{st("getStarted")}</Button>
              <Button href="/contact" variant="secondary" size="lg">{st("learnMore")}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <AnimatedSection style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, textAlign: "center", marginBottom: "48px", letterSpacing: "-0.02em" }}>
            {st("benefits")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "rgba(91,140,255,0.1)", color: "#5B8CFF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", fontWeight: 700, marginBottom: "16px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{feature.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection style={{ padding: "80px 0", background: "rgba(17,24,39,0.3)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, textAlign: "center", marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {st("process")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}
              >
                <div className="gradient-blue" style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", fontWeight: 700, flexShrink: 0, marginTop: "2px",
                }}>
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, textAlign: "center", marginBottom: "40px", letterSpacing: "-0.02em" }}>
            {st("faq")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{faq.question}</h3>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <AnimatedSection style={{ padding: "56px 0", background: "rgba(17,24,39,0.3)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>Related Services</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              {relatedServices.map((service) => (
                <Button key={service.href} href={service.href} variant="outline" size="sm">{service.title}</Button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* CTA */}
      <AnimatedSection style={{ padding: "80px 0 96px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <div style={{
            padding: "48px 32px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "250px", height: "250px", background: "rgba(91,140,255,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "250px", height: "250px", background: "rgba(124,247,201,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, marginBottom: "12px" }}>{st("ctaTitle")}</h2>
              <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "32px" }}>{st("ctaDescription")}</p>
              <Button href="/contact" variant="primary" size="lg">{st("ctaButton")}</Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
