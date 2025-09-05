import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url(/path-to-your-background.jpg)',
        opacity: opacity,
      }}
    >
      <div className="hero-text">
        <h1>Frase genérica de noticias sobre el Fablab</h1>
      </div>
    </section>
  );
}

export default Hero;
