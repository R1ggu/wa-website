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
        <p class="section-kicker">Warum es wichtig ist</p>
        <h2>Ein Computer ist ein System, keine zufaellige Einkaufsliste.</h2>
      </div>
      <p>
        Das schnellste Teil kann verschwendetes Geld sein, wenn der Rest des
        Systems es nicht kuehlen, versorgen oder richtig verbinden kann. Diese
        Website zerlegt den PC in klare Themen und praktische Checks.
      </p>
    </section>
    <section class="content-section">
      ${SectionHeader({
        kicker: "Wichtige Komponenten",
        title: "Starte mit den Teilen, die Leistung und Kompatibilitaet praegen.",
        copy: "Jede Karte fuehrt zu einer eigenen Detailseite mit Specs, typischen Fehlern und Unterkategorien.",
      })}
      <div class="part-grid">${cards}</div>
      <a class="button inline-button" href="components.html">Alle Themen ansehen</a>
    </section>
    <section class="image-band">
      <img
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Server_Rack_(54126210834).jpg"
        alt="Serverrack mit Netzwerk- und Serverhardware"
        loading="lazy"
      />
      <div>
        <p class="section-kicker">Lernpfad</p>
        <h2>Von einzelnen Teilen bis zu Server, Netzwerk und Betriebssystem.</h2>
        <p>
          Gehe von CPU, GPU und RAM weiter zu Kabeln, Ports, Windows, Linux,
          Servern, Backups und Netzwerktechnik.
        </p>
      </div>
    </section>
  `;
}
