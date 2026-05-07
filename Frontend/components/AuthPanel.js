"use client";

import { useState } from "react";
import { CreditCard, LogIn, UserPlus } from "lucide-react";

export default function AuthPanel({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "",
    acceptTerms: false,
  });
  const [message, setMessage] = useState("");
  const isProCheckout = mode === "pro";

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setMessage("");

    const endpoint = mode === "login" ? "login" : "register";
    const response = await fetch(`/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, isPro: isProCheckout }),
    });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error || "Etwas ist schiefgelaufen.");
      return;
    }

    localStorage.setItem("hardwarewissen-user", JSON.stringify(result.user));
    onAuth(result.user);
    setMessage(isProCheckout ? "Pro-Abo testweise aktiviert." : mode === "login" ? "Login erfolgreich." : "Registrierung erfolgreich.");
  };

  return (
    <div className="auth-panel">
      <div className="tabs">
        <button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")} type="button">
          Login
        </button>
        <button className={mode === "register" ? "active" : ""} onClick={() => setMode("register")} type="button">
          Free
        </button>
        <button className={mode === "pro" ? "active" : ""} onClick={() => setMode("pro")} type="button">
          Pro
        </button>
      </div>

      <form onSubmit={submit}>
        {isProCheckout && (
          <div className="price-panel">
            <span>Pro-Abo</span>
            <strong>99.90 $</strong>
            <small>pro Jahr · Test-Checkout ohne echte Zahlung</small>
          </div>
        )}

        {mode !== "login" && (
          <label>
            Name
            <input name="name" onChange={updateField} required value={form.name} />
          </label>
        )}
        <label>
          E-Mail
          <input name="email" onChange={updateField} required type="email" value={form.email} />
        </label>
        <label>
          Passwort
          <input minLength={6} name="password" onChange={updateField} required type="password" value={form.password} />
        </label>
        {isProCheckout && (
          <>
            <label>
              Name auf der Karte
              <input name="cardName" onChange={updateField} required value={form.cardName} />
            </label>
            <label>
              Kartennummer
              <input
                inputMode="numeric"
                maxLength={19}
                minLength={12}
                name="cardNumber"
                onChange={updateField}
                placeholder="4242 4242 4242 4242"
                required
                value={form.cardNumber}
              />
            </label>
            <div className="payment-row">
              <label>
                Ablaufdatum
                <input name="expiry" onChange={updateField} placeholder="MM/JJ" required value={form.expiry} />
              </label>
              <label>
                CVC
                <input inputMode="numeric" maxLength={4} minLength={3} name="cvc" onChange={updateField} required value={form.cvc} />
              </label>
            </div>
            <label>
              Land
              <input name="country" onChange={updateField} required value={form.country} />
            </label>
            <label className="checkbox">
              <input checked={form.acceptTerms} name="acceptTerms" onChange={updateField} required type="checkbox" />
              Ich möchte das Pro-Abo testweise für 99.90 $ pro Jahr abschließen.
            </label>
          </>
        )}
        <button className="primary-button" type="submit">
          {mode === "login" ? <LogIn size={18} /> : isProCheckout ? <CreditCard size={18} /> : <UserPlus size={18} />}
          {mode === "login" ? "Login" : isProCheckout ? "Pro-Abo testen" : "Free registrieren"}
        </button>
        <span className={message.includes("fehl") || message.includes("nötig") ? "message error" : "message"}>{message}</span>
      </form>
    </div>
  );
}
