import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stuti Srivastava | GenAI Engineer & Data Scientist",
  description: "Portfolio of Stuti Srivastava — AI/ML Engineer with 5+ years of experience specializing in Multi-Agent Systems, AWS Strands, Bedrock AgentCore, LangGraph, RAG, and production GenAI architectures.",
  keywords: [
    "Stuti Srivastava",
    "GenAI Engineer",
    "Data Scientist",
    "Multi-Agent Systems",
    "AWS Strands",
    "Bedrock AgentCore",
    "LangGraph",
    "RAG",
    "AI Governance",
    "PySpark",
    "Azure AI"
  ],
  authors: [{ name: "Stuti Srivastava" }],
  creator: "Stuti Srivastava",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stutisrivastava.dev",
    title: "Stuti Srivastava | GenAI Engineer & Data Scientist",
    description: "Multi-agent systems, automated ETL migration & production AI architectures.",
    siteName: "Stuti Srivastava Portfolio",
    images: [
      {
        url: "/stuti-portrait-bluebg.png",
        width: 800,
        height: 1000,
        alt: "Stuti Srivastava - GenAI Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuti Srivastava | GenAI Engineer & Data Scientist",
    description: "Building production-grade Multi-Agent Systems and scalable GenAI solutions.",
    images: ["/stuti-portrait-bluebg.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] antialiased selection:bg-[#6366F1]/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
