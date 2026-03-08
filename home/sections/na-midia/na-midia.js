export function NaMidia(links = []) {
  return `
          <div id="naMidia" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#naMidia" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#naMidia" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#naMidia" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#naMidia" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="materia_div">
                        <a href="https://billboard.com.br/reforco-de-peso-fas-do-bts-fazem-campanha-contra-pl-que-equipara-aborta-a-homicidio/"
                            target="_blank" rel="noopener noreferrer">
                            <img src="/assets/materias/1.png" class="d-block w-100" alt="...">
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="materia_div">
                        <a href="https://capricho.abril.com.br/entretenimento/acidente-com-suga-do-bts-e-licao-sobre-fake-news-e-uniao-entre-os-fas"
                            target="_blank" rel="noopener noreferrer">
                            <img src="/assets/materias/2.png" class="d-block w-100" alt="...">
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="materia_div">
                        <a href="https://www.estadao.com.br/emais/gente/tira-titulo-army-fas-do-grupo-bts-fazem-campanha-pro-titulo/"
                            target="_blank" rel="noopener noreferrer">
                            <img src="/assets/materias/3.png" class="d-block w-100" alt="...">
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="materia_div">
                        <a href="https://www.uol.com.br/ecoa/ultimas-noticias/2022/04/27/army-do-bem-fas-de-bts-levam-milhares-para-site-do-tse-por-voto.htm"
                            target="_blank" rel="noopener noreferrer">
                            <img src="/assets/materias/4.png" class="d-block w-100" alt="...">
                        </a>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#naMidia" data-bs-slide="prev">
                <img src="/assets/banner/arrow/Vector.png" alt="">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#naMidia" data-bs-slide="next">
                <img src="/assets/banner/arrow/Vector.png" alt="">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
  `;
}