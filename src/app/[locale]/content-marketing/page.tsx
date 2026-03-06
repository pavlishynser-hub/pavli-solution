import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contentMarketing" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function ContentMarketingPage() {
  return (
    <ServicePageTemplate
      translationKey="contentMarketing"
      features={[
        { title: "Content Strategy", description: "Data-driven content plans aligned with SEO goals, audience needs and business objectives." },
        { title: "Blog Writing", description: "Expert-written articles optimized for search engines and designed to engage your target audience." },
        { title: "Video Production", description: "Professional video content — explainers, tutorials, testimonials and social media clips." },
        { title: "Whitepapers & Ebooks", description: "In-depth resources that establish thought leadership and generate qualified leads." },
        { title: "Email Marketing", description: "Nurture sequences, newsletters and automated campaigns that drive engagement and sales." },
        { title: "Distribution Strategy", description: "Multi-channel distribution to maximize reach — social, email, partnerships and paid promotion." },
      ]}
      processSteps={[
        "Content Audit — We analyze your existing content, identify gaps and benchmark against competitors.",
        "Strategy Creation — We build a content calendar aligned with your SEO and business goals.",
        "Content Production — Our writers and designers create high-quality, optimized content.",
        "Distribution — We publish and distribute content across all relevant channels.",
        "Analytics & Iteration — We measure performance and refine the strategy based on data.",
      ]}
      faqs={[
        { question: "How often should we publish new content?", answer: "For most businesses, 2-4 blog posts per month is a strong starting point. The key is consistency and quality. We can scale based on your goals and budget." },
        { question: "Do you write content for any industry?", answer: "Yes. We have writers experienced in technology, finance, healthcare, SaaS, e-commerce and more. We conduct thorough research to produce authoritative content in any niche." },
        { question: "How does content marketing help SEO?", answer: "Content marketing builds topical authority, targets long-tail keywords, earns natural backlinks and keeps your site fresh — all critical ranking factors for search engines." },
        { question: "What types of content convert best?", answer: "It depends on the funnel stage. Blog posts attract traffic, case studies build trust, whitepapers generate leads, and email sequences close sales. We create content for every stage." },
        { question: "How do you measure content marketing ROI?", answer: "We track organic traffic, keyword rankings, engagement metrics, lead generation, email subscribers and attributed revenue. Monthly reports show clear ROI." },
      ]}
      relatedServices={[
        { title: "SMM", href: "/smm-services" },
        { title: "SEO", href: "/seo-services" },
        { title: "Google Ads", href: "/google-ads-management" },
        { title: "Marketing Strategy", href: "/marketing-strategy" },
      ]}
    />
  );
}
