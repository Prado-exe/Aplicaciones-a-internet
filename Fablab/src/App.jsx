import { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import UniqueDivider from './componentes/UniqueDivider';
import Carousel from './componentes/Carousel';
import './styles/App.css';
import Footer from './componentes/footbar';
import BtnVolverInicio from './componentes/BtnVolverInicio';
import CarruselMain from './componentes/CarruselMain';
import EventosSection from './componentes/EventosSetion';

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
        <CarruselMain/>

      <UniqueDivider />

      

      <section className="carousel-section">
        <Carousel />
      </section>

      

      <section className="events-section">
        <UniqueDivider />
         <EventosSection />
      </section>

      

      <section className="news-section">
        <UniqueDivider />
        <p className="body-text">Noticias destacadas</p>
      </section>
     
      <UniqueDivider />
      
      

      <BtnVolverInicio />

      <Footer />

    </>
  );
}

export default App;
