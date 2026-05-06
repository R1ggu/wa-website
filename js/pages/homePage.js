import { Hero } from "../components/Hero.js";
import { PartCard } from "../components/PartCard.js";
import { SectionHeader } from "../components/SectionHeader.js";

export function renderHomePage(parts) {
  const cards = Object.values(parts)
    .slice(0, 4)
    .map((part) => PartCard(part))
    .join("");

  return `
    ${Hero()}
    <section class="intro-band">
      <div>
        <p class="section-kicker">Why it matters</p>
        <h2>A computer is a system, not a random shopping list.</h2>
      </div>
      <p>
        The fastest part can become wasted money when the rest of the system
        cannot feed, cool, power, or connect it correctly. This site breaks the
        build into clear parts, realistic tradeoffs, and practical checks.
      </p>
    </section>
    <section class="content-section">
      ${SectionHeader({
        kicker: "Featured Parts",
        title: "Start with the pieces that shape performance.",
        copy: "Open each component page for deeper explanations, buying checks, common mistakes, and compatibility notes.",
      })}
      <div class="part-grid">${cards}</div>
      <a class="button inline-button" href="components.html">View all components</a>
    </section>
    <section class="image-band">
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1500&q=80"
        alt="Laptop and desktop workspace with electronics"
        loading="lazy"
      />
      <div>
        <p class="section-kicker">Learning Path</p>
        <h2>From single part to complete build.</h2>
        <p>
          Move from component basics to build profiles, then finish with the
          compatibility checklist before choosing real parts.
        </p>
      </div>
    </section>
  `;
}
