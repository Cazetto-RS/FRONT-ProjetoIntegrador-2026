import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import illustration from "../assets/LogoPointMedia.png";

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">

      {/* Background Effects */}
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>

      {/* Grid Overlay */}
      <div className="grid-overlay"></div>

      <section className="home-content">

        {/* LEFT SIDE */}
        <div className="home-left">

          <span className="home-badge">
            Plataforma Inteligente de Talentos
          </span>

          <h1>
            TALENTOS
            <br />
            NÃO SE
            <br />
            ENCONTRAM.
            <br />
            SE <span>DESTACAM.</span>
          </h1>

          <p>
            Conecte profissionais às melhores oportunidades do mercado.
            Descubra vagas, desenvolva sua carreira e encontre empresas
            que valorizam o seu potencial.
          </p>

          {/* BUTTONS */}
          <div className="home-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/vagas-abertas")}
            >
              Ver Vagas
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/login")}
            >
              Criar Conta
            </button>

          </div>

          {/* STATS */}
          <div className="home-stats">

            <div className="stat-card">
              <h3>+1.2K</h3>
              <span>Talentos</span>
            </div>

            <div className="stat-card">
              <h3>+350</h3>
              <span>Empresas</span>
            </div>

            <div className="stat-card">
              <h3>+890</h3>
              <span>Contratações</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="home-right">

          <div className="image-container">

            <div className="image-glow"></div>

            <img
              src={illustration}
              alt="Ilustração Principal"
              className="hero-image"
            />

          </div>

        </div>

      </section>

    </main>
  );
}