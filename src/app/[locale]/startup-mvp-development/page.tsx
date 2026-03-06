import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "startupMvp" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function StartupMVPPage() {
  return (
    <ServicePageTemplate
      translationKey="startupMvp"
      features={[
        { title: "Rapid Prototyping", description: "Interactive prototypes in days to test your concept with real users before building." },
        { title: "Lean Development", description: "Build only what matters — core features that validate your business hypothesis." },
        { title: "User Validation", description: "Integrate analytics and feedback tools to measure product-market fit from day one." },
        { title: "Investor-Ready Product", description: "Polished, functional MVP that demonstrates traction and impresses investors." },
        { title: "Scalable Architecture", description: "Built on modern tech that scales from MVP to full product without rewriting." },
        { title: "Go-to-Market Support", description: "Launch strategy, landing pages and marketing setup to acquire your first users." },
      ]}
      processSteps={[
        "Idea Validation — We evaluate your concept, market opportunity and competitive landscape.",
        "Feature Prioritization — We define the minimum feature set needed to test your core hypothesis.",
        "MVP Build (8-12 weeks) — Rapid development with weekly demos and feedback cycles.",
        "User Testing — We help you launch to early adopters and gather actionable feedback.",
        "Iteration & Growth — We refine the product based on user data and scale what works.",
      ]}
      faqs={[
        { question: "What is an MVP and why do I need one?", answer: "A Minimum Viable Product is the simplest version of your idea that lets you test core assumptions with real users. It saves months of development time and reduces risk before full investment." },
        { question: "How much does MVP development cost?", answer: "Our MVP packages start from $15,000-$30,000 for simple products and $30,000-$60,000 for more complex ones. This includes design, development, testing and launch support." },
        { question: "Will the MVP code be reusable for the full product?", answer: "Yes. We build MVPs with production-quality code and scalable architecture so you can evolve the MVP into a full product without starting over." },
        { question: "Do you help with fundraising?", answer: "We provide pitch deck support, technical documentation for investors, demo preparation and can join investor calls to discuss the technical vision." },
        { question: "What happens after the MVP is launched?", answer: "We analyze user data, identify the most impactful features to build next, and can continue development as your ongoing technical team." },
      ]}
      relatedServices={[
        { title: "SaaS", href: "/saas-development" },
        { title: "Web Apps", href: "/web-application-development" },
        { title: "Mobile Apps", href: "/mobile-app-development" },
        { title: "App Launch", href: "/app-launch" },
      ]}
    />
  );
}
