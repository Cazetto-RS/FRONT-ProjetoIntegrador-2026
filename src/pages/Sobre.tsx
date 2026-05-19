import "../styles/sobre.css";

export function Sobre() {
  return (
    <main className="sobre-container">

      {/* BACKGROUND */}
      <div className="sobre-blur blur-left"></div>
      <div className="sobre-blur blur-right"></div>

      {/* HERO */}
      <section className="sobre-hero">

        <span className="sobre-badge">
          Plataforma Inteligente de Talentos
        </span>

        <h1>
          CONECTANDO
          <br />
          TALENTOS AO
          <br />
          FUTURO DO
          <span> MERCADO.</span>
        </h1>

        <p>
          Somos uma plataforma moderna focada em aproximar
          profissionais e empresas através de tecnologia,
          inovação e oportunidades reais.
        </p>

      </section>

      {/* STATS */}
      <section className="sobre-stats">

        <div className="stat-card">
          <h2>+1.2K</h2>
          <span>Talentos Cadastrados</span>
        </div>

        <div className="stat-card">
          <h2>+350</h2>
          <span>Empresas Parceiras</span>
        </div>

        <div className="stat-card">
          <h2>+890</h2>
          <span>Contratações</span>
        </div>

      </section>

      {/* CARDS */}
      <section className="sobre-cards">

        <article className="sobre-card">

          <div className="card-icon">
            🚀
          </div>

          <h2>Missão</h2>

          <p>
            Transformar a forma como talentos e empresas se conectam,
            criando oportunidades através de tecnologia e inovação.
          </p>

        </article>

        <article className="sobre-card">

          <div className="card-icon">
            💡
          </div>

          <h2>Visão</h2>

          <p>
            Ser referência em recrutamento digital moderno,
            oferecendo experiências inteligentes e eficientes.
          </p>

        </article>

        <article className="sobre-card">

          <div className="card-icon">
            🔥
          </div>

          <h2>Valores</h2>

          <p>
            Transparência, inovação, excelência e foco total
            na evolução profissional dos usuários.
          </p>

        </article>

      </section>

      {/* EXTRA SECTION */}
      <section className="sobre-extra">

        <div className="extra-content">

          <span className="extra-badge">
            Tecnologia & Inovação
          </span>

          <h2>
            EXPERIÊNCIA
            <br />
            MODERNA E
            <span> INTELIGENTE.</span>
          </h2>

          <p>
            Desenvolvemos uma plataforma moderna,
            responsiva e intuitiva para conectar
            empresas aos melhores talentos do mercado.
          </p>

        </div>

      </section>

    </main>
  );
}