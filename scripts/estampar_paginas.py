# -*- coding: utf-8 -*-
"""Estampa números de página no guia PDF (capa oculta, corpo 1..N)."""
import io
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas

SRC = "/home/z/my-project/download/Guia_Execucao_VSCODE_SAD_ENCCEJA.pdf"
PAGE_W, PAGE_H = 720, 1020

reader = PdfReader(SRC)
writer = PdfWriter()

for i, page in enumerate(reader.pages):
    if i == 0:
        writer.add_page(page)  # capa: sem número
        continue
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(PAGE_W, PAGE_H))
    c.setFont("Helvetica", 9)
    c.setFillColorRGB(0.58, 0.64, 0.72)  # slate-400
    c.drawCentredString(PAGE_W / 2, 22, str(i))  # corpo começa em 1
    c.save()
    buf.seek(0)
    overlay = PdfReader(buf).pages[0]
    page.merge_page(overlay)
    writer.add_page(page)

with open(SRC, "wb") as f:
    writer.write(f)
print(f"numeração aplicada: capa oculta + páginas 1..{len(reader.pages) - 1}")
