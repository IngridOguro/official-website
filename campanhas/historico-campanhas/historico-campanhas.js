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
               aria-labelledby="${ano.headingId}">

            <div class="accordion-body">
              ${ano.campanhas.map(campanha => `
                <div class="historico-campanha abrirModal">
                  <div class="historico-campanha-img">
                    <img src="${campanha.imagem}" alt="">
                  </div>
                  <div class="historico-campanha-label">
                    <a>${campanha.titulo}</a>
                  </div>

                  <div class="modal">
                    <div class="modal-conteudo">
                      <span class="fechar fecharModal">
                        &times;
                      </span>
                      <div class="modal-img">
                      <img src="${campanha.imagem}" alt="">
                      </div>
                      <div class="modal-body">
                            <a class="fw-bold">${campanha.titulo}</a>
                      <p class="modal-descricao">
                        ${campanha.descricao}
                      </p>
                      <p class="modal-indice>
                        ${campanha.indice}
                      </p>
                      <p class="modal-valor">
                        ${campanha["valor-indice"]}
                      </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      `).join('')}
    </div>
  `;
}
