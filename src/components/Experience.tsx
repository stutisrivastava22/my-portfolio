"use client";

import { useState, useEffect } from "react";
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BadgeCheck, 
  Sparkles
} from "lucide-react";
import { EXPERIENCES_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, AWARDS_DATA } from "@/data/portfolioData";

const TABS = [
  { id: "roles", label: "Career Roadmap", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: BadgeCheck },
  { id: "awards", label: "Honors & Awards", icon: Award }
] as const;

type TabId = typeof TABS[number]["id"];

export function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("roles");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-switch tabs every 10 seconds with a visual progress indicator.
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 100;
    const totalDuration = 10000;
    const increment = (intervalTime / totalDuration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((previous) => Math.min(previous + increment, 100));
    }, intervalTime);
    const rotationTimer = setTimeout(() => {
      setActiveTab((current) => {
        const currentIndex = TABS.findIndex((tab) => tab.id === current);
        return TABS[(currentIndex + 1) % TABS.length].id;
      });
      setProgress(0);
    }, totalDuration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(rotationTimer);
    };
  }, [isPaused, activeTab]);

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
    setProgress(0);
  };

  return (
    <section 
      id="experience" 
      className="w-full py-20 px-6 md:px-10 max-w-7xl mx-auto relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs md:text-sm font-mono text-[#F472B6] tracking-wider uppercase">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center gap-4">
            <span>Experience &amp; Achievements</span>
            <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-white/20 to-transparent" />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            5 years of enterprise experience building production multi-agent systems, automated ETL modernization pipelines, and fine-tuning domain LLMs.
          </p>

          {/* View Switcher */}
          <div className="flex w-full justify-start md:justify-end">
          <div className="grid w-full grid-cols-3 items-stretch gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-1 backdrop-blur-sm md:flex md:w-auto md:items-center md:gap-1.5">
            {TABS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex min-w-0 flex-col items-center justify-center gap-1 overflow-hidden rounded-xl px-1.5 py-2 text-[10px] font-medium transition-all md:flex-row md:gap-2 md:px-3.5 md:py-1.5 md:text-xs ${
                    isActive
                      ? "bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/25"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-center leading-tight md:whitespace-nowrap">{item.label}</span>

                  {/* Progress bar underneath the active tab */}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#F472B6] transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      {/* Tab 1: Career Roadmap */}
      {activeTab === "roles" && (
        <div className="relative pl-2 sm:pl-4">
          {/* Glowing Vertical Roadmap Spine */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-8 w-0.5 bg-gradient-to-b from-[#10B981] via-[#6366F1] via-[#A78BFA] to-[#F472B6]/40" />

          <div className="space-y-8 sm:space-y-10">
            {EXPERIENCES_DATA.map((exp, idx) => (
                <div key={idx} className="relative pl-10 sm:pl-14 group">
                  {/* Roadmap Node Dot */}
                  <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-4 flex items-center justify-center">
                    {exp.current ? (
                      <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-[#10B981] ring-4 ring-[#10B981]/20 border-2 border-[#0B0F19]" />
                      </span>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-[#6366F1] ring-4 ring-[#6366F1]/20 border-2 border-[#0B0F19] group-hover:bg-[#F472B6] transition-colors" />
                    )}
                  </div>

                  {/* Roadmap Milestone Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#111726]/85 hover:bg-[#151D30] border border-white/[0.08] hover:border-[#A78BFA]/40 transition-all duration-300 shadow-xl shadow-black/20">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                            {exp.role}
                          </h3>
                          {exp.badge && (
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                              {exp.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs text-[#94A3B8] mt-1.5 flex-wrap font-medium">
                          <span className="text-[#F472B6] font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 font-mono">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Awards pill if applicable */}
                      {exp.awards && exp.awards.length > 0 && (
                        <div className="self-start sm:self-center shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                            <Award className="w-3.5 h-3.5" />
                            <span>Award Winner</span>
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
            ))}

            {/* Education Node at End of Roadmap */}
            <div className="relative pl-10 sm:pl-14 group">
              <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-4 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#F472B6] ring-4 ring-[#F472B6]/20 border-2 border-[#0B0F19]" />
              </div>

              <div className="p-5 sm:p-6 rounded-3xl bg-[#111726]/60 border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F472B6]/10 text-[#F472B6] shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {EDUCATION_DATA.institution}
                    </h4>
                    <p className="text-xs text-[#CBD5E1] mt-0.5">
                      {EDUCATION_DATA.degree}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-[#94A3B8] mt-1 font-mono">
                      <span>{EDUCATION_DATA.location}</span>
                      <span>•</span>
                      <span>{EDUCATION_DATA.period}</span>
                    </div>
                  </div>
                </div>

                <div className="text-left md:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25 text-xs font-mono font-bold">
                    CGPA: {EDUCATION_DATA.cgpa}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-mono">First Class Distinction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Certifications (Moved before awards as requested) */}
      {activeTab === "certifications" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111726]/80 border border-white/[0.08] hover:border-[#A78BFA]/40 transition-all flex items-start gap-3.5 group hover:-translate-y-1"
            >
              <div className="p-2.5 rounded-xl bg-[#6366F1]/10 text-[#A78BFA] shrink-0 mt-0.5 group-hover:bg-[#6366F1]/20 group-hover:text-white transition-colors">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A78BFA] uppercase tracking-wider">
                  {cert.issuer}
                </span>
                <h4 className="text-sm font-semibold text-white mt-0.5 leading-snug">
                  {cert.name}
                </h4>
                <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                  ID: {cert.code}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Honors & Awards */}
      {activeTab === "awards" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
          {AWARDS_DATA.map((award, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#111726]/80 border border-[#F59E0B]/20 hover:border-[#F59E0B]/50 transition-all group hover:-translate-y-1"
            >
              <div>
                <div className="p-2 w-fit rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] mb-3 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#F59E0B] font-semibold">
                  {award.issuer} • {award.year}
                </span>
                <h4 className="text-sm font-bold text-white mt-1 mb-1.5">
                  {award.title}
                </h4>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
