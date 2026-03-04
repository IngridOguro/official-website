// import { Navbar } from '../../components/Navbar/Navbar.js';
import { Header } from '../../components/Header/Header.js';
const links = [
  { label: 'QUEM SOMOS', href: '#quem-somos' },
  { label: 'IMPACTO', href: '#impacto' },
  { label: 'NA MIDIA', href: '#naMidia' },
  { label: 'CONTATO', href: '#contato' }
];

document.body.insertAdjacentHTML('afterbegin', Header(links));