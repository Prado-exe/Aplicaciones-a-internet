import { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import './styles/App.css'; // importa los estilos
import UniqueDivider from './componentes/UniqueDivider';

// Componente separador SVG editable

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

      <section className="hero-section" style={{ opacity }}>
        <img
          src="https://portal.33bits.net/wp-content/uploads/2018/05/guia-hollow-knight-1024x640.jpg"
          alt="Imagen inicial"
          className="hero-img"
        />
        <div className="gradient-overlay" />
        <h1 className="hero-text">Fablab Hola Mundo aaaaaria</h1>
      </section>

      <UniqueDivider />

      <section className="carousel-section">
        {/* Aquí va tu carrusel de novedades */}
        <p className="body-text">Carrusel de novedades</p>
      </section>

      <UniqueDivider />

      <section className="events-section">
        {/* Aquí eventos/talleres */}
        <p className="body-text">Próximos eventos / talleres</p>
      </section>

      <UniqueDivider />

      <section className="news-section">
        {/* Noticias destacadas */}
        <p className="body-text">Noticias destacadas</p>
      </section>

      <UniqueDivider />

      <footer className="footer-section">
        {/* Pie de página: contacto, redes, colaboradores */}
        <p className="body-text">Pie de página con info de contacto y redes</p>
      </footer>

      {/* Bloque test scroll abajo */}
      <div className="scroll-test">
        <div className="scroll-end-text">
          <h2>Aquí termina la página (test scroll)</h2>
        </div>
      </div>
    </>
  );
}

export default App;
