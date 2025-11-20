// src/components/IndustryCard.jsx
import React, { useRef, useEffect } from "react";

/**
 * IndustryCard - small, professional card with tilt + parallax.
 */
export default function IndustryCard({ title, desc = "", icon }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      const rx = (-ny * 5).toFixed(2);
      const ry = (nx * 6).toFixed(2);

      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)`;

      const inner = el.querySelector(".industry-card-inner");
      if (inner) inner.style.transform = `translate3d(${nx * 6}px, ${-ny * 6}px, 0)`;
    }

    function onLeave() {
      el.style.transform = "";
      const inner = el.querySelector(".industry-card-inner");
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
    <article ref={ref} className="industry-card reveal" tabIndex={0} aria-label={title} role="article">
      <div className="industry-card-inner">
        <div className="industry-icon" aria-hidden>
          {icon}
        </div>

        <div className="industry-content">
          <h4 style={{ margin: 0 }}>{title}</h4>
          {desc && <p style={{ marginTop: 8, color: "var(--muted)", fontSize: 14 }}>{desc}</p>}
        </div>
      </div>
    </article>
  );
}
