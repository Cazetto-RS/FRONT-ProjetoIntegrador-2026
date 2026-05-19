import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/vagas.css";

interface Vaga {
  id: number;
  titulo: string;
  empresa: string;
  local: string;
  salario: string;
  tipo: string;
  nivel: string;
  descricao: string;
}

export function VagasAbertas() {
  const navigate = useNavigate();

  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);

  const [busca, setBusca] = useState("");
  const [filtroLocal, setFiltroLocal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setVagas([
        {
          id: 1,
          titulo: "Desenvolvedor Front-end",
          empresa: "Tech Solutions",
          local: "Remoto",
          salario: "R$ 5.000",
          tipo: "Full Time",
          nivel: "Júnior",
          descricao:
            "Desenvolvimento de interfaces modernas com React, TypeScript e integração de APIs."
        },

        {
          id: 2,
          titulo: "Analista de Sistemas",
          empresa: "InovaCorp",
          local: "São Paulo",
          salario: "R$ 7.500",
          tipo: "Híbrido",
          nivel: "Pleno",
          descricao:
            "Análise de requisitos, documentação técnica e integração entre sistemas."
        },

        {
          id: 3,
          titulo: "UI/UX Designer",
          empresa: "Creative Labs",
          local: "Remoto",
          salario: "R$ 4.800",
          tipo: "PJ",
          nivel: "Pleno",
          descricao:
            "Criação de interfaces modernas e experiências intuitivas para plataformas digitais."
        },

        {
          id: 4,
          titulo: "Suporte Técnico",
          empresa: "HelpDesk Pro",
          local: "Híbrido",
          salario: "R$ 3.200",
          tipo: "CLT",
          nivel: "Júnior",
          descricao:
            "Suporte técnico interno, manutenção de sistemas e atendimento aos usuários."
        }
      ]);

      setLoading(false);
    }, 1200);
  }, []);

  function handleCandidatar(vaga: Vaga) {
    navigate("/inscricao", {
      state: { vaga }
    });
  }

  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(busca.toLowerCase()) &&
    vaga.local.toLowerCase().includes(filtroLocal.toLowerCase())
  );

  return (
    <main className="vagas-container">

      {/* BACKGROUND */}
      <div className="bg-gradient"></div>
      <div className="bg-blur blur-left"></div>
      <div className="bg-blur blur-right"></div>

      {/* HERO */}
      <section className="hero-section">

        <span className="hero-badge">
          Plataforma Inteligente de Talentos
        </span>

        <h1>
          DESCUBRA
          <br />
          OPORTUNIDADES
          <br />
          QUE IMPULSIONAM
          <span> SUA CARREIRA.</span>
        </h1>


      </section>

      {/* FILTROS */}
      <section className="filters-section">

        <div className="search-box">

          <input
            type="text"
            placeholder="Buscar vagas..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

        </div>

        <div className="select-box">

          <select
            value={filtroLocal}
            onChange={(e) => setFiltroLocal(e.target.value)}
          >
            <option value="">Todos Locais</option>
            <option value="Remoto">Remoto</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Híbrido">Híbrido</option>
          </select>

        </div>

      </section>

      {/* CONTENT */}
      <section className="vagas-content">

        {loading ? (

          <div className="loading-container">

            <div className="loader"></div>

            <p>Carregando oportunidades...</p>

          </div>

        ) : vagasFiltradas.length === 0 ? (

          <div className="empty-state">

            <h2>Nenhuma vaga encontrada</h2>

            <p>
              Tente buscar outro termo ou alterar os filtros.
            </p>

          </div>

        ) : (

          <div className="vagas-grid">

            {vagasFiltradas.map((vaga) => (

              <article
                key={vaga.id}
                className="vaga-card"
              >

                {/* TOP */}
                <div className="vaga-top">

                  <div className="empresa-avatar">
                    {vaga.empresa.charAt(0)}
                  </div>

                  <div className="vaga-header">

                    <h2>{vaga.titulo}</h2>

                    <p>{vaga.empresa}</p>

                  </div>

                </div>

                {/* TAGS */}
                <div className="vaga-tags">

                  <span>{vaga.local}</span>

                  <span>{vaga.tipo}</span>

                  <span>{vaga.nivel}</span>

                </div>

                {/* DESC */}
                <p className="vaga-descricao">
                  {vaga.descricao}
                </p>

                {/* FOOTER */}
                <div className="vaga-footer">

                  <div className="vaga-salario">
                    {vaga.salario}
                  </div>

                  <button
                    className="btn-candidatar"
                    onClick={() => handleCandidatar(vaga)}
                  >
                    Candidatar-se
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}