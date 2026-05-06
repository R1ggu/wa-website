import { PartCard } from "../components/PartCard.js";
import { SectionHeader } from "../components/SectionHeader.js";

export function renderComponentsPage(parts) {
  const cards = Object.values(parts)
    .map((part) => PartCard(part))
    .join("");

  return `
    <section class="page-hero compact-hero">
      <p class="eyebrow">Component Library</p>
      <h1>Every major PC component gets its own page.</h1>
      <p>
        Learn what each part does, what specifications matter, where beginners
        usually make mistakes, and how the part connects to the rest of a build.
      </p>
    </section>
    <section class="content-section">
      ${SectionHeader({
        kicker: "All Components",
        title: "Open a component and go deeper.",
        copy: "Each card links to a dedicated component page with focused guidance.",
      })}
      <div class="part-grid">${cards}</div>
    </section>
  `;
}
