// src/components/ServiceCard.jsx
import React, { useRef, useEffect } from "react";

/**
 * Modern Service Card (floating tilt card + inner parallax)
 * Props:
 *  - title
 *  - desc
 *  - icon (JSX <svg>)
 */
export default function ServiceCard({ title, desc, icon }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);

      const rx = (-ny * 6).toFixed(2);
      const ry = (nx * 6).toFixed(2);

      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(5px)`;

      const inner = el.querySelector(".service-card-inner");
      if (inner) inner.style.transform = `translate3d(${nx * 8}px, ${-ny * 8}px, 0)`;
    }

    function onLeave() {
      el.style.transform = "";
      const inner = el.querySelector(".service-card-inner");
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
      className="service-card reveal"
      tabIndex={0}
      aria-label={title}
      role="article"
    >
      <div className="service-card-inner">
        <div className="service-icon" aria-hidden>
          {icon}
        </div>

        <div className="service-content">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </article>
  );
}
