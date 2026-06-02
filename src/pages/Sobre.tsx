import "../styles/sobre.css";

export function Sobre() {
  return (
    <main className="sobre-container">

      <div className="sobre-blur blur-left"></div>
      <div className="sobre-blur blur-right"></div>

      {/* HERO */}
      <section className="sobre-hero">

        <span className="sobre-badge">
          Sobre a Point Media
        </span>

        <h1>
          Tecnologia,
          <br />
          criatividade e
          <br />
          inovação digital.
        </h1>

        <p>
          A Point Media é uma empresa especializada em produção digital,
          automação, marketing de performance e soluções tecnológicas para
          grandes marcas do mercado brasileiro.
        </p>

      </section>

      {/* EMPRESA */}
      <section className="sobre-section">

        <div className="section-header">
          <span>Quem Somos</span>
          <h2>A empresa que inspirou este projeto</h2>
        </div>

        <div className="sobre-text">
          <p>
            Desde sua atuação no mercado digital, a Point Media desenvolve
            soluções focadas em performance, automação de processos,
            produção de campanhas digitais e gestão de mídia.
          </p>

          <p>
            Seu trabalho atende empresas de grande porte e projetos nacionais,
            utilizando tecnologia para aumentar produtividade, reduzir prazos
            de entrega e otimizar operações digitais.
          </p>
        </div>

      </section>

      {/* ÁREAS */}
      <section className="sobre-cards">

        <article className="sobre-card">
          <div className="card-icon">🎨</div>
          <h3>Produção Digital</h3>
          <p>
            Criação de banners, vídeos, peças HTML5 e campanhas digitais.
          </p>
        </article>

        <article className="sobre-card">
          <div className="card-icon">⚙️</div>
          <h3>Automação</h3>
          <p>
            Processos inteligentes que reduzem tempo de produção e aumentam eficiência.
          </p>
        </article>

        <article className="sobre-card">
          <div className="card-icon">📈</div>
          <h3>Performance</h3>
          <p>
            Planejamento, acompanhamento e otimização de campanhas digitais.
          </p>
        </article>

        <article className="sobre-card">
          <div className="card-icon">💻</div>
          <h3>Tecnologia</h3>
          <p>
            Desenvolvimento de soluções digitais e ferramentas internas.
          </p>
        </article>

      </section>

      {/* CLIENTES */}
      <section className="sobre-section">

        <div className="section-header">
          <span>Grandes Marcas</span>
          <h2>Clientes atendidos pela Point Media</h2>
        </div>

        <div className="clientes-grid">

          <div className="cliente">PicPay</div>
          <div className="cliente">C6 Bank</div>
          <div className="cliente">Serasa</div>
          <div className="cliente">Havaianas</div>
          <div className="cliente">C&A</div>
          <div className="cliente">Track & Field</div>
          <div className="cliente">Veloe</div>

        </div>

      </section>

      {/* PROJETO */}
      <section className="sobre-projeto">

        <span className="projeto-badge">
          Projeto Acadêmico
        </span>

        <h2>Por que criamos a EZ.JOB?</h2>

        <p>
          Este projeto foi desenvolvido como uma solução para auxiliar
          processos de recrutamento e seleção, permitindo o cadastro,
          organização e busca inteligente de talentos.
        </p>

        <p>
          Inspirado nas necessidades reais observadas no mercado digital,
          o sistema busca aproximar profissionais e empresas através de
          uma experiência moderna, intuitiva e eficiente.
        </p>

      </section>

    </main>
  );
}