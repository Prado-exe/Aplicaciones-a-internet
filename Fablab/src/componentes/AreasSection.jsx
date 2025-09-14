import { useNavigate } from 'react-router-dom';
import '../styles/AreasSection.css';

const areas = [
  {
    id: 1,
    nombre: "Impresión 3D",
    desc: "Crea prototipos y piezas personalizadas con tecnologías de fabricación aditiva.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/3D_printer_output_01.jpg"
  },
  {
    id: 2,
    nombre: "Cortadora Láser",
    desc: "Cortes y grabados de alta precisión en acrílico, MDF, cartón y más.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cortadora_Laser_-_FabLAB_Newton.jpg"
  },
  {
    id: 3,
    nombre: "Realidad Virtual (RV)",
    desc: "Experimenta simulaciones e interacción inmersiva a través de dispositivos VR.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
  },
];

function AreasSection({ handleLinkClick }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (handleLinkClick) {
      handleLinkClick(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/pag-servicios'), 350);
  };

  return (
    <section className="areas-principales-section">
      <div className="areas-header">
        <h2 className="areas-title">Áreas de trabajo</h2>
        <button className="mas-areas-btn" onClick={handleClick}>
          Más áreas
        </button>
      </div>

      <div className="areas-cards-main">
        {areas.map(area => (
          <div className="area-card" key={area.id}>
            <img src={area.img} alt={area.nombre} className="area-img" />
            <h3 className="area-nombre">{area.nombre}</h3>
            <p className="area-desc">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AreasSection;
