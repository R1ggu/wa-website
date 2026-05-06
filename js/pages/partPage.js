import { PartCard } from "../components/PartCard.js";

export function renderPartPage(part, allParts) {
  const related = Object.values(allParts)
    .filter((item) => item.name !== part.name)
    .slice(0, 3)
    .map((item) => PartCard(item, "part"))
    .join("");

  const specs = part.specs.map((item) => `<li>${item}</li>`).join("");
  const uses = part.uses.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="part-hero">
      <img src="${part.image}" alt="${part.fullName}" />
      <div class="part-hero-copy">
        <p class="eyebrow">${part.tag}</p>
        <h1>${part.name}</h1>
        <p>${part.fullName}</p>
      </div>
    </section>
    <section class="content-section split-section">
      <div>
        <p class="section-kicker">Main Job</p>
        <h2>${part.summary}</h2>
        <p>${part.purpose}</p>
      </div>
      <div class="info-panel">
        <h3>Important specs</h3>
        <ul>${specs}</ul>
        <h3>Best for</h3>
        <ul>${uses}</ul>
      </div>
    </section>
    <section class="warning-section">
      <p class="section-kicker">Beginner Trap</p>
      <h2>${part.warning}</h2>
    </section>
    <section class="content-section">
      <div class="section-head">
        <p class="section-kicker">Related Parts</p>
        <h2>Keep the full system in mind.</h2>
      </div>
      <div class="part-grid">${related}</div>
    </section>
  `;
}
