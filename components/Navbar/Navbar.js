export function Navbar(links = []) {
  return `
    <nav class="navbar">
      <ul class="navbar__list">
        ${links.map(link => `
          <li class="navbar__item">
            <a class="navbar__link" href="${link.href}">
              ${link.label}
            </a>
          </li>
        `).join('')}
      </ul>
    </nav>
  `;
}