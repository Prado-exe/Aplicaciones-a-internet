import React from 'react'
import './NavBar.css'
import logo from "../assets/logo.png";

function Navbar(){
    return (
        <header className="header">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo FABLAB" />
                </a>
                <nav className="navbar">
                <a href="/">Inicio</a>
                <a href="/">Sobre Nosotros</a>
                <a href="/">Eventos</a>
                <a href="/">Servicios</a>
                <a href="/">Comunidad</a>
                </nav>
        </header>
    )
}
export default Navbar

