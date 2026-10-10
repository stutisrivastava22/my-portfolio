"use client";

import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0B0F19] py-12 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-[#A78BFA] font-mono">
              GenAI Engineer | Data Scientist
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Turning complex architectures into autonomous, intelligent systems.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4 text-[#94A3B8]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-full hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>© 2026 Stuti Srivastava. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
