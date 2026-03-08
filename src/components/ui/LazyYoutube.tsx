"use client";

import { useState, useRef, useEffect } from "react";

type LazyYoutubeProps = {
  videoId: string;
  title?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
};

export default function LazyYoutube({ videoId, title = "Video", width = "100%", height = "100%", style }: LazyYoutubeProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      ref={ref}
      onClick={() => setLoaded(true)}
      style={{
        position: "relative",
        width,
        height,
        cursor: loaded ? "default" : "pointer",
        overflow: "hidden",
        borderRadius: "20px",
        ...style,
      }}
    >
      {/* Gradient placeholder + thumbnail */}
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px",
          background: `linear-gradient(135deg, #0d1220 0%, #141c2e 50%, #0d1a1e 100%)`,
        }}>
          {/* Thumbnail as background if in view */}
          {inView && (
            <img
              src={thumbnailUrl}
              alt=""
              loading="lazy"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                opacity: 0.5,
                filter: "blur(1px)",
              }}
            />
          )}
          {/* Play button */}
          <div style={{
            position: "relative", zIndex: 2,
            width: "56px", height: "56px", borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 30px rgba(91,140,255,0.15)",
            transition: "all 0.3s ease",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span style={{ position: "relative", zIndex: 2, fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
            {title}
          </span>
        </div>
      )}

      {/* Iframe — loaded only on click */}
      {loaded && inView && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            border: "none",
          }}
        />
      )}
    </div>
  );
}
