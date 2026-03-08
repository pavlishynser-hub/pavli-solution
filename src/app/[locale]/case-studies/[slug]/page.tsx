"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import LazyVideo from "@/components/ui/LazyVideo";

const caseData: Record<string, { title: string; category: string; challenge: string; solution: string; results: { metric: string; value: string }[]; testimonial: { quote: string; name: string; role: string }; video?: string; solutionDetails?: string[] }> = {
  "ai-chatbot-cosmetics": {
    title: "AI Chatbot for Online Cosmetics Store", category: "AI Chatbot",
    challenge: "An online cosmetics store in Spain struggled with low conversion rates on Google Ads traffic. Customers would browse products but leave without purchasing — overwhelmed by the wide product range and unsure which products suit their specific skin concerns.",
    solution: "We developed a custom AI chatbot widget, trained on the entire product catalog with all product features, ingredients, and use cases. We built a personalized knowledge base and deployed it into a vector database for instant semantic search.",
    solutionDetails: [
      "Trained the AI on the full product catalog — ingredients, benefits, skin types, usage instructions",
      "Built a custom vector database (knowledge base) for accurate semantic product search",
      "The chatbot recommends products based on individual skin concerns and problems",
      "Integrated as a widget directly on the client's website",
      "Clients can track all questions asked to the AI assistant and analyze frequent queries",
      "Full setup and integration — just $500",
    ],
    results: [{ metric: "Google Ads Conversions", value: "+45%" }, { metric: "Avg. Session Duration", value: "+3min" }, { metric: "Setup Cost", value: "$500" }, { metric: "Time to Launch", value: "5 days" }],
    testimonial: { quote: "The AI chatbot knows our products better than most of our staff. Customers get instant personalized recommendations and our conversion rate from Google Ads improved dramatically.", name: "Maria G.", role: "Owner, Cosmetics Store (Spain)" },
    video: "/videos/ai-chatbot-cosmetics-demo.mp4",
  },
  "ai-chatbot-ecommerce": {
    title: "AI Chatbot for E-Commerce Platform", category: "AI Solutions",
    challenge: "A major e-commerce platform was struggling with high customer support costs and slow response times, leading to cart abandonment rates above 70%.",
    solution: "We built a custom AI chatbot powered by GPT-4 that handles product recommendations, order tracking, returns and FAQs — available 24/7 across website, WhatsApp and Facebook Messenger.",
    results: [{ metric: "Customer Engagement", value: "+340%" }, { metric: "Support Costs", value: "-55%" }, { metric: "Cart Abandonment", value: "-32%" }, { metric: "Response Time", value: "<3s" }],
    testimonial: { quote: "The AI chatbot transformed our customer experience. Support tickets dropped by half while satisfaction improved dramatically.", name: "Sarah Johnson", role: "CEO, TechCorp" },
  },
  "seo-saas-startup": {
    title: "SEO Strategy for SaaS Startup", category: "Marketing",
    challenge: "A B2B SaaS startup had zero organic visibility and was spending $30K/month on paid ads with diminishing returns.",
    solution: "We implemented a comprehensive SEO strategy — technical audit, content hub architecture, 50+ long-form articles targeting buying-intent keywords, and a strategic link building campaign.",
    results: [{ metric: "Organic Traffic", value: "+520%" }, { metric: "Ranking Keywords", value: "1,200+" }, { metric: "MQLs from Organic", value: "+380%" }, { metric: "Ad Spend Saved", value: "$18K/mo" }],
    testimonial: { quote: "PavliSolution's SEO strategy completely changed our acquisition channel mix. Organic is now our #1 source of qualified leads.", name: "Michael Chen", role: "CTO, DataFlow" },
  },
  "fintech-mobile-app": {
    title: "Fintech Mobile App Development", category: "Development",
    challenge: "A fintech startup needed a secure, user-friendly mobile app for peer-to-peer payments with strict regulatory compliance requirements.",
    solution: "We designed and developed a cross-platform mobile app with React Native, implementing bank-grade security, biometric authentication, real-time transactions and full PCI DSS compliance.",
    results: [{ metric: "Downloads (Month 1)", value: "50K+" }, { metric: "App Store Rating", value: "4.8" }, { metric: "Transaction Success", value: "99.97%" }, { metric: "Development Time", value: "4 months" }],
    testimonial: { quote: "They delivered a banking-grade app in 4 months. The quality and security standards exceeded our expectations.", name: "David Kim", role: "Founder, PayFlow" },
  },
};

const defaultCase = {
  title: "Client Success Story", category: "Case Study",
  challenge: "Our client faced significant challenges in their market that required innovative solutions to overcome.",
  solution: "We developed a comprehensive strategy combining our expertise in AI, marketing and development to deliver outstanding results.",
  results: [{ metric: "Revenue Growth", value: "+200%" }, { metric: "Efficiency", value: "+150%" }, { metric: "Satisfaction", value: "95%" }, { metric: "Time to Market", value: "-40%" }],
  testimonial: { quote: "PavliSolution delivered exceptional results that exceeded our expectations.", name: "Client", role: "CEO" },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = caseData[slug] || defaultCase;

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "152px", paddingBottom: "48px", overflow: "hidden" }}>
        <div className="bg-grid bg-radial-glow" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{
              fontSize: "12px", fontWeight: 600, padding: "6px 16px",
              borderRadius: "20px", background: "rgba(91,140,255,0.1)", color: "#5B8CFF",
              display: "inline-block", marginBottom: "20px",
            }}>
              {data.category}
            </span>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{data.title}</h1>
          </motion.div>
        </div>
      </section>

      <AnimatedSection style={{ padding: "24px 0 96px" }}>
        <div style={{ maxWidth: "750px", margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Video demo */}
          {data.video && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="premium-card" style={{ padding: 0, overflow: "hidden", maxWidth: "360px", margin: "0 auto" }}>
                <LazyVideo src={data.video} label="Watch demo" />
                <div style={{ padding: "14px 24px 20px", textAlign: "center" }}>
                  <p style={{ fontSize: "12px", color: "#4B5563" }}>Live demo — AI chatbot in action</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Challenge */}
          <div className="premium-card" style={{ padding: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#5B8CFF", marginBottom: "12px" }}>The Challenge</h2>
            <p style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.7 }}>{data.challenge}</p>
          </div>

          {/* Solution */}
          <div className="premium-card" style={{ padding: "32px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#7CF7C9", marginBottom: "12px" }}>Our Solution</h2>
            <p style={{ fontSize: "15px", color: "#D1D5DB", lineHeight: 1.7, marginBottom: data.solutionDetails ? "20px" : 0 }}>{data.solution}</p>
            {data.solutionDetails && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {data.solutionDetails.map((detail, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span className="gradient-text" style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.6 }}>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Results */}
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, textAlign: "center", marginBottom: "20px" }}>Results</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px" }}>
              {data.results.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="premium-card" style={{ padding: "24px 16px", textAlign: "center" }}>
                    <p className="gradient-text" style={{ fontSize: "24px", fontWeight: 800, marginBottom: "6px" }}>{r.value}</p>
                    <p style={{ fontSize: "12px", color: "#4B5563" }}>{r.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="premium-card" style={{ padding: "32px", textAlign: "center" }}>
            <span className="gradient-text" style={{ fontSize: "48px", fontWeight: 800, lineHeight: 0.8, display: "block", marginBottom: "12px", opacity: 0.2 }}>&ldquo;</span>
            <blockquote style={{ fontSize: "16px", color: "#D1D5DB", fontStyle: "italic", marginBottom: "16px", lineHeight: 1.7 }}>
              {data.testimonial.quote}
            </blockquote>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{data.testimonial.name}</p>
            <p style={{ fontSize: "12px", color: "#4B5563" }}>{data.testimonial.role}</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <Button href="/contact" variant="primary" size="lg">Start Your Project</Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
