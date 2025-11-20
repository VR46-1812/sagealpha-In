// src/pages/Industries.jsx
import React from "react";
import IndustryCard from "../components/IndustryCard";

/**
 * Industries page - modern grid of IndustryCard items.
 * Replace existing src/pages/Industries.jsx with this file.
 */

const icons = {
  finance: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Finance</title>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 10h8M8 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Retail</title>
      <path d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Healthcare</title>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.1" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  transport: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Transportation</title>
      <rect x="3" y="7" width="14" height="7" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 16v2M15 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 10h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  realestate: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Real Estate</title>
      <path d="M3 12l9-7 9 7v7a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1v-7z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Education</title>
      <path d="M12 3l9 4-9 4-9-4 9-4z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 11v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  hospitality: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Hospitality</title>
      <path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  manufacturing: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Manufacturing</title>
      <path d="M3 7h18v10H3z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7 7v-2M12 7v-3M17 7v-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  government: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Government</title>
      <path d="M4 10h16M12 3v7M6 21h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M3 10l9-7 9 7" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  ),
  automotive: (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden>
      <title>Automobile</title>
      <path d="M3 12h18v4a2 2 0 0 1-2 2h-1v-2H6v2H5a2 2 0 0 1-2-2v-4z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M5 12l1-4h12l1 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

export default function Industries() {
  const items = [
    { key: "finance", title: "Finance & Banking" },
    { key: "retail", title: "Retail & E-Commerce" },
    { key: "healthcare", title: "Healthcare" },
    { key: "transport", title: "Transportation & Logistics" },
    { key: "realestate", title: "Real Estate" },
    { key: "education", title: "Education" },
    { key: "hospitality", title: "Hospitality" },
    { key: "manufacturing", title: "Manufacturing" },
    { key: "government", title: "Government & Public Sector" },
    { key: "automotive", title: "Automobile" },
  ];

  return (
    <main style={{ paddingTop: 18 }} className="container">
      <header style={{ marginBottom: 18 }}>
        <h2 className="reveal">Industries We Serve</h2>
        <p className="reveal" style={{ color: "var(--muted)", marginTop: 8 }}>
          We deliver domain-specific solutions and production-grade ML/analytics across multiple verticals.
        </p>
      </header>

      <section style={{ marginTop: 18 }}>
        <div className="industry-grid">
          {items.map((it) => (
            <IndustryCard
              key={it.key}
              title={it.title}
              desc=""
              icon={icons[it.key] || icons.finance}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 28 }} className="reveal">
        <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: "0 0 6px 0" }}>Want to discuss your industry use-case?</h3>
            <div style={{ color: "var(--muted)" }}>Tell us your constraints and goals — we'll propose a tailored approach.</div>
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
