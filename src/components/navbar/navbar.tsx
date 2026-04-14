import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">

      {/* LOGO */}
      <div className="navbar-logo">
        <img src="./src/assets/LogoPointMedia.png" alt="Logo" />
        <span className="logo-text">EZ<span>.JOB</span></span>
      </div>

      {/* LINKS DESKTOP */}
      <nav className={`navbar-links ${open ? "open" : ""}`}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/vagas-abertas" className="nav-link">Vagas</NavLink>
        <NavLink to="/sobre" className="nav-link">Sobre</NavLink>

        {/* botão mobile */}
        <NavLink to="/login" className="nav-button mobile">
          Entrar
        </NavLink>
      </nav>

      {/* AÇÕES */}
      <div className="navbar-actions">
        <NavLink to="/login" className="nav-button desktop">
          Entrar
        </NavLink>

        {/* MENU MOBILE */}
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    </header>
  );
}