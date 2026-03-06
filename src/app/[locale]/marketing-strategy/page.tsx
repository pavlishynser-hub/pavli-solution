import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "marketingStrategy" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function MarketingStrategyPage() {
  return (
    <ServicePageTemplate
      translationKey="marketingStrategy"
      features={[
        { title: "Market Research", description: "Deep analysis of your market size, trends, customer segments and growth opportunities." },
        { title: "Competitive Analysis", description: "Comprehensive competitor benchmarking — positioning, messaging, channels and weaknesses." },
        { title: "Brand Positioning", description: "Define your unique value proposition and brand messaging that resonates with your audience." },
        { title: "Channel Strategy", description: "Identify the most effective marketing channels for your business and budget." },
        { title: "Budget Planning", description: "Optimize marketing spend allocation across channels for maximum ROI." },
        { title: "KPI Framework", description: "Establish clear metrics and dashboards to track marketing performance and growth." },
      ]}
      processSteps={[
        "Business Analysis — We understand your goals, products, target audience and current marketing efforts.",
        "Market Research — Deep dive into market trends, customer behavior and competitive landscape.",
        "Strategy Development — We create a comprehensive marketing strategy with clear tactics and timelines.",
        "Implementation Plan — Detailed action plan with responsibilities, budgets and milestones.",
        "Ongoing Optimization — Quarterly strategy reviews and adjustments based on performance data.",
      ]}
      faqs={[
        { question: "What is included in a marketing strategy?", answer: "A comprehensive marketing strategy includes market analysis, buyer personas, competitive positioning, channel strategy, content plan, budget allocation, KPIs and a 12-month action plan." },
        { question: "How long does it take to develop a strategy?", answer: "A thorough marketing strategy typically takes 3-4 weeks to develop, including research, analysis and presentation of the final plan." },
        { question: "Do you also execute the strategy?", answer: "Yes. We can develop the strategy and handle full execution, or deliver the strategy for your in-house team to implement. We offer ongoing advisory support either way." },
        { question: "How much does a marketing strategy cost?", answer: "Strategy engagements range from $5,000 for a focused single-channel strategy to $25,000+ for comprehensive multi-channel strategies with ongoing optimization." },
        { question: "How do you ensure the strategy works?", answer: "We set clear KPIs from the start and review performance monthly. Strategies are living documents — we adjust based on data, market changes and business priorities." },
      ]}
      relatedServices={[
        { title: "SMM", href: "/smm-services" },
        { title: "SEO", href: "/seo-services" },
        { title: "Google Ads", href: "/google-ads-management" },
        { title: "Content Marketing", href: "/content-marketing" },
      ]}
    />
  );
}
