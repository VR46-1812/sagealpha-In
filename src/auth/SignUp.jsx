import React from "react";
import { Link } from "react-router-dom";

/**
 * SignUp UI mockup: name, email, password, confirm, OTP button, redirect to login
 */
export default function SignUp() {
  return (
    <section style={{ paddingTop: 40, display: "flex", justifyContent: "center" }}>
      <div 
        style={{
          width: "100%",
          maxWidth: 480,
          padding: "32px 28px",
          borderRadius: 16,
          background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.35)"
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Sign Up</h2>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name */}
          <input
            className="input auth-input"
            placeholder="Name"
            required
          />

          {/* Email */}
          <input
            className="input auth-input"
            placeholder="Email"
            type="email"
            required
          />

          {/* Password */}
          <input
            className="input auth-input"
            placeholder="Password"
            type="password"
            required
          />

          {/* Confirm Password */}
          <input
            className="input auth-input"
            placeholder="Confirm Password"
            type="password"
            required
          />

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <button
              type="button"
              className="auth-btn"
              style={{ flex: 1 }}
            >
              Send OTP
            </button>

            <button
              type="submit"
              className="auth-btn"
              style={{ flex: 1 }}
            >
              Sign Up
            </button>
          </div>

          {/* Redirect */}
          <div style={{ marginTop: 18, color: "var(--muted)", fontSize: 14 }}>
            Already have an account?{" "}
            <Link style={{ color: "var(--accent-2)", textDecoration: "underline" }} to="/auth/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
