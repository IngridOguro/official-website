import { Header } from '../../components/Header/Header.js';
import {Banner} from '../home/sections/banner/banner.js';

const links = [
  { label: 'SOBRE', href: '/sobre' },
  { label: 'QUEM SOMOS', href: '#quem-somos' },
  { label: 'IMPACTO', href: '#impacto' },
  { label: 'NA MIDIA', href: '#naMidia' }

];

document.body.insertAdjacentHTML('afterbegin', Header(links));

const main = document.querySelector('main');

main.innerHTML = `
  ${Banner()}
`;