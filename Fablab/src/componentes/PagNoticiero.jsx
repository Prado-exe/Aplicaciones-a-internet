import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/PagNoticiero.css";

export default function PagNoticiero() {
  const tabs = [
    { id: "todo", label: "Todo" },
    { id: "avisos", label: "Avisos" },
    { id: "eventos", label: "Eventos" },
  ];

  const eventoImg =
    "https://scontent.flsc1-1.fna.fbcdn.net/v/t39.30808-6/459023620_18037985900501606_8999948346806728511_n.jpg";

  const avisos = [
    { id: 1, categoria: "avisos", tipo: "Avisos", titulo: "Un acercamiento a la robotica", fecha: "Enero" },
    { id: 2, categoria: "avisos", tipo: "Aviso", titulo: "Taller unity 2D", fecha: "Febrero" },
    { id: 3, categoria: "avisos", tipo: "Aviso", titulo: "taller Arduino avanzado ", fecha: "1250-2090", descripcion: " " },
    { id: 4, categoria: "eventos", tipo: "Eventos", titulo: "presentaciones gamelab", fecha: "Mañana" },
  ];
  
  const avisosConImagen = avisos.map((aviso) => ({ ...aviso, imagen: eventoImg }));

  const [activeTab, setActiveTab] = useState("todo");
  const avisosFiltrados =
    activeTab === "todo"
      ? avisosConImagen
      : avisosConImagen.filter((aviso) => aviso.categoria === activeTab);

  return (
    <>
      <Navbar />

      <main className="noticiero">
        <header className="noticiero-header">
          <h1>Avisos y Actualizaciones</h1>
          <p>Entérate de las últimas novedades y eventos del FABLAB</p>
        </header>

        <div className="noticiero-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="noticiero-grid">
          {avisosFiltrados.length === 0 ? (
            <p className="no-avisos">No hay avisos en esta categoría.</p>
          ) : (
            avisosFiltrados.map((aviso, i) => (
              <section key={aviso.id} className={`noticiero-row ${i % 2 ? "invert" : ""}`}>
                <div className="noticiero-info">
                  <h2>{aviso.titulo}</h2>
                  <p className="tipo">{aviso.tipo}</p>
                  <p className="fecha">{aviso.fecha}</p>
                  {aviso.descripcion && <p>{aviso.descripcion}</p>}
                </div>
                <figure className="noticiero-media">
                  <img src={aviso.imagen} alt={aviso.titulo} loading="lazy" />
                </figure>
              </section>
            ))
          )}
        </div>
      </main>
    </>
  );
}
