import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "smm" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function SMMPage() {
  return (
    <ServicePageTemplate
      translationKey="smm"
      features={[
        { title: "Platform Strategy", description: "Custom strategies for Instagram, TikTok, LinkedIn, Facebook, Twitter and emerging platforms." },
        { title: "Content Calendar", description: "Planned, consistent content that aligns with your brand voice and business goals." },
        { title: "Community Management", description: "Active engagement with your audience — comments, DMs, mentions and conversations." },
        { title: "Paid Social Campaigns", description: "Targeted ad campaigns with precise audience segmentation and budget optimization." },
        { title: "Influencer Outreach", description: "Strategic partnerships with relevant influencers to amplify your brand reach." },
        { title: "Analytics & Reporting", description: "Detailed monthly reports with actionable insights and performance metrics." },
      ]}
      processSteps={[
        "Social Audit — We analyze your current social presence, competitors and target audience.",
        "Strategy Development — We create a comprehensive social media strategy with clear KPIs.",
        "Content Creation — Our team produces engaging visuals, copy and video content.",
        "Campaign Launch — We execute campaigns with precise targeting and budget management.",
        "Performance Optimization — Continuous A/B testing and strategy refinement based on data.",
      ]}
      faqs={[
        { question: "Which social media platforms should my business be on?", answer: "It depends on your target audience. B2B companies often perform best on LinkedIn, while B2C brands thrive on Instagram and TikTok. We analyze your market to recommend the right mix." },
        { question: "How often should we post on social media?", answer: "Quality over quantity. We typically recommend 3-5 posts per week per platform, but the optimal frequency depends on your industry and audience engagement patterns." },
        { question: "How long until we see results from SMM?", answer: "Organic growth typically shows meaningful results in 3-6 months. Paid campaigns can generate immediate traffic and leads within the first week." },
        { question: "Do you create the content or do we need to provide it?", answer: "We handle everything — strategy, copywriting, graphic design, video editing and scheduling. We may request brand assets and product information from your team." },
        { question: "How do you measure SMM success?", answer: "We track engagement rate, reach, follower growth, website traffic from social, lead generation, conversions and ROI. Monthly reports include all key metrics and recommendations." },
      ]}
      relatedServices={[
        { title: "SEO", href: "/seo-services" },
        { title: "Google Ads", href: "/google-ads-management" },
        { title: "Content Marketing", href: "/content-marketing" },
        { title: "Marketing Strategy", href: "/marketing-strategy" },
      ]}
    />
  );
}
