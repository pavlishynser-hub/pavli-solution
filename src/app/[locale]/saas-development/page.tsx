import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "saasDev" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function SaaSDevelopmentPage() {
  return (
    <ServicePageTemplate
      translationKey="saasDev"
      features={[
        { title: "Multi-Tenant Architecture", description: "Efficient multi-tenant design that isolates data while sharing infrastructure for cost efficiency." },
        { title: "Subscription Billing", description: "Stripe/Paddle integration with flexible pricing tiers, trials, upgrades and invoice management." },
        { title: "User Management", description: "Complete auth system with SSO, RBAC, team management and organization hierarchy." },
        { title: "API Gateway", description: "Secure, rate-limited API with documentation, versioning and developer portal." },
        { title: "Analytics Dashboard", description: "Built-in analytics for user engagement, MRR, churn, feature usage and custom metrics." },
        { title: "Auto-Scaling", description: "Infrastructure that scales automatically with your user base — from 100 to 1M+ users." },
      ]}
      processSteps={[
        "Product Discovery — We validate your idea, define core features and identify your target market.",
        "Architecture Design — We plan the technical stack, database schema, and scalability strategy.",
        "MVP Development — We build the core product in 8-12 weeks with essential features.",
        "Beta Launch — We release to early users, gather feedback and iterate rapidly.",
        "Scale & Iterate — We add features, optimize performance and scale infrastructure.",
      ]}
      faqs={[
        { question: "How long does it take to build a SaaS product?", answer: "An MVP with core features takes 3-4 months. A full-featured product typically takes 6-12 months. We recommend launching an MVP first to validate with real users." },
        { question: "What is the typical cost of SaaS development?", answer: "MVP development starts from $30,000-$60,000. Full SaaS platforms range from $80,000-$250,000+ depending on complexity and features." },
        { question: "Do you help with pricing strategy?", answer: "Yes. We advise on pricing models (per-user, per-feature, usage-based), help set up billing systems and implement trial/freemium strategies." },
        { question: "Can you build on top of our existing system?", answer: "Absolutely. We can modernize legacy systems, add SaaS capabilities to existing products or build entirely new platforms." },
        { question: "What happens after launch?", answer: "We offer ongoing development partnerships — feature development, bug fixes, performance optimization, infrastructure management and technical support." },
      ]}
      relatedServices={[
        { title: "Web Apps", href: "/web-application-development" },
        { title: "MVP", href: "/startup-mvp-development" },
        { title: "Mobile Apps", href: "/mobile-app-development" },
      ]}
    />
  );
}
