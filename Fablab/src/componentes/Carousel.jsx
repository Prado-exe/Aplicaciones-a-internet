import { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const images = [
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/250px-Hollow_Knight_first_cover_art.webp.png',
  'https://upload.wikimedia.org/wikipedia/id/c/c0/Hollow_Knight_cover.jpg',
  'https://sm.ign.com/ign_es/cover/h/hollow-kni/hollow-knight-silksong_db1d.jpg',
  'https://assets1.ignimgs.com/thumbs/userUploaded/2018/6/21/hollowknight1280-1529636220082.jpg',
  // etc.
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const length = images.length;

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, length]);

  function handleChange(nextIndex) {
    setFade(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setFade(false);
    }, 400); // Debe ser igual o menor que el transition en CSS
  }

  const nextSlide = () => handleChange(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => handleChange(current === 0 ? length - 1 : current - 1);

  if (length === 0) return null;

  return (
    <div className="carousel-outer">
      <div className="carousel-inner">
        <button onClick={prevSlide} className="left-arrow">&#10094;</button>
        <div className={`slide-container${fade ? ' fade-out' : ''}`}>
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="carousel-image"
          />
        </div>
        <button onClick={nextSlide} className="right-arrow">&#10095;</button>
      </div>
    </div>
  );
}

export default Carousel;
