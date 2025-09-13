import React from "react";
import Navbar from "./Navbar";
import "../styles/PagQuienesSomos.css";

// Imágenes
import staff1 from "../assets/StaffRicardo.png";
import staff2 from "../assets/StaffMarcelo.png";
import imgMision from "../assets/ImagenMision.png";
import imgVision from "../assets/ImagenVision.png";

const PagQuienesSomos = () => {
  return (
    <>
      <Navbar />

      <div className="quienes-somos-container">

        {/* Staff */}
        <div className="staff-section animate-fadeDown">
          <h2>Conoce al Staff</h2>
          <div className="staff-grid">
            <div className="staff-item">
              <img src={staff1} alt="Ricardo" />
              <p className="staff-nombre">Ricardo Pérez</p>
              <p className="staff-rol">Coordinador de Laboratorio</p>
            </div>
            <div className="staff-item">
              <img src={staff2} alt="Marcelo" />
              <p className="staff-nombre">Marcelo López</p>
              <p className="staff-rol">Encargado de Proyectos</p>
            </div>
          </div>
        </div>

        <hr className="separador" />

        {/* Quienes Somos */}
        <div className="quienes-somos-texto animate-fadeIn">
          <h1>Quiénes Somos</h1>
          <p>
            Bienvenido a la página de <strong>Quiénes Somos</strong>. Aquí contamos la historia, misión, visión y valores de nuestra organización.
          </p>
        </div>

        <hr className="separador" />

        {/* Misión */}
        <div className="bloque-mision-vision mision animate-fadeLeft">
          <div className="bloque-imagen">
            <img src={imgMision} alt="Misión" />
          </div>
          <div className="bloque-texto">
            <h2>Misión</h2>
            <p>
              Nuestra misión es fomentar la utilización de tecnologías y software como herramientas clave para la creación, diseño y emprendimiento de nuevos productos y servicios.
            </p>
          </div>
        </div>

        <hr className="separador" />

        {/* Visión */}
        <div className="bloque-mision-vision vision animate-fadeRight">
          <div className="bloque-texto">
            <h2>Visión</h2>
            <p>
              Proporcionar un entorno de innovación y colaboración donde estudiantes, académicos e investigadores puedan aplicar su creatividad en soluciones tecnológicas avanzadas.
            </p>
          </div>
          <div className="bloque-imagen">
            <img src={imgVision} alt="Visión" />
          </div>
        </div>

      </div>
    </>
  );
};

export default PagQuienesSomos;
