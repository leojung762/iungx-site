const services = [
  {
    eyebrow: "Bitrix24 & CRM",
    title: "Uma operação comercial que realmente conversa com o restante da empresa.",
    description:
      "Desenhamos, implantamos e integramos o Bitrix24 para organizar processos, reduzir trabalho manual e transformar o CRM em uma fonte confiável para decisões.",
    bullets: ["Implantação e evolução", "Automações e integrações", "Dados e governança"],
    visual: "crm",
  },
  {
    eyebrow: "IA & Automação",
    title: "Inteligência artificial conectada ao trabalho real.",
    description:
      "Criamos agentes, copilotos e fluxos inteligentes com contexto, segurança e objetivo claro — da primeira automação ao processo completo.",
    bullets: ["Agentes de IA", "Workflows inteligentes", "Integração com APIs"],
    visual: "ai",
  },
  {
    eyebrow: "Software sob medida",
    title: "Sistemas construídos em torno do problema, não do pacote.",
    description:
      "Projetamos produtos e integrações que eliminam gargalos, conectam áreas e acompanham o crescimento sem criar mais uma camada de improviso.",
    bullets: ["Aplicações web", "Arquitetura de software", "Sistemas integrados"],
    visual: "software",
  },
  {
    eyebrow: "Cybersecurity & Infra",
    title: "Segurança como arquitetura, não como correção tardia.",
    description:
      "Infraestrutura, cloud, redes e segurança da informação com visão ofensiva e abordagem security-first desde a primeira decisão técnica.",
    bullets: ["Cloud e infraestrutura", "Security by design", "Observabilidade e DevOps"],
    visual: "security",
  },
];

const steps = [
  ["01", "Entender", "O problema, o processo e o impacto esperado."],
  ["02", "Desenhar", "A arquitetura e o caminho de implementação."],
  ["03", "Construir", "A solução integrada à operação real."],
  ["04", "Evoluir", "Métricas, segurança e melhoria contínua."],
];

function ProductVisual({ type }: { type: string }) {
  if (type === "crm") {
    return (
      <div className="product-visual crm-visual" aria-hidden="true">
        <div className="visual-top"><span>Operação comercial</span><i>Ao vivo</i></div>
        <div className="crm-metric"><small>Pipeline</small><strong>R$ 428.500</strong><span>+18,4%</span></div>
        <div className="crm-board">
          <div><small>NOVOS</small><b>12</b><i /><i /><i /></div>
          <div><small>PROPOSTA</small><b>08</b><i /><i /></div>
          <div><small>NEGOCIAÇÃO</small><b>05</b><i /><i /><i /></div>
        </div>
        <div className="visual-foot"><span>Automação executada</span><b>✓</b></div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="product-visual ai-visual" aria-hidden="true">
        <div className="visual-top"><span>Agente operacional</span><i>Executando</i></div>
        <div className="agent-orbit">
          <span className="agent-core">AI</span>
          <span className="orbit-node n1">CRM</span>
          <span className="orbit-node n2">DADOS</span>
          <span className="orbit-node n3">API</span>
          <span className="orbit-node n4">TIME</span>
        </div>
        <div className="agent-log"><span>03 tarefas concluídas</span><b>Próxima ação →</b></div>
      </div>
    );
  }

  if (type === "software") {
    return (
      <div className="product-visual software-visual" aria-hidden="true">
        <div className="visual-top"><span>Release / produção</span><i>Estável</i></div>
        <div className="code-window">
          <p><small>01</small><span>const</span> problema = operação.real;</p>
          <p><small>02</small><span>const</span> sistema = arquitetura(problema);</p>
          <p><small>03</small><span>await</span> construir(sistema);</p>
          <p><small>04</small><b>deploy</b>({`{ secure: true }`});</p>
        </div>
        <div className="deploy-line"><i /><span>Build</span><i /><span>Testes</span><i /><span>Produção</span></div>
      </div>
    );
  }

  return (
    <div className="product-visual security-visual" aria-hidden="true">
      <div className="visual-top"><span>Security posture</span><i>Protegido</i></div>
      <div className="security-score"><div><strong>94</strong><span>/100</span></div><p>Ambiente monitorado<br />e preparado para evoluir.</p></div>
      <div className="security-list">
        <span><i>✓</i> Identidade e acesso <b>OK</b></span>
        <span><i>✓</i> Infraestrutura <b>OK</b></span>
        <span><i>✓</i> Observabilidade <b>OK</b></span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="IungX — início">IungX</a>
        <nav aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#como-atuamos">Como atuamos</a>
          <a href="#lideranca">Sobre</a>
        </nav>
        <a className="contact-link" href="tel:+554888222608">
          <span>Fale com a IungX</span><b aria-hidden="true">↗</b>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-mark" aria-hidden="true"><span>IX</span></div>
        <h1>IungX</h1>
        <p>Tecnologia aplicada ao negócio, do terminal à sala de decisão.</p>
        <a className="hero-button" href="#solucoes">
          Conheça nossas soluções <span aria-hidden="true">↓</span>
        </a>
        <div className="hero-rail" aria-label="Áreas de atuação">
          <span>Bitrix24</span><span>Inteligência artificial</span><span>Software</span><span>Cybersecurity</span>
        </div>
      </section>

      <section className="intro" id="solucoes">
        <p className="section-label">IUNGX / TECNOLOGIA & NEGÓCIOS</p>
        <h2>Tecnologia que sai do plano<br />e entra em produção.</h2>
        <p className="intro-copy">
          Conectamos estratégia, engenharia, automação e segurança para resolver problemas reais — de ponta a ponta.
        </p>
      </section>

      <section className="service-stories">
        {services.map((service, index) => (
          <article className={`service-story ${index % 2 ? "reverse" : ""}`} key={service.eyebrow}>
            <div className="story-copy">
              <span className="story-number">0{index + 1}</span>
              <p className="story-eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p className="story-description">{service.description}</p>
              <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
            <ProductVisual type={service.visual} />
          </article>
        ))}
      </section>

      <section className="method" id="como-atuamos">
        <div className="method-heading">
          <p className="section-label">UMA ENTREGA, DO INÍCIO AO FIM</p>
          <h2>Estratégia suficiente para decidir.<br />Profundidade suficiente para executar.</h2>
        </div>
        <div className="method-steps">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership" id="lideranca">
        <div className="leadership-copy">
          <p className="section-label">LIDERANÇA HANDS-ON</p>
          <h2>Da infraestrutura à estratégia de tecnologia.</h2>
          <p>
            Leonardo Jung construiu sua trajetória entre infraestrutura, sistemas, desenvolvimento, cybersecurity, automação, inteligência artificial e liderança executiva — em ambientes brasileiros e internacionais.
          </p>
          <p>
            A mesma pessoa que discute prioridade, orçamento e impacto de negócio também abre o terminal, lê logs, revisa arquitetura e entende o que está acontecendo por baixo do capô.
          </p>
          <a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">Conheça a trajetória <span>↗</span></a>
        </div>
        <blockquote>
          <span>root@leojung:~# whoami</span>
          <p>Technology leader.<br />Builder.<br />Problem solver.</p>
          <footer>Leonardo Jung — Founder, IungX</footer>
        </blockquote>
      </section>

      <section className="final-cta">
        <div className="hero-mark final-mark" aria-hidden="true"><span>IX</span></div>
        <h2>Vamos construir o próximo sistema.</h2>
        <p>Conte o problema. A tecnologia começa a partir dele.</p>
        <a href="tel:+554888222608">Falar com Leonardo <span>↗</span></a>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio">IungX</a>
        <p>Leonardo Jung Desenvolvimento de Software Ltda.<br />CNPJ 68.006.339/0001-39</p>
        <div><a href="tel:+554888222608">+55 48 8822-2608</a><a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <small>© 2026 IungX. Tecnologia aplicada ao negócio.</small>
      </footer>
    </main>
  );
}
