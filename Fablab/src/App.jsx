import { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import UniqueDivider from './componentes/UniqueDivider';
import Carousel from './componentes/Carousel';
import './styles/App.css';
import Footer from './componentes/footbar';
import fablabImg from './assets/fablab_test.png';


function App() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const newOpacity = Math.max(1 - (scrollTop / 400)*0.6, 0);
      setOpacity(newOpacity);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  

  return (
    <>
      <Navbar />

      <section className="hero-section" style={{ opacity }}>
        <img
          src={fablabImg}
          alt="Imagen inicial"
          className="hero-img"
        />
        <div className="gradient-overlay" />
        <h1 className="hero-text">"Bienvenidos al sitio web del FABLAB FIULS"</h1>
      </section>

      <UniqueDivider />

      <section className="carousel-section">
        <Carousel />
      </section>

      <UniqueDivider />

      <section className="events-section">
        <p className="body-text">Próximos eventos / talleres</p>
      </section>

      <UniqueDivider />

      <section className="news-section">
        <p className="body-text">Noticias destacadas</p>
      </section>

      <UniqueDivider />
      
      <Footer />

    </>
  );
}

export default App;
