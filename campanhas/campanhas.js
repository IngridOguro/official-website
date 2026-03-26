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
}

init();

