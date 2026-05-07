"use client";

import { LogOut, UserCircle } from "lucide-react";

export default function Header({ user, onLogout }) {
  return (
    <header className="topbar">
      <div className="brand">
        <strong>HardwareWissen</strong>
        <span>PC-Komponenten verstehen und Builds sicher planen</span>
      </div>
      <div className="nav-actions">
        {user ? (
          <>
            <span className="user-line">
              {user.name} · {user.isPro ? "Pro-User" : "Free-User"}
            </span>
            <button className="icon-button" onClick={onLogout} type="button" title="Logout">
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <span className="user-line">
            <UserCircle size={18} /> Nicht eingeloggt
          </span>
        )}
      </div>
    </header>
  );
}
