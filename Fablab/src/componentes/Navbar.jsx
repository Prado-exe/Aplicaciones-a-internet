import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../assets/logo_test.png';
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);       
  const [subOpen, setSubOpen] = useState(null);  

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
        setSubOpen(null);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setSubOpen(null);
      }
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
    setSubOpen(null);
  };

const isMobile = () => window.innerWidth <= 768;

  
const handleParentClick = (key) => {
  if (window.innerWidth > 768) return; 
  setSubOpen(prev => (prev === key ? null : key));
};


  return (
    <header className="header">
      <a href="/" className="logo" aria-label="Inicio">
        <img src={logo} alt="Logo FABLAB" />
      </a>

      <button
        className="menu-toggle"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen(!open)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <nav id="primary-navigation" className={`navbar ${open ? 'open' : ''}`}>
        <ul className="menu">
          <li className="menu-item">
            <a href="/" onClick={handleLinkClick}>Inicio</a>
          </li>

          {/* SOBRE NOSOTROS */}
          <li className={`menu-item has-submenu ${subOpen === 'sobre' ? 'open-sub' : ''}`}>
            <button
              type="button"
              className="menu-parent"
              aria-haspopup="true"
              aria-expanded={subOpen === 'sobre'}
              onClick={() => handleParentClick('sobre')}
            >
              Sobre Nosotros <span className="caret" aria-hidden="true">▾</span>
            </button>
            <ul className="submenu">
              <li><a href="/" onClick={handleLinkClick}>Que es FABLAB</a></li>
              <li><a href="/" onClick={handleLinkClick}>Misión y Visión</a></li>
              <li><a href="/" onClick={handleLinkClick}>Equipo</a></li>
              <li><a href="/" onClick={handleLinkClick}>Instalaciones</a></li>
              <li><a href="/" onClick={handleLinkClick}>Horarios Disponibles</a></li>
              <li><a href="/" onClick={handleLinkClick}>Comunidad</a></li>
            </ul>
          </li>

              {/* EVENTOS */}
              <li
                className={`menu-item has-submenu ${
                  subOpen === "eventos" ? "open-sub" : ""
                }`}
              >
                <Link
                  to="/eventos"
                  className="menu-parent"
                  onClick={() => toggleSubmenu("eventos")}
                >
                  Eventos <span className="caret" aria-hidden="true">▾</span>
                </Link>
              </li>


            {/* SERVICIOS */}
            <li className={`menu-item has-submenu ${subOpen === 'servicios' ? 'open-sub' : ''}`}>
              <Link to="/servicios" className="menu-parent">
                Servicios <span className="caret" aria-hidden="true">▾</span>
              </Link>
            </li>

            <li className="menu-item">
              <a href="/" onClick={handleLinkClick}>Noticias</a>
            </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
