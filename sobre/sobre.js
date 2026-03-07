import { Header } from '../../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';
import { SobreContent } from './sobre-content/sobre-content.js';

const links = [
  { label: 'INÍCIO', href: '/' },
  { label: 'SOBRE', href: '/sobre' }
];

document.body.insertAdjacentHTML('afterbegin', Header(links));

const main = document.querySelector('main');

main.innerHTML = `
  ${SobreContent()}
  ${Footer()}
`; 