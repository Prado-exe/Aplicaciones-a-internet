import '../styles/EventosSection.css';

const eventos = [
  {
    id: 1,
    titulo: "Taller de Modelado 3D",
    fecha: "20/09/2025",
    descripcion: "Aprende modelado y diseño para impresión 3D."
  },
  {
    id: 2,
    titulo: "Charla de Fabricación Digital",
    fecha: "25/09/2025",
    descripcion: "Descubre proyectos y metodologías de prototipado."
  },
  {
    id: 3,
    titulo: "Workshop de Electrónica",
    fecha: "28/09/2025",
    descripcion: "Iniciación práctica a circuitos y Arduino."
  }
];

function EventosSection() {
  return (
    <section className="eventos-section">
      <h2 className="eventos-title">Próximos Eventos</h2>
      <button className="mas-eventos-btn">Más eventos</button>
      <div className="eventos-cards-main">
        {eventos.map((evento, i) => (
          <div className="evento-group" key={evento.id}>
            <div className="evento-stack">
              <div className="evento-card evento-card-back"></div>
              <div className="evento-card evento-card-mid"></div>
              <div className="evento-card evento-card-front">
                <h3 className="evento-titulo">{evento.titulo}</h3>
                <span className="evento-fecha">{evento.fecha}</span>
              </div>
            </div>
            <div className="evento-descripcion-card">
              <p>{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventosSection;
