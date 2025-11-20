// src/components/AboutCard.jsx
import React, { useRef, useEffect } from "react";

/**
 * AboutCard - professional version (accepts an SVG JSX icon)
 */
export default function AboutCard({ title, text, icon }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const rotateX = (-ny * 6).toFixed(2);
      const rotateY = (nx * 8).toFixed(2);

      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
      const inner = el.querySelector(".about-card-inner");
      if (inner) inner.style.transform = `translate3d(${nx * 8}px, ${-ny * 8}px, 0)`;
    }

    function onLeave() {
      el.style.transform = "";
      const inner = el.querySelector(".about-card-inner");
      if (inner) inner.style.transform = "";
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", (e) => onMove(e.touches[0]), { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article
      ref={ref}
      className="about-card reveal"
      tabIndex={0}
      aria-label={title}
      role="article"
      style={{ willChange: "transform" }}
    >
      <div className="about-card-inner">
        <div className="about-card-icon" aria-hidden>
          {/* icon is a JSX <svg> element passed from the parent */}
          {icon || (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </div>

        <div className="about-card-content">
          <h4 style={{ margin: 0 }}>{title}</h4>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>{text}</p>
          <div style={{ marginTop: 12 }}>
            <button className="cta small" aria-label={`Learn more about ${title}`}>Learn more</button>
          </div>
        </div>
      </div>
    </article>
  );
}
