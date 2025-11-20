import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

// --- Hero + Client images ---
import heroImg from "../assets/hero-visual.jpg";
import clientImg from "../assets/testimonial/person-1.jpg";

// --- Core Services icons (Home Page ONLY) ---
const IconData = (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path d="M4 20v-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M10 20v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16 20v-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M22 20v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconML = (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.3" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const IconCloud = (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 15a4 4 0 0 1 0-8 5 5 0 0 1 10-.5A4.5 4.5 0 0 1 17 15H6z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export default function Home() {
  // These map directly into <ServiceCard />
  const services = [
    {
      title: "Data Engineering & BI",
      desc: "Reliable ETL, warehousing and dashboards.",
      icon: IconData,
    },
    {
      title: "ML Model Delivery",
      desc: "From prototype to production-grade models.",
      icon: IconML,
    },
    {
      title: "Cloud & MLOps",
      desc: "Automated CI/CD and scalable infra.",
      icon: IconCloud,
    },
  ];

  return (
    <main>
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero container">
        <div className="left">
          <div className="kicker reveal">Trusted · Scalable · Human-first</div>

          <h2 className="reveal">
            Designing delightful products with{" "}
            <span style={{ color: "var(--accent-2)" }}>AI</span> at the core
          </h2>

          <p className="reveal">
            We partner with product teams to take ideas to production fast — clean architecture,
            clear outcomes, and measurable ROI.
          </p>

          <div style={{ marginTop: 20, display: "flex", gap: 12 }} className="reveal">
            <Link to="/contact">
              <button className="cta">Talk to us</button>
            </Link>
            <Link to="/services">
              <button className="cta secondary">Explore services</button>
            </Link>
          </div>

          {/* Metrics */}
          <div style={{ display: "flex", gap: 18, marginTop: 26 }} className="reveal">
            <div style={{ minWidth: 120 }}>
              <div style={{ fontSize: 20, fontWeight: 800 }}>
                24<span style={{ color: "var(--muted)", fontWeight: 600, fontSize: 12 }}> /mo</span>
              </div>
              <div style={{ color: "var(--muted)" }}>Avg Deployment Time</div>
            </div>

            <div style={{ minWidth: 120 }}>
              <div style={{ fontSize: 20, fontWeight: 800 }}>
                98<span style={{ color: "var(--muted)", fontWeight: 600, fontSize: 12 }}>%</span>
              </div>
              <div style={{ color: "var(--muted)" }}>Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual-wrap">
          <div className="hero-card reveal pop-in">
            <img src={heroImg} alt="AI visual" className="hero-visual float" />
          </div>
        </div>
      </section>

      {/* ---------- CORE SERVICES ---------- */}
      <section className="container" style={{ marginTop: 40 }}>
        <h3 className="reveal">Core Services</h3>
        <p className="reveal" style={{ color: "var(--muted)" }}>
          We help you build robust data & ML systems with a product-first mindset.
        </p>

        <div className="grid services-grid" style={{ marginTop: 16 }}>
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* ---------- CLIENT STORY ---------- */}
      <section className="container" style={{ marginTop: 38 }}>
        <h3 className="reveal">Client story</h3>

        <div style={{ marginTop: 12 }} className="reveal">
          <div className="testimonial">
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div className="avatar" style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden" }}>
                <img
                  src={clientImg}
                  alt="client"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div>
                <div style={{ fontWeight: 800 }}>Priya S.</div>
                <div style={{ color: "var(--muted)" }}>CTO, Finovate</div>
              </div>
            </div>

            <p style={{ marginTop: 12, color: "var(--muted)" }}>
              “The SageAlpha team rebuilt our ML infra and reduced inference costs by 40% — they are
              pragmatic, fast and trusted partners.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
