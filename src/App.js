import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './pages/homepage/home'
import './App.css';
import Home from './pages/homepage/home';
import About from './pages/about/about';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

