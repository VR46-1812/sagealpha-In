import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/* Global Motion / Reveal + small pointer parallax */
function setupMotion() {
  if (typeof window === "undefined") return;

  // IntersectionObserver for reveal
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12 });

  const observe = (root = document) => {
    root.querySelectorAll('.reveal, .pop-in, .testimonial, .fade-section').forEach(el => {
      if (!el.classList.contains('visible')) io.observe(el);
    });
  };
  observe();

  // observe mutations (React mounts)
  const mo = new MutationObserver(() => observe(document));
  mo.observe(document.body, { childList: true, subtree: true });

  // navbar shadow/scrolled toggle
  const nav = document.querySelector('.navbar');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // small pointer parallax for hero-card images
  const hero = document.querySelector('.hero-card');
  if (hero) {
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const img = hero.querySelector('.hero-visual');
      if (img) {
        img.style.transform = `translate3d(${dx * 12}px, ${-dy * 12}px, 0)`;
      }
    };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', () => {
      const img = hero.querySelector('.hero-visual');
      if (img) img.style.transform = '';
    });
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

setTimeout(setupMotion, 120);
