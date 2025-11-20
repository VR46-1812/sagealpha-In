import React from "react";

/**
 * Footer: company info + contact (used on Contact page and bottom)
 */
export default function Footer() {
  return (
    <footer style={{ marginTop: 48, padding: "28px 0", color: "rgba(230,238,246,0.7)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h3>SageAlpha AI Solutions</h3>
          <div style={{ marginTop: 6, color: "var(--muted)" }}>
            SNo 8 1A 1B Office No 110, ANP Commerce Center Shivar gardan, Pimpri Saudagar, Pune, Maharashtra
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div>Phone: +91 7498958281</div>
          <div>Email: sagealpha.ai@sagealpha.ai</div>
          <div style={{ marginTop: 12, color: "var(--muted)" }}>© {new Date().getFullYear()} SageAlpha AI Solutions</div>
        </div>
      </div>
    </footer>
  );
}
