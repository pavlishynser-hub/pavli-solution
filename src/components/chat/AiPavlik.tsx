"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "ai";
  text: string;
  time: string;
};

const AI_NAME = "AI Pavlik";

const suggestions = [
  "What services do you offer?",
  "How much does a website cost?",
  "Tell me about AI automation",
  "I need a marketing strategy",
];

function getAiResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("цена") || lower.includes("стоимость") || lower.includes("сколько")) {
    return "Our pricing depends on the project scope. A typical website starts from $3,000, web apps from $8,000, and AI automation from $5,000. Let's discuss your specific needs — book a free consultation and we'll provide a detailed estimate.";
  }
  if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you") || lower.includes("услуг")) {
    return "We specialize in 4 key areas:\n\n🤖 AI & Automation — chatbots, business assistants, CRM integration\n📈 Digital Marketing — SEO, Google Ads, SMM, content strategy\n💻 Development — websites, web apps, mobile apps, SaaS\n🚀 App Launch — App Store & Google Play publishing, launch marketing\n\nWhich area interests you?";
  }
  if (lower.includes("ai") || lower.includes("automation") || lower.includes("chatbot") || lower.includes("автоматиз")) {
    return "Our AI solutions help businesses reduce costs by 30-60% and boost efficiency. We build custom AI chatbots, business assistants, automated workflows, and integrate AI with your existing CRM. Most projects take 4-12 weeks. Want me to schedule a demo?";
  }
  if (lower.includes("market") || lower.includes("seo") || lower.includes("ads") || lower.includes("smm") || lower.includes("маркет")) {
    return "Our marketing team delivers results:\n\n📊 SEO — average +400% organic traffic in 6 months\n🎯 Google Ads — optimized campaigns with 3-5x ROAS\n📱 SMM — full social media management & content\n📝 Content — blog, email, video marketing\n\nWe start with a free audit of your current marketing. Interested?";
  }
  if (lower.includes("website") || lower.includes("web") || lower.includes("app") || lower.includes("develop") || lower.includes("mobile") || lower.includes("сайт") || lower.includes("приложен") || lower.includes("разработ")) {
    return "We build high-performance digital products:\n\n🌐 Websites — Next.js, React, 90+ PageSpeed\n⚡ Web Apps — full-stack with real-time features\n📱 Mobile Apps — iOS & Android (React Native)\n☁️ SaaS — subscription platforms built to scale\n🚀 MVP — rapid prototyping for startups\n\nWhat kind of project do you have in mind?";
  }
  if (lower.includes("launch") || lower.includes("app store") || lower.includes("google play") || lower.includes("публикац") || lower.includes("запуск")) {
    return "We handle the full app launch cycle — from App Store / Google Play compliance review to ASO optimization and launch marketing strategy. We've helped apps reach Top 10 in their categories. Ready to launch?";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("привет") || lower.includes("здравствуй") || lower.includes("добрий") || lower.includes("вітаю")) {
    return "Hey! 👋 I'm AI Pavlik, your virtual consultant at PavliSolution. I can tell you about our services, pricing, process, and help you get started. What would you like to know?";
  }
  if (lower.includes("contact") || lower.includes("call") || lower.includes("email") || lower.includes("связ") || lower.includes("контакт") || lower.includes("написати")) {
    return "You can reach us at:\n\n📧 hello@pavlisolution.com\n📞 +1 (555) 123-4567\n\nOr fill out the form on our Contact page — we typically respond within 2 hours during business days. Want me to take you there?";
  }
  if (lower.includes("thank") || lower.includes("спасибо") || lower.includes("дякую")) {
    return "You're welcome! 😊 Feel free to ask anything else or book a free consultation at pavlisolution.com/contact. We're here to help your business grow!";
  }

  return "Great question! I'd love to help you with that. Our team specializes in AI automation, digital marketing, software development, and app launches. Could you tell me more about your project or business goals? I'll point you in the right direction.";
}

function formatTime(): string {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function AiPavlik() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [promoDismissed, setPromoDismissed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      text: "Hi! 👋 I'm AI Pavlik — your virtual AI consultant. Ask me anything about our services, pricing, or how we can help grow your business.",
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Promo bubble: appear after 4s, auto-hide after 12s
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isOpen && !promoDismissed) {
        setShowPromo(true);
      }
    }, 4000);

    return () => clearTimeout(showTimer);
  }, [isOpen, promoDismissed]);

  useEffect(() => {
    if (!showPromo) return;
    const hideTimer = setTimeout(() => setShowPromo(false), 12000);
    return () => clearTimeout(hideTimer);
  }, [showPromo]);

  const handlePromoClick = () => {
    setShowPromo(false);
    setPromoDismissed(true);
    setIsOpen(true);
  };

  const dismissPromo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPromo(false);
    setPromoDismissed(true);
  };

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: text.trim(),
      time: formatTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        role: "ai",
        text: getAiResponse(text),
        time: formatTime(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, delay);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Promo Bubble */}
      <AnimatePresence>
        {showPromo && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            onClick={handlePromoClick}
            style={{
              position: "fixed",
              bottom: "104px",
              right: "28px",
              zIndex: 9998,
              width: "320px",
              maxWidth: "calc(100vw - 56px)",
              padding: "22px 20px 22px 22px",
              borderRadius: "20px",
              background: "rgba(11,15,26,0.92)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid rgba(91,140,255,0.15)",
              boxShadow: "0 0 40px rgba(91,140,255,0.1), 0 16px 48px rgba(0,0,0,0.4)",
              cursor: "pointer",
            }}
          >
            {/* Close button */}
            <button
              onClick={dismissPromo}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4B5563",
                transition: "all 0.2s",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              {/* AI Avatar with glow */}
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 16px rgba(91,140,255,0.3)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B0F1A" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 13 22h-2a7 7 0 0 1-6.73-3H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  <circle cx="9.5" cy="14.5" r="1.5" fill="#0B0F1A" />
                  <circle cx="14.5" cy="14.5" r="1.5" fill="#0B0F1A" />
                </svg>
              </div>

              <div style={{ flex: 1, paddingRight: "12px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "6px", lineHeight: 1.3 }}>
                  AI Pavlik is online
                </p>
                <p style={{ fontSize: "12.5px", color: "#9CA3AF", lineHeight: 1.55, marginBottom: "10px" }}>
                  Our AI agent, trained on all PavliSolution services, is ready to consult you in real time — pricing, timelines, strategy.
                </p>
                <span style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#5B8CFF",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}>
                  Ask a question
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Bottom glow line */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: "20px",
              right: "20px",
              height: "2px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, transparent 0%, #5B8CFF 30%, #7CF7C9 70%, transparent 100%)",
              opacity: 0.4,
            }} />

            {/* Arrow pointing to button */}
            <div style={{
              position: "absolute",
              bottom: "-8px",
              right: "38px",
              width: "16px",
              height: "16px",
              background: "rgba(11,15,26,0.92)",
              border: "1px solid rgba(91,140,255,0.15)",
              borderTop: "none",
              borderLeft: "none",
              transform: "rotate(45deg)",
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setShowPromo(false);
              setPromoDismissed(true);
            }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 9998,
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 30px rgba(91,140,255,0.35), 0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B0F1A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {/* Pulse ring */}
            <span style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              border: "2px solid rgba(91,140,255,0.4)",
              animation: "chat-pulse 2s ease-out infinite",
            }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 9999,
              width: "400px",
              maxWidth: "calc(100vw - 32px)",
              height: "580px",
              maxHeight: "calc(100vh - 56px)",
              borderRadius: "24px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: "rgba(11,15,26,0.95)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(91,140,255,0.12), 0 25px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "20px 20px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(255,255,255,0.02)",
            }}>
              {/* AI Avatar */}
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 20px rgba(91,140,255,0.25)",
                position: "relative",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B0F1A" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 13 22h-2a7 7 0 0 1-6.73-3H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  <circle cx="9.5" cy="14.5" r="1.5" fill="#0B0F1A" />
                  <circle cx="14.5" cy="14.5" r="1.5" fill="#0B0F1A" />
                </svg>
                {/* Online indicator */}
                <span style={{
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#7CF7C9",
                  border: "2px solid #0B0F1A",
                  boxShadow: "0 0 8px rgba(124,247,201,0.5)",
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
                  {AI_NAME}
                </h3>
                <p style={{ fontSize: "12px", color: "#7CF7C9", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7CF7C9", animation: "chat-glow 2s ease-in-out infinite" }} />
                  Online — AI Consultant
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s",
                  color: "#6B7280",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }} className="chat-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.role === "ai" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <div style={{
                        width: "22px", height: "22px", borderRadius: "7px",
                        background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#0B0F1A" stroke="none">
                          <circle cx="9.5" cy="14.5" r="2" />
                          <circle cx="14.5" cy="14.5" r="2" />
                          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7v1H3v-1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                        </svg>
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 600, color: "#5B8CFF" }}>{AI_NAME}</span>
                      <span style={{ fontSize: "10px", color: "#374151" }}>{msg.time}</span>
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "14px 18px",
                      borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                      ...(msg.role === "user"
                        ? {
                            background: "linear-gradient(135deg, #5B8CFF 0%, #4A7AEE 100%)",
                            color: "#fff",
                          }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            color: "#D1D5DB",
                          }),
                    }}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <span style={{ fontSize: "10px", color: "#374151", marginTop: "4px", marginRight: "4px" }}>{msg.time}</span>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "7px",
                    background: "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#0B0F1A" stroke="none">
                      <circle cx="9.5" cy="14.5" r="2" />
                      <circle cx="14.5" cy="14.5" r="2" />
                    </svg>
                  </div>
                  <div style={{
                    padding: "14px 18px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                    <span className="typing-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5B8CFF", animationDelay: "0ms" }} />
                    <span className="typing-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5B8CFF", animationDelay: "200ms" }} />
                    <span className="typing-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5B8CFF", animationDelay: "400ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (only if 1 message) */}
            {messages.length === 1 && (
              <div style={{
                padding: "0 16px 12px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "20px",
                      background: "rgba(91,140,255,0.08)",
                      border: "1px solid rgba(91,140,255,0.15)",
                      color: "#5B8CFF",
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              style={{
                padding: "16px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AI Pavlik..."
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: input.trim()
                    ? "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: input.trim() ? "none" : "1px solid rgba(255,255,255,0.06)",
                  cursor: input.trim() ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.3s",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={input.trim() ? "#0B0F1A" : "#374151"} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
