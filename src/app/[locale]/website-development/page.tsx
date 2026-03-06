import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "websiteDev" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageTemplate
      translationKey="websiteDev"
      features={[
        { title: "Custom Design", description: "Unique designs tailored to your brand — no templates, no compromises on quality." },
        { title: "Responsive Layouts", description: "Pixel-perfect on every device — mobile, tablet, laptop and desktop." },
        { title: "Performance Optimization", description: "Sub-2-second load times with optimized images, code splitting and CDN delivery." },
        { title: "SEO-Ready", description: "Built-in SEO best practices — semantic HTML, structured data, meta tags and Core Web Vitals." },
        { title: "CMS Integration", description: "Easy content management with WordPress, Strapi, Sanity or custom headless CMS." },
        { title: "Accessibility Compliance", description: "WCAG 2.1 compliant websites ensuring access for all users." },
      ]}
      processSteps={[
        "Discovery — We understand your business, audience, goals and technical requirements.",
        "UI/UX Design — We create wireframes and high-fidelity designs with your feedback.",
        "Development — We build your website using modern frameworks (Next.js, React).",
        "Testing & QA — Rigorous cross-browser and cross-device testing.",
        "Launch & Support — We deploy, monitor and provide ongoing maintenance.",
      ]}
      faqs={[
        { question: "How long does it take to build a website?", answer: "A typical business website takes 4-8 weeks. Complex websites with custom functionality may take 8-16 weeks. We provide a detailed timeline during the discovery phase." },
        { question: "What technologies do you use?", answer: "We primarily use Next.js, React and TypeScript for modern, fast websites. We also work with WordPress for clients who need a familiar CMS." },
        { question: "Do you provide hosting?", answer: "We help you choose and set up the best hosting solution — Vercel, AWS, Netlify or others based on your needs and budget." },
        { question: "Can you redesign my existing website?", answer: "Absolutely. We can redesign your site while preserving SEO equity, migrating content and improving performance." },
        { question: "Do you offer ongoing maintenance?", answer: "Yes. We offer monthly maintenance plans that include security updates, content changes, performance monitoring and priority support." },
      ]}
      relatedServices={[
        { title: "Web Apps", href: "/web-application-development" },
        { title: "Mobile Apps", href: "/mobile-app-development" },
        { title: "SaaS", href: "/saas-development" },
        { title: "SEO", href: "/seo-services" },
      ]}
    />
  );
}
