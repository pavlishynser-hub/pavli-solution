"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const videoTestimonials = [
  { id: "7xrZDcbPFWg", name: "Client Review #1" },
  { id: "PtZxMHnrNKg", name: "Client Review #2" },
  { id: "3VglVNwqIPQ", name: "Client Review #3" },
  { id: "pBbMAx8P0MU", name: "Client Review #4" },
  { id: "R-xUFqsHEE0", name: "Client Review #5" },
  { id: "UjZYYMBOAyM", name: "Client Review #6" },
];

const textReviews = [
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

      {/* Video Testimonials */}
      <AnimatedSection style={{ padding: "24px 0 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5B8CFF, #7CF7C9)", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em" }}>
              Video Reviews
            </h2>
            <p style={{ fontSize: "15px", color: "#4B5563" }}>Real feedback from our clients</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px",
          }}>
            {videoTestimonials.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="premium-card" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "9 / 16",
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "#111",
                  }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gradient separator */}
      <div className="gradient-line" style={{ maxWidth: "1100px", margin: "0 auto", opacity: 0.2 }} />

      {/* Text Reviews */}
      <AnimatedSection style={{ padding: "80px 0 96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5B8CFF, #7CF7C9)", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em" }}>
              Client Feedback
            </h2>
            <p style={{ fontSize: "15px", color: "#4B5563" }}>What our clients say about working with us</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
            {textReviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="premium-card" style={{
                  height: "100%",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <Stars count={review.stars} />

                  <span className="gradient-text" style={{ fontSize: "48px", fontWeight: 800, lineHeight: 0.8, marginBottom: "8px", opacity: 0.2 }}>&ldquo;</span>

                  <blockquote style={{ fontSize: "14px", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                    {review.quote}
                  </blockquote>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="gradient-blue" style={{
                      width: "40px", height: "40px", borderRadius: "12px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "13px", fontWeight: 700, flexShrink: 0,
                      boxShadow: "0 0 16px rgba(91,140,255,0.15)",
                    }}>
                      {review.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{review.name}</p>
                      <p style={{ fontSize: "12px", color: "#4B5563" }}>{review.role}</p>
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
