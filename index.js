import { hardwareParts } from "./js/data/hardwareParts.js";
import { renderShell } from "./js/components/Shell.js";
import { renderHomePage } from "./js/pages/homePage.js";
import { renderComponentsPage } from "./js/pages/componentsPage.js";
import { renderBuildPage } from "./js/pages/buildPage.js";
import { renderCompatibilityPage } from "./js/pages/compatibilityPage.js";
import { renderImpressumPage } from "./js/pages/impressumPage.js";
import { renderPartPage } from "./js/pages/partPage.js";

const page = document.body.dataset.page || "home";
const partKey = document.body.dataset.part || "cpu";
const root = document.querySelector("#app");

const pages = {
  home: () => renderHomePage(hardwareParts),
  components: () => renderComponentsPage(hardwareParts),
  build: () => renderBuildPage(),
  compatibility: () => renderCompatibilityPage(hardwareParts),
  impressum: () => renderImpressumPage(),
  part: () => renderPartPage(hardwareParts[partKey] || hardwareParts.cpu, hardwareParts),
};

root.innerHTML = renderShell({
  page,
  content: (pages[page] || pages.home)(),
});
