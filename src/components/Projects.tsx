"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowDown,
  X, 
  ExternalLink, 
  Sparkles, 
  Workflow, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  FileCode
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ConversionDiagram } from "@/components/ConversionDiagram";
import { InformaticaDiagram } from "@/components/InformaticaDiagram";
import { RagArchitectureDiagram } from "@/components/RagArchitectureDiagram";
import { IncidentModelTrainingDiagram } from "@/components/IncidentModelTrainingDiagram";

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "implementation" | "learnings" | "results">("overview");
  const projectDetailRef = useRef<HTMLDivElement>(null);

  const selectedProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId);

  const handleOpenProject = (id: string) => {
    setSelectedProjectId(id);
    setActiveTab("overview");
    setTimeout(() => {
      projectDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const handleCloseProject = () => {
    const cardEl = document.getElementById(`project-card-${selectedProjectId}`);
    setSelectedProjectId(null);
    if (cardEl) {
      setTimeout(() => {
        cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  // Keyboard shortcut: Escape closes expanded project
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProjectId) {
        handleCloseProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectId]);

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs md:text-sm font-mono text-[#F472B6] tracking-wider uppercase">
              03
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center gap-4">
              <span>Featured Projects</span>
              <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-white/20 to-transparent" />
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Autonomous multi-agent architectures, enterprise governance platforms, and automated cloud modernizations. Click any card to expand into the comprehensive case study.
          </p>
        </div>

      </div>

      {/* Expanded Project Case Study View (Smooth animated accordion / expansion) */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            ref={projectDetailRef}
            initial={{ opacity: 0, height: 0, scale: 0.98 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 overflow-hidden rounded-3xl bg-[#0F172A]/95 border border-[#A78BFA]/30 shadow-2xl shadow-[#6366F1]/15 ring-1 ring-white/10 backdrop-blur-xl"
          >
            {/* Top Navigation Bar of the Expanded View */}
            <div className="p-6 md:p-8 border-b border-white/[0.08] bg-gradient-to-r from-[#111726] to-[#151D30] relative">
              <div className="flex items-center justify-between gap-4 mb-4">
                <button
                  onClick={handleCloseProject}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A78BFA] hover:text-white transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Projects</span>
                </button>

                <button
                  onClick={handleCloseProject}
                  className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.1] transition-all"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Badge */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#6366F1]/15 text-[#A78BFA] border border-[#6366F1]/30 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span>{selectedProject.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {selectedProject.subtitle}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.06] text-slate-200 border border-white/[0.1] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0">
                  {selectedProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center"
                    >
                      <div className="text-lg font-bold text-white font-mono bg-gradient-to-r from-white via-slate-100 to-[#F472B6] bg-clip-text text-transparent">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#94A3B8] mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inner Sub-Navigation Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto mt-8 pt-4 border-t border-white/[0.08] no-scrollbar">
                {[
                  { id: "overview", label: "Overview & Impact" },
                  { id: "architecture", label: "Architecture Topology" },
                  { id: "learnings", label: "Challenges & Learnings" },
                  { id: "results", label: "Results" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/30"
                        : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Body Content */}
            <div className="p-6 md:p-8">
              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-2">
                        The Challenge
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {selectedProject.overview.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#10B981] mb-2">
                        The Solution
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {selectedProject.overview.solution}
                      </p>
                    </div>
                  </div>

                  {/* Business Impact Bullets */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                      Quantifiable Business Impact
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedProject.overview.impactBullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Architecture Diagram */}
              {activeTab === "architecture" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {selectedProject.architecture.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#94A3B8]">
                      {selectedProject.architecture.description}
                    </p>
                  </div>

                  {/* Render interactive component based on project */}
                  {selectedProject.id === "ea-governance-agent" ? (
                    <ArchitectureDiagram />
                  ) : selectedProject.id === "dsx-pyspark-platform" ? (
                    <ConversionDiagram />
                  ) : selectedProject.id === "informatica-pyspark-converter" ? (
                    <InformaticaDiagram />
                  ) : selectedProject.id === "university-textbook-rag-chatbot" ? (
                    <RagArchitectureDiagram />
                  ) : selectedProject.id === "servicenow-incident-resolution" ? (
                    <IncidentModelTrainingDiagram />
                  ) : (
                    /* Generic Diagram / Flow for other projects */
                    <div className="p-6 rounded-2xl bg-[#0F172A]/90 border border-white/[0.08]">
                      <div className={selectedProject.id === "mistral-log-diagnosis" || selectedProject.id === "vm-utilization-forecasting"
                        ? "flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-2"
                        : "grid grid-cols-1 md:grid-cols-5 gap-3"}
                      >
                        {selectedProject.architecture.flowSteps.map((step, idx) => (
                          <Fragment key={step.step}>
                            <div
                              className={`p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] ${
                                selectedProject.id === "mistral-log-diagnosis" || selectedProject.id === "vm-utilization-forecasting" ? "min-w-0 flex-1" : ""
                              }`}
                            >
                              <span className="text-xs font-mono text-[#F472B6]">
                                {step.step}
                              </span>
                              <h5 className="text-xs font-bold text-white mt-1 mb-1">
                                {step.title}
                              </h5>
                              {selectedProject.id !== "mistral-log-diagnosis" && selectedProject.id !== "vm-utilization-forecasting" && (
                                <p className="text-[11px] text-[#94A3B8] leading-tight">
                                  {step.desc}
                                </p>
                              )}
                            </div>
                            {(selectedProject.id === "mistral-log-diagnosis" || selectedProject.id === "vm-utilization-forecasting") && idx < selectedProject.architecture.flowSteps.length - 1 && (
                              <div className="flex shrink-0 justify-center text-[#38BDF8]">
                                <ArrowRight className="flow-arrow-right hidden h-4 w-4 lg:block" aria-hidden="true" />
                                <ArrowDown className="flow-arrow-down h-4 w-4 lg:hidden" aria-hidden="true" />
                              </div>
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flow Steps Breakdown */}
                  <div className="pt-4">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      End-to-End Execution Sequence
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedProject.architecture.flowSteps.map((step, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-mono text-[#A78BFA] font-bold">
                              Step {step.step}
                            </span>
                            {step.badge && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300">
                                {step.badge}
                              </span>
                            )}
                          </div>
                          <h6 className="text-xs font-semibold text-white mb-1">
                            {step.title}
                          </h6>
                          <p className="text-[11px] text-slate-400 leading-snug">
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Learnings & Challenges */}
              {activeTab === "learnings" && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] mb-2">
                    Key Engineering Insights &amp; Edge Cases
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.learnings.map((learning, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex items-start gap-3.5"
                      >
                        <div className="p-2 rounded-xl bg-[#6366F1]/10 text-[#A78BFA] shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {learning}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Results */}
              {activeTab === "results" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {selectedProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] text-center"
                      >
                        <div className="text-2xl sm:text-3xl font-bold text-white font-mono bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">
                          {m.value}
                        </div>
                        <div className="text-xs text-[#94A3B8] mt-1 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid of Compact Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project) => {
          const isSelected = selectedProjectId === project.id;
          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => handleOpenProject(project.id)}
              className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-[#161F33] border-[#A78BFA] ring-2 ring-[#A78BFA]/30 shadow-2xl shadow-[#6366F1]/20"
                  : "bg-[#111726]/80 hover:bg-[#151D30] border border-white/[0.08] hover:border-[#6366F1]/50 hover:shadow-xl hover:shadow-[#6366F1]/10"
              }`}
            >
              <div>
                {/* Miniature Architecture preview bar / Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#6366F1]/15 text-[#A78BFA] group-hover:text-white group-hover:bg-[#6366F1]/30 transition-colors">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#A78BFA] font-medium">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {project.metrics[0].value}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F472B6] transition-colors tracking-tight mb-2.5">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-3">
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 5).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="text-[11px] font-mono px-2 py-1 rounded-lg bg-white/[0.04] text-slate-400">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action trigger button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#A78BFA] transition-colors">
                  <span>{isSelected ? "Currently Viewing Case Study" : "View Details & Architecture"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
