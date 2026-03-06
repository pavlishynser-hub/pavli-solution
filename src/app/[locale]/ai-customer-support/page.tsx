import { getTranslations } from "next-intl/server";
import ServicePageTemplate from "@/components/seo/ServicePageTemplate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiSupport" });
  return { title: `${t("title")} | PavliSolution`, description: t("subtitle") };
}

export default function AICustomerSupportPage() {
  return (
    <ServicePageTemplate
      translationKey="aiSupport"
      features={[
        { title: "24/7 Automated Support", description: "Resolve customer issues instantly around the clock without increasing headcount." },
        { title: "Ticket Classification", description: "AI automatically categorizes, prioritizes and routes support tickets to the right team." },
        { title: "Sentiment Analysis", description: "Detect customer emotions in real-time to escalate urgent issues and improve satisfaction." },
        { title: "Smart Escalation", description: "Automatically escalate complex issues to human agents with full conversation context." },
        { title: "Multi-Language Support", description: "Serve customers in 50+ languages with culturally-aware responses." },
        { title: "Knowledge Base Integration", description: "AI learns from your help docs, FAQs and past tickets to provide accurate answers." },
      ]}
      processSteps={[
        "Support Audit — We analyze your current support volume, common issues and response metrics.",
        "System Design — We design the AI support architecture tailored to your customer journey.",
        "AI Training — We train the system on your knowledge base, past tickets and brand voice.",
        "Integration — We connect with your helpdesk (Zendesk, Intercom, Freshdesk, etc.).",
        "Launch & Monitor — We deploy gradually and optimize based on real customer interactions.",
      ]}
      faqs={[
        { question: "What percentage of tickets can AI resolve automatically?", answer: "Typically 60-80% of common inquiries are resolved without human intervention. Complex issues are seamlessly escalated to your team." },
        { question: "Will customers know they are talking to AI?", answer: "We design conversations to be natural and helpful. You can choose to disclose AI assistance or create a seamless branded experience." },
        { question: "How does AI support handle angry customers?", answer: "Sentiment analysis detects frustration early and can adjust tone, offer escalation to a human agent, or trigger special handling workflows." },
        { question: "Can it work with our existing helpdesk software?", answer: "Yes. We integrate with all major platforms — Zendesk, Intercom, Freshdesk, HubSpot, Salesforce Service Cloud, and custom solutions." },
        { question: "What is the impact on customer satisfaction scores?", answer: "Clients typically see 15-30% improvement in CSAT scores due to faster response times and consistent quality of support." },
      ]}
      relatedServices={[
        { title: "AI Automation", href: "/ai-automation" },
        { title: "AI Chatbots", href: "/ai-chatbot-development" },
        { title: "AI Assistant", href: "/ai-business-assistant" },
      ]}
    />
  );
}
