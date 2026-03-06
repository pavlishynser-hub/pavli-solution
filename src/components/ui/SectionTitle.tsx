type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  accent = true,
}: SectionTitleProps) {
  return (
    <div style={{ marginBottom: "64px", textAlign: centered ? "center" : "left" }}>
      {accent && (
        <div style={{
          width: "48px", height: "3px", borderRadius: "2px",
          background: "linear-gradient(90deg, #5B8CFF, #7CF7C9)",
          marginBottom: "24px",
          ...(centered ? { margin: "0 auto 24px" } : {}),
        }} />
      )}
      <h2 style={{
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 800,
        marginBottom: subtitle ? "16px" : "0",
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        color: "#fff",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: "#4B5563",
          fontSize: "17px",
          maxWidth: "520px",
          margin: centered ? "0 auto" : "0",
          lineHeight: 1.65,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
