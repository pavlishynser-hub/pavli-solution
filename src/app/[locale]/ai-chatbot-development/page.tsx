import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiChatbot" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function AIChatbotPage() {
  return (
    <ServicePageTemplate
      translationKey="aiChatbot"
      features={[
        { title: "LLM-Powered Conversations", description: "Leverage GPT-4, Claude and other advanced language models for natural, context-aware conversations." },
        { title: "Multi-Channel Deployment", description: "Deploy your chatbot on website, WhatsApp, Telegram, Slack, Facebook Messenger and more." },
        { title: "Custom Knowledge Base", description: "Train the chatbot on your company data, FAQs, documentation and product catalog." },
        { title: "Lead Generation", description: "Capture and qualify leads automatically through intelligent conversation flows." },
        { title: "Analytics Dashboard", description: "Track conversations, user satisfaction, resolution rates and conversion metrics." },
        { title: "Seamless Integration", description: "Connect with your CRM, helpdesk, e-commerce platform and other business systems." },
      ]}
      processSteps={[
        "Requirements Analysis — We understand your use cases, audience and success metrics.",
        "Conversation Design — We map out conversation flows, intents and response strategies.",
        "Development & Training — We build and train your chatbot with your custom data.",
        "Testing & QA — Rigorous testing across scenarios to ensure accuracy and reliability.",
        "Launch & Optimization — We deploy and continuously improve based on real conversations.",
      ]}
      faqs={[
        { question: "How accurate are AI chatbots?", answer: "Modern AI chatbots achieve 85-95% accuracy on trained topics. We implement fallback mechanisms and human handoff for edge cases." },
        { question: "Can the chatbot handle multiple languages?", answer: "Yes. Our chatbots support 50+ languages out of the box and can be fine-tuned for specific regional dialects." },
        { question: "How do you ensure data security?", answer: "We implement end-to-end encryption, data anonymization and comply with GDPR, CCPA and other regulations. Your data never leaves your infrastructure if required." },
        { question: "Can the chatbot be updated after launch?", answer: "Absolutely. We provide a management dashboard where you can update knowledge base, adjust responses and monitor performance in real-time." },
        { question: "What is the typical cost of a custom AI chatbot?", answer: "Costs vary based on complexity, integrations and scale. Basic chatbots start from $5,000, while enterprise solutions with advanced AI range from $15,000-$50,000+." },
      ]}
      relatedServices={[
        { title: "AI Automation", href: "/ai-automation" },
        { title: "AI Assistant", href: "/ai-business-assistant" },
        { title: "AI Support", href: "/ai-customer-support" },
      ]}
    />
  );
}
