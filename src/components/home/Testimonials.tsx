"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import LazyYoutube from "@/components/ui/LazyYoutube";

const videoTestimonials = [
  { id: "7xrZDcbPFWg", name: "Client Review #1" },
  { id: "PtZxMHnrNKg", name: "Client Review #2" },
  { id: "3VglVNwqIPQ", name: "Client Review #3" },
  { id: "pBbMAx8P0MU", name: "Client Review #4" },
  { id: "R-xUFqsHEE0", name: "Client Review #5" },
  { id: "UjZYYMBOAyM", name: "Client Review #6" },
  { id: "-E3GHJFaxv0", name: "Client Review #7" },
  { id: "AkAQoQvH5-w", name: "Client Review #8" },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <AnimatedSection style={{ padding: "112px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "40px", background: "linear-gradient(to right, #0B0F1A, transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "40px", background: "linear-gradient(to left, #0B0F1A, transparent)", zIndex: 2, pointerEvents: "none" }} />

          <div
            className="chat-scrollbar"
            style={{
              display: "flex",
              gap: "14px",
              overflowX: "auto",
              paddingBottom: "16px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {videoTestimonials.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}
              >
                <div className="premium-card" style={{ width: "200px", height: "356px", overflow: "hidden", padding: 0 }}>
                  <LazyYoutube videoId={video.id} title={video.name} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "20px", color: "#374151", fontSize: "13px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Swipe to see more
        </div>
      </div>
    </AnimatedSection>
  );
}
