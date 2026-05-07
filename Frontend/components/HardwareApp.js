"use client";

import { useEffect, useState } from "react";
import AuthPanel from "@/components/AuthPanel";
import EditorPanel from "@/components/EditorPanel";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartGrid from "@/components/PartGrid";

export default function HardwareApp({ initialData }) {
  const [data, setData] = useState(initialData);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("hardwarewissen-user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("hardwarewissen-user");
    setUser(null);
  };

  return (
    <main className="app-shell">
      <Header onLogout={logout} user={user} />
      <Hero site={data.site} />

      <section className="section dashboard">
        <AuthPanel onAuth={setUser} />
        <EditorPanel
          onSiteChange={(site) => setData((current) => ({ ...current, site }))}
          site={data.site}
          user={user}
        />
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>Build-Workflow</h2>
            <p className="muted">Auch diese Liste liegt im JSON und kann später über weitere API-Routen erweitert werden.</p>
          </div>
        </div>
        <ol className="tips">
          {data.buildTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ol>
      </section>

      <PartGrid parts={data.parts} />
    </main>
  );
}
