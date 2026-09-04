from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Curriculo_Evaldo_Harris.pdf"
PUBLIC_COPY = ROOT / "public" / "curriculo" / "Curriculo_Evaldo_Harris.pdf"

PAGE_W, PAGE_H = A4
MARGIN = 42

INK = HexColor("#07110F")
SURFACE = HexColor("#10201D")
TEXT = HexColor("#152420")
MUTED = HexColor("#60736D")
LINE = HexColor("#DCE6E2")
ACID = HexColor("#91D62E")
CYAN = HexColor("#00A995")
PALE = HexColor("#F1F6F4")
WHITE = HexColor("#FFFFFF")


PROJECTS = [
    ("Assistente de Códigos", "IA & AUTOMAÇÃO", "Assistente inteligente para consulta e organização de códigos de produtos.", "https://assistente-codigos.netlify.app/"),
    ("FTA Brasil", "PLATAFORMA WEB", "Plataforma web criada para centralizar a experiência digital da FTA Brasil.", "https://ftabrasil.netlify.app/"),
    ("RFID Platform", "IOT & DADOS", "Solução para gestão, rastreabilidade e operação de dispositivos RFID.", "https://rfidplatform.netlify.app/"),
    ("Radar Emocional", "IA & ANÁLISE", "Experiência digital para acompanhamento de percepções e indicadores emocionais.", "https://radar-emocional.netlify.app/"),
    ("Participia", "GOVTECH", "Central do cidadão para solicitações urbanas, protocolos e gestão pública.", "https://participia.com.br/"),
    ("Mais Emprego", "HR TECH", "Ecossistema de vagas, cursos, candidatos e gestão pública em uma só plataforma.", "https://maisemprego.online/"),
    ("EmpregaMais Resende", "EMPREGABILIDADE", "Portal municipal que aproxima oportunidades profissionais e talentos locais.", "https://emprega-maisbr.netlify.app/"),
    ("AlphaPark", "PRODUTO DIGITAL", "Experiência digital para o empreendimento AlphaPark, em Resende.", "https://alphaparkresende.netlify.app/"),
    ("Airsoft QG", "PLATAFORMA WEB", "Plataforma completa para gerenciamento e organização de jogos de airsoft.", "https://airsoftqg.netlify.app"),
    ("Airsoft App", "ANDROID", "Aplicativo Android nativo para controle e organização de exércitos.", "https://play.google.com/store/apps/details?id=com.harris.evaldo.airsoft"),
    ("Calcular Preço App", "ANDROID", "Simulador de preços com cálculo e ajuste automático para dispositivos móveis.", "https://play.google.com/store/apps/details?id=com.harris.evaldo.cotacao"),
    ("Flappy Ship", "GAME DEV", "Jogo mobile 2D com mecânicas inspiradas no clássico Flappy Bird.", "https://play.google.com/store/apps/details?id=com.harris.evaldo.flappyship"),
]


def register_fonts():
    # Base14 fonts (Helvetica/Courier) render Portuguese accents correctly via
    # WinAnsiEncoding and don't need embedding, avoiding a ReportLab glyph-mapping
    # bug seen with Windows TTFs (Segoe UI/Consolas) that garbled text with random
    # spaces on certain letter pairs (e.g. "AUTOMAÇÃO" -> "AUTO AÇÃO").
    pass


def wrap_text(text, font, size, max_width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        candidate = word if not current else current + " " + word
        if pdfmetrics.stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def paragraph(c, text, x, y, width, font="Helvetica", size=9.5, leading=14, color=MUTED, max_lines=None):
    lines = wrap_text(text, font, size, width)
    if max_lines:
        lines = lines[:max_lines]
    c.setFont(font, size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def section_label(c, number, title, x, y, width):
    c.setFont("Courier", 7.5)
    c.setFillColor(ACID)
    c.drawString(x, y, number)
    c.setFillColor(MUTED)
    c.drawString(x + 23, y, title.upper())
    c.setStrokeColor(LINE)
    c.line(x, y - 10, x + width, y - 10)
    return y - 29


def footer(c, page_number):
    c.setStrokeColor(LINE)
    c.line(MARGIN, 29, PAGE_W - MARGIN, 29)
    c.setFont("Courier", 6.8)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 17, "EH/DEV  •  EVALDO HARRIS")
    c.drawRightString(PAGE_W - MARGIN, 17, "PÁGINA %02d" % page_number)


def draw_page_one(c):
    c.setFillColor(INK)
    c.rect(0, PAGE_H - 190, PAGE_W, 190, fill=1, stroke=0)
    c.setFillColor(ACID)
    c.rect(MARGIN, PAGE_H - 54, 30, 3, fill=1, stroke=0)
    c.setFont("Courier", 7.5)
    c.drawString(MARGIN + 39, PAGE_H - 57, "FULL-STACK  •  IA  •  AUTOMAÇÃO  •  IOT")

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 31)
    c.drawString(MARGIN, PAGE_H - 105, "Evaldo Harris")
    c.setFillColor(HexColor("#B9CBC5"))
    c.setFont("Helvetica", 13)
    c.drawString(MARGIN, PAGE_H - 130, "Engenheiro da Computação & Desenvolvedor Full-Stack")

    c.setFillColor(CYAN)
    c.setFont("Courier", 7.4)
    c.drawString(MARGIN, PAGE_H - 163, "ITAPETININGA, SP")
    c.setFillColor(HexColor("#B9CBC5"))
    c.drawString(MARGIN + 115, PAGE_H - 163, "+55 15 99601-5410")
    c.drawString(MARGIN + 234, PAGE_H - 163, "evaldo.joaoj@hotmail.com")

    c.setFont("Helvetica-Bold", 17)
    c.setFillColor(ACID)
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 93, "EH/DEV")
    c.setFont("Courier", 6.8)
    c.setFillColor(HexColor("#78908A"))
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 112, "PORTFÓLIO 2026")

    left_x, left_w = MARGIN, 325
    right_x, right_w = 397, PAGE_W - MARGIN - 397
    y = PAGE_H - 225

    y = section_label(c, "01", "Perfil", left_x, y, left_w)
    profile = ("Desenvolvedor Full-Stack com experiência em projetos web, mobile e IoT. "
               "Crio soluções ponta a ponta, da interface e arquitetura de APIs à integração "
               "com inteligência artificial, bancos de dados e dispositivos embarcados.")
    y = paragraph(c, profile, left_x, y, left_w, size=10.2, leading=15, color=TEXT)
    y -= 18

    y = section_label(c, "02", "Experiência", left_x, y, left_w)
    c.setFillColor(CYAN)
    c.setFont("Courier", 7.6)
    c.drawString(left_x, y, "ANGULARE")
    c.setFillColor(MUTED)
    c.drawRightString(left_x + left_w, y, "NOV 2024 - ATUAL")
    y -= 23
    c.setFont("Helvetica-Bold", 15)
    c.setFillColor(TEXT)
    c.drawString(left_x, y, "Desenvolvedor Full-Stack")
    y -= 24
    tasks = [
        "Interfaces Angular para sistemas empresariais",
        "APIs Python integradas a modelos de inteligência artificial",
        "Aplicações React Native com backend integrado",
        "Automação de testes E2E com Playwright e LLMs",
    ]
    for task in tasks:
        c.setFillColor(ACID)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(left_x, y, ">")
        y = paragraph(c, task, left_x + 13, y, left_w - 13, size=8.8, leading=12.5, color=MUTED)
        y -= 3
    y -= 10

    c.setFillColor(CYAN)
    c.setFont("Courier", 7.6)
    c.drawString(left_x, y, "SYMTROPY")
    c.setFillColor(MUTED)
    c.drawRightString(left_x + left_w, y, "2021 - NOV 2024")
    y -= 23
    c.setFont("Helvetica-Bold", 15)
    c.setFillColor(TEXT)
    c.drawString(left_x, y, "Desenvolvedor Full-Stack")
    y -= 24
    tasks = [
        "Aplicações React e Node.js com recursos de IA",
        "Reconhecimento facial e análise de vídeo",
        "Suporte técnico e evolução de sistemas críticos",
    ]
    for task in tasks:
        c.setFillColor(ACID)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(left_x, y, ">")
        y = paragraph(c, task, left_x + 13, y, left_w - 13, size=8.8, leading=12.5, color=MUTED)
        y -= 3

    ry = PAGE_H - 225
    ry = section_label(c, "03", "Stack técnica", right_x, ry, right_w)
    groups = [
        ("LINGUAGENS", "JavaScript · TypeScript · Python · Java · Kotlin · C# · SQL"),
        ("INTERFACES", "React · Angular · React Native · HTML5 · CSS3 · Tailwind · Framer Motion"),
        ("BACKEND", "Node.js · Flask · ASP.NET · REST APIs · WebSocket · PostgreSQL"),
        ("INFRA & INTEGRAÇÕES", "Docker · Git · CI/CD · Firebase · Playwright · ASAAS · DocuSign"),
    ]
    for title, skills in groups:
        c.setFont("Courier", 7.2)
        c.setFillColor(CYAN)
        c.drawString(right_x, ry, title)
        ry -= 17
        ry = paragraph(c, skills, right_x, ry, right_w, size=8.4, leading=12.5, color=TEXT)
        ry -= 16

    ry = section_label(c, "04", "Formação", right_x, ry, right_w)
    c.setFont("Helvetica-Bold", 11.5)
    c.setFillColor(TEXT)
    c.drawString(right_x, ry, "Engenharia da Computação")
    ry -= 17
    c.setFont("Courier", 7.3)
    c.setFillColor(CYAN)
    c.drawString(right_x, ry, "FACENS")
    ry -= 14
    c.setFillColor(MUTED)
    c.drawString(right_x, ry, "CONCLUÍDO EM DEZ 2021")
    ry -= 35

    ry = section_label(c, "05", "Links", right_x, ry, right_w)
    links = [
        ("GITHUB", "github.com/EvaldoHarris", "https://github.com/EvaldoHarris"),
        ("GITLAB", "gitlab.com/Evaldo_Harris", "https://gitlab.com/Evaldo_Harris"),
        ("LINKEDIN", "linkedin.com/in/evaldo-harris-01494829", "https://www.linkedin.com/in/evaldo-harris-01494829/"),
    ]
    for label, display, url in links:
        c.setFont("Courier", 6.8)
        c.setFillColor(CYAN)
        c.drawString(right_x, ry, label)
        ry -= 12
        c.setFont("Helvetica", 7.8)
        c.setFillColor(MUTED)
        c.drawString(right_x, ry, display)
        c.linkURL(url, (right_x, ry - 2, right_x + right_w, ry + 10), relative=0)
        ry -= 22

    footer(c, 1)


def draw_project_card(c, project, number, x, top_y, width, height):
    title, category, description, url = project
    y = top_y - height
    c.setFillColor(PALE)
    c.roundRect(x, y, width, height, 5, fill=1, stroke=0)
    c.setFont("Courier", 6.6)
    c.setFillColor(MUTED)
    c.drawString(x + 14, top_y - 18, "%02d" % number)
    c.setFillColor(CYAN)
    c.drawRightString(x + width - 14, top_y - 18, category)
    c.setFont("Helvetica-Bold", 13.2)
    c.setFillColor(TEXT)
    c.drawString(x + 14, top_y - 44, title)
    paragraph(c, description, x + 14, top_y - 63, width - 28, size=7.9, leading=10.5, color=MUTED, max_lines=3)
    c.setFont("Courier", 6.8)
    c.setFillColor(CYAN)
    c.drawString(x + 14, y + 12, "ABRIR PROJETO  >")
    c.linkURL(url, (x, y, x + width, top_y), relative=0)


def draw_page_two(c):
    c.setFillColor(INK)
    c.rect(0, PAGE_H - 84, PAGE_W, 84, fill=1, stroke=0)
    c.setFillColor(ACID)
    c.setFont("Courier", 7.5)
    c.drawString(MARGIN, PAGE_H - 34, "06  PORTFÓLIO SELECIONADO")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 21)
    c.drawString(MARGIN, PAGE_H - 63, "Produtos que já estão no mundo.")
    c.setFont("Courier", 6.8)
    c.setFillColor(HexColor("#78908A"))
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 47, "12 PROJETOS PUBLICADOS")

    gap_x, gap_y = 10, 8
    card_w = (PAGE_W - (2 * MARGIN) - gap_x) / 2
    card_h = 112
    start_y = PAGE_H - 98
    for i, project in enumerate(PROJECTS):
        row, col = divmod(i, 2)
        x = MARGIN + col * (card_w + gap_x)
        top_y = start_y - row * (card_h + gap_y)
        draw_project_card(c, project, i + 1, x, top_y, card_w, card_h)

    footer(c, 2)


def build_pdf(path):
    path.parent.mkdir(parents=True, exist_ok=True)
    c = Canvas(str(path), pagesize=A4, pageCompression=1)
    c.setTitle("Currículo - Evaldo Harris")
    c.setAuthor("Evaldo Harris")
    c.setSubject("Desenvolvedor Full-Stack, IA, automação e IoT")
    c.setKeywords("Full-Stack, React, Angular, Python, IA, IoT, portfólio")
    draw_page_one(c)
    c.showPage()
    draw_page_two(c)
    c.save()


if __name__ == "__main__":
    register_fonts()
    build_pdf(OUTPUT)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_COPY.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC_COPY)
