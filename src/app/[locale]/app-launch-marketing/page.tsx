import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "appLaunchMarketing" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function AppLaunchMarketingPage() {
  return (
    <ServicePageTemplate
      translationKey="appLaunchMarketing"
      features={[
        { title: "Pre-Launch Buzz", description: "Build anticipation with landing pages, email lists, social campaigns and press outreach." },
        { title: "Launch Day Execution", description: "Coordinated multi-channel launch to maximize day-one downloads and visibility." },
        { title: "ASO Strategy", description: "App Store Optimization for both Apple and Google to drive organic discovery." },
        { title: "User Acquisition", description: "Paid campaigns on Facebook, Google, TikTok and Apple Search Ads for targeted installs." },
        { title: "Retention Strategy", description: "Onboarding optimization, push notification strategy and engagement features." },
        { title: "Growth Marketing", description: "Post-launch growth tactics including referral programs, in-app campaigns and virality features." },
      ]}
      processSteps={[
        "Market Research — We analyze your target audience, competitors and market positioning.",
        "Pre-Launch Campaign — We build hype 4-6 weeks before launch with landing pages, social media and press.",
        "Launch Execution — Multi-channel launch with coordinated messaging across all platforms.",
        "User Acquisition — We run targeted paid campaigns to drive quality installs at optimal CPI.",
        "Growth Optimization — Continuous optimization of retention, engagement and organic growth.",
      ]}
      faqs={[
        { question: "When should we start marketing our app?", answer: "Ideally 6-8 weeks before launch. This gives time to build an email list, create social buzz, reach out to press and prepare all marketing materials." },
        { question: "How much should we budget for app marketing?", answer: "We recommend allocating at least $5,000-$20,000 for launch marketing. The budget scales with your target market and download goals." },
        { question: "What is a good cost per install (CPI)?", answer: "CPI varies by category and platform. Gaming apps average $1-3, while utility apps range $2-5. We optimize campaigns to achieve below-market CPIs." },
        { question: "Do you help with app store features?", answer: "We help position your app for editorial features by Apple and Google, which can drive tens of thousands of free downloads." },
        { question: "How do you measure launch success?", answer: "We track downloads, CPI, retention rates (Day 1, 7, 30), user ratings, organic vs. paid split, and revenue per user." },
      ]}
      relatedServices={[
        { title: "App Store", href: "/app-store-publishing" },
        { title: "Google Play", href: "/google-play-publishing" },
        { title: "SMM", href: "/smm-services" },
      ]}
    />
  );
}
