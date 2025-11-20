// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Contact page with interactive embedded Google Maps and Formspree integration.
 *
 *
 * The map preview is an iframe centered on the address below. Clicking anywhere
 * on the map opens Google Maps in a new tab/app for full interaction.
 */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwpaydlj"; // <-- update this

// Use either a human-readable address or lat,lng. Lat/lng is more precise.
 const ADDRESS_TEXT = `SNo 8 1A 1B Office No 110, ANP Commerce Center Shivar gardan, Pimpri Saudagar, Pune, Maharashtra`;
// Example lat/lng fallback (uncomment and use if you prefer coordinates):
// const LAT = 18.6075, LON = 73.8078;
// const MAP_QUERY = `${LAT},${LON}`;

const LAT = 18.595763914395885;
const LON = 73.78771371378768;
const mapsQuery = `${LAT},${LON}`; // no encodeURIComponent needed for numbers
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const iframeSrc = `https://www.google.com/maps?q=${mapsQuery}&z=17&output=embed`;



 const MAP_QUERY = encodeURIComponent(ADDRESS_TEXT);
 const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
 const IFRAME_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;

export default function Contact() {
  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    _gotcha: "",
  });

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  const [chars, setChars] = useState(0);
  const [shake, setShake] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    // autosize initial
    autosize();
  }, []);

  useEffect(() => {
    setChars(form.message.length);
  }, [form.message]);

  function autosize() {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(520, ta.scrollHeight)}px`;
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (name === "message") {
      setTimeout(autosize, 0);
    }
  }

  function simpleValidate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email check
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) return "Please enter a valid email address.";
    if (form.message.trim().length < 6) return "Please write a longer message (min 6 chars).";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, ok: null, msg: "" });

    // honeypot
    if (form._gotcha) {
      setStatus({ loading: false, ok: false, msg: "Spam detected." });
      return;
    }

    const err = simpleValidate();
    if (err) {
      setStatus({ loading: false, ok: false, msg: err });
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
        source: "SageAlpha - Contact form",
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ loading: false, ok: true, msg: "Message sent — thank you!" });
        setForm({ name: "", email: "", phone: "", subject: "", message: "", _gotcha: "" });
        setChars(0);
        if (textareaRef.current) textareaRef.current.style.height = "140px";
        setTimeout(() => setStatus({ loading: false, ok: null, msg: "" }), 4000);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ loading: false, ok: false, msg: data?.error || "Submission failed. Try again later." });
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus({ loading: false, ok: false, msg: "Network error — please try again." });
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <section style={{ paddingTop: 18 }} className="container">
      <h2 className="reveal">Contact Us</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 28, marginTop: 18 }}>
        {/* LEFT: Form */}
        <div>
          <form
            className={`contact-form reveal ${shake ? "shake" : ""}`}
            onSubmit={handleSubmit}
            noValidate
            aria-live="polite"
          >
            <FloatingField name="name" label="Name" value={form.name} onChange={onChange} required />
            <FloatingField name="email" label="Email" value={form.email} onChange={onChange} type="email" required />
            <FloatingField name="phone" label="Phone" value={form.phone} onChange={onChange} />
            <FloatingField name="subject" label="Subject" value={form.subject} onChange={onChange} />

            <div style={{ position: "relative", marginBottom: 12 }}>
              <label className={`floating-label ${form.message ? "filled" : ""}`} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                ref={textareaRef}
                className="textarea"
                placeholder=""
                value={form.message}
                onChange={onChange}
                style={{ minHeight: 200, width: "100%" }}
                required
              />
              <div style={{ fontSize: 12, color: "var(--muted)", position: "absolute", right: 8, bottom: 8 }}>
                {chars} chars
              </div>
            </div>

            {/* honeypot - keep hidden */}
            <input name="_gotcha" value={form._gotcha} onChange={onChange} style={{ display: "none" }} autoComplete="off" />

            <div style={{ marginTop: 12, display: "flex", gap: 12, alignItems: "center" }}>
              <button type="submit" className="auth-btn-primary" disabled={status.loading}>
                {status.loading ? (
                  <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                    <Spinner /> Sending...
                  </span>
                ) : (
                  <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                    Send Message{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12h14" stroke="#042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" stroke="#042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </button>

              <div aria-live="polite" style={{ minHeight: 22 }}>
                {status.ok === true && <span style={{ color: "#7EE787" }}>{status.msg}</span>}
                {status.ok === false && <span style={{ color: "#FFB3B3" }}>{status.msg}</span>}
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT: Company info + Map */}
        <aside style={{ color: "var(--muted)" }}>
          <div
            style={{
              padding: 18,
              borderRadius: 12,
              background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              boxShadow: "var(--shadow)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Company Info</h3>
            <div style={{ marginTop: 8 }}>Phone: +91 7498958281</div>
            <div>Email: sagealpha.ai@sagealpha.ai</div>
            <div style={{ marginTop: 12 }}>
              Address:
              <br />
              {ADDRESS_TEXT}
            </div>
          </div>

          <div style={{ marginTop: 20, textAlign: "center" }}>
            <div style={{ marginBottom: 8, color: "var(--muted)" }}>Location</div>

            <div className="map-wrap" style={{ borderRadius: 10, overflow: "hidden", boxShadow: "inset 0 0 40px rgba(0,0,0,0.4)" }}>
              {/* iframe preview */}
              <iframe
                title="SageAlpha location"
                src={IFRAME_SRC}
                width="100%"
                height="180"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* overlay link: clicking anywhere opens Google Maps in new tab/app */}
              <a
                className="map-overlay-link"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Google Maps"
                title="Open in Google Maps"
                style={{ position: "absolute", inset: 0, zIndex: 5, display: "block" }}
              />
            </div>

            <div style={{ marginTop: 8, display: "flex", gap: 8, justifyContent: "center" }}>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-2)", fontWeight: 700 }}>
                Open in Google Maps
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)" }}
              >
                Directions
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- helper components ---------------- */

function FloatingField({ name, label, value, onChange, type = "text", required = false }) {
  return (
    <div style={{ position: "relative", marginBottom: 12 }}>
      <label className={`floating-label ${value ? "filled" : ""}`} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        placeholder=""
        required={required}
        autoComplete={name === "email" ? "email" : "off"}
        style={{ width: "100%" }}
      />
    </div>
  );
}

function Spinner() {
  return (
    <svg width="18" height="18" viewBox="0 0 50 50" aria-hidden>
      <circle cx="25" cy="25" r="20" stroke="#023" strokeWidth="5" strokeLinecap="round" strokeDasharray="31.4 31.4" fill="none">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
