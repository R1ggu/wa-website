"use client";

import { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";

export default function AuthPanel({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", isPro: false });
  const [message, setMessage] = useState("");

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setMessage("");

    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error || "Etwas ist schiefgelaufen.");
      return;
    }

    localStorage.setItem("hardwarewissen-user", JSON.stringify(result.user));
    onAuth(result.user);
    setMessage(mode === "login" ? "Login erfolgreich." : "Registrierung erfolgreich.");
  };

  return (
    <div className="auth-panel">
      <div className="tabs">
        <button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")} type="button">
          Login
        </button>
        <button className={mode === "register" ? "active" : ""} onClick={() => setMode("register")} type="button">
          Register
        </button>
      </div>

      <form onSubmit={submit}>
        {mode === "register" && (
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
        {mode === "register" && (
          <label className="checkbox">
            <input checked={form.isPro} name="isPro" onChange={updateField} type="checkbox" />
            Als Pro-User registrieren
          </label>
        )}
        <button className="primary-button" type="submit">
          {mode === "login" ? <LogIn size={18} /> : <UserPlus size={18} />}
          {mode === "login" ? "Login" : "Register"}
        </button>
        <span className={message.includes("fehl") || message.includes("nötig") ? "message error" : "message"}>{message}</span>
      </form>
    </div>
  );
}
