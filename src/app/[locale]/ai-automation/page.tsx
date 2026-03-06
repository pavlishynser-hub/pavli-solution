import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiAutomation" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function AIAutomationPage() {
  return (
    <ServicePageTemplate
      translationKey="aiAutomation"
      features={[
        { title: "Custom AI Workflows", description: "Automate repetitive tasks with intelligent workflows tailored to your business processes." },
        { title: "Process Optimization", description: "Identify bottlenecks and optimize operations with AI-driven insights and automation." },
        { title: "Intelligent Data Processing", description: "Extract, transform and analyze data automatically using machine learning pipelines." },
        { title: "Predictive Analytics", description: "Forecast trends, demand and customer behavior with advanced predictive models." },
        { title: "CRM Integration", description: "Seamlessly connect AI automation with your existing CRM and business tools." },
        { title: "Automated Reporting", description: "Generate comprehensive reports and dashboards automatically on any schedule." },
      ]}
      processSteps={[
        "Discovery & Analysis — We audit your current processes and identify automation opportunities.",
        "AI Strategy Design — We create a detailed roadmap for implementing AI automation.",
        "Development & Training — Our team builds and trains custom AI models for your use cases.",
        "Integration & Testing — We integrate the solution with your systems and run thorough tests.",
        "Deployment & Monitoring — We launch the system and continuously monitor performance.",
      ]}
      faqs={[
        { question: "What types of business processes can be automated with AI?", answer: "Almost any repetitive, rule-based or data-heavy process can benefit from AI automation — customer support, data entry, document processing, quality control, scheduling, reporting and more." },
        { question: "How long does it take to implement AI automation?", answer: "Typical projects range from 4 to 12 weeks depending on complexity. Simple chatbots can be deployed in 2-3 weeks, while complex workflow automation may take 2-3 months." },
        { question: "Do we need to have a lot of data to start?", answer: "Not necessarily. We can start with pre-trained models and fine-tune them with your data over time. Even small datasets can yield significant improvements." },
        { question: "Will AI automation replace our employees?", answer: "AI automation is designed to augment your team, not replace it. It handles repetitive tasks so your employees can focus on creative and strategic work." },
        { question: "What ROI can we expect from AI automation?", answer: "Most clients see 30-60% reduction in operational costs and 2-5x improvement in processing speed within the first 6 months." },
      ]}
      relatedServices={[
        { title: "AI Chatbots", href: "/ai-chatbot-development" },
        { title: "AI Assistant", href: "/ai-business-assistant" },
        { title: "AI Support", href: "/ai-customer-support" },
      ]}
    />
  );
}
