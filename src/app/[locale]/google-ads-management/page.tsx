import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "googleAds" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function GoogleAdsPage() {
  return (
    <ServicePageTemplate
      translationKey="googleAds"
      features={[
        { title: "Campaign Strategy", description: "Custom campaign structures aligned with your sales funnel and business objectives." },
        { title: "Keyword Research", description: "Comprehensive keyword analysis to target high-intent searchers ready to convert." },
        { title: "Ad Copywriting", description: "Compelling ad copy that drives clicks and conversions with strong calls-to-action." },
        { title: "Landing Page Optimization", description: "Conversion-optimized landing pages that maximize your Quality Score and ROI." },
        { title: "Bid Management", description: "Advanced bidding strategies using AI and automation to minimize cost per acquisition." },
        { title: "Conversion Tracking", description: "Full-funnel tracking setup to measure every click, call, form submission and sale." },
      ]}
      processSteps={[
        "Account Audit — We analyze your current Google Ads account or research your market for new campaigns.",
        "Campaign Planning — We define campaign structure, keywords, audiences and budget allocation.",
        "Ad Creation — We write compelling ads and design high-converting landing pages.",
        "Launch & Optimize — We launch campaigns and continuously optimize based on performance data.",
        "Report & Scale — Monthly performance reports and strategic recommendations for scaling.",
      ]}
      faqs={[
        { question: "How much should I spend on Google Ads?", answer: "Budget depends on your industry, competition and goals. Most clients start with $2,000-$10,000/month. We help determine the optimal budget based on your target CPA and market data." },
        { question: "How quickly will I see results?", answer: "Google Ads can drive traffic from day one. However, it typically takes 2-4 weeks to optimize campaigns for peak performance and 2-3 months to fully optimize." },
        { question: "What is a good ROAS for Google Ads?", answer: "A good return on ad spend varies by industry. E-commerce typically targets 4-8x ROAS, while lead generation focuses on cost per lead. We set realistic targets based on your margins." },
        { question: "Do you manage Google Shopping campaigns?", answer: "Yes. We manage Search, Display, Shopping, YouTube, Performance Max and Discovery campaigns across all Google Ads formats." },
        { question: "What happens if ads are not performing?", answer: "We monitor daily and make adjustments. If a campaign underperforms, we pause underperforming elements, test new approaches and reallocate budget to top performers." },
      ]}
      relatedServices={[
        { title: "SMM", href: "/smm-services" },
        { title: "SEO", href: "/seo-services" },
        { title: "Content Marketing", href: "/content-marketing" },
        { title: "Marketing Strategy", href: "/marketing-strategy" },
      ]}
    />
  );
}
