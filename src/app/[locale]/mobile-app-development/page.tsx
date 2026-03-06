import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mobileAppDev" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      translationKey="mobileAppDev"
      features={[
        { title: "iOS Development", description: "Native Swift/SwiftUI apps optimized for the Apple ecosystem and App Store guidelines." },
        { title: "Android Development", description: "Native Kotlin apps built for the full range of Android devices and Google Play." },
        { title: "Cross-Platform", description: "React Native and Flutter development for simultaneous iOS and Android release with shared codebase." },
        { title: "UI/UX Design", description: "Beautiful, intuitive mobile interfaces following platform-specific design guidelines." },
        { title: "Push Notifications", description: "Engagement-driving notification strategies with smart scheduling and personalization." },
        { title: "App Analytics", description: "Built-in analytics tracking user behavior, retention, crash reports and performance." },
      ]}
      processSteps={[
        "Concept & Planning — We define app features, user flows and technical requirements.",
        "UI/UX Design — Mobile-first design with interactive prototypes for user testing.",
        "Development — Agile development with bi-weekly builds and beta testing.",
        "QA Testing — Device testing, performance profiling, security testing and bug fixes.",
        "App Store Submission — We handle the full submission process for App Store and Google Play.",
      ]}
      faqs={[
        { question: "Should we build native or cross-platform?", answer: "Cross-platform (React Native/Flutter) is ideal for most apps — 80-90% code sharing, faster development and lower cost. Native is better for hardware-intensive or platform-specific apps." },
        { question: "How much does a mobile app cost?", answer: "Simple apps start from $15,000-$30,000. Medium complexity apps range $30,000-$80,000. Complex enterprise apps can exceed $100,000. We provide detailed estimates during discovery." },
        { question: "How long does mobile app development take?", answer: "A simple app takes 2-3 months, medium complexity 3-6 months, and complex apps 6-12 months. We deliver in sprints so you see progress every 2 weeks." },
        { question: "Do you handle app store approval?", answer: "Yes. We manage the entire submission process including store listing optimization, screenshot design, compliance review and communication with Apple/Google." },
        { question: "What about app maintenance after launch?", answer: "We offer ongoing maintenance plans covering bug fixes, OS updates, performance monitoring, feature updates and user support." },
      ]}
      relatedServices={[
        { title: "App Store Publishing", href: "/app-store-publishing" },
        { title: "Google Play Publishing", href: "/google-play-publishing" },
        { title: "Web Apps", href: "/web-application-development" },
        { title: "App Launch Marketing", href: "/app-launch-marketing" },
      ]}
    />
  );
}
