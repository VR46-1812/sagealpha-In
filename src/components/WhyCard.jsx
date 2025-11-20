// src/components/WhyCard.jsx
import React, { useRef, useEffect } from "react";

/**
 * WhyCard
 * Props:
 *  - index (number) - 1,2,3...
 *  - title (string)
 *  - text (string)
 *  - icon (JSX) optional
 */
export default function WhyCard({ index, title, text, icon }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const rx = (-ny * 6).toFixed(2);
      const ry = (nx * 6).toFixed(2);
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)`;
      const inner = el.querySelector(".why-card-inner");
      if (inner) inner.style.transform = `translate3d(${nx * 8}px, ${-ny * 8}px, 0)`;
    }

    function onLeave() {
      el.style.transform = "";
      const inner = el.querySelector(".why-card-inner");
      if (inner) inner.style.transform = "";
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", (ev) => onMove(ev.touches[0]), { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article
      ref={ref}
      className="why-card reveal"
      tabIndex={0}
      aria-label={`${index} - ${title}`}
      role="article"
      style={{ willChange: "transform" }}
    >
      <div className="why-card-inner">
        <div className="why-card-left">
          <div className="why-number">{String(index).padStart(2, "0")}</div>
          <div className="why-icon" aria-hidden>
            {icon || (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            )}
          </div>
        </div>

        <div className="why-card-content">
          <h4 style={{ margin: 0 }}>{title}</h4>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>{text}</p>
        </div>
      </div>
    </article>
  );
}
