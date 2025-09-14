import { useNavigate } from 'react-router-dom';
import '../styles/ProyectosSection.css';

// Simulación de proyectos (puedes reemplazar con tus datos reales)
const proyectos = [
  { id: 1, nombre: "Sensor Ambiental", desc: "Monitorea aire y temperatura.", img: "https://fablab.fiuls.cl/wp-content/uploads/2024/08/IMG_6160-scaled.jpg" },
  { id: 2, nombre: "Brazo Robótico", desc: "Brazo programable multiuso.", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cortadora_Laser_-_FabLAB_Newton.jpg" },
  { id: 3, nombre: "Cámara IoT", desc: "Vigilancia inteligente conectada.", img: "https://fablab.fiuls.cl/wp-content/uploads/2024/08/Grafica-Mousepad-FABLAB-1.png" },
  { id: 4, nombre: "Plotter DIY", desc: "Dibuja y corta por control computarizado.", img: "https://fablab.fiuls.cl/wp-content/uploads/2024/08/IMG_6160-scaled.jpg" },
  { id: 5, nombre: "Cultivador Hidropónico", desc: "Sistema automático para plantas.", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cortadora_Laser_-_FabLAB_Newton.jpg" },
  { id: 6, nombre: "LED Art", desc: "Instalación artística con LEDs.", img: "https://fablab.fiuls.cl/wp-content/uploads/2024/08/Grafica-Mousepad-FABLAB-1.png" },
  { id: 7, nombre: "Control Arduino", desc: "Automatización y domótica.", img: "https://fablab.fiuls.cl/wp-content/uploads/2024/08/IMG_6160-scaled.jpg" },
  { id: 8, nombre: "Impresión 3D", desc: "Diseños personalizados impresos.", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cortadora_Laser_-_FabLAB_Newton.jpg" },
];

function ProyectosSection() {
  const navigate = useNavigate();
  const handleMasProyectos = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/pag-proyectos'), 300);
  };

  return (
    <section className="proyectos-section">
      <div className="proyectos-header">
        <h2 className="proyectos-title">Proyectos novedosos</h2>
        <button className="mas-proyectos-btn" onClick={handleMasProyectos}>
          Más proyectos
        </button>
      </div>
      <div className="proyectos-cards-main">
        {proyectos.map(proy => (
          <div className="proyecto-card" key={proy.id}>
            <img src={proy.img} alt={proy.nombre} className="proyecto-img"/>
            <h3 className="proyecto-nombre">{proy.nombre}</h3>
            <p className="proyecto-desc">{proy.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProyectosSection;
