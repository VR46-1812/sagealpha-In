// src/pages/Services.jsx
import React from "react";
import ServiceCard from "../components/ServiceCard";

/**
 * Floating glass cards, vector icons, reveal animations
 */

const icons = {
  data: (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden>
      <title>Data Insights</title>
      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden>
      <title>AI & ML</title>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  qa: (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden>
      <title>QA Excellence</title>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden>
      <title>DevOps</title>
      <path
        d="M7 8a5 5 0 1 1 0 8m10-8a5 5 0 1 0 0 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden>
      <title>Cloud Solutions</title>
      <path
        d="M6 15a4 4 0 0 1 0-8 5 5 0 0 1 10-.5A4.5 4.5 0 0 1 17 15H6z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" aria-hidden>
      <title>Custom Software</title>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

export default function Services() {
  const items = [
    {
      key: "data",
      title: "Data-Driven Insights",
      desc: "Transform raw data into strategic intelligence.",
    },
    {
      key: "ai",
      title: "AI & Machine Learning Innovations",
      desc: "Custom ML models designed for business impact.",
    },
    {
      key: "qa",
      title: "Quality Assurance Excellence",
      desc: "Testing frameworks ensuring reliability.",
    },
    {
      key: "devops",
      title: "Efficient DevOps & MLOps",
      desc: "CI/CD pipelines and model deployment practices.",
    },
    {
      key: "cloud",
      title: "Cloud Solutions for Scalable Growth",
      desc: "Cloud-native architectures and managed deployments.",
    },
    {
      key: "custom",
      title: "Custom Software Engineering",
      desc: "Tailored product and system integrations.",
    },
  ];

  return (
    <main style={{ paddingTop: 18 }} className="container">
      <header className="reveal" style={{ marginBottom: 18 }}>
        <h2>Our Professional Services For You</h2>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Solutions engineered for performance, scalability, and real-world impact.
        </p>
      </header>

      <section style={{ marginTop: 18 }}>
        <div className="service-grid">
          {items.map((it) => (
            <ServiceCard
              key={it.key}
              title={it.title}
              desc={it.desc}
              icon={icons[it.key]}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }} className="reveal">
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 style={{ margin: "0 0 6px 0" }}>Need a tailored solution?</h3>
            <div style={{ color: "var(--muted)" }}>
              Share your use case — we’ll design a custom roadmap.
            </div>
          </div>

          <a href="/contact" style={{ textDecoration: "none" }}>
            <button className="cta">Request a Consultation</button>
          </a>
        </div>
      </section>
    </main>
  );
}
