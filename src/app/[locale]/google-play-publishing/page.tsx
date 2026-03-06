import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "googlePlayPublishing" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function GooglePlayPublishingPage() {
  return (
    <ServicePageTemplate
      translationKey="googlePlayPublishing"
      features={[
        { title: "Play Store Compliance", description: "Full compliance audit for Google Play policies including data safety and content rating." },
        { title: "Store Listing Optimization", description: "Optimized title, description, keywords and graphics for maximum discoverability." },
        { title: "A/B Testing", description: "Google Play experiments for store listing elements to maximize conversion rates." },
        { title: "Rating Strategy", description: "In-app review prompts and strategies to build a strong rating profile." },
        { title: "Feature Graphic Design", description: "Eye-catching feature graphics, screenshots and promo videos for your listing." },
        { title: "Release Management", description: "Staged rollouts, beta testing tracks and version management for smooth releases." },
      ]}
      processSteps={[
        "Compliance Check — We verify your app meets all Google Play policies and data safety requirements.",
        "Store Listing — We create and optimize your complete store presence.",
        "Submission & Review — We submit your app and manage the review process.",
        "Launch — Coordinated release with optional staged rollout.",
        "Post-Launch Optimization — We monitor performance and optimize the listing based on data.",
      ]}
      faqs={[
        { question: "How long does Google Play review take?", answer: "Google Play reviews typically take a few hours to 7 days. New developer accounts may experience longer initial review times." },
        { question: "What is the Google Play Developer fee?", answer: "Google charges a one-time $25 registration fee for a developer account (compared to Apple's $99/year)." },
        { question: "Can you help with Google Play data safety section?", answer: "Yes. We help you accurately complete the data safety form, which is required for all apps and details how your app collects and handles user data." },
        { question: "Do you handle staged rollouts?", answer: "Yes. We recommend staged rollouts for updates — starting with 5-10% of users to catch issues before full release." },
        { question: "What about Android app bundles?", answer: "We use Android App Bundles (AAB) as required by Google Play, which optimizes your app size for each device configuration." },
      ]}
      relatedServices={[
        { title: "App Store", href: "/app-store-publishing" },
        { title: "App Marketing", href: "/app-launch-marketing" },
        { title: "Mobile Apps", href: "/mobile-app-development" },
      ]}
    />
  );
}
