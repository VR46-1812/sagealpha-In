import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "/why", label: "Why" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        
        {/* LEFT SIDE — LOGO ONLY (bigger + clickable) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <img
              src={logo}
              alt="SageAlpha Logo"
              style={{
                width: 100,       // 🔥 Bigger
                height: 100,      // 🔥 Bigger
                objectFit: "contain",
                borderRadius: 12
              }}
            />
          </Link>
        </div>

        {/* RIGHT SIDE — NAVLINKS */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="navlinks" aria-hidden={open}>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={location.pathname === l.to ? "active" : ""}
                style={{ fontWeight: 600 }}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/auth/signin"
              style={{
                padding: "8px 10px",
                borderRadius: 10,
                background: "linear-gradient(90deg,var(--accent-1),var(--accent-2))",
                color: "#022",
                fontWeight: 800,
                marginLeft: 6
              }}
            >
              Sign In
            </Link>
          </div>

          {/* HAMBURGER ICON */}
          <div
            className="hamburger"
            onClick={() => setOpen(s => !s)}
            aria-label="menu toggle"
            role="button"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 82,
            right: 16,
            zIndex: 70,
            background:
              "linear-gradient(180deg, rgba(6,16,26,0.95), rgba(7,20,34,0.9))",
            padding: 12,
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(2,6,23,0.6)"
          }}
        >
          {links.map(l => (
            <div key={l.to} style={{ margin: 8 }}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontWeight: 700
                }}
              >
                {l.label}
              </Link>
            </div>
          ))}

          <div style={{ marginTop: 6 }}>
            <Link
              to="/auth/signin"
              onClick={() => setOpen(false)}
              style={{ color: "var(--text)", fontWeight: 700 }}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
