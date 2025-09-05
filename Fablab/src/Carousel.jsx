import React, { useState } from 'react';
import './Carousel.css';

const items = [
  { id: 1, text: 'Noticia 1' },
  { id: 2, text: 'Noticia 2' },
  { id: 3, text: 'Noticia 3' },
  { id: 4, text: 'Noticia 4' },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <button className="nav prev" onClick={prev}>{'<'}</button>
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item.text}
          </div>
        ))}
      </div>
      <button className="nav next" onClick={next}>{'>'}</button>
    </div>
  );
}

export default Carousel;
