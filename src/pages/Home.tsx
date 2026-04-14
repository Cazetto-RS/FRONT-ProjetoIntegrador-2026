import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Background blur */}
      <div className="bg-blur"></div>

      <div className="home-content">

        {/* Lado esquerdo */}
        <div className="home-left">
          <h1>
            TALENTOS<br />
            NÃO SE<br />
            ENCONTRAM.<br />
            SE <span>DESTACAM.</span>
          </h1>

          <p>
            Conecte-se às melhores oportunidades e destaque seu talento no mercado.
          </p>

          <div className="home-buttons">
            <button onClick={() => navigate("/vagas")}>
              Ver Vagas
            </button>

            <button
              className="secondary"
              onClick={() => navigate("/cadastro")}
            >
              Criar Conta
            </button>
          </div>
        </div>

        {/* Lado direito */}
        <div className="home-right">
          <img
            src="/assets/illustration.png"
            alt="Ilustração"
          />
        </div>

      </div>
    </div>
  );
}