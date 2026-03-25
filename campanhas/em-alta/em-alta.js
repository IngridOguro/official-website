import { getCampanhas } from "../service/campanhasService.js";

export async function EmAlta() {
  const campanhas_json = await getCampanhas();

  const campanhas = campanhas_json
    .flatMap(ano => ano.campanhas)
    .filter(c => c["em-alta"])
    .sort((a, b) => b.id - a.id)
    .map(c => ({
      titulo: c.titulo,
      imagem: c.imagem
    }));

  return `
    <div id="campanhas-titulo">
      <a id="campanhas-titulo-texto">CAMPANHAS</a>
    </div>

    <div id="em-alta">
      <div class="em-alta-titulo">
        <a>EM ALTA</a>
      </div>
      <div class="em-alta-cards">
      ${campanhas.map(campanha => `
        <div class="em-alta-card">
          <div class="em-alta-card-conteudo">
            <img src="${campanha.imagem}" alt="">
          </div>
          <div class="em-alta-card-label">
            <a>${campanha.titulo}</a>
          </div>
        </div>
      `).join('')}
      </div>
    </div>
  `;
}

