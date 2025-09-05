import { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import './styles/App.css';

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
      <div className="hero-image" style={{ opacity }}>
        <img
          src="https://portal.33bits.net/wp-content/uploads/2018/05/guia-hollow-knight-1024x640.jpg"
          alt="Imagen inicial"
          className="hero-img"
        />
        <div className="gradient-overlay" />
        <h1 className="hero-text">FABBLAB</h1>
      </div>

      <p className="body-text">BODY</p>

      <div className="scroll-test">
        <div className="scroll-end-text">
          <h2>Aquí termina la página (test scroll)</h2>
        </div>
      </div>
    </>
  );
}

export default App;
