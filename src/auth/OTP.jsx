import React, { useRef } from "react";

/**
 * OTP verification UI: 4 or 6 boxes - this uses 4 boxes by default
 * This is purely UI; onChange autofocus behavior is implemented for convenience.
 */
export default function OTP() {
  const inputsRef = useRef([]);

  const onInput = (e, i) => {
    const val = e.target.value;
    if (val.length > 1) e.target.value = val.slice(-1);
    if (val && i < inputsRef.current.length - 1) inputsRef.current[i + 1].focus();
  };

  return (
    <section style={{ paddingTop: 6 }}>
      <h2>OTP Verification</h2>
      <p style={{ color: "var(--muted)" }}>Enter the 4-digit code sent to your email.</p>
      <div className="otp" style={{ marginTop: 12 }}>
        {[0,1,2,3].map((n) => (
          <input
            key={n}
            ref={(el) => inputsRef.current[n] = el}
            maxLength={1}
            onChange={(e) => onInput(e, n)}
          />
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={(e)=>e.preventDefault()}>Verify</button>
      </div>
    </section>
  );
}
