import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "appStorePublishing" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function AppStorePublishingPage() {
  return (
    <ServicePageTemplate
      translationKey="appStorePublishing"
      features={[
        { title: "App Store Guidelines", description: "We ensure your app fully complies with Apple's review guidelines to avoid rejection." },
        { title: "ASO Optimization", description: "Keyword research, title optimization and metadata strategy for maximum App Store visibility." },
        { title: "Screenshot Design", description: "Professional, conversion-optimized screenshots and app preview videos." },
        { title: "Review Preparation", description: "We prepare comprehensive review notes and demo accounts for smooth Apple review." },
        { title: "Metadata Optimization", description: "Compelling descriptions, keywords and categories that drive organic downloads." },
        { title: "Launch Strategy", description: "Timed launch coordination with marketing campaigns for maximum day-one impact." },
      ]}
      processSteps={[
        "App Review — We audit your app against all App Store guidelines and fix compliance issues.",
        "Store Listing Preparation — We create optimized metadata, screenshots and preview videos.",
        "Submission — We submit your app with comprehensive review notes for fast approval.",
        "Review Response — We handle any Apple feedback and resubmit if needed.",
        "Launch — Coordinated launch with your marketing team for maximum impact.",
      ]}
      faqs={[
        { question: "How long does App Store review take?", answer: "Apple typically reviews apps within 24-48 hours. First submissions or major updates may take up to 7 days. We prepare thorough submissions to minimize review time." },
        { question: "What are common reasons for App Store rejection?", answer: "Common reasons include bugs, privacy policy issues, in-app purchase violations, incomplete metadata and design guideline violations. We check for all of these before submission." },
        { question: "Do you need our Apple Developer account?", answer: "Yes. You need an Apple Developer Program membership ($99/year). We can help you set it up or work within your existing account." },
        { question: "Can you help with app updates too?", answer: "Yes. We handle ongoing updates, version management, release notes and maintaining compliance with new iOS requirements." },
        { question: "What is ASO and why is it important?", answer: "App Store Optimization (ASO) is SEO for apps. Proper ASO can increase organic downloads by 30-50% by improving your visibility in App Store search results." },
      ]}
      relatedServices={[
        { title: "Google Play", href: "/google-play-publishing" },
        { title: "App Marketing", href: "/app-launch-marketing" },
        { title: "Mobile Apps", href: "/mobile-app-development" },
      ]}
    />
  );
}
