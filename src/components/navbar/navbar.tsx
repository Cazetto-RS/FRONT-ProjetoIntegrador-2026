import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  House,
  BriefcaseBusiness,
  CircleHelp,
  User,
  Menu,
  X
} from "lucide-react";

import logo from "../../assets/LogoPointMedia.png";

import "./navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`navbar-container ${
          scrolled ? "navbar-sidebar" : ""
        }`}
      >
        <div className="navbar-logo">
          <img src={logo} alt="EZ.JOB" />

          <span
            className={`logo-text ${
              scrolled ? "hide-logo" : ""
            }`}
          >
            EZ<span>.JOB</span>
          </span>
        </div>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className="nav-link"
            data-label="Home"
          >
            <House size={20} />

            <span
              className={`nav-text ${
                scrolled ? "hide-text" : ""
              }`}
            >
              Home
            </span>
          </NavLink>

          <NavLink
            to="/vagas-abertas"
            className="nav-link"
            data-label="Vagas"
          >
            <BriefcaseBusiness size={20} />

            <span
              className={`nav-text ${
                scrolled ? "hide-text" : ""
              }`}
            >
              Vagas
            </span>
          </NavLink>

          <NavLink
            to="/sobre"
            className="nav-link"
            data-label="Sobre"
          >
            <CircleHelp size={20} />

            <span
              className={`nav-text ${
                scrolled ? "hide-text" : ""
              }`}
            >
              Sobre
            </span>
          </NavLink>
        </nav>

        <NavLink
          to="/login"
          className="nav-button desktop-btn"
        >
          <User size={20} />

          <span
            className={`nav-text ${
              scrolled ? "hide-text" : ""
            }`}
          >
            Entrar
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      <div
        className={`mobile-overlay ${
          open ? "show" : ""
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`mobile-menu ${
          open ? "show" : ""
        }`}
      >
        <button
          className="close-menu"
          onClick={() => setOpen(false)}
        >
          <X size={22} />
        </button>

        <NavLink
          to="/"
          onClick={() => setOpen(false)}
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/vagas-abertas"
          onClick={() => setOpen(false)}
        >
          💼 Vagas
        </NavLink>

        <NavLink
          to="/sobre"
          onClick={() => setOpen(false)}
        >
          ℹ️ Sobre
        </NavLink>

        <NavLink
          to="/login"
          className="mobile-btn"
          onClick={() => setOpen(false)}
        >
          👤 Entrar
        </NavLink>
      </aside>
    </>
  );
}