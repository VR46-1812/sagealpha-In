// src/pages/About.jsx
import React from "react";
import AboutCard from "../components/AboutCard";

/**
 * About page - professional icons (no emoji)
 * Replace the file src/pages/About.jsx with this content.
 */

const IconSpark = (
  <svg width="40" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
    <title>Innovation</title>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M12 18v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M4.93 4.93l2.83 2.83" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M16.24 16.24l2.83 2.83" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const IconLight = (
  <svg width="40" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
    <title>Philosophy</title>
    <path d="M9 18h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M7 11a5 5 0 1 0 10 0 5 5 0 0 0-10 0z" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

const IconCompass = (
  <svg width="40" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
    <title>Vision</title>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M12 8l4 2-4 6-4-2 4-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const IconGear = (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
    <title>Engineering</title>
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M19.4 15a7 7 0 0 0 0-6l2.1-1.6-2-3.4-2.6.7a7 7 0 0 0-4-1.6L12 2h-2l-.9 1.1a7 7 0 0 0-4 1.6L2.5 5.8 1 9.2 3.1 10.8a7 7 0 0 0 0 6L1 18.6 2.5 22l2.6-.7a7 7 0 0 0 4 1.6L10 22h2l.9-1.1a7 7 0 0 0 4-1.6l2.6.7 1.5-3.4L19.4 15z" stroke="currentColor" strokeWidth="0.9" fill="none"/>
  </svg>
);

const IconChart = (
  <svg width="40" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
    <title>Data & ML</title>
    <path d="M4 20v-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10 20v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M16 20v-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M22 20v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconShield = (
  <svg width="40" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
    <title>Security & Cloud</title>
    <path d="M12 3l7 3v5c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default function About() {
  const cards = [
    {
      title: "Our Story: A Tapestry of Innovation",
      text: "We began with a curiosity to automate and optimize processes across industries — small experiments that scaled into production solutions.",
      icon: IconSpark,
    },
    {
      title: "Our Philosophy: Illuminating Possibilities",
      text: "Human-centered design plus rigorous engineering: we build products people love and systems that last.",
      icon: IconLight,
    },
    {
      title: "Our Vision: Lighting the Way Forward",
      text: "To be the compass guiding enterprises through the AI era with practical roadmaps and measurable outcomes.",
      icon: IconCompass,
    },
    {
      title: "Engineering Excellence",
      text: "Modular architecture, CI/CD pipelines, observability and cost-optimized deployments — quality at scale.",
      icon: IconGear,
    },
    {
      title: "Data & ML",
      text: "From data engineering and feature stores to model serving and MLOps — we make ML production-ready.",
      icon: IconChart,
    },
    {
      title: "Cloud & Security",
      text: "Cloud-first architecture, secure-by-design implementations, and infra that grows with you.",
      icon: IconShield,
    },
  ];

  return (
    <main style={{ paddingTop: 18 }} className="container">
      <header style={{ marginBottom: 18 }}>
        <h2 className="reveal">About Us</h2>
        <p className="reveal" style={{ color: "var(--muted)", marginTop: 8 }}>
          Welcome to SageAlpha AI Solutions — we design delightful products and ship reliable AI systems.
        </p>
      </header>

      <section style={{ marginTop: 18 }}>
        <div className="about-grid">
          {cards.map((c) => (
            <AboutCard key={c.title} title={c.title} text={c.text} icon={c.icon} />
          ))}
        </div>
      </section>

      {/* <section style={{ marginTop: 28 }} className="reveal">
        <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: "0 0 6px 0" }}>Want a custom solution?</h3>
            <div style={{ color: "var(--muted)" }}>Tell us about your challenge — we’ll turn it into a roadmap.</div>
          </div>

          <div>
            <a href="/contact" style={{ textDecoration: "none" }}>
              <button className="cta">Request a consultation</button>
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
