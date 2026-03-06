"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const reviews = [
  { name: "Sarah Johnson", role: "CEO, TechCorp", stars: 5, quote: "PavliSolution transformed our business with AI automation. Revenue increased by 200% in just 6 months. Their team is incredibly professional and responsive." },
  { name: "Michael Chen", role: "CTO, DataFlow", stars: 5, quote: "The development team delivered our SaaS platform ahead of schedule. Exceptional code quality, great communication, and a genuine understanding of our product vision." },
  { name: "Emily Roberts", role: "Marketing Director, ScaleUp", stars: 5, quote: "Their marketing strategy doubled our organic traffic in 4 months. The SEO results speak for themselves — we now rank #1 for our main keywords." },
  { name: "James Wilson", role: "Founder, AppVenture", stars: 5, quote: "They took our app from concept to 50K downloads. The launch strategy was brilliant, and the ongoing marketing support keeps us growing." },
  { name: "Anna Petrova", role: "COO, LogisTech", stars: 5, quote: "The AI automation system they built reduced our operational costs by 40%. The ROI was visible within the first month. Highly recommended." },
  { name: "David Kim", role: "CEO, PayFlow", stars: 5, quote: "Working with PavliSolution was a game-changer. They built our fintech app with bank-grade security and delivered it in just 4 months." },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} style={{ width: "16px", height: "16px", color: "#7CF7C9" }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const t = useTranslations("reviews");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div style={{
                  height: "100%",
                  padding: "28px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <Stars count={review.stars} />
                  <blockquote style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="gradient-blue" style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "13px", fontWeight: 700, flexShrink: 0,
                    }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>{review.name}</p>
                      <p style={{ fontSize: "12px", color: "#6B7280" }}>{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
