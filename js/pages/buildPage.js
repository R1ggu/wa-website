import { buildProfiles, buildSteps } from "../data/buildData.js";

export function renderBuildPage() {
  const profiles = buildProfiles
    .map(
      (profile) => `
        <article class="profile-card">
          <h3>${profile.name}</h3>
          <dl>
            <div><dt>Budget</dt><dd>${profile.budget}</dd></div>
            <div><dt>Focus</dt><dd>${profile.focus}</dd></div>
            <div><dt>Parts</dt><dd>${profile.parts}</dd></div>
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
      <p class="eyebrow">Build Guide</p>
      <h1>Choose parts in an order that prevents expensive mistakes.</h1>
      <p>
        A practical build starts with workload, resolution, and budget. After
        that, each hardware decision becomes much easier to judge.
      </p>
    </section>
    <section class="content-section">
      <div class="profile-grid">${profiles}</div>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Build Flow</p>
        <h2>Follow the decision chain.</h2>
        <p>
          This sequence keeps the biggest compatibility decisions near the
          beginning and the smaller tuning choices near the end.
        </p>
      </div>
      <ol class="build-steps">${steps}</ol>
    </section>
  `;
}
