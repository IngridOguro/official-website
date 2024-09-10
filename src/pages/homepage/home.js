import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import aboutSection from '../../components/about-section/about-sect';

export default function Home(){
    return (
      <div class="home">
        <Header/>
        <aboutSection/>
        <Footer/>
      </div>
    );
  }