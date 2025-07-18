import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGitlab, FaFilePdf } from "react-icons/fa";
import html2pdf from "html2pdf.js";

export default function PortfolioPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleDownloadPDF = () => {
    const element = document.getElementById("curriculo-pdf");
    const buttonContainer = document.getElementById("baixar-pdf");

    if (buttonContainer) buttonContainer.style.display = "none";

    const opt = {
      margin: 0.5,
      filename: "Curriculo_Evaldo_Harris.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        if (buttonContainer) buttonContainer.style.display = "flex";
      });
  };

  const projetos = [
    {
      title: "Airsoft QG",
      desc: "Plataforma completa para gerenciamento de jogos",
      link: "https://airsoftqg.netlify.app",
    },
    {
      title: "Airsoft App",
      desc: "Aplicativo nativo para controle de exércitos",
      link: "https://play.google.com/store/apps/details?id=com.harris.evaldo.airsoft",
    },
    {
      title: "Calcular Preço App",
      desc: "Simulador de preços com ajuste automático",
      link: "https://play.google.com/store/apps/details?id=com.harris.evaldo.cotacao",
    },
    {
      title: "Flappy Ship",
      desc: "Jogo 2D inspirado em Flappy Bird",
      link: "https://play.google.com/store/apps/details?id=com.harris.evaldo.flappyship",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 text-gray-800 px-6 sm:px-16 py-10 font-sans relative">
      <div id="curriculo-pdf">
        <motion.header
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Evaldo João Harris dos Santos Junior
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Desenvolvedor Full-Stack • Especialista em IA e Automação
          </p>
          <p className="text-sm text-gray-500">
            Itapetininga/SP • (15) 99601-5410 • evaldo.joaoj@hotmail.com
          </p>

          <div className="flex justify-center gap-6 mt-6 text-blue-700 text-2xl">
            <a href="https://github.com/EvaldoHarris" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
            <a href="https://gitlab.com/Evaldo_Harris" target="_blank" rel="noreferrer" title="GitLab"><FaGitlab /></a>
            <a href="https://www.linkedin.com/in/evaldo-harris-01494829/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
          </div>
        </motion.header>

        <main className="max-w-5xl mx-auto space-y-20">
          <Section title="Resumo Profissional" fromLeft>
            <p className="text-base leading-relaxed text-gray-700">
              Desenvolvedor com ampla experiência em projetos web, mobile e IoT. Especializado em automações com IA, APIs performáticas e testes com Playwright. Forte perfil autodidata e foco em entrega de soluções inovadoras com qualidade e eficiência.
            </p>
          </Section>

          <Section title="Experiência Profissional" fromRight>
            <ExperienceItem
              company="Angulare"
              role="Desenvolvedor Full-Stack"
              period="Nov/2024 – Atual"
              tasks={[
                "Frontend com Angular para sistemas empresariais",
                "APIs em Python com integração com modelos de IA",
                "Apps mobile com React Native e backend integrado",
                "Automação de testes E2E com Playwright e LLM",
              ]}
            />
            <ExperienceItem
              company="Symtropy"
              role="Desenvolvedor Full-Stack"
              period="2021 – Nov/2024"
              tasks={[
                "Sistemas React + Node.js com foco em IA",
                "Projetos com reconhecimento facial e análise de vídeo",
                "Suporte técnico e evolução de sistemas críticos",
              ]}
            />
          </Section>

          <Section title="Formação Acadêmica" fromLeft>
            <p className="text-gray-700">
              Engenharia da Computação – <strong>FACENS</strong>{" "}
              <span className="text-sm text-gray-500">(Concluído em Dez/2021)</span>
            </p>
          </Section>

          <Section title="Projetos em Destaque" fromBottom>
            <div className="grid sm:grid-cols-2 gap-6">
              {projetos.map((p, i) => (
                <motion.div
                key={i}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow hover:shadow-xl transition hover:scale-[1.015]"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setHoveredProject(p.link)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h4 className="font-semibold text-lg text-blue-800">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm underline mt-1 inline-block"
                >
                  Ver projeto
                </a>

                {hoveredProject === p.link && p.link.includes("netlify") && (
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <iframe
                      src={p.link}
                      title={p.title}
                      className="w-full h-[300px] border-0"
                    />
                  </div>
                )}
              </motion.div>

              ))}
            </div>
          </Section>

          <Section title="Habilidades Técnicas" fromRight>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-700">
              <SkillGroup title="Frontend" skills={["React.js", "Angular", "HTML5", "CSS3", "Tailwind", "Framer Motion"]} />
              <SkillGroup title="Backend" skills={["Node.js", "Python", "Flask", "ASP.NET", "REST API", "WebSocket"]} />
              <SkillGroup title="DevOps & Outros" skills={["Docker", "Git", "CI/CD", "Firebase", "PostgreSQL", "ASAAS", "DocuSign"]} />
            </div>
          </Section>
        </main>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          id='baixar-pdf'
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-green-600 text-white text-sm rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <FaFilePdf className="inline mr-2" /> Baixar PDF
        </button>
      </div>

      <footer className="text-center text-xs text-gray-500 mt-24 border-t pt-6">
        <p>© {new Date().getFullYear()} Evaldo Harris – Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

const Section = ({ title, children, fromLeft, fromRight, fromBottom }) => (
  <motion.section
    initial={{ opacity: 0, x: fromLeft ? -30 : fromRight ? 30 : 0, y: fromBottom ? 30 : 0 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="text-2xl font-bold mb-4 relative inline-block">
      <span className="pb-1 border-b-2 border-blue-600">{title}</span>
    </h2>
    {children}
  </motion.section>
);

const ExperienceItem = ({ company, role, period, tasks }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800">
      {company} – {role} <span className="text-sm text-gray-500">({period})</span>
    </h3>
    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mt-1">
      {tasks.map((task, idx) => <li key={idx}>{task}</li>)}
    </ul>
  </div>
);

const SkillGroup = ({ title, skills }) => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
    <ul className="list-disc list-inside space-y-1">
      {skills.map((skill, i) => <li key={i}>{skill}</li>)}
    </ul>
  </div>
);
