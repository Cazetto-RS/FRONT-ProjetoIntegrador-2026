import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import illustration from "../assets/LogoPointMedia.png";

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">

      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>

      <div className="floating-dot dot1"></div>
      <div className="floating-dot dot2"></div>
      <div className="floating-dot dot3"></div>

      <section className="home-content">

        <div className="home-left">

          <span className="home-badge">
            ✨ Banco de Talentos Inteligente
          </span>

          <h1>
            Encontre oportunidades
            <br />
            que combinam com
            <br />
            <span className="typing-text">
              o seu talento.
            </span>
          </h1>

          <p>
            A EZ.JOB conecta profissionais e empresas em um único lugar.
            Cadastre seu perfil, descubra novas oportunidades e encontre
            caminhos para crescer na sua carreira.
          </p>

          <div className="home-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/vagas-abertas")}
            >
              Explorar Vagas
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/login")}
            >
              Criar Conta
            </button>

          </div>

        </div>

        <div className="home-right">

          <div className="image-container">

            <img
              src={illustration}
              alt="EZ.JOB"
              className="hero-image"
            />

          </div>

        </div>

      </section>

    </main>
  );
}