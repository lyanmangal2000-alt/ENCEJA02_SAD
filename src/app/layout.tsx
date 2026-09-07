import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAD ENCCEJA — Apoio à Decisão com K-NN",
  description:
    "Sistema de Apoio à Decisão para gestores de cursinhos ENCCEJA: previsão de desempenho com K-Nearest Neighbors sobre microdados INEP 2024 e recomendações gerenciais automáticas.",
  keywords: ["ENCCEJA", "K-NN", "SAD", "INEP", "microdados", "cursinho", "aprendizado de máquina"],
  authors: [{ name: "Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "SAD ENCCEJA — Apoio à Decisão com K-NN",
    description: "Previsão de desempenho e recomendações gerenciais para cursinhos ENCCEJA",
    siteName: "SAD ENCCEJA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
