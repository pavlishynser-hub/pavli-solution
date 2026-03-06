import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function SEOPage() {
  return (
    <ServicePageTemplate
      translationKey="seo"
      features={[
        { title: "Technical SEO Audit", description: "Comprehensive analysis of site speed, crawlability, indexation, structured data and Core Web Vitals." },
        { title: "On-Page Optimization", description: "Title tags, meta descriptions, headers, internal linking and content optimization for target keywords." },
        { title: "Link Building", description: "White-hat link acquisition through outreach, guest posting, digital PR and content marketing." },
        { title: "Local SEO", description: "Google Business Profile optimization, local citations and location-specific keyword targeting." },
        { title: "Content Strategy", description: "Keyword-driven content planning that targets search intent and builds topical authority." },
        { title: "Competitor Analysis", description: "Deep analysis of competitor strategies, backlink profiles and content gaps to find opportunities." },
      ]}
      processSteps={[
        "SEO Audit — Full technical and content audit of your website with priority recommendations.",
        "Keyword Research — In-depth keyword analysis including search volume, difficulty and intent mapping.",
        "On-Page Optimization — We optimize every page for target keywords and user experience.",
        "Content & Link Building — Ongoing content creation and strategic link acquisition.",
        "Monitoring & Reporting — Monthly ranking reports, traffic analysis and strategy adjustments.",
      ]}
      faqs={[
        { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. You can expect initial improvements in 2-3 months, with significant results in 6-12 months. Competitive keywords may take longer." },
        { question: "Do you guarantee first page rankings?", answer: "No ethical SEO agency can guarantee specific rankings. We focus on sustainable growth through best practices, and our track record shows consistent improvement across all client sites." },
        { question: "What is the difference between SEO and Google Ads?", answer: "SEO generates free organic traffic over time, while Google Ads provides immediate paid visibility. We recommend a combined strategy for optimal results." },
        { question: "How much does SEO cost?", answer: "SEO investment varies based on competition, current site health and goals. Our plans typically range from $2,000-$10,000/month depending on scope." },
        { question: "Will you need access to our website?", answer: "Yes, we need access to Google Search Console, Google Analytics, and your CMS to implement technical optimizations and track results." },
      ]}
      relatedServices={[
        { title: "SMM", href: "/smm-services" },
        { title: "Google Ads", href: "/google-ads-management" },
        { title: "Content Marketing", href: "/content-marketing" },
        { title: "Marketing Strategy", href: "/marketing-strategy" },
      ]}
    />
  );
}
