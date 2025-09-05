import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Fablab</div>
      <nav className="nav">
        <ul>
          <li>Inicio</li>
          <li className="dropdown">
            Comunidad
            <ul className="dropdown-menu">
              <li>Eventos</li>
              <li>Talleres</li>
            </ul>
          </li>
          <li>Noticias</li>
          <li>Servicios</li>
          <li>Sobre Nosotros</li>
        </ul>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;
