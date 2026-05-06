import { buildProfiles, buildSteps } from "../data/buildData.js";

export function renderBuildPage() {
  const profiles = buildProfiles
    .map(
      (profile) => `
        <article class="profile-card">
          <h3>${profile.name}</h3>
          <dl>
            <div><dt>Budget</dt><dd>${profile.budget}</dd></div>
            <div><dt>Fokus</dt><dd>${profile.focus}</dd></div>
            <div><dt>Teile</dt><dd>${profile.parts}</dd></div>
          </dl>
        </article>
      `,
    )
    .join("");

  const steps = buildSteps
    .map((step, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${step}</li>`)
    .join("");

  return `
    <section class="page-hero build-hero">
      <p class="eyebrow">Bauanleitung</p>
      <h1>Waehle Teile in einer Reihenfolge, die teure Fehler vermeidet.</h1>
      <p>
        Ein sinnvoller Build startet mit Einsatzzweck, Monitoraufloesung und
        Budget. Danach werden die einzelnen Entscheidungen viel klarer.
      </p>
    </section>
    <section class="content-section">
      <div class="profile-grid">${profiles}</div>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Build Flow</p>
        <h2>Folge der Entscheidungskette.</h2>
        <p>
          Diese Reihenfolge bringt die wichtigsten Kompatibilitaetsfragen an
          den Anfang und die kleineren Feineinstellungen ans Ende.
        </p>
      </div>
      <ol class="build-steps">${steps}</ol>
    </section>
  `;
}
