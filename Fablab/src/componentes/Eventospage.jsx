import React, { useState } from "react";

function AvisosPage() {
  const tabs = [
    { id: "todo", label: "Todo" },
    { id: "avisos", label: "Avisos" },
    { id: "eventos", label: "Eventos" },
  ];

  const avisos = [
    {
      id: 1,
      categoria: "avisos",
      imagen: "https://scontent.flsc1-1.fna.fbcdn.net/v/t39.30808-6/459023620_18037985900501606_8999948346806728511_n.jpg?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGx4vcrwpSLmyDwt_zl0ayThLeWC_9Ttc2Et5YL_1O1zUiCcCB6eFjwnbFk_RZhirC3NPwtH89IMz0rYcWgcTEB&_nc_ohc=vzJ6F59T0LsQ7kNvwELRvwj&_nc_oc=AdnnGfL7AhlTQU4mU6Dmk-X-jbIMSIe8MV12h_xAEw8bTXzU2y2l8ouyx0H-XMAf_uo&_nc_zt=23&_nc_ht=scontent.flsc1-1.fna&_nc_gid=vI7CwBjQ0gfFQeNKZO54tQ&oh=00_AfbzkYsIz9GcSebBbzk9P03MJfsJD7hbMyZkVOG9Z13GEQ&oe=68CB7FE3",
      tipo: "Avisos",
      titulo: "Un acercamineto del pirulin",
      fecha: "Enero",
    },
    {
      id: 2,
      categoria: "avisos",
      imagen: "https://scontent.flsc1-1.fna.fbcdn.net/v/t39.30808-6/459023620_18037985900501606_8999948346806728511_n.jpg?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGx4vcrwpSLmyDwt_zl0ayThLeWC_9Ttc2Et5YL_1O1zUiCcCB6eFjwnbFk_RZhirC3NPwtH89IMz0rYcWgcTEB&_nc_ohc=vzJ6F59T0LsQ7kNvwELRvwj&_nc_oc=AdnnGfL7AhlTQU4mU6Dmk-X-jbIMSIe8MV12h_xAEw8bTXzU2y2l8ouyx0H-XMAf_uo&_nc_zt=23&_nc_ht=scontent.flsc1-1.fna&_nc_gid=vI7CwBjQ0gfFQeNKZO54tQ&oh=00_AfbzkYsIz9GcSebBbzk9P03MJfsJD7hbMyZkVOG9Z13GEQ&oe=68CB7FE3",
      tipo: "Aviso",
      titulo: "El fablab se cierra OMGGGGG",
      fecha: "Febrero",

    },
    {
      id: 3,
      categoria: "avisos",
      imagen: "https://scontent.flsc1-1.fna.fbcdn.net/v/t39.30808-6/459023620_18037985900501606_8999948346806728511_n.jpg?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGx4vcrwpSLmyDwt_zl0ayThLeWC_9Ttc2Et5YL_1O1zUiCcCB6eFjwnbFk_RZhirC3NPwtH89IMz0rYcWgcTEB&_nc_ohc=vzJ6F59T0LsQ7kNvwELRvwj&_nc_oc=AdnnGfL7AhlTQU4mU6Dmk-X-jbIMSIe8MV12h_xAEw8bTXzU2y2l8ouyx0H-XMAf_uo&_nc_zt=23&_nc_ht=scontent.flsc1-1.fna&_nc_gid=vI7CwBjQ0gfFQeNKZO54tQ&oh=00_AfbzkYsIz9GcSebBbzk9P03MJfsJD7hbMyZkVOG9Z13GEQ&oe=68CB7FE3",
      tipo: "Aviso",
      titulo: "Atacan pochinki",
      fecha: "1250-2090",
      likes: null,
      descripcion:
        "Me meo",
    },
    {
      id: 4,
      categoria: "eventos",
      imagen: "https://scontent.flsc1-1.fna.fbcdn.net/v/t39.30808-6/459023620_18037985900501606_8999948346806728511_n.jpg?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGx4vcrwpSLmyDwt_zl0ayThLeWC_9Ttc2Et5YL_1O1zUiCcCB6eFjwnbFk_RZhirC3NPwtH89IMz0rYcWgcTEB&_nc_ohc=vzJ6F59T0LsQ7kNvwELRvwj&_nc_oc=AdnnGfL7AhlTQU4mU6Dmk-X-jbIMSIe8MV12h_xAEw8bTXzU2y2l8ouyx0H-XMAf_uo&_nc_zt=23&_nc_ht=scontent.flsc1-1.fna&_nc_gid=vI7CwBjQ0gfFQeNKZO54tQ&oh=00_AfbzkYsIz9GcSebBbzk9P03MJfsJD7hbMyZkVOG9Z13GEQ&oe=68CB7FE3",
      tipo: "Eventos",
      titulo: "El brian diserta pilucho",
      fecha: "Mañana",
      likes: null,
    },
  ];

  const [activeTab, setActiveTab] = useState("todo");
  const avisosFiltrados =
    activeTab === "todo"
      ? avisos
      : avisos.filter((aviso) => aviso.categoria === activeTab);

  return (
    <section style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Avisos y Actualizaciones
      </h2>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
          borderBottom: "1px solid #ddd",
          paddingBottom: "0.5rem",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? "#8b7c5a" : "transparent",
              color: activeTab === tab.id ? "#fff" : "#8b7c5a",
              border: "none",
              borderBottom:
                activeTab === tab.id ? "3px solid #b8860b" : "3px solid transparent",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontWeight: activeTab === tab.id ? "700" : "400",
              borderRadius: "4px 4px 0 0",
              transition: "all 0.3s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {avisosFiltrados.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>
            No hay avisos en esta categoría.
          </p>
        ) : (
          avisosFiltrados.map((aviso) => (
            <div
              key={aviso.id}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                overflow: "hidden",
              }}
            >
              <img
                src={aviso.imagen}
                alt={aviso.titulo}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "1rem" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#8b7c5a",
                    fontSize: "0.96rem",
                  }}
                >
                  {aviso.tipo}
                </div>
                <h3 style={{ margin: "0.5rem 0 0.5rem 0" }}>{aviso.titulo}</h3>
                <div style={{ fontSize: "0.95rem", color: "#777" }}>{aviso.fecha}</div>
                {aviso.descripcion && (
                  <p style={{ marginTop: "0.8rem", color: "#555" }}>
                    {aviso.descripcion}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default AvisosPage;
