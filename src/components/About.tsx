"use client";

import { ArrowRight, MapPin, Briefcase, Sparkles, Target, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, EDUCATION_DATA } from "@/data/portfolioData";

interface AboutProps {
  onOpenResume: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  const highlightCards = [
    {
      icon: Briefcase,
      title: "5+ Years",
      subtitle: "of experience in AI/ML & GenAI Systems",
      color: "text-[#6366F1]",
      border: "border-[#6366F1]/20",
      bg: "bg-[#6366F1]/5"
    },
    {
      icon: MapPin,
      title: "Bengaluru",
      subtitle: "Based • Tech Hub of India",
      color: "text-[#A78BFA]",
      border: "border-[#A78BFA]/20",
      bg: "bg-[#A78BFA]/5"
    },
    {
      icon: Target,
      title: "Open to",
      subtitle: "Full-time Opportunities",
      color: "text-[#10B981]",
      border: "border-[#10B981]/20",
      bg: "bg-[#10B981]/5"
    },
    {
      icon: Sparkles,
      title: "Product-Focused",
      subtitle: "Aspiring to build high-scale GenAI & Data Science products",
      color: "text-[#F472B6]",
      border: "border-[#F472B6]/20",
      bg: "bg-[#F472B6]/5"
    }
  ];

  return (
    <section id="about" className="w-full py-20 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs md:text-sm font-mono text-[#F472B6] tracking-wider uppercase">
          01
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center gap-4">
          <span>About Me</span>
          <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-white/20 to-transparent" />
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative Story */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            I&apos;m a Data Scientist and GenAI Engineer with <strong className="text-white font-semibold">5+ years of experience</strong> building data-driven and AI-powered solutions. I have worked on a mix of traditional ML/DL systems and modern enterprise Generative AI applications, specializing in <span className="text-[#A78BFA] font-medium">RAG architectures</span>, <span className="text-[#F472B6] font-medium">autonomous agents</span>, and <span className="text-[#6366F1] font-medium">multi-agent orchestrations</span>.
          </p>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            I enjoy working with enterprise cloud platforms like <strong className="text-slate-200">AWS (Bedrock, Strands, AgentCore)</strong> and <strong className="text-slate-200">Azure (AKS, OpenAI, AI Search, Databricks)</strong>. My focus is on turning ambiguous, complex problems into scalable, reliable, production-grade systems with verifiable precision and observable metrics.
          </p>

          {/* Education Mini-card */}
          <div className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-[#6366F1]/10 text-[#A78BFA] shrink-0 mt-0.5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h4 className="text-sm font-semibold text-white">
                  {EDUCATION_DATA.institution}
                </h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-mono">
                  CGPA {EDUCATION_DATA.cgpa}
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                {EDUCATION_DATA.degree} ({EDUCATION_DATA.period})
              </p>
            </div>
          </div>

          <button
            onClick={onOpenResume}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-[#A78BFA]/50 transition-all duration-200"
          >
            <span>Learn more about me</span>
            <ArrowRight className="w-4 h-4 text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: 4 Stat & Identity Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlightCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl ${card.bg} border ${card.border} backdrop-blur-md flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-black/20`}
              >
                <div className="p-3 w-fit rounded-xl bg-white/[0.05] mb-4">
                  <Icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
