// src/pages/Why.jsx
import React from "react";
import WhyCard from "../components/WhyCard";

/* Professional SVG icons (keeps color via currentColor) */
const IconInnovate = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden>
    <title>Innovative solutions</title>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M4.9 4.9l2.8 2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);
const IconHolistic = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden>
    <title>Holistic Solutions</title>
    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconExpertise = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden>
    <title>Expertise</title>
    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16 4.5 20l2-7L1 9h7l3-7z" stroke="currentColor" strokeWidth="0.9" fill="none" />
  </svg>
);

export default function Why() {
  const cards = [
    {
      title: "Innovative Solutions",
      text: "We provide cutting-edge technology tailored to business goals — prototypes that become production.",
      icon: IconInnovate,
    },
    {
      title: "Holistic Delivery",
      text: "End-to-end partnership: ideation, development, deployment and post-launch optimization.",
      icon: IconHolistic,
    },
    {
      title: "Empowered by Expertise",
      text: "A cross-functional team combining domain knowledge with engineering excellence and clear SLAs.",
      icon: IconExpertise,
    },
  ];

  return (
    <main style={{ paddingTop: 18 }} className="container">
      <header className="reveal" style={{ marginBottom: 18 }}>
        <h2>Why Choose Us</h2>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          We partner with teams to deliver measurable outcomes — faster deployments, reliable systems and high ROI.
        </p>
      </header>

      <section style={{ marginTop: 18 }}>
        <div className="why-grid">
          {cards.map((c, i) => (
            <WhyCard key={c.title} index={i + 1} title={c.title} text={c.text} icon={c.icon} />
          ))}
        </div>
      </section>

      {/* CTA — not a footer. Encourages the user to contact or request a consultation */}
      <section style={{ marginTop: 28 }} className="reveal">
        <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: "0 0 6px 0" }}>Ready to discuss a project?</h3>
            <div style={{ color: "var(--muted)" }}>Book a quick call and we'll propose a pragmatic roadmap.</div>
          </div>

          <div>
            <a href="/contact" style={{ textDecoration: "none" }}>
              <button className="cta">Request a consultation</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
