import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "webAppDev" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function WebAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      translationKey="webAppDev"
      features={[
        { title: "Full-Stack Development", description: "End-to-end development with React/Next.js frontends and Node.js/Python backends." },
        { title: "Real-Time Features", description: "Live updates, WebSockets, collaborative editing and real-time notifications." },
        { title: "Cloud Infrastructure", description: "Scalable architecture on AWS, GCP or Azure with auto-scaling and high availability." },
        { title: "API Development", description: "RESTful and GraphQL APIs designed for performance, security and developer experience." },
        { title: "Database Architecture", description: "Optimized database design with PostgreSQL, MongoDB, Redis and proper indexing strategies." },
        { title: "CI/CD Pipeline", description: "Automated testing, build and deployment pipelines for fast, reliable releases." },
      ]}
      processSteps={[
        "Technical Discovery — We define requirements, user stories and system architecture.",
        "Architecture Planning — We design the technical stack, database schema and API structure.",
        "Sprint Development — Agile development in 2-week sprints with regular demos.",
        "Testing — Unit tests, integration tests, E2E tests and security audits.",
        "Deployment & Scaling — We deploy to production and set up monitoring and auto-scaling.",
      ]}
      faqs={[
        { question: "What is the difference between a website and a web application?", answer: "A website primarily displays information, while a web application provides interactive functionality — user accounts, dashboards, data processing, real-time collaboration, etc." },
        { question: "What tech stack do you recommend?", answer: "We typically use Next.js + TypeScript for frontends, Node.js or Python for backends, and PostgreSQL for databases. We adapt the stack based on project requirements." },
        { question: "Can you build applications that handle millions of users?", answer: "Yes. We design for scale from day one using microservices architecture, caching layers, CDNs, load balancing and auto-scaling infrastructure." },
        { question: "Do you provide source code ownership?", answer: "Absolutely. You own 100% of the source code, documentation and all intellectual property we create for you." },
        { question: "What about security?", answer: "Security is built into every stage — OWASP best practices, input validation, authentication, authorization, encryption and regular security audits." },
      ]}
      relatedServices={[
        { title: "Websites", href: "/website-development" },
        { title: "Mobile Apps", href: "/mobile-app-development" },
        { title: "SaaS", href: "/saas-development" },
        { title: "MVP", href: "/startup-mvp-development" },
      ]}
    />
  );
}
