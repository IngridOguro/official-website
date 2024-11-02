import './header.css';
import logo from '../../images/ahtp-dark-logo.png'; // with import

export default function Header(){
    return (
      <div className='header'>
            <a class="header-link" href="/">SOBRE</a>
            <a class="header-link" href="/">CAMPANHAS</a>
            <a class="header-link" href="/">EQUIPES</a>
            <a class="header-link" href="/">BLOG</a>
            <a class="header-link" href="/">CONTATO</a>
            <div class="img-container">
                <img src={logo} alt="Logo" class="img"/>
            </div>
    </div>
    );
  }