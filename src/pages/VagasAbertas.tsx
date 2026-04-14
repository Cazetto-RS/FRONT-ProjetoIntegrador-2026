import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/vagas.css";

export function VagasAbertas() {
  const navigate = useNavigate();

  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [filtroLocal, setFiltroLocal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setVagas([
        { id: 1, titulo: "Desenvolvedor Front-end", empresa: "Tech Solutions", local: "Remoto" },
        { id: 2, titulo: "Analista de Sistemas", empresa: "InovaCorp", local: "São Paulo" },
        { id: 3, titulo: "Suporte Técnico", empresa: "HelpDesk Pro", local: "Híbrido" }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  function handleCandidatar(vaga) {
    navigate("/inscricao", { state: { vaga } });
  }

  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(busca.toLowerCase()) &&
    vaga.local.toLowerCase().includes(filtroLocal.toLowerCase())
  );

  return (
    <div className="vagas-container">

      <h1>Vagas Abertas</h1>

      {/* FILTROS */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar vaga..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          value={filtroLocal}
          onChange={(e) => setFiltroLocal(e.target.value)}
        >
          <option value="">Todos locais</option>
          <option value="Remoto">Remoto</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>

      {loading ? (
        <p className="loading">Carregando vagas...</p>
      ) : vagasFiltradas.length === 0 ? (
        <p className="empty">Nenhuma vaga encontrada</p>
      ) : (
        <div className="vagas-grid">
          {vagasFiltradas.map((vaga) => (
            <div key={vaga.id} className="vaga-card">

              <div className="vaga-info">
                <h2>{vaga.titulo}</h2>
                <p>{vaga.empresa}</p>
                <span>{vaga.local}</span>
              </div>

              <button
                className="btn-candidatar"
                onClick={() => handleCandidatar(vaga)}
              >
                Candidatar-se
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}