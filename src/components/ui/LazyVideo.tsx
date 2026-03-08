"use client";

import { useState, useRef, useEffect } from "react";

type LazyVideoProps = {
  src: string;
  label?: string;
  style?: React.CSSProperties;
};

export default function LazyVideo({ src, label = "Watch demo", style }: LazyVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: playing ? "default" : "pointer",
        ...style,
      }}
      onClick={!playing ? handlePlay : undefined}
    >
      {/* Poster / placeholder */}
      {!playing && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "14px",
          background: "linear-gradient(135deg, #0d1220 0%, #141c2e 50%, #0d1a1e 100%)",
        }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "15%", left: "10%", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(91,140,255,0.06)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "20%", right: "10%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(124,247,201,0.05)", filter: "blur(40px)" }} />

          {/* Play button */}
          <div style={{
            position: "relative", zIndex: 2,
            width: "64px", height: "64px", borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 40px rgba(91,140,255,0.15)",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span style={{ position: "relative", zIndex: 2, fontSize: "12px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
            {label}
          </span>
        </div>
      )}

      {/* Video element — preloads metadata only */}
      {inView && (
        <video
          ref={videoRef}
          src={src}
          controls={playing}
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "20px",
            background: "#0d1220",
          }}
        />
      )}

      {/* Fallback if not in view yet */}
      {!inView && (
        <div style={{ width: "100%", aspectRatio: "9 / 16", background: "linear-gradient(135deg, #0d1220, #141c2e)" }} />
      )}
    </div>
  );
}
