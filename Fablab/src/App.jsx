import { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import UniqueDivider from './componentes/UniqueDivider';
import Carousel from './componentes/Carousel';
import './styles/App.css';
import fablabImg from './assets/fablab.png';

function App() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const newOpacity = Math.max(1 - scrollTop / 400, 0);
      setOpacity(newOpacity);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero-section" style={{ opacity,backgroundColor: "#1c1c1c", }}>
        {/* <img src={fablabImg} alt="Imagen inicial" className="hero-img" />   */}

        {/* Carrusel centrado sobre la imagen */}
        <div className="hero-center">
          <Carousel />
        </div>

        {/* Deja el gradiente debajo del carrusel */}
        <div className="gradient-overlay" />
      </section>

      <UniqueDivider />

      {/* (Eliminada) sección de carrusel inferior */}

      <section className="events-section">
        <p className="body-text">Próximos eventos / talleres</p>
      </section>

      <UniqueDivider />

      <section className="news-section">
        <p className="body-text">Noticias destacadas</p>
      </section>

      <UniqueDivider />

      <footer className="footer-section">
        <p className="body-text">Pie de página con info de contacto y redes</p>
      </footer>

      <div className="scroll-test">
        <div className="scroll-end-text">
          <h2>Aquí termina la página (test scroll)</h2>
        </div>
      </div>
    </>
  );
}

export default App;
