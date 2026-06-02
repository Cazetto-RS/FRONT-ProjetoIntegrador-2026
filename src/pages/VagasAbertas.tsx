import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    // Futuramente:
    // fetch("/api/vagas")

    setTimeout(() => {
      setVagas([
        {
          id: 1,
          titulo: "Desenvolvedor Front-End",
          empresa: "Point Media",
          local: "Remoto",
          salario: "R$ 5.500",
          tipo: "CLT",
          nivel: "Júnior",
          descricao:
            "Desenvolvimento de interfaces modernas utilizando React, TypeScript e integração com APIs."
        },
        {
          id: 2,
          titulo: "Designer Digital",
          empresa: "Point Media",
          local: "Híbrido",
          salario: "R$ 4.800",
          tipo: "CLT",
          nivel: "Pleno",
          descricao:
            "Criação de campanhas digitais, materiais gráficos e experiências visuais."
        },
        {
          id: 3,
          titulo: "Analista de Marketing Digital",
          empresa: "Point Media",
          local: "São Paulo",
          salario: "R$ 6.200",
          tipo: "CLT",
          nivel: "Pleno",
          descricao:
            "Planejamento de campanhas, análise de métricas e otimização de resultados."
        },
        {
          id: 4,
          titulo: "Motion Designer",
          empresa: "Point Media",
          local: "Remoto",
          salario: "R$ 5.000",
          tipo: "PJ",
          nivel: "Pleno",
          descricao:
            "Produção de vídeos, animações e conteúdos digitais."
        }
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  function handleCandidatar(vaga: Vaga) {
    navigate("/inscricao", {
      state: { vaga }
    });
  }

  return (
    <main className="vagas-container">

      <div className="bg-blur blur-left"></div>
      <div className="bg-blur blur-right"></div>

      <section className="hero-section">

        <span className="hero-badge">
          Banco de Talentos EZ.JOB
        </span>

        <h1>
          Encontre uma oportunidade
          que combine com o seu potencial.
        </h1>

        <p>
          Conectamos profissionais a empresas que valorizam
          tecnologia, criatividade, inovação e crescimento.
        </p>

      </section>

      <section className="info-cards">

        <div className="info-card">
          <h3>{vagas.length}</h3>
          <span>Vagas Disponíveis</span>
        </div>

        <div className="info-card">
          <h3>100%</h3>
          <span>Processo Online</span>
        </div>
      </section>

      <section className="vagas-content">

        {loading ? (
          <div className="loading-container">

            <div className="loader"></div>

            <p>Carregando oportunidades...</p>

          </div>
        ) : (

          <div className="vagas-grid">

            {vagas.map((vaga) => (

              <article
                key={vaga.id}
                className="vaga-card"
              >

                <div className="vaga-top">

                  <div className="empresa-avatar">
                    {vaga.empresa.charAt(0)}
                  </div>

                  <div>
                    <h2>{vaga.titulo}</h2>
                    <p>{vaga.empresa}</p>
                  </div>

                </div>

                <div className="vaga-tags">
                  <span>{vaga.local}</span>
                  <span>{vaga.tipo}</span>
                  <span>{vaga.nivel}</span>
                </div>

                <p className="vaga-descricao">
                  {vaga.descricao}
                </p>

                <div className="vaga-footer">

                  <strong>{vaga.salario}</strong>

                  <button
                    className="btn-candidatar"
                    onClick={() => handleCandidatar(vaga)}
                  >
                    Ver Detalhes
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

      <section className="processo-section">

        <h2>Como funciona?</h2>

        <div className="processo-grid">

          <div className="processo-card">
            <span>1</span>
            <h3>Escolha uma vaga</h3>
            <p>Analise as oportunidades disponíveis.</p>
          </div>

          <div className="processo-card">
            <span>2</span>
            <h3>Envie seu perfil</h3>
            <p>Preencha sua inscrição rapidamente.</p>
          </div>

          <div className="processo-card">
            <span>3</span>
            <h3>Acompanhe</h3>
            <p>Receba atualizações sobre o processo.</p>
          </div>

        </div>

      </section>

    </main>
  );
}