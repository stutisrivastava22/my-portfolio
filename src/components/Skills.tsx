"use client";

import { useState } from "react";
import { 
  Bot, 
  Cpu, 
  Network, 
  Radio, 
  Cloud, 
  Sparkles, 
  ShieldCheck, 
  Gauge, 
  Layers, 
  Search, 
  Database, 
  Share2, 
  Sliders, 
  BrainCircuit, 
  Flame, 
  Boxes, 
  TrendingUp, 
  CloudLightning, 
  CloudCog, 
  Box, 
  Activity, 
  FileCode, 
  Zap, 
  Server, 
  TableProperties, 
  Eye, 
  GitBranch,
  CheckCircle2
} from "lucide-react";
import { SKILLS_DATA, SkillItem } from "@/data/portfolioData";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "GenAI & Agents",
    "Languages and Frameworks",
    "Machine Learning & NLP",
    "Cloud & Infra",
    "DevOps & Monitoring"
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    const searchableText = `${skill.name} ${skill.category} ${skill.description ?? ""}`.toLowerCase();
    return matchesCategory && searchableText.includes(normalizedQuery);
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "Network": return <Network className="w-5 h-5" />;
      case "Radio": return <Radio className="w-5 h-5" />;
      case "Cloud": return <Cloud className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Gauge": return <Gauge className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Search": return <Search className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      case "Share2": return <Share2 className="w-5 h-5" />;
      case "Sliders": return <Sliders className="w-5 h-5" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5" />;
      case "Flame": return <Flame className="w-5 h-5" />;
      case "Boxes": return <Boxes className="w-5 h-5" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5" />;
      case "CloudLightning": return <CloudLightning className="w-5 h-5" />;
      case "CloudCog": return <CloudCog className="w-5 h-5" />;
      case "Box": return <Box className="w-5 h-5" />;
      case "Activity": return <Activity className="w-5 h-5" />;
      case "FileCode": return <FileCode className="w-5 h-5" />;
      case "Zap": return <Zap className="w-5 h-5" />;
      case "Server": return <Server className="w-5 h-5" />;
      case "TableProperties": return <TableProperties className="w-5 h-5" />;
      case "Eye": return <Eye className="w-5 h-5" />;
      case "GitBranch": return <GitBranch className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="w-full py-20 px-6 md:px-10 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs md:text-sm font-mono text-[#F472B6] tracking-wider uppercase">
              02
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center gap-4">
              <span>Skills &amp; Tech Stack</span>
              <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-white/20 to-transparent" />
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Specialized in autonomous multi-agent orchestration, transformer fine-tuning, RAG retrieval architectures, and scalable cloud deployments.
          </p>
        </div>

      </div>

      {/* Skill Search and Category Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white shadow-md shadow-[#6366F1]/20"
                  : "bg-white/[0.04] text-[#94A3B8] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="relative block w-full shrink-0 sm:w-64">
          <span className="sr-only">Search skills</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search skills"
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
          />
        </label>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {filteredSkills.map((skill, index) => {
          return (
            <div
              key={index}
              className="group relative p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#A78BFA]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6366F1]/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] group-hover:bg-[#6366F1]/15 text-[#A78BFA] group-hover:text-white transition-colors">
                    {getIcon(skill.icon)}
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      skill.level === "Expert"
                        ? "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20"
                        : "bg-[#6366F1]/10 text-[#A78BFA] border border-[#6366F1]/20"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-[#F472B6] transition-colors leading-tight mb-1">
                  {skill.name}
                </h3>
              </div>

              <p className="text-[11px] text-[#94A3B8] leading-snug line-clamp-2 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
      {filteredSkills.length === 0 && (
        <p className="py-10 text-center text-sm text-[#94A3B8]" role="status">
          No skills match your search.
        </p>
      )}
    </section>
  );
}
