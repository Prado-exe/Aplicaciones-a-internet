import { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import UniqueDivider from './componentes/UniqueDivider';
import Carousel from './componentes/Carousel';
import './styles/App.css';
import Footer from './componentes/footbar';
import BtnVolverInicio from './componentes/BtnVolverInicio';
import CarruselMain from './componentes/CarruselMain';
import EventosSection from './componentes/EventosSetion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProyectosSection from './componentes/ProyectosSection';
import TalleresSection from './componentes/TalleresSection';
import AreasSection from './componentes/AreasSection';
import ImportantNews from './componentes/Noticiero';


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
      <section className="talleres-section">
        <UniqueDivider />
        <TalleresSection/>
      </section>
      
      <section className="areas-section">
        <UniqueDivider />
        <AreasSection/>
      </section>

      <section className="eventos-section">
        <UniqueDivider />
        <ImportantNews/>
      </section>
 

      <section className="proyectos-section">
        <UniqueDivider />
        <ProyectosSection/>
      </section>
     
      <section className="concursos-section">
        <UniqueDivider />
        <p className="body-text">mostrar concursos</p>
      </section>
      
      

      <BtnVolverInicio />

      <Footer />

    </>
  );
}

export default App;
