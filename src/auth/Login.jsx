import React from "react";

/**
 * Login UI (alternate naming): email/phone + password + login button
 */
export default function Login() {
  return (
    <section style={{ paddingTop: 6 }}>
      <h2>Login</h2>
      <div style={{ maxWidth: 480 }}>
        <form className="contact-form" onSubmit={(e)=> e.preventDefault()}>
          <input className="input" placeholder="Email or Phone" required />
          <input className="input" placeholder="Password" type="password" required />
          <button className="btn">Login</button>
        </form>
      </div>
    </section>
  );
}
