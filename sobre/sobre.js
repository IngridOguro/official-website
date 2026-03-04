import { Navbar } from '../../components/Navbar/Navbar.js';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Campanhas', href: '/campanhas/' }
];

document.body.insertAdjacentHTML('afterbegin', Navbar(links));