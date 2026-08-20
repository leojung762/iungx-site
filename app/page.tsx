const solutions = [
  {
    number: "01",
    title: "Bitrix24 & CRM",
    description:
      "Implantação, evolução e integração do Bitrix24 para conectar comercial, operação e gestão em um único fluxo.",
    tags: ["CRM", "Automações", "Integrações"],
  },
  {
    number: "02",
    title: "IA & Automação",
    description:
      "Agentes, copilotos e fluxos inteligentes aplicados a processos reais — com contexto, segurança e resultado mensurável.",
    tags: ["Agentes de IA", "Workflows", "APIs"],
  },
  {
    number: "03",
    title: "Software sob medida",
    description:
      "Sistemas e integrações desenhados para eliminar gargalos, reduzir trabalho manual e acompanhar o crescimento do negócio.",
    tags: ["Web apps", "Arquitetura", "Dados"],
  },
  {
    number: "04",
    title: "Segurança & Infraestrutura",
    description:
      "Arquitetura, cloud, redes e cybersecurity com visão ofensiva e uma abordagem security-first desde a concepção.",
    tags: ["Cloud", "Security", "DevOps"],
  },
];

const principles = [
  {
    key: "negócio",
    title: "O problema vem primeiro",
    text: "A tecnologia parte do impacto operacional esperado, não de uma ferramenta da moda.",
  },
  {
    key: "engenharia",
    title: "Execução de ponta a ponta",
    text: "Da descoberta à arquitetura, implementação, integração e sustentação da solução.",
  },
  {
    key: "segurança",
    title: "Segurança por padrão",
    text: "Risco, acesso e proteção de dados fazem parte do projeto desde a primeira decisão.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="IungX — início">
          <span>Iung</span><b>X</b><i>.</i>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#metodo">Como atuamos</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a
          className="header-cta"
          href="tel:+554888222608"
        >
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="eyebrow"><span /> Tecnologia que move negócios</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Do terminal à <em>sala de decisão.</em>
            </h1>
            <p>
              Criamos soluções digitais que conectam estratégia, engenharia,
              automação e segurança para resolver problemas reais de negócio.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#solucoes">
                Explorar soluções <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-ghost"
                href="tel:+554888222608"
              >
                Falar com um especialista <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="terminal-wrap" aria-label="Visão técnica da IungX">
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dots"><span /><span /><span /></div>
                <span>iungx — zsh</span>
                <span>⌘</span>
              </div>
              <div className="terminal-body">
                <p><b>root@iungx</b>:~# whoami</p>
                <p className="terminal-output">technology partner</p>
                <p><b>root@iungx</b>:~# focus --list</p>
                <div className="terminal-list">
                  <span><i>✓</i> business + technology</span>
                  <span><i>✓</i> secure by design</span>
                  <span><i>✓</i> hands-on execution</span>
                </div>
                <p className="terminal-last"><b>root@iungx</b>:~# build <span className="cursor" /></p>
              </div>
            </div>
            <div className="signal-card">
              <span className="signal-dot" />
              <div><small>STATUS</small><strong>Prontos para construir</strong></div>
            </div>
          </div>
        </div>
        <div className="hero-strip" aria-label="Áreas de atuação">
          <span>BITRIX24</span><i>×</i><span>CYBERSECURITY</span><i>×</i>
          <span>ARTIFICIAL INTELLIGENCE</span><i>×</i><span>SOFTWARE</span><i>×</i>
          <span>INFRASTRUCTURE</span>
        </div>
      </section>

      <section className="section solutions" id="solucoes">
        <div className="section-heading">
          <div>
            <span className="section-index">01 / SOLUÇÕES</span>
            <h2>Tecnologia aplicada.<br /><em>Resultado concreto.</em></h2>
          </div>
          <p>
            Competências que trabalham juntas para transformar processos complexos
            em operações mais simples, inteligentes e seguras.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="card-top">
                <span>{solution.number}</span><i aria-hidden="true">↗</i>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="tags">
                {solution.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="method-intro">
          <span className="section-index light">02 / COMO ATUAMOS</span>
          <h2>Estratégia sem execução é só um slide bonito.</h2>
          <p>
            A IungX combina visão executiva e profundidade técnica para conduzir
            decisões melhores — e transformar essas decisões em sistemas que funcionam.
          </p>
        </div>
        <div className="principles">
          {principles.map((principle, index) => (
            <article key={principle.key}>
              <span>0{index + 1}</span>
              <div>
                <small>{principle.key}</small>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="about-kicker">
          <span className="section-index">03 / LIDERANÇA</span>
          <div className="monogram" aria-hidden="true">LJ</div>
        </div>
        <div className="about-content">
          <p className="quote">
            “Um líder de tecnologia precisa entender estratégia, pessoas e negócio —
            mas também precisa saber <em>abrir o terminal.</em>”
          </p>
          <div className="about-copy">
            <h2>Leonardo Jung</h2>
            <span>Founder & Technology Leader</span>
            <p>
              Experiência prática em infraestrutura, engenharia de sistemas,
              cybersecurity, desenvolvimento de software, automação e inteligência
              artificial — da Marinha do Brasil à liderança de tecnologia em ambientes
              nacionais e internacionais.
            </p>
            <p>
              Hoje, conecta tecnologia e execução de negócio para desenhar arquiteturas,
              liderar times e transformar desafios operacionais em soluções escaláveis.
            </p>
            <a
              href="https://www.linkedin.com/in/leonardo-j-93b304286/"
              target="_blank"
              rel="noreferrer"
            >
              Ver perfil no LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span>SEU PRÓXIMO PROJETO COMEÇA AQUI</span>
          <h2>Vamos construir algo<br />que <em>realmente funciona?</em></h2>
        </div>
        <a
          className="cta-circle"
          href="tel:+554888222608"
          aria-label="Ligar para Leonardo no telefone +55 48 8822-2608"
        >
          <span>Vamos<br />conversar</span><b aria-hidden="true">↗</b>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span>Iung</span><b>X</b><i>.</i></a>
        <p>Leonardo Jung Desenvolvimento de Software Ltda.<br />CNPJ 68.006.339/0001-39</p>
        <div>
          <a href="tel:+554888222608">+55 48 8822-2608</a>
          <a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <small>© 2026 IungX. Tecnologia com propósito.</small>
      </footer>
    </main>
  );
}
