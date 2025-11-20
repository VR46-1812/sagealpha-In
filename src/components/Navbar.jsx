import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "/why", label: "Why" },
    { to: "/contact", label: "Contact" },
  ];

  // body scroll lock, escape key, click-outside to close
  useEffect(() => {
    const body = document.body;
    if (open) body.classList.add("menu-open");
    else body.classList.remove("menu-open");

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onDocClick(e) {
      const menuEl = menuRef.current;
      const toggleEl = toggleRef.current;
      if (!menuEl || !toggleEl) return;
      if (!menuEl.contains(e.target) && !toggleEl.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
      body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
            aria-label="Home"
          >
            <img
              src={logo}
              alt="SageAlpha Logo"
              className="brand-img"
            />
          </Link>
        </div>

        {/* RIGHT SIDE — NAVLINKS */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="navlinks" aria-hidden={open}>
            {links.map((l) => (
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
                marginLeft: 6,
              }}
            >
              Sign In
            </Link>
          </div>

          {/* HAMBURGER ICON (visible on mobile via CSS) */}
          <div
            ref={toggleRef}
            className="hamburger nav-toggle"
            onClick={() => setOpen((s) => !s)}
            aria-label="menu toggle"
            role="button"
            tabIndex={0}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU - controlled by CSS so it's hidden on desktop */}
      <div
        ref={menuRef}
        className={`nav-menu${open ? " open" : ""}`}
        aria-hidden={!open}
        role="menu"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              role="menuitem"
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontWeight: 700,
                display: "block",
              }}
            >
              {l.label}
            </Link>
          ))}

          <div style={{ marginTop: 8 }}>
            <Link
              to="/auth/signin"
              onClick={() => setOpen(false)}
              style={{ color: "var(--text)", fontWeight: 700, display: "block" }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="header-placeholder" aria-hidden />
    </>
  );
}
