import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import QuemSomos from '../../components/quem-somos/quem-somos'

export default function Home(){
    return (
      <div class="home">
        <Header/>
        <QuemSomos/>
      </div>
    );
  }