const navItems = [
  ["index.html", "Start"],
  ["components.html", "Bibliothek"],
  ["build-guide.html", "Bauanleitung"],
  ["compatibility.html", "Kompatibilitaet"],
  ["impressum.html", "Impressum"],
];

export function Header(page) {
  const prefix = page === "part" ? "../" : "";
  const links = navItems
    .map(([href, label]) => {
      const key = href.replace(".html", "").replace("index", "home").replace("build-guide", "build");
      const active = key === page || (page === "part" && key === "components");
      return `<a href="${prefix}${href}" class="${active ? "active" : ""}">${label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <a class="brand" href="${prefix}index.html" aria-label="Hardware Atlas Startseite">
        <span class="brand-mark">HA</span>
        <span>Hardware Atlas</span>
      </a>
      <nav class="site-nav" aria-label="Hauptnavigation">${links}</nav>
    </header>
  `;
}
