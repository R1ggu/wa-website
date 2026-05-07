"use client";

import { Save } from "lucide-react";
import { useState } from "react";

export default function EditorPanel({ site, user, onSiteChange }) {
  const [draft, setDraft] = useState(site);
  const [message, setMessage] = useState("");

  const canEdit = Boolean(user?.isPro);

  const updateField = (event) => {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
  };

  const save = async (event) => {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/api/site", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user?.sessionToken || ""}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(draft),
    });
    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error || "Speichern fehlgeschlagen.");
      return;
    }

    onSiteChange(result.site);
    setDraft(result.site);
    setMessage("Website-Informationen wurden gespeichert.");
  };

  return (
    <div className="editor-panel">
      <h2>Website bearbeiten</h2>
      <p className="muted">Nur eingeloggte Pro-User können diese Daten über die API in der JSON-Datenbank speichern.</p>

      <form onSubmit={save}>
        <label>
          Titel
          <input disabled={!canEdit} name="title" onChange={updateField} value={draft.title} />
        </label>
        <label>
          Untertitel
          <input disabled={!canEdit} name="subtitle" onChange={updateField} value={draft.subtitle} />
        </label>
        <label>
          Beschreibung
          <textarea disabled={!canEdit} name="description" onChange={updateField} value={draft.description} />
        </label>
        <label>
          Hinweis
          <textarea disabled={!canEdit} name="featuredNotice" onChange={updateField} value={draft.featuredNotice} />
        </label>
        <button className="primary-button" disabled={!canEdit} type="submit">
          <Save size={18} />
          Speichern
        </button>
        <span className={message.includes("Nur") || message.includes("fehl") ? "message error" : "message"}>
          {canEdit ? message : "Melde dich als Pro-User an, um zu bearbeiten."}
        </span>
      </form>
    </div>
  );
}
