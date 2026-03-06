"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";

const presetAmounts = [500, 1000, 2000, 3000, 5000, 10000];

const WISE_DETAILS = {
  name: "PavliSolution LLC",
  accountNumber: "8310 0000 1234 5678",
  routingACH: "026073150",
  swift: "CMFGUS33",
  reference: "PS-INV-",
};

function CopyBtn({ text, copyLabel, copiedLabel }: { text: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: "5px 12px", borderRadius: "8px",
        background: copied ? "rgba(124,247,201,0.1)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${copied ? "rgba(124,247,201,0.2)" : "rgba(255,255,255,0.06)"}`,
        color: copied ? "#7CF7C9" : "#9CA3AF",
        fontSize: "11px", fontWeight: 500, cursor: "pointer",
        transition: "all 0.2s", whiteSpace: "nowrap" as const,
      }}
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}

export default function PaymentPage() {
  const t = useTranslations("payment");
  const [amount, setAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [project, setProject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [activeMethod, setActiveMethod] = useState<"card" | "bank" | "apple">("card");

  const finalAmount = isCustom ? Number(customAmount) || 0 : amount || 0;

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", borderRadius: "12px",
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff", fontSize: "14px", outline: "none", transition: "border-color 0.2s",
  };

  const cardStyle: React.CSSProperties = {
    padding: "32px", borderRadius: "20px",
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "20px",
  };

  const bankRows = [
    { label: t("bankName"), value: WISE_DETAILS.name },
    { label: t("bankAccount"), value: WISE_DETAILS.accountNumber },
    { label: t("bankRouting") + " (ACH)", value: WISE_DETAILS.routingACH },
    { label: t("bankSwift"), value: WISE_DETAILS.swift },
    { label: t("bankReference"), value: `${WISE_DETAILS.reference}${project || "DEPOSIT"}` },
  ];

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 20px 96px" }}>

        {/* Amount Selection */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={cardStyle}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>
            {t("amountLabel")} ({t("currency")})
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "12px" }}>
            {presetAmounts.map((a) => {
              const active = !isCustom && amount === a;
              return (
                <button
                  key={a}
                  onClick={() => { setAmount(a); setIsCustom(false); }}
                  style={{
                    padding: "16px 8px", borderRadius: "14px",
                    background: active ? "linear-gradient(135deg, #5B8CFF 0%, #7CF7C9 100%)" : "rgba(255,255,255,0.04)",
                    border: active ? "none" : "1px solid rgba(255,255,255,0.08)",
                    color: active ? "#0B0F1A" : "#D1D5DB",
                    fontSize: "18px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                  }}
                >
                  ${a.toLocaleString()}
                </button>
              );
            })}
          </div>
          <div
            onClick={() => setIsCustom(true)}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "14px 16px", borderRadius: "14px",
              background: isCustom ? "rgba(91,140,255,0.06)" : "rgba(255,255,255,0.02)",
              border: `1px solid ${isCustom ? "rgba(91,140,255,0.2)" : "rgba(255,255,255,0.06)"}`,
              cursor: "text", transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: "18px", fontWeight: 700, color: isCustom ? "#5B8CFF" : "#374151" }}>$</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setIsCustom(true); }}
              onFocus={() => setIsCustom(true)}
              placeholder={t("customAmount")}
              style={{ flex: 1, background: "none", border: "none", color: "#fff", fontSize: "18px", fontWeight: 700, outline: "none" }}
            />
          </div>
        </motion.div>

        {/* Client Info */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={cardStyle}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("nameLabel")}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("emailLabel")}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("emailPlaceholder")} style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("projectLabel")}</label>
            <input type="text" value={project} onChange={(e) => setProject(e.target.value)} placeholder={t("projectPlaceholder")} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9CA3AF", marginBottom: "8px" }}>{t("notesLabel")}</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder={t("notesPlaceholder")} style={{ ...inputStyle, resize: "none" as const }} />
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={cardStyle}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>{t("methodTitle")}</h2>

          {/* Method Tabs */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
            {([
              { id: "card" as const, label: t("cardTitle"), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg> },
              { id: "bank" as const, label: t("bankTitle"), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg> },
              { id: "apple" as const, label: t("applePayTitle"), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M12 12h.01" /></svg> },
            ]).map((m) => {
              const active = activeMethod === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMethod(m.id)}
                  style={{
                    flex: 1, padding: "14px 8px", borderRadius: "12px",
                    background: active ? "rgba(91,140,255,0.08)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${active ? "rgba(91,140,255,0.25)" : "rgba(255,255,255,0.06)"}`,
                    color: active ? "#5B8CFF" : "#6B7280",
                    fontSize: "12px", fontWeight: 600, cursor: "pointer",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  {m.icon}
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Card */}
          {activeMethod === "card" && (
            <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
                {["Visa", "Mastercard", "Amex"].map((b) => (
                  <span key={b} style={{ padding: "6px 14px", borderRadius: "8px", background: "rgba(255,255,255,0.06)", fontSize: "12px", fontWeight: 600, color: "#9CA3AF" }}>{b}</span>
                ))}
              </div>
              <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "24px" }}>{t("cardDesc")}</p>
              <button
                className="gradient-blue"
                style={{ width: "100%", padding: "16px", borderRadius: "14px", fontSize: "16px", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                {t("cardButton")} {finalAmount > 0 && `— $${finalAmount.toLocaleString()}`}
              </button>
            </div>
          )}

          {/* Bank */}
          {activeMethod === "bank" && (
            <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(124,247,201,0.08)", color: "#7CF7C9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>{t("bankDetails")}</p>
                  <p style={{ fontSize: "12px", color: "#6B7280" }}>{t("bankDesc")}</p>
                </div>
              </div>
              {bankRows.map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div>
                    <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>{row.label}</p>
                    <p style={{ fontSize: "14px", color: "#D1D5DB", fontFamily: "monospace", letterSpacing: "0.02em" }}>{row.value}</p>
                  </div>
                  <CopyBtn text={row.value} copyLabel={t("bankCopy")} copiedLabel={t("bankCopied")} />
                </div>
              ))}
              {finalAmount > 0 && (
                <div style={{ padding: "16px 0 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: "#6B7280" }}>Amount</span>
                  <span className="gradient-text" style={{ fontSize: "20px", fontWeight: 700 }}>${finalAmount.toLocaleString()}</span>
                </div>
              )}
            </div>
          )}

          {/* Apple / Google Pay */}
          {activeMethod === "apple" && (
            <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ padding: "8px 18px", borderRadius: "10px", background: "rgba(255,255,255,0.06)", fontSize: "13px", fontWeight: 600, color: "#D1D5DB" }}> Apple Pay</span>
                <span style={{ padding: "8px 18px", borderRadius: "10px", background: "rgba(255,255,255,0.06)", fontSize: "13px", fontWeight: 600, color: "#D1D5DB" }}>G Pay</span>
              </div>
              <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "24px" }}>{t("applePayDesc")}</p>
              <button style={{ width: "100%", padding: "16px", borderRadius: "14px", fontSize: "16px", fontWeight: 700, border: "none", cursor: "pointer", background: "#fff", color: "#0B0F1A" }}>
                {t("applePayButton")} {finalAmount > 0 && `— $${finalAmount.toLocaleString()}`}
              </button>
            </div>
          )}
        </motion.div>

        {/* Security */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ ...cardStyle, textAlign: "center", background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7CF7C9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#7CF7C9" }}>Secure Payment</span>
          </div>
          <p style={{ fontSize: "12px", color: "#6B7280", lineHeight: 1.6, marginBottom: "8px" }}>{t("secureNote")}</p>
          <p style={{ fontSize: "11px", color: "#374151" }}>{t("trustBadges")}</p>
        </motion.div>

        {/* Help */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#6B7280" }}>
            {t("needHelp")}{" "}
            <Link href="/contact" style={{ color: "#5B8CFF", textDecoration: "none", fontWeight: 500 }}>{t("contactUs")}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
