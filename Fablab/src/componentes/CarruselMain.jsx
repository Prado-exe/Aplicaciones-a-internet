import { useState, useEffect } from 'react';
import '../styles/CarruselMain.css';
import fablabImg from '../assets/fablab_test.png';

const images = [
  fablabImg,
  // Agrega otras imágenes aquí si quieres
];

function CarruselMain() {
  const [opacity, setOpacity] = useState(1);        // Para fade on scroll
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);          // Para fade entre imágenes
  const length = images.length;

  // Opacidad al hacer scroll
  useEffect(() => {
    function handleScroll() {
      const startFade = 150;
      const fadeLength = 300;
      const scrollTop = window.scrollY;

      let newOpacity;
      if (scrollTop <= startFade) newOpacity = 1;
      else if (scrollTop >= startFade + fadeLength) newOpacity = 0;
      else newOpacity = 1 - (scrollTop - startFade) / fadeLength;

      setOpacity(newOpacity);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cambio automático con efecto fade
  useEffect(() => {
    const interval = setInterval(() => {
      // Empieza fade out
      setFade(true);

      // Cambia imagen tras 400ms y fade in
      setTimeout(() => {
        setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
        setFade(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent(current === 0 ? length - 1 : current - 1);
      setFade(false);
    }, 400);
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      setFade(false);
    }, 400);
  };

  return (
    <section className="hero-section" style={{ opacity }}>
      <img
        src={images[current]}
        alt="Imagen principal"
        className={`hero-img ${fade ? 'fade' : ''}`}
      />
      <div className="gradient-overlay" />
      <h1 className="hero-text">Bienvenidos al sitio web del FABLAB FIULS</h1>

      <div
        className="hover-area left"
        onClick={prevSlide}
        aria-label="Anterior"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if(e.key === 'Enter') prevSlide(); }}
      >
        <span className="arrow left-arrow">&#10094;</span>
      </div>
      <div
        className="hover-area right"
        onClick={nextSlide}
        aria-label="Siguiente"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if(e.key === 'Enter') nextSlide(); }}
      >
        <span className="arrow right-arrow">&#10095;</span>
      </div>
    </section>
  );
}

export default CarruselMain;
