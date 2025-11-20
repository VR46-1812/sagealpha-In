import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", form);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  return (
    <div className="container" style={{ paddingTop: "100px", maxWidth: "480px" }}>
      <h2 className="reveal">Sign In</h2>

      <form className="contact-form reveal" onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {/* Primary Sign-In Button */}
        <button type="submit" className="auth-btn-primary">
          Sign In
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          className="auth-btn-google"
          onClick={handleGoogleLogin}
        >
          {/* Google Icon */}
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            style={{ width: 20, height: 20 }}
          />
          Login with Google
        </button>
      </form>

      <p style={{ marginTop: 20 }}>
        Don’t have an account?{" "}
        <Link to="/auth/signup" style={{ color: "var(--accent-2)" }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}
