export function initBuildGuide() {
  const buttons = [...document.querySelectorAll("[data-build-level]")];
  const panels = [...document.querySelectorAll("[data-build-panel]")];

  if (!buttons.length || !panels.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLevel = button.dataset.buildLevel;

      buttons.forEach((item) => {
        const isActive = item.dataset.buildLevel === selectedLevel;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.buildPanel !== selectedLevel;
      });
    });
  });
}



