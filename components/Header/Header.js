export function Headers(links = []) {
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

export function Header(links = []) {
  return `
<header>
        <!-- NAVBAR -->
        <nav id="navbar" class="navbar navbar-expand-lg fixed-top px-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center align-items-center pt-3 mb-1 pe-2">
            <a href="/">
                <img src="/assets/images/dark-logo.png" alt="AHTP" class="img-fluid">
            </a>  
            
            </div>
            <div class="container-fluid ">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul id="navbar-links" class="navbar-nav mb-lg-0 justify-content-around mt-4 w-100">
                    ${links.map(link => `
                      <li class="nav-item">
                        <a class="nav-link fw-semibold fs-5 ahtp-text" href="${link.href}">${link.label}</a>
                      </li>
                    `).join('')}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  `;
}