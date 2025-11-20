import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Splash from "./components/Splash";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import WhyChoose from "./pages/Why";
import Contact from "./pages/Contact";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import OTP from "./auth/OTP";
import GmailAuth from "./auth/GmailAuth";

import Footer from "./components/Footer";

/**
 * App - root component
 * Handles splash screen, navbar, routing, and global footer.
 */
export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [logoMoved, setLogoMoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoMoved(true), 2200);
    const t2 = setTimeout(() => setSplashDone(true), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* SPLASH SCREEN */}
      {!splashDone && <Splash moveToNav={logoMoved} />}

      {/* NAVBAR (fixed) */}
      <Navbar />

      {/* Spacing below fixed navbar */}
      <div className="header-placeholder" />

      {/* MAIN PAGE CONTENT */}
      <main className="container">
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why" element={<WhyChoose />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth (UI only) */}
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/otp" element={<OTP />} />
          <Route path="/auth/gmail" element={<GmailAuth />} />
        </Routes>
      </main>

      {/* GLOBAL FOOTER (only once per site) */}
      <Footer />
    </>
  );
}
