import { buildLevels, buildProfiles, buildTools } from "../data/buildData.js";

const renderProfile = (profile) => `
  <article class="profile-card">
    <h3>${profile.name}</h3>
    <dl>
      <div><dt>Budget</dt><dd>${profile.budget}</dd></div>
      <div><dt>Fokus</dt><dd>${profile.focus}</dd></div>
      <div><dt>Teile</dt><dd>${profile.parts}</dd></div>
    </dl>
  </article>
`;

const renderStep = (step, index) => `
  <article class="guide-step">
    <span>${String(index + 1).padStart(2, "0")}</span>
    <div>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
      <ul>${step.checks.map((check) => `<li>${check}</li>`).join("")}</ul>
    </div>
  </article>
`;

const renderLevel = (level, index) => `
  <section class="build-level-panel" data-build-panel="${level.id}" ${index === 0 ? "" : "hidden"}>
    <div class="section-head">
      <p class="section-kicker">${level.subtitle}</p>
      <h2>${level.label}-Anleitung</h2>
      <p>${level.summary}</p>
    </div>
    <div class="guide-step-list">${level.steps.map(renderStep).join("")}</div>
    <aside class="mistake-panel">
      <h3>Typische Fehler in dieser Stufe</h3>
      <ul>${level.avoid.map((item) => `<li>${item}</li>`).join("")}</ul>
    </aside>
  </section>
`;

export function renderBuildPage() {
  const profiles = buildProfiles.map(renderProfile).join("");
  const levelButtons = buildLevels
    .map(
      (level, index) => `
        <button class="level-button ${index === 0 ? "active" : ""}" type="button" data-build-level="${level.id}" aria-pressed="${index === 0}">
          <strong>${level.label}</strong>
          <span>${level.subtitle}</span>
        </button>
      `,
    )
    .join("");
  const levelPanels = buildLevels.map(renderLevel).join("");

  return `
    <section class="page-hero build-hero">
      <p class="eyebrow">Bauanleitung</p>
      <h1>Wähle dein Level und baue mit passender Anleitung.</h1>
      <p>
        Anfänger brauchen andere Schritte als Fortgeschrittene oder Profi-Builds.
        Deshalb zeigt HardwareWissen je nach Level eine andere Anleitung.
      </p>
    </section>
    <section class="content-section">
      <div class="profile-grid">${profiles}</div>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Level wählen</p>
        <h2>Drei Wege zum passenden PC.</h2>
        <p>
          Wähle ein Level. Die Schritte, Prüfpunkte und typischen Fehler ändern
          sich direkt darunter.
        </p>
      </div>
      <div class="level-tabs" role="tablist" aria-label="Build-Level auswählen">${levelButtons}</div>
      ${levelPanels}
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Werkzeuge</p>
        <h2>Was du vor dem Aufbau bereitlegen solltest.</h2>
        <p>
          Gute Vorbereitung verhindert Stress. Besonders wichtig sind Handbuch,
          Installationsmedium, genug Licht und ein sauberer Arbeitsplatz.
        </p>
      </div>
      <ul class="tool-list">${buildTools.map((tool) => `<li>${tool}</li>`).join("")}</ul>
    </section>
  `;
}



