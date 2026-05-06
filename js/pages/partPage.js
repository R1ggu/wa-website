import { PartCard } from "../components/PartCard.js";

export function renderPartPage(part, allParts) {
  const relatedPool = Object.values(allParts).filter((item) => item.name !== part.name);
  const sameCategory = relatedPool.filter((item) => item.category === part.category);
  const related = [...sameCategory, ...relatedPool]
    .filter((item, index, list) => list.findIndex((candidate) => candidate.name === item.name) === index)
    .slice(0, 3)
    .map((item) => PartCard(item, "part"))
    .join("");

  const specs = part.specs.map((item) => `<li>${item}</li>`).join("");
  const uses = part.uses.map((item) => `<li>${item}</li>`).join("");
  const details = part.details
    .map(
      (detail) => `
        <article>
          <h3>${detail.title}</h3>
          <p>${detail.text}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section class="part-hero">
      <img src="${part.image}" alt="${part.fullName}" />
      <div class="part-hero-copy">
        <p class="eyebrow">${part.tag}</p>
        <h1>${part.name}</h1>
        <p>${part.fullName}</p>
        <span>${part.category} / ${part.subcategory}</span>
      </div>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Hauptaufgabe</p>
        <h2>${part.summary}</h2>
        <p>${part.purpose}</p>
      </div>
      <div class="info-panel">
        <h3>Wichtige Specs</h3>
        <ul>${specs}</ul>
        <h3>Typische Nutzung</h3>
        <ul>${uses}</ul>
      </div>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Unterkategorien</p>
        <h2>Mehr Details zu ${part.name}.</h2>
      </div>
      <div class="detail-grid">${details}</div>
    </section>
    <section class="warning-section">
      <p class="section-kicker">Wichtig zu wissen</p>
      <h2>${part.warning}</h2>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Verwandte Themen</p>
        <h2>Der PC funktioniert immer als Ganzes.</h2>
      </div>
      <div class="part-grid">${related}</div>
    </section>
  `;
}
