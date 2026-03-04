export function Banner(links = []) {
  return `
    <div id="banner" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#banner" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="banner_div">
                    <a href=""
                        target="_blank" rel="noopener noreferrer">
                        <img src="assets/banner/recesso.png" class="d-block w-100" alt="...">
                    </a>
                </div>
            </div>
            <div class="carousel-item">
                <div class="banner_div">
                    <a href=""
                        target="_blank" rel="noopener noreferrer">
                        <img src="assets/banner/cop30.png" class="d-block w-100" alt="...">
                    </a>
                </div>
            </div>
            <div class="carousel-item">
                <div class="banner_div">
                    <a href=""
                        target="_blank" rel="noopener noreferrer">
                        <img src="assets/banner/tea.png" class="d-block w-100" alt="...">
                    </a>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                <img src="assets/banner/arrow/Vector.png" alt="">
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
             <img src="assets/banner/arrow/Vector.png" alt="">
        </button>
    </div>
  `;
}