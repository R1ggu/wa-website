export function SectionHeader({ kicker, title, copy }) {
  return `
    <div class="section-head">
      <p class="section-kicker">${kicker}</p>
      <h2>${title}</h2>
      <p>${copy}</p>
    </div>
  `;
}
