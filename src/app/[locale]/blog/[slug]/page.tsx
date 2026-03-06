"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const blogData: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "how-ai-changes-marketing": {
    title: "How AI Changes Marketing in 2026",
    category: "AI", date: "March 1, 2026", readTime: "8 min",
    content: [
      "Artificial intelligence is no longer a futuristic concept in marketing — it is the present reality. In 2026, AI tools have become indispensable for businesses of all sizes, transforming everything from content creation to customer targeting.",
      "One of the most significant changes is in content generation. AI writing tools can now produce high-quality blog posts, social media content, email campaigns and ad copy in minutes. However, the key to success is not replacing human creativity but augmenting it.",
      "Predictive analytics has reached a new level of sophistication. AI models can now forecast customer behavior with remarkable accuracy, allowing marketers to anticipate needs, personalize experiences and optimize campaigns in real-time.",
      "Personalization at scale is another major transformation. AI enables businesses to deliver uniquely tailored experiences to millions of customers simultaneously.",
      "The companies that will thrive are those that embrace AI as a strategic partner while maintaining authentic human connections with their audience.",
    ],
  },
  "best-seo-strategies-2026": {
    title: "Best SEO Strategies for 2026",
    category: "SEO", date: "February 20, 2026", readTime: "10 min",
    content: [
      "SEO continues to evolve rapidly, and 2026 brings new challenges and opportunities for businesses looking to improve their search visibility.",
      "AI-powered content optimization is now essential. Creating comprehensive, well-researched content that genuinely answers user questions is more important than ever.",
      "Core Web Vitals and page experience remain critical ranking factors. Sites that deliver sub-2-second load times with smooth interactivity have a significant ranking advantage.",
      "Topical authority is the new link building. Google increasingly rewards sites that demonstrate deep expertise in specific topics.",
      "Voice search and conversational queries continue to grow. Optimizing for natural language patterns helps capture traffic from voice assistants and AI-powered search features.",
      "Focus on creating exceptional content, delivering fast experiences, and building genuine topical authority.",
    ],
  },
};

const defaultPost = {
  title: "Blog Post", category: "Insights", date: "2026", readTime: "5 min",
  content: [
    "This is a detailed article about digital marketing, AI technology, and software development best practices.",
    "Stay tuned for more insights from our team of experts.",
  ],
};

const relatedPosts = [
  { slug: "how-ai-changes-marketing", title: "How AI Changes Marketing" },
  { slug: "best-seo-strategies-2026", title: "Best SEO Strategies 2026" },
  { slug: "how-to-launch-app-in-app-store", title: "How to Launch an App" },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogData[slug] || { ...defaultPost, title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) };

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "152px", paddingBottom: "36px", overflow: "hidden" }}>
        <div className="bg-grid bg-radial-glow" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{
                fontSize: "11px", fontWeight: 600, padding: "4px 12px",
                borderRadius: "20px", background: "rgba(91,140,255,0.1)", color: "#5B8CFF",
              }}>
                {post.category}
              </span>
              <span style={{ fontSize: "13px", color: "#4B5563" }}>{post.date}</span>
              <span style={{ fontSize: "13px", color: "#4B5563" }}>{post.readTime} read</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{post.title}</h1>
          </motion.div>
        </div>
      </section>

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <article style={{ maxWidth: "680px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {post.content.map((paragraph, i) => (
              <p key={i} style={{ fontSize: "16px", color: "#D1D5DB", lineHeight: 1.8 }}>{paragraph}</p>
            ))}
          </div>

          {/* Related Posts */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "56px", paddingTop: "40px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>Related Posts</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {relatedPosts.filter((p) => p.slug !== slug).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    padding: "20px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.2s",
                  }}>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: "#D1D5DB" }}>{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <Button href="/contact" variant="primary">Start Your Project</Button>
          </div>
        </article>
      </AnimatedSection>
    </>
  );
}
