# -*- coding: utf-8 -*-
"""Mescla capa + corpo, normaliza para A4 e grava o PDF final em download/."""
import os
from pypdf import PdfReader, PdfWriter

BASE = "/home/z/my-project"
COVER = os.path.join(BASE, "scripts", "build", "capa_roteiro.pdf")
BODY = os.path.join(BASE, "scripts", "build", "roteiro_corpo.pdf")
OUT = os.path.join(BASE, "download", "Roteiro_Video_AV1_SAD_ENCCEJA.pdf")

A4_W, A4_H = 595.28, 841.89


def normalize_page_to_a4(page):
    box = page.mediabox
    w, h = float(box.width), float(box.height)
    if abs(w - A4_W) > 0.1 or abs(h - A4_H) > 0.1:
        page.scale_to(A4_W, A4_H)
    return page


writer = PdfWriter()
cover_page = PdfReader(COVER).pages[0]
writer.add_page(normalize_page_to_a4(cover_page))
for page in PdfReader(BODY).pages:
    writer.add_page(normalize_page_to_a4(page))

writer.add_metadata({
    "/Title": "Roteiro de Vídeo — SAD ENCCEJA com K-NN (AV1)",
    "/Author": "Z.ai",
    "/Creator": "Z.ai",
    "/Subject": "Roteiro de gravação do vídeo demonstrativo do SAD ENCCEJA (K-NN)",
})
with open(OUT, "wb") as f:
    writer.write(f)
print("OK:", OUT, "| páginas:", len(writer.pages))
