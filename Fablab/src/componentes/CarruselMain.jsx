import '../styles/CarruselMain.css';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    src: 'https://fablab.fiuls.cl/wp-content/uploads/2024/08/Grafica-Mousepad-FABLAB-1.png',
    tipo: 'Eventos',
    titulo: 'Jam de videojuegos',
    descripcion: 'Maratón creativa para diseñar y programar videojuegos en equipo',
  },
  {
    src: 'https://fablab.fiuls.cl/wp-content/uploads/2024/08/IMG_6160-scaled.jpg',
    tipo: 'Servicios',
    titulo: 'Impresora 3D',
    descripcion: 'Fabricación aditiva para prototipos funcionales y piezas personalizadas.',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cortadora_Laser_-_FabLAB_Newton.jpg',
    tipo: 'Servicios',
    titulo: 'Cortadora Láser',
    descripcion: 'Cortes de alta precisión para acrílico, MDF y más. Ideal para prototipos y maquetas.',
  },
];

function CarruselMain() {
  const [opacity, setOpacity] = useState(1);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const length = slides.length;
  const intervalRef = useRef(null);

  const navigate = useNavigate();

  const routeMap = {
    servicios: '/servicios',
    eventos: '/eventos',
    noticias: '/noticias',
  };

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
        setFade(false);
      }, 400);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [length]);

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
      setFade(false);
      startAutoSlide();
    }, 400);
  };

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
      setFade(false);
      startAutoSlide();
    }, 400);
  };

  const slide = slides[current];

  const handleNavigate = () => {
    const tipo = (slide.tipo || '').trim().toLowerCase();
    const to = slide.to || routeMap[tipo] || '/';
    navigate(to);
  };

  return (
    <section className="hero-section" style={{ opacity }}>
      <img
        src={slide.src}
        alt={slide.titulo || 'Imagen principal'}
        className={`hero-img ${fade ? 'fade' : ''}`}
      />

      <div className="gradient-overlay" />

      <span className="label-badge" aria-label={`Tipo: ${slide.tipo || 'Item'}`}>
        {slide.tipo || 'Item'}
      </span>

      <div className={`caption ${fade ? 'fade' : ''}`}>
        <h2 className="caption-title">{slide.titulo || 'Título'}</h2>
        <p className="caption-desc">{slide.descripcion || ''}</p>
      </div>

      {/*Capa clickeable para navegar según la etiqueta */}
      <div
        className="click-overlay"
        onClick={handleNavigate}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate()}
        aria-label={`Ir a ${slide.tipo || 'sección'}`}
      />


      <div
        className="hover-area left"
        onClick={prevSlide}
        aria-label="Anterior"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') prevSlide(); }}
      >
        <span className="arrow left-arrow">&#10094;</span>
      </div>
      <div
        className="hover-area right"
        onClick={nextSlide}
        aria-label="Siguiente"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') nextSlide(); }}
      >
        <span className="arrow right-arrow">&#10095;</span>
      </div>
    </section>
  );
}

export default CarruselMain;
