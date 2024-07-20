import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#usuarios">Usuarios</a></li>
          <li><a href="#pagos">Pagos</a></li>
          <li><a href="#reportes">Reportes</a></li>
          <li><a href="#Plan">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;