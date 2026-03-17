import { Header } from '../../components/Header/Header.js';
import { Banner } from '../home/sections/banner/banner.js';
import { Footer } from '../components/Footer/Footer.js';
import { QuemSomos } from './sections/quem-somos/quem-somos.js';
import { WorldPeaceForum } from './sections/world-peace-forum/world-peace-forum.js';
import { Benfeitoria } from './sections/benfeitoria/benfeitoria.js';
import { Impacto } from './sections/impacto/impacto.js';
import { NaMidia } from './sections/na-midia/na-midia.js';

const links = [
  { label: 'SOBRE', href: '/sobre' },
  { label: 'CAMPANHAS', href: '/campanhas' },
  { label: 'QUEM SOMOS', href: '#quem-somos' },
  { label: 'IMPACTO', href: '#impacto' },
  { label: 'NA MIDIA', href: '#naMidia' }
];

document.body.insertAdjacentHTML('afterbegin', Header(links));

const main = document.querySelector('main');

main.innerHTML = `
  ${Banner()}
  ${QuemSomos()}
  ${WorldPeaceForum()}
  ${Benfeitoria()}
  ${Impacto()}
  ${NaMidia()}
  ${Footer()}
`;