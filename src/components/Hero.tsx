"use client";

import Image from "next/image";
import { ArrowRight, Download, Mail, Sparkles, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs md:text-sm font-medium text-[#E2E8F0] mb-6 backdrop-blur-sm shadow-sm">
            <span>Hi, I&apos;m</span>
          </div>

          {/* Name Header */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4 leading-[1.1]">
            Stuti Srivastava
          </h1>

          {/* Role Subtitle with Gradient */}
          <div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight mb-6">
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#6366F1] bg-clip-text text-transparent">
              GenAI Engineer
            </span>
            <span className="text-white/40 mx-2 font-light">|</span>
            <span className="text-slate-200">Data Scientist</span>
          </div>

          {/* Short Intro */}
          <p className="text-base md:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8">
            {PERSONAL_INFO.shortIntro}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#F472B6] hover:opacity-95 shadow-lg shadow-[#6366F1]/25 hover:shadow-[#F472B6]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Stuti_Srivastava_Resume.pdf"
              download="Stuti_Srivastava_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium text-[#E2E8F0] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.25] backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#F472B6]" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.08] transition-all"
            >
              <span>Preview</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#94A3B8]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:text-white hover:border-[#A78BFA]/50 hover:bg-white/[0.08] transition-all"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:text-white hover:border-[#6366F1]/50 hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:text-white hover:border-[#F472B6]/50 hover:bg-white/[0.08] transition-all"
              aria-label="Email Stuti"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-white/10 mx-2" />

            <span className="text-xs text-slate-400 font-mono">
              Bengaluru, IN
            </span>
          </div>
        </div>

        {/* Right Column: Profile Portrait in Arch Frame */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Subtle glowing halo behind the arch */}
          <div className="absolute w-[340px] h-[440px] rounded-t-full rounded-b-[40px] bg-gradient-to-tr from-[#6366F1]/30 via-[#A78BFA]/20 to-[#F472B6]/25 blur-3xl -z-10" />

          {/* Arch Frame Container */}
          <div className="relative group">
            {/* Outer border with gradient */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] h-[380px] sm:h-[430px] md:h-[450px] rounded-t-full rounded-b-[36px]">
              {/* Inner card */}
              <div className="w-full h-full rounded-t-full rounded-b-[34px] overflow-hidden bg-gradient-to-b from-[#1E1B4B]/60 via-[#0F172A] to-[#0B0F19] relative flex items-center justify-center">
                {/* Ambient glow behind the portrait */}
                <div className="absolute top-12 w-48 h-48 rounded-full bg-gradient-to-tr from-[#6366F1]/30 via-[#A78BFA]/25 to-[#F472B6]/25 blur-2xl pointer-events-none" />

                <Image
                  src="/stuti-portrait-portfolio.png"
                  alt="Stuti Srivastava"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                  sizes="(max-width: 768px) 280px, 340px"
                />

                {/* Smooth bottom gradient blend into the card */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent pointer-events-none" />

                {/* Subtle soft edge vignette for total cohesion */}
                <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top,transparent_60%,#0F172A_95%)] pointer-events-none opacity-40" />
              </div>
            </div>

            {/* Sparkles around the arch */}
            <div className="absolute -top-3 -right-2 text-[#F472B6] animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="absolute top-1/4 -left-4 text-[#A78BFA] opacity-80">
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Handwritten note / aesthetic badge: "Better Data Bigger Dreams ♡" */}
            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-[#111726]/90 backdrop-blur-md border border-[#F472B6]/30 px-4 py-2 rounded-2xl shadow-xl shadow-black/40 rotate-[-4deg] group-hover:rotate-0 transition-transform">
              <p className="text-xs font-medium text-[#F472B6] tracking-wide flex items-center gap-1.5 font-sans">
                <span>Better Data Bigger Dreams</span>
                <span className="text-[#F472B6] text-sm">♡</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[11px] uppercase tracking-widest font-mono">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-slate-500/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#A78BFA] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
