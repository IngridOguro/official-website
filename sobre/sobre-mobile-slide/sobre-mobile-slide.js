
// import { SlideArmy } from "./slide-army/slide-army.js";
import {SobreSlideContent} from "./mobile-slide-content/mobile-slide-content.js"
export function SobreMobileSlide() {
  return `
<div id="sobreSlide" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#sobreSlide" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#sobreSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#sobreSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#sobreSlide" data-bs-slide="prev">
        <img src="/assets/banner/arrow/Vector.png" alt="">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#sobreSlide" data-bs-slide="next">
        <img src="/assets/banner/arrow/Vector.png" alt="">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector('.carousel-inner');
  main.innerHTML = SobreSlideContent();
});
