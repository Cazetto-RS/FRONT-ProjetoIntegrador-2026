import "../styles/sobre.css";

export function Sobre() {
  return (
    <main className="sobre-container">

      <div className="bg-blur blur-1" />
      <div className="bg-blur blur-2" />

      {/* HERO */}
      <section className="sobre-hero">
        <span className="sobre-badge">
          Projeto Integrador · Fatec Tatuí × Point Media
        </span>

        <h1>
          Tecnologia que conecta
          <br />
          <span className="h1-highlight">pessoas e oportunidades.</span>
        </h1>

        <p>
          O EZ.JOB nasceu da união entre a Fatec Tatuí e a Point Media para transformar
          o jeito como empresas encontram talentos — e talentos encontram oportunidades.
        </p>

        <div className="sobre-stats">
          <div className="stat-item">
            <strong>2026</strong>
            <span>Ano do projeto</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>ADS</strong>
            <span>Análise e Desenvolvimento de Sistemas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>2</strong>
            <span>Instituições parceiras</span>
          </div>
        </div>
      </section>

      {/* O PROJETO */}
      <section className="sobre-section">
        <div className="section-header">
          <span className="section-eyebrow">O projeto</span>
          <h2>Como surgiu o EZ.JOB</h2>
        </div>

        <div className="sobre-text-grid">
          <p>
            A EZ.JOB foi criada como Projeto Integrador do curso de Análise e
            Desenvolvimento de Sistemas da Fatec Tatuí. O objetivo foi desenvolver
            uma plataforma capaz de facilitar processos de recrutamento, organização
            de candidatos e gerenciamento de talentos de forma centralizada.
          </p>
          <p>
            O sistema foi pensado para aproximar empresas e profissionais através
            de uma experiência moderna e intuitiva, eliminando a dependência de
            planilhas e e-mails e preparando o terreno para integrações futuras
            com tecnologias de matching e inteligência artificial.
          </p>
        </div>
      </section>

      {/* PARCERIA */}
      <section className="sobre-parceria">
        <div className="section-header">
          <span className="section-eyebrow">A parceria</span>
          <h2>Quem está por trás do projeto</h2>
        </div>

        <div className="parceria-cards">

          <article className="parceria-card">
            <div className="card-top">
              <div className="card-emoji">🎓</div>
              <span className="card-badge">Instituição acadêmica</span>
            </div>
            <h3>Fatec Tatuí</h3>
            <p>
              Faculdade de Tecnologia de Tatuí, vinculada ao Centro Paula Souza.
              Responsável pela formação acadêmica e pelo desenvolvimento do projeto
              através dos alunos do curso de ADS.
            </p>
            <ul className="card-list">
              <li>Desenvolvimento acadêmico supervisionado</li>
              <li>Metodologia de engenharia de software</li>
              <li>Formação full stack aplicada</li>
            </ul>
            <a
              href="https://www.fatectatui.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Visitar site →
            </a>
          </article>

          <article className="parceria-card parceria-card--destaque">
            <div className="card-top">
              <div className="card-emoji">🚀</div>
              <span className="card-badge card-badge--blue">Empresa parceira</span>
            </div>
            <h3>Point Media</h3>
            <p>
              Empresa especializada em marketing digital, automação de processos,
              produção de mídia e soluções tecnológicas. Apresentou o desafio real
              que deu origem à plataforma EZ.JOB.
            </p>
            <ul className="card-list">
              <li>Marketing digital e mídia de performance</li>
              <li>Automação de processos</li>
              <li>Soluções tecnológicas corporativas</li>
            </ul>
            <a
              href="https://www.pointmedia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Visitar site →
            </a>
          </article>

          <article className="parceria-card">
            <div className="card-top">
              <div className="card-emoji">💻</div>
              <span className="card-badge">Desenvolvimento</span>
            </div>
            <h3>Stack moderna</h3>
            <p>
              Construído com tecnologias atuais de mercado, com foco em
              usabilidade, organização de dados, escalabilidade e
              preparação para integração via API REST.
            </p>
            <ul className="card-list">
              <li>React + TypeScript no frontend</li>
              <li>Java Spring Boot no backend</li>
              <li>PostgreSQL como banco de dados</li>
            </ul>
          </article>

        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="sobre-section">
        <div className="section-header">
          <span className="section-eyebrow">O que entregamos</span>
          <h2>Pilares da plataforma</h2>
        </div>

        <div className="objetivos-grid">
          <div className="objetivo-card">
            <span className="objetivo-num">01</span>
            <h4>Banco de talentos</h4>
            <p>Cadastro e organização centralizada de candidatos com currículos, experiências e competências.</p>
          </div>
          <div className="objetivo-card">
            <span className="objetivo-num">02</span>
            <h4>Gestão de vagas</h4>
            <p>Publicação e controle de oportunidades com informações completas sobre cada posição.</p>
          </div>
          <div className="objetivo-card">
            <span className="objetivo-num">03</span>
            <h4>Processo seletivo</h4>
            <p>Candidaturas online integradas ao sistema, eliminando etapas manuais e desorganizadas.</p>
          </div>
          <div className="objetivo-card">
            <span className="objetivo-num">04</span>
            <h4>Escalabilidade</h4>
            <p>Arquitetura preparada para crescimento e integração futura com sistemas de matching.</p>
          </div>
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <section className="sobre-encerramento">
        <span className="sobre-badge">Projeto Integrador ADS</span>
        <h2>Conectando conhecimento acadêmico ao mercado</h2>
        <p>
          A EZ.JOB representa a união entre ensino, tecnologia e inovação. Mais do que um
          trabalho acadêmico, o projeto demonstra como soluções digitais podem gerar valor
          real para empresas e profissionais — desenvolvido pelos alunos da Fatec Tatuí
          em parceria com a Point Media.
        </p>
      </section>

    </main>
  );
}