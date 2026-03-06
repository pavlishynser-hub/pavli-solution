"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";

const posts = [
  { slug: "how-ai-changes-marketing", title: "How AI Changes Marketing in 2026", excerpt: "Artificial intelligence is reshaping the marketing landscape. Discover how AI is transforming how businesses reach their customers.", category: "AI", date: "March 1, 2026", readTime: "8 min" },
  { slug: "best-seo-strategies-2026", title: "Best SEO Strategies for 2026", excerpt: "Learn the most effective SEO strategies for 2026 including AI-powered content and Core Web Vitals optimization.", category: "SEO", date: "February 20, 2026", readTime: "10 min" },
  { slug: "how-to-launch-app-in-app-store", title: "How to Launch an App in App Store", excerpt: "A step-by-step guide to successfully publishing your iOS app with ASO optimization and launch strategy.", category: "App Launch", date: "February 10, 2026", readTime: "12 min" },
  { slug: "building-saas-from-scratch", title: "Building a SaaS Product from Scratch", excerpt: "Everything you need to know about building a successful SaaS product — from idea validation to scaling.", category: "Development", date: "January 28, 2026", readTime: "15 min" },
  { slug: "social-media-trends-2026", title: "Social Media Marketing Trends 2026", excerpt: "Stay ahead with the latest social media marketing trends including short-form video and AI-generated content.", category: "Marketing", date: "January 15, 2026", readTime: "7 min" },
  { slug: "ai-chatbots-for-business", title: "Why Every Business Needs an AI Chatbot", excerpt: "Learn how businesses of all sizes can benefit from intelligent chatbots for customer support and sales.", category: "AI", date: "January 5, 2026", readTime: "9 min" },
];

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
            {posts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div style={{
                    height: "100%",
                    padding: "24px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <div style={{
                      width: "100%", height: "140px", borderRadius: "12px",
                      background: "rgba(17,24,39,0.5)", marginBottom: "20px",
                    }} />
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <span style={{
                        fontSize: "11px", fontWeight: 600,
                        padding: "4px 12px", borderRadius: "20px",
                        background: "rgba(91,140,255,0.1)", color: "#5B8CFF",
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: "12px", color: "#4B5563" }}>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontSize: "17px", fontWeight: 600, color: "#fff", marginBottom: "8px", lineHeight: 1.4 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <p style={{ fontSize: "12px", color: "#4B5563" }}>{post.date}</p>
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
