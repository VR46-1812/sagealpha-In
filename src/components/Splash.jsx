import React from "react";
import logo from "../assets/logo.png";

export default function Splash({ moveToNav = false }){
  return (
    <div className="splash" aria-hidden={!moveToNav}>
      <div className={`logo ${moveToNav ? "move-to-nav" : ""}`}>
        <img src={logo} alt="logo" style={{width:"72%",height:"72%",objectFit:"contain"}} />
      </div>
      {!moveToNav && <div className="name">SageAlpha — Intelligent software</div>}
    </div>
  );
}
