const services = [
  {
    number: "01",
    label: "CRM",
    title: "Bitrix24 que organiza a operação inteira.",
    description:
      "Implantação, evolução e integração do Bitrix24 para conectar comercial, atendimento, operação e gestão em um fluxo claro.",
    items: ["CRM", "Automações", "Integrações", "Governança"],
  },
  {
    number: "02",
    label: "AI",
    title: "IA aplicada ao trabalho real.",
    description:
      "Agentes, copilotos e processos inteligentes com contexto, segurança e resultado mensurável — sem automação pela automação.",
    items: ["Agentes", "Workflows", "Dados", "APIs"],
  },
  {
    number: "03",
    label: "BUILD",
    title: "Software desenhado em torno do problema.",
    description:
      "Sistemas e integrações sob medida para eliminar gargalos, reduzir tarefas manuais e sustentar o crescimento da empresa.",
    items: ["Web apps", "Arquitetura", "Integrações", "Produtos"],
  },
  {
    number: "04",
    label: "SECURE",
    title: "Segurança desde a primeira decisão.",
    description:
      "Infraestrutura, cloud, redes e cybersecurity tratados como fundação da solução, não como correção depois do problema.",
    items: ["Cloud", "Cybersecurity", "DevOps", "Observabilidade"],
  },
];

const steps = [
  ["01", "Diagnóstico", "Entender o problema além do sintoma."],
  ["02", "Arquitetura", "Desenhar o sistema antes da ferramenta."],
  ["03", "Execução", "Construir, integrar e colocar em produção."],
  ["04", "Evolução", "Medir, proteger e melhorar continuamente."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="IungX — início">IungX</a>
        <nav aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#metodo">Como atuamos</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="header-cta" href="tel:+554888222608">Fale com a IungX <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <h1>IungX</h1>
        <p>Tecnologia para resolver o que trava o seu negócio.</p>
        <a className="pill-button" href="#solucoes">Conheça a IungX <span>↓</span></a>
      </section>

      <div className="practice-line" aria-label="Áreas de atuação">
        <span>Bitrix24</span><i>×</i><span>Inteligência artificial</span><i>×</i><span>Software</span><i>×</i><span>Cybersecurity</span>
      </div>

      <section className="intro" id="solucoes">
        <p className="kicker">TECNOLOGIA & NEGÓCIOS</p>
        <h2>Do terminal à<br />sala de decisão.</h2>
        <p>
          A IungX conecta estratégia e execução para transformar problemas operacionais em sistemas simples, seguros e escaláveis.
        </p>
      </section>

      <section className="services">
        {services.map((service, index) => (
          <article className={`service ${index % 2 ? "service-reverse" : ""}`} key={service.number}>
            <div className={`service-art art-${index + 1}`} aria-hidden="true">
              <span>{service.label}</span>
              <small>IUNGX / {service.number}</small>
            </div>
            <div className="service-copy">
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>

      <section className="method" id="metodo">
        <div className="method-title">
          <p className="kicker dark">COMO ATUAMOS</p>
          <h2>Uma entrega.<br />Do início ao fim.</h2>
        </div>
        <div className="method-grid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-heading">
          <p className="kicker">LIDERANÇA HANDS-ON</p>
          <h2>Estratégia suficiente para decidir. Profundidade suficiente para executar.</h2>
        </div>
        <div className="about-body">
          <p>
            Leonardo Jung atua entre infraestrutura, sistemas, software, cybersecurity, automação, inteligência artificial e liderança executiva, em ambientes brasileiros e internacionais.
          </p>
          <p>
            A mesma liderança que entende prioridades, pessoas e orçamento também abre o terminal, lê logs, revisa arquitetura e questiona decisões técnicas.
          </p>
          <a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">Perfil no LinkedIn <span>↗</span></a>
        </div>
        <blockquote>
          <span>root@leojung:~# whoami</span>
          <p>Technology leader with a builder&apos;s mindset.</p>
        </blockquote>
      </section>

      <section className="contact">
        <p className="kicker dark">COMECE PELO PROBLEMA</p>
        <h2>Vamos conversar.</h2>
        <p>Conte o que está travando a operação. A tecnologia começa a partir daí.</p>
        <a className="pill-button" href="tel:+554888222608">+55 48 8822-2608 <span>↗</span></a>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio">IungX</a>
        <p>Leonardo Jung Desenvolvimento de Software Ltda.<br />CNPJ 68.006.339/0001-39</p>
        <div><a href="tel:+554888222608">Telefone</a><a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <small>© 2026 IungX</small>
      </footer>
    </main>
  );
}
