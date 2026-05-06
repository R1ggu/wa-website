import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export function renderShell({ page, content }) {
  return `
    ${Header(page)}
    <main class="page-shell">${content}</main>
    ${Footer()}
  `;
}



