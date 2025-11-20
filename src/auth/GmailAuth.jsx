import React from "react";

/**
 * Gmail auth mockup UI (not real authentication)
 */
export default function GmailAuth() {
  return (
    <section style={{ paddingTop: 6 }}>
      <h2>Login with Google (Mockup)</h2>
      <div style={{ maxWidth: 480 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: "#fff", color: "#000", display: "flex", justifyContent: "center", alignItems: "center" }}>G</div>
            <div>
              <div style={{ fontWeight: 700 }}>Use another account</div>
              <div style={{ color: "var(--muted)" }}>youremail@gmail.com</div>
            </div>
          </div>

          <button className="btn">Continue</button>
        </div>
      </div>
    </section>
  );
}
