import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiAssistant" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function AIAssistantPage() {
  return (
    <ServicePageTemplate
      translationKey="aiAssistant"
      features={[
        { title: "Data Analysis", description: "AI-powered analysis of your business data with natural language queries and visual insights." },
        { title: "Automated Reporting", description: "Generate daily, weekly and monthly reports automatically from multiple data sources." },
        { title: "Decision Support", description: "Get AI-driven recommendations based on historical data, trends and predictive models." },
        { title: "Task Automation", description: "Automate scheduling, email management, data entry and routine administrative tasks." },
        { title: "Meeting Summaries", description: "Automatically transcribe and summarize meetings with action items and follow-ups." },
        { title: "Knowledge Management", description: "Build and query your company knowledge base using natural language." },
      ]}
      processSteps={[
        "Business Process Audit — We map your workflows and identify high-impact automation opportunities.",
        "AI Assistant Design — We design the assistant's capabilities, integrations and user interface.",
        "Custom Development — We build your AI assistant with specific skills tailored to your business.",
        "Integration & Training — We connect the assistant to your tools and train your team.",
        "Continuous Improvement — We monitor usage patterns and enhance capabilities over time.",
      ]}
      faqs={[
        { question: "What can an AI business assistant do?", answer: "It can analyze data, generate reports, schedule meetings, draft emails, summarize documents, answer questions from your knowledge base, and automate repetitive tasks." },
        { question: "How does it integrate with our existing tools?", answer: "We integrate with popular platforms like Google Workspace, Microsoft 365, Slack, Salesforce, HubSpot, Jira and custom APIs." },
        { question: "Is our data safe with an AI assistant?", answer: "Yes. We deploy within your infrastructure or use enterprise-grade cloud services with full encryption and access controls." },
        { question: "How long until we see productivity gains?", answer: "Most teams report 20-40% time savings within the first month. ROI typically becomes clear within 2-3 months." },
        { question: "Can the assistant learn from our specific domain?", answer: "Absolutely. We fine-tune the AI on your industry data, company documents and business processes for domain-specific expertise." },
      ]}
      relatedServices={[
        { title: "AI Automation", href: "/ai-automation" },
        { title: "AI Chatbots", href: "/ai-chatbot-development" },
        { title: "AI Support", href: "/ai-customer-support" },
      ]}
    />
  );
}
