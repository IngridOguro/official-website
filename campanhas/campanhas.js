import { Header } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js'
import { EmAlta } from './em-alta/em-alta.js';
import { Historico } from './historico-campanhas/historico-campanhas.js'

const links = [
  { label: 'INÍCIO', href: '/' },
  { label: 'SOBRE', href: '/sobre' },
  { label: 'CAMPANHAS', href: '/campanhas' }
];

document.body.insertAdjacentHTML('afterbegin', Header(links));

const main = document.querySelector('main');

async function init() {
  main.innerHTML = `
    ${await EmAlta()}
    ${await Historico()}
    ${Footer()}
  `;

  // ABRIR
  document.querySelectorAll(".abrirModal").forEach(card => {

    card.addEventListener("click", () => {

      const modal = card.querySelector(".modal");

      modal.style.display = "flex";
    });

  });

  // FECHAR NO X
  document.querySelectorAll(".fecharModal").forEach(botao => {

    botao.addEventListener("click", (event) => {

      event.stopPropagation();

      const modal = botao.closest(".modal");

      modal.style.display = "none";
    });

  });

  // FECHAR CLICANDO FORA
  document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", () => {
  event.stopPropagation();
      modal.style.display = "none";
    });

  });

  // IMPEDIR FECHAR AO CLICAR DENTRO
  document.querySelectorAll(".modal-conteudo").forEach(conteudo => {

    conteudo.addEventListener("click", (event) => {

      event.stopPropagation();

    });

  });
}

init();