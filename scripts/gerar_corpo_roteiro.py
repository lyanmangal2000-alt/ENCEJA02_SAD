# -*- coding: utf-8 -*-
"""Gera o corpo do PDF do roteiro de vídeo (sem capa) via ReportLab.

Rota Report (briefs/report.md) + Template 07 Crystal Blue (typesetting/cover.md).
Saída: /home/z/my-project/scripts/build/roteiro_corpo.pdf
"""
import os
import sys
import hashlib

PDF_SKILL_SCRIPTS = "/home/z/my-project/skills/pdf/scripts"
if PDF_SKILL_SCRIPTS not in sys.path:
    sys.path.insert(0, PDF_SKILL_SCRIPTS)
BASE = "/home/z/my-project"
sys.path.insert(0, os.path.join(BASE, "scripts"))

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, CondPageBreak, KeepTogether, HRFlowable,
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

import roteiro_conteudo as C

# ---------------------------------------------------------------- fonts
FONT_DIR = "/usr/share/fonts"
pdfmetrics.registerFont(TTFont("NotoSerifSC", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Regular.ttf"))
pdfmetrics.registerFont(TTFont("NotoSerifSC-Bold", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Bold.ttf"))
# Noto Sans SC estático não existe neste ambiente (apenas variável, que o
# ReportLab não parseia). O documento é 100% latino; o nome "Noto Sans SC"
# é registrado apenas para satisfazer a cadeia de fallback de glifos,
# apontando para o arquivo NotoSerifSC (cobertura CJK equivalente).
pdfmetrics.registerFont(TTFont("Noto Sans SC", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Noto Sans SC Bold", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Bold.ttf"))
pdfmetrics.registerFont(TTFont("SarasaMonoSC", f"{FONT_DIR}/truetype/chinese/SarasaMonoSC-Regular.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif", f"{FONT_DIR}/truetype/freefont/FreeSerif.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Bold", f"{FONT_DIR}/truetype/freefont/FreeSerifBold.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Italic", f"{FONT_DIR}/truetype/freefont/FreeSerifItalic.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-BoldItalic", f"{FONT_DIR}/truetype/freefont/FreeSerifBoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuSans", f"{FONT_DIR}/truetype/dejavu/DejaVuSansMono.ttf"))

registerFontFamily("NotoSerifSC", normal="NotoSerifSC", bold="NotoSerifSC-Bold")
registerFontFamily("Noto Sans SC", normal="Noto Sans SC", bold="Noto Sans SC Bold")
registerFontFamily("FreeSerif", normal="FreeSerif", bold="FreeSerif-Bold",
                   italic="FreeSerif-Italic", boldItalic="FreeSerif-BoldItalic")
registerFontFamily("DejaVuSans", normal="DejaVuSans", bold="DejaVuSans")

from pdf import install_font_fallback  # noqa: E402
install_font_fallback()

# ------------------------------------------------- palette (Template 07 body)
PAGE_BG      = colors.HexColor("#f5f8fc")   # XL
SECTION_BG   = colors.HexColor("#edf2f9")   # XL
CARD_BG      = colors.HexColor("#e4ecf5")   # L
TABLE_STRIPE = colors.HexColor("#eef3fa")   # L
HEADER_FILL  = colors.HexColor("#1a4a7a")   # M
BORDER       = colors.HexColor("#c0d0e2")   # S
ACCENT       = colors.HexColor("#2d7ab3")   # XS
TEXT_PRIMARY = colors.HexColor("#142840")
TEXT_MUTED   = colors.HexColor("#5a7a96")

HEADER_FILL_HEX = "#1a4a7a"
ACCENT_HEX      = "#2d7ab3"

# ---------------------------------------------------------------- geometry
PAGE_W, PAGE_H = A4
MARGIN = 56.7          # 2 cm, symmetric
TOP_M, BOT_M = 74.0, 64.0
AVAIL_W = PAGE_W - 2 * MARGIN
AVAIL_H = PAGE_H - TOP_M - BOT_M
MAX_KEEP_HEIGHT = PAGE_H * 0.4
H1_THRESHOLD = AVAIL_H * 0.25

OUT_DIR = os.path.join(BASE, "scripts", "build")
os.makedirs(OUT_DIR, exist_ok=True)
OUT_PDF = os.path.join(OUT_DIR, "roteiro_corpo.pdf")

# ---------------------------------------------------------------- styles
S = {}
S["body"] = ParagraphStyle("Body", fontName="FreeSerif", fontSize=10.5, leading=17,
                           alignment=TA_JUSTIFY, textColor=TEXT_PRIMARY,
                           spaceBefore=0, spaceAfter=10)
S["lead"] = ParagraphStyle("Lead", parent=S["body"], spaceAfter=12)
S["note"] = ParagraphStyle("Note", fontName="FreeSerif", fontSize=8.5, leading=12,
                           alignment=TA_LEFT, textColor=TEXT_MUTED, spaceAfter=6)
S["caption"] = ParagraphStyle("Caption", fontName="FreeSerif", fontSize=8.5, leading=12,
                              alignment=TA_CENTER, textColor=TEXT_MUTED,
                              spaceBefore=0, spaceAfter=0)
S["h1"] = ParagraphStyle("H1", fontName="FreeSerif", fontSize=21, leading=26,
                         alignment=TA_LEFT, textColor=TEXT_PRIMARY,
                         spaceBefore=6, spaceAfter=4)
S["h2"] = ParagraphStyle("H2", fontName="FreeSerif", fontSize=14, leading=18,
                         alignment=TA_LEFT, textColor=HEADER_FILL,
                         spaceBefore=14, spaceAfter=6)
S["item"] = ParagraphStyle("Item", fontName="FreeSerif", fontSize=10.5, leading=16,
                           alignment=TA_LEFT, textColor=TEXT_PRIMARY,
                           leftIndent=18, firstLineIndent=-18, spaceAfter=6)
S["th"] = ParagraphStyle("TH", fontName="FreeSerif", fontSize=9.5, leading=13,
                         alignment=TA_LEFT, textColor=colors.white)
S["td"] = ParagraphStyle("TD", fontName="FreeSerif", fontSize=9.5, leading=13.5,
                         alignment=TA_LEFT, textColor=TEXT_PRIMARY)
S["stat_v"] = ParagraphStyle("StatV", fontName="FreeSerif", fontSize=19, leading=23,
                             alignment=TA_CENTER, textColor=ACCENT)
S["stat_l"] = ParagraphStyle("StatL", fontName="FreeSerif", fontSize=8.5, leading=11.5,
                             alignment=TA_CENTER, textColor=TEXT_MUTED)
S["scene_t"] = ParagraphStyle("SceneT", fontName="FreeSerif", fontSize=10.5, leading=14,
                              alignment=TA_LEFT, textColor=colors.white)
S["scene_h"] = ParagraphStyle("SceneH", fontName="FreeSerif", fontSize=9, leading=13,
                              alignment=TA_RIGHT, textColor=colors.HexColor("#cfe2f1"))
S["natela"] = ParagraphStyle("NaTela", fontName="FreeSerif", fontSize=9.5, leading=14,
                             alignment=TA_LEFT, textColor=TEXT_MUTED, spaceAfter=5)
S["dir"] = ParagraphStyle("Dir", fontName="FreeSerif", fontSize=9, leading=13,
                          alignment=TA_LEFT, textColor=TEXT_MUTED,
                          spaceBefore=0, spaceAfter=6)
S["narr"] = ParagraphStyle("Narr", parent=S["body"], spaceAfter=8)
S["dica"] = ParagraphStyle("Dica", fontName="FreeSerif", fontSize=9.5, leading=14,
                           alignment=TA_LEFT, textColor=TEXT_PRIMARY)
S["q"] = ParagraphStyle("Q", fontName="FreeSerif", fontSize=11, leading=15,
                        alignment=TA_LEFT, textColor=HEADER_FILL,
                        spaceBefore=12, spaceAfter=4)
S["toc_t"] = ParagraphStyle("TocTitle", fontName="FreeSerif", fontSize=21, leading=26,
                            alignment=TA_LEFT, textColor=TEXT_PRIMARY, spaceAfter=4)
S["toc0"] = ParagraphStyle("TOC0", fontName="FreeSerif", fontSize=11.5, leading=22,
                           leftIndent=6, textColor=TEXT_PRIMARY)

# ---------------------------------------------------------------- doc template
BODY_START = {"page": None}
ROMAN = {1: "i", 2: "ii", 3: "iii", 4: "iv", 5: "v", 6: "vi"}


class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, "is_body_start"):
            BODY_START["page"] = self.page
        if hasattr(flowable, "bookmark_name"):
            level = getattr(flowable, "bookmark_level", 0)
            text = getattr(flowable, "bookmark_text", "")
            key = getattr(flowable, "bookmark_key", "")
            bs = BODY_START["page"]
            if bs is not None and self.page >= bs:
                display_page = self.page - bs + 1  # numeração exibida no rodapé
            else:
                display_page = self.page
            self.notify("TOCEntry", (level, text, display_page, key))


def draw_page(canvas, doc):
    canvas.saveState()
    # page background (XL tier)
    canvas.setFillColor(PAGE_BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # header
    canvas.setFont("FreeSerif", 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(MARGIN, PAGE_H - 42, "Roteiro de Vídeo · SAD ENCCEJA com K-NN — AV1")
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.5)
    canvas.line(MARGIN, PAGE_H - 48, PAGE_W - MARGIN, PAGE_H - 48)
    # footer
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 50, PAGE_W - MARGIN, 50)
    canvas.setFont("FreeSerif", 9)
    canvas.setFillColor(TEXT_MUTED)
    bs = BODY_START["page"]
    if bs is not None and doc.page >= bs:
        label = str(doc.page - bs + 1)
    else:
        label = ROMAN.get(doc.page, str(doc.page))
    canvas.drawCentredString(PAGE_W / 2, 36, label)
    canvas.restoreState()


# ---------------------------------------------------------------- helpers
def safe_keep_together(elements):
    total_h = 0
    for el in elements:
        w, h = el.wrap(AVAIL_W, PAGE_H)
        total_h += h
    if total_h <= MAX_KEEP_HEIGHT:
        return [KeepTogether(elements)]
    if len(elements) >= 2:
        return [KeepTogether(elements[:2])] + list(elements[2:])
    return list(elements)


def heading(text, level=0, body_start=False):
    key = "h_" + hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph(f'<a name="{key}"/><b>{text}</b>', S["h1"] if level == 0 else S["h2"])
    if level == 0:
        p.bookmark_name = key
        p.bookmark_level = 0
        p.bookmark_text = text
        p.bookmark_key = key
    if body_start:
        p.is_body_start = True
    return p


def h1_block(text, body_start=False):
    """CondPageBreak + título + régua accent, mantidos juntos com o que vier depois."""
    rule = HRFlowable(width="100%", color=ACCENT, thickness=1.2,
                      spaceBefore=0, spaceAfter=12)
    return CondPageBreak(H1_THRESHOLD), heading(text, 0, body_start), rule


def make_table(header, rows, ratios, repeat=True):
    assert abs(sum(ratios) - 1.0) < 1e-6
    col_widths = [r * AVAIL_W for r in ratios]
    assert sum(col_widths) <= AVAIL_W + 0.5, "tabela excede largura disponível"
    data = [[Paragraph(f"<b>{h}</b>", S["th"]) for h in header]]
    for row in rows:
        data.append([Paragraph(str(cell), S["td"]) for cell in row])
    t = Table(data, colWidths=col_widths, hAlign="CENTER",
              repeatRows=1 if repeat else 0)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), HEADER_FILL),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return t


def stat_strip(stats):
    vals = [Paragraph(f"<b>{v}</b>", S["stat_v"]) for v, _ in stats]
    labs = [Paragraph(l, S["stat_l"]) for _, l in stats]
    t = Table([vals, labs], colWidths=[AVAIL_W / 3.0] * 3, hAlign="CENTER")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CARD_BG),
        ("LINEABOVE", (0, 0), (-1, 0), 2, ACCENT),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("BOX", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, 0), 12),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 2),
        ("TOPPADDING", (0, 1), (-1, 1), 2),
        ("BOTTOMPADDING", (0, 1), (-1, 1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
    ]))
    return t


def scene_block(sc):
    header = Table(
        [[Paragraph(f"<b>{sc['titulo']}</b>", S["scene_t"]),
          Paragraph(sc["tempo"], S["scene_h"])]],
        colWidths=[AVAIL_W * 0.62, AVAIL_W * 0.38], hAlign="CENTER")
    header.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), HEADER_FILL),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    na_tela = Paragraph(
        f"<b><font color='{HEADER_FILL_HEX}'>NA TELA</font></b> — {sc['na_tela']}",
        S["natela"])
    dir_p = Paragraph(f"<i>{sc['direcao']}</i>", S["dir"])
    narr = [Paragraph(p, S["narr"]) for p in sc["narracao"]]
    dica = Table([[Paragraph(
        f"<b><font color='{HEADER_FILL_HEX}'>DICA DE GRAVAÇÃO</font></b> — {sc['dica']}",
        S["dica"])]], colWidths=[AVAIL_W], hAlign="CENTER")
    dica.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CARD_BG),
        ("LINEBEFORE", (0, 0), (0, -1), 3, ACCENT),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    out = [Spacer(1, 14)]
    out += safe_keep_together([header, na_tela, dir_p, narr[0]])
    out += narr[1:]
    out += [Spacer(1, 2), dica]
    return out


# ---------------------------------------------------------------- story
story = []

# --- Sumário (front matter, numeração romana)
story.append(Paragraph("<b>Sumário</b>", S["toc_t"]))
story.append(HRFlowable(width="100%", color=ACCENT, thickness=1.2,
                        spaceBefore=0, spaceAfter=14))
toc = TableOfContents()
toc.levelStyles = [S["toc0"]]
story.append(toc)
story.append(PageBreak())

# --- 1. Ficha do vídeo e preparação
story += h1_block("1. Ficha do vídeo e preparação", body_start=True)
story.append(Paragraph(C.COMO_USAR, S["lead"]))
story.append(heading("Ficha técnica", 1))
story.append(make_table(["Campo", "Definição"], C.FICHA, [0.28, 0.72]))
story.append(Spacer(1, 6))
story.append(Paragraph("Tabela 1 — Ficha técnica do vídeo.", S["caption"]))
story.append(Spacer(1, 14))
story.append(heading("Checklist de preparação (antes de gravar)", 1))
for i, item in enumerate(C.CHECKLIST, 1):
    story.append(Paragraph(f"<b>{i}.</b> {item}", S["item"]))

# --- 2. Números oficiais para citar
story += h1_block("2. Números oficiais para citar")
story.append(Paragraph(C.LEAD_NUMEROS, S["lead"]))
story.append(stat_strip(C.STATS))
story.append(Spacer(1, 16))
story.append(Paragraph(C.FONTE_NUMEROS, S["note"]))
story.append(make_table(["Indicador", "Valor oficial", "Onde é citado"],
                        C.NUMEROS, [0.42, 0.36, 0.22]))
story.append(Spacer(1, 6))
story.append(Paragraph("Tabela 2 — Números oficiais extraídos dos artefatos do modelo.",
                       S["caption"]))
story.append(Spacer(1, 12))

# --- 3. Mapa das cenas
story += h1_block("3. Mapa das cenas")
story.append(Paragraph(C.LEAD_MAPA, S["lead"]))
story.append(make_table(["Cena", "Tempo", "Na tela", "Objetivo"],
                        C.MAPA, [0.21, 0.14, 0.31, 0.34]))
story.append(Spacer(1, 6))
story.append(Paragraph("Tabela 3 — Mapa geral das cenas; a fala completa está na seção 4.",
                       S["caption"]))
story.append(Spacer(1, 12))

# --- 4. Roteiro cena a cena
story += h1_block("4. Roteiro cena a cena — fala completa")
story.append(Paragraph(C.LEAD_CENAS, S["lead"]))
for sc in C.CENAS:
    story += scene_block(sc)

# --- 5. Perguntas prováveis do avaliador
story += h1_block("5. Perguntas prováveis do avaliador")
story.append(Paragraph(C.LEAD_QA, S["lead"]))
for q, a in C.QA:
    qp = Paragraph(f"<b>{q}</b>", S["q"])
    ap = Paragraph(a, S["body"])
    story += safe_keep_together([qp, ap])

# --- 6. Depois da gravação
story += h1_block("6. Depois da gravação")
story.append(Paragraph(C.LEAD_POS, S["lead"]))
story.append(heading("Revisão obrigatória", 1))
for i, item in enumerate(C.POS_REVISAO, 1):
    story.append(Paragraph(f"<b>{i}.</b> {item}", S["item"]))
story.append(heading("Corte leve e especificação de exportação", 1))
story.append(Paragraph(C.POS_CORTE, S["body"]))
story.append(Spacer(1, 4))
story.append(make_table(["Item", "Especificação"], C.POS_EXPORT, [0.30, 0.70]))
story.append(Spacer(1, 6))
story.append(Paragraph("Tabela 4 — Especificação do arquivo final a ser entregue.",
                       S["caption"]))

# ---------------------------------------------------------------- build
doc = TocDocTemplate(
    OUT_PDF, pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN, topMargin=TOP_M, bottomMargin=BOT_M,
    title="Roteiro de Vídeo — SAD ENCCEJA com K-NN (AV1)",
    author="Z.ai", creator="Z.ai",
    subject="Roteiro de gravação do vídeo demonstrativo do SAD ENCCEJA (K-NN)",
)
doc.multiBuild(story, onFirstPage=draw_page, onLaterPages=draw_page)
print("OK:", OUT_PDF, "| body_start_page =", BODY_START["page"])
