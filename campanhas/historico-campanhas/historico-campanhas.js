import { getCampanhas } from "../service/campanhasService.js";

export async function Historico() {
  const campanhas_json = await getCampanhas();

  const anosOrdenados = [...campanhas_json]
    .sort((a, b) => b.ano - a.ano)
    .map((ano, index) => ({
      ...ano,
      collapseId: `flush-collapse-${index}`,
      headingId: `flush-heading-${index}`,
      campanhas: [...ano.campanhas].sort((a, b) => b.id - a.id)
    }));

  return `
    <div class="accordion accordion-flush" id="accordionFlushExample">
      ${anosOrdenados.map(ano => `
        <div class="accordion-item">
          <h2 class="accordion-header" id="${ano.headingId}">
            <button class="accordion-button collapsed" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#${ano.collapseId}"
              aria-expanded="false"
              aria-controls="${ano.collapseId}">
              ${ano.ano}
            </button>
          </h2>

          <div id="${ano.collapseId}"
               class="accordion-collapse collapse"
               aria-labelledby="${ano.headingId}"
               data-bs-parent="#accordionFlushExample">

            <div class="accordion-body">
              ${ano.campanhas.map(campanha => `
                <div class="historico-campanha">
                  <img src="${campanha.imagem}" alt="">
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      `).join('')}
    </div>
  `;
}
