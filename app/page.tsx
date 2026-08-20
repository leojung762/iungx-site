const capabilities = [
  {
    id: "01",
    title: "Bitrix24 / CRM",
    label: "OPERAÇÃO COMERCIAL",
    description:
      "Arquitetura, implantação e integrações que transformam o CRM no sistema operacional da sua operação.",
    stack: "CRM · AUTOMAÇÕES · APIS",
  },
  {
    id: "02",
    title: "IA / Automação",
    label: "INTELIGÊNCIA APLICADA",
    description:
      "Agentes e fluxos inteligentes conectados ao contexto real do negócio — sem automação pela automação.",
    stack: "AGENTES · WORKFLOWS · DADOS",
  },
  {
    id: "03",
    title: "Software",
    label: "ENGENHARIA SOB MEDIDA",
    description:
      "Produtos e sistemas desenhados para eliminar gargalos, integrar áreas e sustentar crescimento.",
    stack: "WEB APPS · ARQUITETURA · INTEGRAÇÕES",
  },
  {
    id: "04",
    title: "Cyber / Infra",
    label: "BASE SEGURA",
    description:
      "Cloud, redes e segurança da informação tratados como fundação — nunca como correção tardia.",
    stack: "SECURITY · CLOUD · DEVOPS",
  },
];

const process = [
  ["01", "DIAGNOSTICAR", "Entender o problema além do sintoma."],
  ["02", "ARQUITETAR", "Desenhar o sistema antes de escolher a ferramenta."],
  ["03", "CONSTRUIR", "Implementar com engenharia, velocidade e controle."],
  ["04", "OPERAR", "Medir, evoluir e manter o que foi colocado em produção."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="IungX — início">
          IUNG<span>X</span><i>/</i>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sistema">Sistema</a>
          <a href="#execucao">Execução</a>
          <a href="#lideranca">Liderança</a>
        </nav>
        <a className="contact-link" href="tel:+554888222608">
          <span>Iniciar conversa</span><b aria-hidden="true">↗</b>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-coordinate" aria-hidden="true">IUNGX / SYS.001</div>
        <div className="hero-watermark" aria-hidden="true">X</div>

        <div className="hero-status">
          <span><i /> SISTEMA ONLINE</span>
          <span>BRASIL / GLOBAL DELIVERY</span>
        </div>

        <div className="hero-layout">
          <div className="hero-message">
            <p className="overline">DO TERMINAL À DECISÃO</p>
            <h1>
              Tecnologia para empresas que não podem operar no <em>improviso.</em>
            </h1>
            <p className="hero-lead">
              Estratégia, software, automação e segurança funcionando como um só sistema —
              construído para o problema real, não para a apresentação.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#sistema">
                Ver o sistema <span aria-hidden="true">↓</span>
              </a>
              <a className="text-action" href="tel:+554888222608">
                +55 48 8822-2608 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="core-panel" aria-label="Mapa das competências IungX">
            <div className="core-panel-head">
              <span>IUNGX_CORE</span>
              <span>LIVE / 04 NODES</span>
            </div>
            <div className="core-map">
              <div className="core-lines" aria-hidden="true" />
              <div className="core-node node-crm"><small>01</small><b>CRM</b></div>
              <div className="core-node node-ai"><small>02</small><b>AI</b></div>
              <div className="core-center"><span>IX</span><small>CORE</small></div>
              <div className="core-node node-dev"><small>03</small><b>DEV</b></div>
              <div className="core-node node-sec"><small>04</small><b>SEC</b></div>
            </div>
            <div className="core-command">
              <span>root@iungx:~$</span> solve --business --secure<span className="blink">_</span>
            </div>
          </div>
        </div>

        <div className="hero-rail">
          <span>ESTRATÉGIA</span><i>01</i>
          <span>ENGENHARIA</span><i>02</i>
          <span>SEGURANÇA</span><i>03</i>
          <span>EXECUÇÃO</span><i>04</i>
        </div>
      </section>

      <section className="capabilities" id="sistema">
        <div className="section-code">01 — O SISTEMA</div>
        <div className="capabilities-intro">
          <h2>Quatro camadas.<br />Uma única <span>responsabilidade.</span></h2>
          <p>
            Fazer a tecnologia sair do campo das promessas e entrar no fluxo real da empresa.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability-row" key={item.id}>
              <div className="capability-id">{item.id}</div>
              <div className="capability-name">
                <small>{item.label}</small>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <div className="capability-stack">{item.stack}</div>
              <span className="row-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="execution" id="execucao">
        <div className="execution-statement">
          <span className="section-code light">02 — EXECUTION LAYER</span>
          <p>Menos</p>
          <h2>DISCURSO.</h2>
          <p>Mais</p>
          <h2 className="solid">SISTEMA.</h2>
        </div>
        <div className="execution-detail">
          <p className="execution-lead">
            A IungX opera no espaço entre a decisão executiva e o que realmente acontece
            quando alguém abre os logs.
          </p>
          <div className="process-list">
            {process.map(([id, title, text]) => (
              <div className="process-step" key={id}>
                <span>{id}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership" id="lideranca">
        <div className="section-code">03 — ROOT ACCESS</div>
        <div className="leadership-grid">
          <div className="leadership-quote">
            <span className="quote-mark">“</span>
            <p>
              Estratégia suficiente para a sala de decisão. Profundidade suficiente para
              <em> abrir o terminal.</em>
            </p>
          </div>

          <div className="profile">
            <div className="profile-head">
              <div className="profile-monogram">LJ</div>
              <div><h2>Leonardo Jung</h2><span>FOUNDER / TECHNOLOGY LEADER</span></div>
            </div>
            <p>
              Trajetória construída entre infraestrutura, engenharia de sistemas,
              cybersecurity, software, automação, inteligência artificial e liderança
              executiva — da Marinha do Brasil a operações nacionais e internacionais.
            </p>
            <dl>
              <div><dt>CAMADA</dt><dd>EXECUTIVA + TÉCNICA</dd></div>
              <div><dt>ABORDAGEM</dt><dd>SECURITY-FIRST</dd></div>
              <div><dt>MODO</dt><dd>HANDS-ON</dd></div>
            </dl>
            <a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">
              PERFIL COMPLETO <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-index">04 / START</div>
        <p>SE O PROBLEMA É REAL,</p>
        <h2>VAMOS CONSTRUIR.</h2>
        <div className="cta-bottom">
          <span>Estratégia → Engenharia → Produção</span>
          <a href="tel:+554888222608">INICIAR CONVERSA <b aria-hidden="true">↗</b></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#inicio">IUNG<span>X</span><i>/</i></a>
        <p>Leonardo Jung Desenvolvimento de Software Ltda.<br />CNPJ 68.006.339/0001-39</p>
        <div className="footer-links">
          <a href="tel:+554888222608">+55 48 8822-2608</a>
          <a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <small>© 2026 / IUNGX TECHNOLOGY PRACTICE</small>
      </footer>
    </main>
  );
}
