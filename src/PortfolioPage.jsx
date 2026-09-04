import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Assistente de Códigos",
    description: "Assistente inteligente para consulta e organização de códigos de produtos.",
    link: "https://assistente-codigos.netlify.app/",
    type: "IA & automação",
    index: "01",
    featured: true,
  },
  {
    title: "FTA Brasil",
    description: "Plataforma web criada para centralizar a experiência digital da FTA Brasil.",
    link: "https://ftabrasil.netlify.app/",
    type: "Plataforma web",
    index: "02",
    featured: true,
  },
  {
    title: "RFID Platform",
    description: "Solução para gestão, rastreabilidade e operação de dispositivos RFID.",
    link: "https://rfidplatform.netlify.app/",
    type: "IoT & dados",
    index: "03",
    featured: true,
  },
  {
    title: "Radar Emocional",
    description: "Experiência digital para acompanhamento de percepções e indicadores emocionais.",
    link: "https://radar-emocional.netlify.app/",
    type: "IA & análise",
    index: "04",
    featured: true,
  },
  {
    title: "Participia",
    description: "Central do cidadão para solicitações urbanas, protocolos e gestão pública.",
    link: "https://participia.com.br/",
    type: "GovTech",
    index: "05",
  },
  {
    title: "Mais Emprego",
    description: "Ecossistema de vagas, cursos, candidatos e gestão pública em uma só plataforma.",
    link: "https://maisemprego.online/",
    type: "HR Tech",
    index: "06",
  },
  {
    title: "EmpregaMais Resende",
    description: "Portal municipal que aproxima oportunidades profissionais e talentos locais.",
    link: "https://emprega-maisbr.netlify.app/",
    type: "Empregabilidade",
    index: "07",
  },
  {
    title: "AlphaPark",
    description: "Experiência digital para o empreendimento AlphaPark, em Resende.",
    link: "https://alphaparkresende.netlify.app/",
    type: "Produto digital",
    index: "08",
  },
  {
    title: "Airsoft QG",
    description: "Plataforma completa para gerenciamento e organização de jogos de airsoft.",
    link: "https://airsoftqg.netlify.app",
    type: "Plataforma web",
    index: "09",
  },
  {
    title: "Airsoft App",
    description: "Aplicativo Android nativo para controle e organização de exércitos.",
    link: "https://play.google.com/store/apps/details?id=com.harris.evaldo.airsoft",
    type: "Android",
    index: "10",
  },
  {
    title: "Calcular Preço App",
    description: "Simulador de preços com cálculo e ajuste automático para dispositivos móveis.",
    link: "https://play.google.com/store/apps/details?id=com.harris.evaldo.cotacao",
    type: "Android",
    index: "11",
  },
  {
    title: "Flappy Ship",
    description: "Jogo mobile 2D com mecânicas inspiradas no clássico Flappy Bird.",
    link: "https://play.google.com/store/apps/details?id=com.harris.evaldo.flappyship",
    type: "Game dev",
    index: "12",
  },
];

const skillGroups = [
  { title: "Linguagens", skills: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin", "C#", "SQL"] },
  { title: "Interfaces", skills: ["React", "Angular", "React Native", "HTML5", "CSS3", "Tailwind", "Framer Motion"] },
  { title: "Backend", skills: ["Node.js", "Flask", "ASP.NET", "REST APIs", "WebSocket", "PostgreSQL"] },
  { title: "Infra & integrações", skills: ["Docker", "Git", "CI/CD", "Firebase", "Playwright", "ASAAS", "DocuSign"] },
];

const experiences = [
  {
    company: "Angulare",
    role: "Desenvolvedor Full-Stack",
    period: "Nov 2024 — atual",
    tasks: [
      "Interfaces Angular para sistemas empresariais",
      "APIs Python integradas a modelos de inteligência artificial",
      "Aplicações React Native com backend integrado",
      "Automação de testes E2E com Playwright e LLMs",
    ],
  },
  {
    company: "Symtropy",
    role: "Desenvolvedor Full-Stack",
    period: "2021 — Nov 2024",
    tasks: [
      "Aplicações React e Node.js com recursos de IA",
      "Reconhecimento facial e análise de vídeo",
      "Suporte técnico e evolução de sistemas críticos",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar no-print">
        <a className="brand-mark" href="#inicio" aria-label="Ir para o início">EH<span>/</span>DEV</a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
        </nav>
        <a className="topbar-contact" href="mailto:evaldo.joaoj@hotmail.com">
          Vamos conversar <FaArrowRight aria-hidden="true" />
        </a>
      </header>

      <div id="curriculo-pdf">
        <main>
          <section className="hero" id="inicio">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
              <div className="eyebrow"><span /> Disponível para novos desafios</div>
              <p className="hero-kicker">FULL-STACK · IA · AUTOMAÇÃO · IOT</p>
              <h1>Evaldo Harris<span>transforma ideias em produtos digitais.</span></h1>
              <p className="hero-intro">
                Engenheiro da Computação e desenvolvedor Full-Stack focado em criar aplicações completas,
                inteligentes e preparadas para escalar.
              </p>
              <div className="hero-actions no-print">
                <a className="primary-button" href="#projetos">Explorar projetos <FaArrowRight aria-hidden="true" /></a>
                <a className="secondary-button" href="mailto:evaldo.joaoj@hotmail.com">Entrar em contato</a>
              </div>
            </motion.div>

            <motion.aside className="profile-console" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }} aria-label="Resumo do perfil">
              <div className="console-bar"><div><i /><i /><i /></div><span>profile.json</span></div>
              <div className="console-body" aria-hidden="true">
                <p><b>const</b> developer = {'{'}</p>
                <p className="indent"><em>name</em>: <span>"Evaldo Harris"</span>,</p>
                <p className="indent"><em>role</em>: <span>"Full-Stack Developer"</span>,</p>
                <p className="indent"><em>focus</em>: [<span>"AI"</span>, <span>"Web"</span>, <span>"IoT"</span>],</p>
                <p className="indent"><em>location</em>: <span>"Itapetininga, SP"</span>,</p>
                <p className="indent"><em>status</em>: <strong>"building"</strong></p>
                <p>{'}'};</p>
              </div>
              <div className="console-status"><span /> SYSTEM ONLINE</div>
            </motion.aside>
          </section>

          <section className="profile-strip" aria-label="Informações de contato">
            <a href="https://maps.google.com/?q=Itapetininga%20SP" target="_blank" rel="noreferrer"><FaMapMarkerAlt aria-hidden="true" /> Itapetininga, SP</a>
            <a href="tel:+5515996015410">+55 15 99601-5410</a>
            <a href="mailto:evaldo.joaoj@hotmail.com">evaldo.joaoj@hotmail.com</a>
            <div className="social-links no-print">
              <a href="https://github.com/EvaldoHarris" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://gitlab.com/Evaldo_Harris" target="_blank" rel="noreferrer" aria-label="GitLab"><FaGitlab /></a>
              <a href="https://www.linkedin.com/in/evaldo-harris-01494829/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </section>

          <section className="content-section about-section" id="sobre">
            <SectionHeading number="01" label="Perfil" title="Código com visão de produto." />
            <div className="about-grid">
              <p className="lead-copy">
                Desenvolvo soluções ponta a ponta — da interface e arquitetura de APIs à integração com
                inteligência artificial, bancos de dados e dispositivos embarcados.
              </p>
              <div className="about-detail">
                <p>
                  Minha experiência combina projetos web, mobile e IoT com atuação em sistemas empresariais
                  e produtos digitais. Tenho perfil autodidata, adaptação rápida e atenção especial à qualidade
                  da experiência entregue.
                </p>
                <div className="metric-row">
                  <div><strong>5+</strong><span>anos criando software</span></div>
                  <div><strong>12</strong><span>projetos publicados</span></div>
                  <div><strong>360°</strong><span>visão de produto</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section projects-section" id="projetos">
            <SectionHeading number="02" label="Portfólio" title="Produtos que já estão no mundo." />
            <div className="projects-grid">
              {projects.map((project, position) => (
                <motion.a
                  className={`project-card ${project.featured ? "featured" : ""}`}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={project.link}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: (position % 4) * 0.04 }}
                  aria-label={`Abrir projeto ${project.title}`}
                >
                  <div className="project-topline"><span>{project.index}</span><FaExternalLinkAlt aria-hidden="true" /></div>
                  <div className="project-content">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-footer"><span>Ver projeto</span><span className="project-line" /></div>
                </motion.a>
              ))}
            </div>
          </section>

          <section className="content-section experience-section" id="experiencia">
            <SectionHeading number="03" label="Trajetória" title="Experiência que conecta disciplinas." />
            <div className="experience-layout">
              <div className="timeline">
                {experiences.map((experience) => (
                  <article className="experience-item" key={experience.company}>
                    <div className="timeline-dot" />
                    <div className="experience-heading">
                      <div><span>{experience.company}</span><h3>{experience.role}</h3></div>
                      <time>{experience.period}</time>
                    </div>
                    <ul>{experience.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
                  </article>
                ))}
                <article className="experience-item education-item">
                  <div className="timeline-dot" />
                  <div className="experience-heading">
                    <div><span>FACENS</span><h3>Engenharia da Computação</h3></div>
                    <time>Concluído em Dez 2021</time>
                  </div>
                </article>
              </div>

              <aside className="skills-panel">
                <div className="skills-title"><FaCode aria-hidden="true" /> STACK TÉCNICA</div>
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
                ))}
              </aside>
            </div>
          </section>

          <section className="contact-section">
            <div><span className="contact-label">PRÓXIMO PROJETO</span><h2>Vamos construir algo relevante?</h2></div>
            <a className="contact-link" href="mailto:evaldo.joaoj@hotmail.com">evaldo.joaoj@hotmail.com <FaArrowRight aria-hidden="true" /></a>
          </section>
        </main>

        <footer>
          <div className="footer-brand">EH<span>/</span>DEV</div>
          <p>© {new Date().getFullYear()} Evaldo Harris</p>
          <p>Engenharia · Produto · Tecnologia</p>
        </footer>
      </div>

      <a className="pdf-button no-print" href="/curriculo/Curriculo_Evaldo_Harris.pdf" download aria-label="Baixar currículo em PDF">
        <FaDownload aria-hidden="true" /> Baixar currículo
      </a>
    </div>
  );
}

function SectionHeading({ number, label, title }) {
  return <div className="section-heading"><div className="section-id"><span>{number}</span> {label}</div><h2>{title}</h2></div>;
}
