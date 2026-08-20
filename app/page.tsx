const whatsappUrl =
  "https://wa.me/554888222608?text=Hello%20IungX%2C%20I%27d%20like%20to%20talk%20about%20a%20technology%20project.";
const whatsappUrlPt =
  "https://wa.me/554888222608?text=Ol%C3%A1%20IungX%2C%20quero%20conversar%20sobre%20um%20projeto%20de%20tecnologia.";

const services = [
  {
    number: "01",
    label: "CRM",
    image: "/service-crm.webp",
    alt: "Connected business flows in an integrated architecture",
    altPt: "Fluxos empresariais conectados em uma arquitetura integrada",
    title: "Bitrix24 that organizes your entire operation.",
    titlePt: "Bitrix24 que organiza a operação inteira.",
    description:
      "Implementation, evolution, and integration of Bitrix24 to connect sales, service, operations, and management in one clear flow.",
    descriptionPt:
      "Implantação, evolução e integração do Bitrix24 para conectar comercial, atendimento, operação e gestão em um fluxo claro.",
    items: [
      ["CRM", "CRM"],
      ["Automation", "Automações"],
      ["Integrations", "Integrações"],
      ["Governance", "Governança"],
    ],
  },
  {
    number: "02",
    label: "AI",
    image: "/service-ai.webp",
    alt: "Computational sculpture representing artificial intelligence and automation",
    altPt: "Escultura computacional representando inteligência artificial e automação",
    title: "AI applied to real work.",
    titlePt: "IA aplicada ao trabalho real.",
    description:
      "Agents, copilots, and intelligent processes with context, security, and measurable outcomes — automation with purpose.",
    descriptionPt:
      "Agentes, copilotos e processos inteligentes com contexto, segurança e resultado mensurável — sem automação pela automação.",
    items: [
      ["Agents", "Agentes"],
      ["Workflows", "Workflows"],
      ["Data", "Dados"],
      ["APIs", "APIs"],
    ],
  },
  {
    number: "03",
    label: "BUILD",
    image: "/service-software.webp",
    alt: "Modular architecture representing custom software development",
    altPt: "Arquitetura modular representando construção de software sob medida",
    title: "Software designed around the problem.",
    titlePt: "Software desenhado em torno do problema.",
    description:
      "Custom systems and integrations built to remove bottlenecks, reduce manual work, and support sustainable growth.",
    descriptionPt:
      "Sistemas e integrações sob medida para eliminar gargalos, reduzir tarefas manuais e sustentar o crescimento da empresa.",
    items: [
      ["Web apps", "Web apps"],
      ["Architecture", "Arquitetura"],
      ["Integrations", "Integrações"],
      ["Products", "Produtos"],
    ],
  },
  {
    number: "04",
    label: "SECURE",
    image: "/service-security.webp",
    alt: "Digital infrastructure protected by a security architecture",
    altPt: "Infraestrutura digital protegida por uma arquitetura de segurança",
    title: "Security from the very first decision.",
    titlePt: "Segurança desde a primeira decisão.",
    description:
      "Infrastructure, cloud, networks, and cybersecurity treated as the foundation of the solution, not as a fix after the problem.",
    descriptionPt:
      "Infraestrutura, cloud, redes e cybersecurity tratados como fundação da solução, não como correção depois do problema.",
    items: [
      ["Cloud", "Cloud"],
      ["Cybersecurity", "Cybersecurity"],
      ["DevOps", "DevOps"],
      ["Observability", "Observabilidade"],
    ],
  },
];

const steps = [
  ["01", "Discovery", "Diagnóstico", "Understand the problem beyond the symptom.", "Entender o problema além do sintoma."],
  ["02", "Architecture", "Arquitetura", "Design the system before choosing the tool.", "Desenhar o sistema antes da ferramenta."],
  ["03", "Delivery", "Execução", "Build, integrate, and take it to production.", "Construir, integrar e colocar em produção."],
  ["04", "Evolution", "Evolução", "Measure, protect, and continuously improve.", "Medir, proteger e melhorar continuamente."],
];

function WhatsAppIcon() {
  return <span className="whatsapp-icon" aria-hidden="true">☎</span>;
}

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="screen-wipe" aria-hidden="true"><span>IUNGX</span></div>
      <aside className="section-indicator" aria-hidden="true">
        <span>01</span><i /><b>HOME</b>
      </aside>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="IungX — home" data-aria-en="IungX — home" data-aria-pt="IungX — início">IungX</a>
        <nav aria-label="Primary navigation" data-aria-en="Primary navigation" data-aria-pt="Navegação principal">
          <a href="#solucoes" data-en="Solutions" data-pt="Soluções">Solutions</a>
          <a href="#metodo" data-en="How we work" data-pt="Como atuamos">How we work</a>
          <a href="#sobre" data-en="About" data-pt="Sobre">About</a>
        </nav>
        <div className="header-actions">
          <button className="language-switch" type="button" aria-label="Mudar idioma para português" aria-pressed="false">
            <span data-lang-option="en" className="is-active">EN</span><i aria-hidden="true" /><span data-lang-option="pt">PT</span>
          </button>
          <a className="header-cta" href={whatsappUrl} data-href-en={whatsappUrl} data-href-pt={whatsappUrlPt} target="_blank" rel="noreferrer" aria-label="Talk to IungX on WhatsApp" data-aria-en="Talk to IungX on WhatsApp" data-aria-pt="Fale com a IungX no WhatsApp">
            <span data-en="Talk to IungX" data-pt="Fale com a IungX">Talk to IungX</span><WhatsAppIcon />
          </a>
        </div>
      </header>

      <section className="hero motion-stage" id="inicio" data-section="HOME" data-section-en="HOME" data-section-pt="INÍCIO" data-index="01">
        <div className="hero-motion" aria-hidden="true">
          <span className="motion-ring ring-one" />
          <span className="motion-ring ring-two" />
          <span className="motion-core" />
        </div>
        <h1 aria-label="IungX">
          {"IungX".split("").map((letter, index) => (
            <span aria-hidden="true" key={`${letter}-${index}`}>{letter}</span>
          ))}
        </h1>
        <p data-en="Technology that removes what holds your business back." data-pt="Tecnologia para resolver o que trava o seu negócio.">Technology that removes what holds your business back.</p>
        <a className="pill-button" href="#solucoes"><span data-en="Discover IungX" data-pt="Conheça a IungX">Discover IungX</span> <b aria-hidden="true">↓</b></a>
        <a className="scroll-cue" href="#solucoes" aria-label="Go to solutions" data-aria-en="Go to solutions" data-aria-pt="Ir para soluções"><span /> <b data-en="Scroll to explore" data-pt="Role para explorar">Scroll to explore</b></a>
      </section>

      <div className="practice-line" aria-label="Areas of expertise" data-aria-en="Areas of expertise" data-aria-pt="Áreas de atuação">
        <div className="practice-track">
          {[false, true].map((duplicate) => (
            <div className="practice-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
              <span>Bitrix24</span><i>×</i><span data-en="Artificial intelligence" data-pt="Inteligência artificial">Artificial intelligence</span><i>×</i><span>Software</span><i>×</i><span>Cybersecurity</span><i>×</i>
            </div>
          ))}
        </div>
      </div>

      <section className="intro motion-stage" id="solucoes" data-section="VISION" data-section-en="VISION" data-section-pt="VISÃO" data-index="02">
        <p className="kicker" data-en="TECHNOLOGY & BUSINESS" data-pt="TECNOLOGIA & NEGÓCIOS">TECHNOLOGY &amp; BUSINESS</p>
        <h2><span data-en="From the terminal to the" data-pt="Do terminal à">From the terminal to the</span><br /><span data-en="boardroom." data-pt="sala de decisão.">boardroom.</span></h2>
        <p data-en="IungX connects strategy and execution to transform operational problems into simple, secure, and scalable systems." data-pt="A IungX conecta estratégia e execução para transformar problemas operacionais em sistemas simples, seguros e escaláveis.">
          IungX connects strategy and execution to transform operational problems into simple, secure, and scalable systems.
        </p>
      </section>

      <section className="services">
        {services.map((service, index) => (
          <article className={`service motion-stage ${index % 2 ? "service-reverse" : ""}`} data-section={service.label} data-section-en={service.label} data-section-pt={service.label} data-index={`0${index + 3}`} key={service.number}>
            <div className={`service-art art-${index + 1}`} data-tilt>
              <img src={service.image} alt={service.alt} data-alt-en={service.alt} data-alt-pt={service.altPt} width="1536" height="1024" loading={index === 0 ? "eager" : "lazy"} />
              <span>{service.label}</span>
              <small>IUNGX / {service.number}</small>
              <div className="service-art-action" aria-hidden="true"><span data-en="View solution" data-pt="Ver solução">View solution</span><b>↗</b></div>
            </div>
            <div className="service-copy">
              <span className="service-number">{service.number}</span>
              <h3 data-en={service.title} data-pt={service.titlePt}>{service.title}</h3>
              <p data-en={service.description} data-pt={service.descriptionPt}>{service.description}</p>
              <details>
                <summary><span data-en="What we deliver" data-pt="O que entregamos">What we deliver</span> <b aria-hidden="true">+</b></summary>
                <ul>{service.items.map(([item, itemPt]) => <li key={item} data-en={item} data-pt={itemPt}>{item}</li>)}</ul>
              </details>
            </div>
          </article>
        ))}
      </section>

      <section className="method motion-stage" id="metodo" data-section="METHOD" data-section-en="METHOD" data-section-pt="MÉTODO" data-index="07">
        <div className="method-title">
          <p className="kicker dark" data-en="HOW WE WORK" data-pt="COMO ATUAMOS">HOW WE WORK</p>
          <h2><span data-en="One delivery." data-pt="Uma entrega.">One delivery.</span><br /><span data-en="From start to finish." data-pt="Do início ao fim.">From start to finish.</span></h2>
        </div>
        <div className="method-grid">
          {steps.map(([number, title, titlePt, text, textPt]) => (
            <article key={number}>
              <span>{number}</span><h3 data-en={title} data-pt={titlePt}>{title}</h3><p data-en={text} data-pt={textPt}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about motion-stage" id="sobre" data-section="ABOUT" data-section-en="ABOUT" data-section-pt="SOBRE" data-index="08">
        <div className="about-heading">
          <p className="kicker" data-en="HANDS-ON LEADERSHIP" data-pt="LIDERANÇA HANDS-ON">HANDS-ON LEADERSHIP</p>
          <h2 data-en="Enough strategy to decide. Enough depth to execute." data-pt="Estratégia suficiente para decidir. Profundidade suficiente para executar.">Enough strategy to decide. Enough depth to execute.</h2>
        </div>
        <div className="about-body">
          <p data-en="Leonardo Jung works across infrastructure, systems, software, cybersecurity, automation, artificial intelligence, and executive leadership in Brazilian and international environments." data-pt="Leonardo Jung atua entre infraestrutura, sistemas, software, cybersecurity, automação, inteligência artificial e liderança executiva, em ambientes brasileiros e internacionais.">
            Leonardo Jung works across infrastructure, systems, software, cybersecurity, automation, artificial intelligence, and executive leadership in Brazilian and international environments.
          </p>
          <p data-en="The same leader who understands priorities, people, and budgets also opens the terminal, reads logs, reviews architecture, and challenges technical decisions." data-pt="A mesma liderança que entende prioridades, pessoas e orçamento também abre o terminal, lê logs, revisa arquitetura e questiona decisões técnicas.">
            The same leader who understands priorities, people, and budgets also opens the terminal, reads logs, reviews architecture, and challenges technical decisions.
          </p>
          <a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer"><span data-en="LinkedIn profile" data-pt="Perfil no LinkedIn">LinkedIn profile</span> <b>↗</b></a>
        </div>
        <blockquote>
          <span>root@leojung:~# whoami</span>
          <p>Technology leader with a builder&apos;s mindset.</p>
        </blockquote>
      </section>

      <section className="contact motion-stage" data-section="CONTACT" data-section-en="CONTACT" data-section-pt="CONTATO" data-index="09">
        <p className="kicker dark" data-en="START WITH THE PROBLEM" data-pt="COMECE PELO PROBLEMA">START WITH THE PROBLEM</p>
        <h2 data-en="Let's talk." data-pt="Vamos conversar.">Let&apos;s talk.</h2>
        <p data-en="Tell us what is holding your operation back. Technology starts from there." data-pt="Conte o que está travando a operação. A tecnologia começa a partir daí.">Tell us what is holding your operation back. Technology starts from there.</p>
        <a className="pill-button whatsapp-button" href={whatsappUrl} data-href-en={whatsappUrl} data-href-pt={whatsappUrlPt} target="_blank" rel="noreferrer" aria-label="Chat with IungX on WhatsApp" data-aria-en="Chat with IungX on WhatsApp" data-aria-pt="Fale com a IungX no WhatsApp">
          <WhatsAppIcon /><span data-en="Chat on WhatsApp" data-pt="Falar no WhatsApp">Chat on WhatsApp</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio">IungX</a>
        <p>Leonardo Jung Desenvolvimento de Software Ltda.<br />CNPJ 68.006.339/0001-39</p>
        <div><a href={whatsappUrl} data-href-en={whatsappUrl} data-href-pt={whatsappUrlPt} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.linkedin.com/in/leonardo-j-93b304286/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <small>© 2026 IungX</small>
      </footer>
    </main>
  );
}
