"use client";

import { useState } from "react";
import {
  FileCode2,
  Workflow,
  GitMerge,
  Network,
  Code2,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Sparkles,
  ShieldCheck,
  Info,
} from "lucide-react";

export function ConversionDiagram() {
  const [activeStep, setActiveStep] = useState<string>("redundancy");

  const stepDetails: Record<
    string,
    {
      title: string;
      subtitle: string;
      desc: string;
      tags: string[];
    }
  > = {
    dsx: {
      title: "IBM DataStage DSX Jobs",
      subtitle: "Legacy ETL Input",
      desc: "Ingests exported IBM DataStage .dsx files containing stages, stage types, processing logic, input/output links, and container stages.",
      tags: ["IBM DataStage", ".DSX", "Legacy ETL"],
    },

    parser: {
      title: "Custom Python Parser",
      subtitle: "DSX → Structured JSON",
      desc: "A pure Python parser extracts the complete job structure and processing information into normalized JSON, enabling downstream AI agents to reason over the legacy pipeline.",
      tags: ["Pure Python", "Stage Extraction", "JSON"],
    },

    redundancy: {
      title: "Redundancy Detection Agent",
      subtitle: "Graph + Semantic Similarity",
      desc: "Compares multiple DataStage jobs using graph-based structure and semantic matching to identify similar or redundant pipelines and calculate a similarity percentage.",
      tags: ["Graph Matching", "Semantic Similarity", "Job Comparison"],
    },

    merger: {
      title: "Pipeline Merger Agent",
      subtitle: "Combines Redundancy Results + Reviewed Code",
      desc: "Combines the redundancy agent's job relationships with the reviewed PySpark outputs to produce a unified pipeline for production.",
      tags: ["Redundancy Results", "Reviewed PySpark", "Pipeline Merge"],
    },

    codegen: {
      title: "PySpark Converter Agent",
      subtitle: "Legacy ETL → PySpark",
      desc: "Converts the parsed DataStage job into PySpark, then sends the generated code through the review-and-correction loop before merging.",
      tags: ["LLM Agent", "PySpark", "ETL Migration"],
    },

    reviewer: {
      title: "Code Review & Correction",
      subtitle: "Validation + Functional Integrity",
      desc: "Checks generated PySpark for syntax, correctness, and preservation of core functionality. Review findings return to the converter for correction; validated output moves to the merger.",
      tags: ["Code Review", "Validation", "Auto Correction"],
    },

    pyspark: {
      title: "Production-Ready PySpark",
      subtitle: "Migration Output",
      desc: "Delivers the final PySpark pipeline to the user, ready to run directly or deploy through platforms such as AWS Glue or Databricks.",
      tags: ["PySpark", "AWS Glue", "Databricks"],
    },
  };

  const selected =
    activeStep ? stepDetails[activeStep] : stepDetails["redundancy"];

  return (
    <div className="w-full rounded-2xl bg-[#0F172A]/90 border border-white/[0.08] p-5 sm:p-7 relative overflow-hidden backdrop-blur-md">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8]">
            <GitMerge className="w-5 h-5" />
          </div>

          <div>
            <h4 className="text-base font-semibold text-white tracking-tight">
              DSX → PySpark Migration Pipeline
            </h4>

            <p className="text-xs text-[#94A3B8]">
              Intelligent legacy ETL migration with redundancy detection,
              validation & optimization.
            </p>
          </div>
        </div>

        {/* Key Performance Metrics */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30">
            2–3 min Complex Migration
          </span>

          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
            &lt;2 sec Single Job Parse
          </span>

          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
            ~30 sec / 100+ Jobs
          </span>

          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30">
            40–50 Stages
          </span>
        </div>
      </div>

      {/* Pipeline Flow */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 items-center">
          <button
            onClick={() => setActiveStep("dsx")}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeStep === "dsx"
                ? "bg-[#6366F1]/20 border-[#A78BFA] shadow-lg shadow-[#6366F1]/20"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileCode2 className="w-4 h-4 text-[#A78BFA]" />
              <span className="text-xs font-semibold text-white">DSX Files</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">IBM DataStage Jobs</p>
          </button>

          <div className="flex justify-center text-[#38BDF8]">
            <ArrowRight className="flow-arrow-right hidden lg:block w-4 h-4" />
            <ArrowDown className="flow-arrow-down lg:hidden w-4 h-4" />
          </div>

          <button
            onClick={() => setActiveStep("parser")}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeStep === "parser"
                ? "bg-[#38BDF8]/20 border-[#38BDF8] shadow-lg shadow-[#38BDF8]/20"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Workflow className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-xs font-semibold text-white">Python Parser</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">Structured JSON</p>
          </button>

          <div className="flex justify-center text-[#38BDF8]">
            <ArrowRight className="flow-arrow-right hidden lg:block w-4 h-4" />
            <ArrowDown className="flow-arrow-down lg:hidden w-4 h-4" />
          </div>

          <button
            onClick={() => setActiveStep("redundancy")}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeStep === "redundancy"
                ? "bg-[#10B981]/20 border-[#10B981] shadow-lg shadow-[#10B981]/20"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Network className="w-4 h-4 text-[#10B981]" />
              <span className="text-xs font-semibold text-white">Redundancy Agent</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">Graph + Semantic Matching</p>
          </button>
        </div>

        <div className="flex flex-col items-center text-[#A78BFA]">
          <ArrowDown className="flow-arrow-down w-4 h-4" />
          <span className="text-[10px] font-mono">Parsed jobs + similarity results</span>
        </div>

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
          <div className="mb-3 text-center">
            <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Conversion + Review Loop
            </h5>
            <p className="text-[10px] text-slate-400 mt-1">
              Review findings return to the converter until the output is validated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 items-center">
            <button
              onClick={() => setActiveStep("codegen")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeStep === "codegen"
                  ? "bg-[#F472B6]/20 border-[#F472B6] shadow-lg shadow-[#F472B6]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#F472B6]" />
                <span className="text-xs font-semibold text-white">PySpark Conversion Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">Generates code from parsed DSX jobs</p>
            </button>

            <div className="flex flex-col sm:flex-col items-center justify-center gap-2 text-[#38BDF8]">
              <div className="hidden sm:flex items-center gap-1" aria-label="Conversion sent for review">
                <ArrowRight className="flow-arrow-right w-4 h-4" />
                <span className="text-[9px] font-mono">Review</span>
              </div>
              <div className="flex sm:hidden items-center gap-1" aria-label="Conversion sent for review">
                <ArrowDown className="flow-arrow-down w-4 h-4" />
                <span className="text-[9px] font-mono">Review</span>
              </div>
              <div className="hidden sm:flex items-center gap-1" aria-label="Review corrections sent back to conversion agent">
                <ArrowLeft className="flow-arrow-left w-4 h-4" />
                <span className="text-[9px] font-mono">Correct</span>
              </div>
              <div className="flex sm:hidden items-center gap-1" aria-label="Review corrections sent back to conversion agent">
                <ArrowUp className="flow-arrow-up w-4 h-4" />
                <span className="text-[9px] font-mono">Correct</span>
              </div>
            </div>

            <button
              onClick={() => setActiveStep("reviewer")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeStep === "reviewer"
                  ? "bg-[#38BDF8]/20 border-[#38BDF8] shadow-lg shadow-[#38BDF8]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs font-semibold text-white">Review + Correct Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">Syntax + functionality validation</p>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] p-3">
              <Network className="w-4 h-4 text-[#10B981] shrink-0" />
              <span className="text-[11px] text-slate-300">Redundancy results</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] p-3">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span className="text-[11px] text-slate-300">Validated PySpark output</span>
            </div>
          </div>

          <div className="flex justify-center text-[#A78BFA]">
            <ArrowRight className="flow-arrow-right hidden lg:block w-4 h-4" />
            <ArrowDown className="flow-arrow-down lg:hidden w-4 h-4" />
          </div>

          <button
            onClick={() => setActiveStep("merger")}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeStep === "merger"
                ? "bg-[#A78BFA]/20 border-[#A78BFA] shadow-lg shadow-[#A78BFA]/20"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <GitMerge className="w-4 h-4 text-[#A78BFA]" />
              <span className="text-xs font-semibold text-white">Pipeline Merger Agent</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">Combines both inputs into one pipeline</p>
          </button>

          <div className="flex justify-center text-[#F59E0B]">
            <ArrowRight className="flow-arrow-right hidden lg:block w-4 h-4" />
            <ArrowDown className="flow-arrow-down lg:hidden w-4 h-4" />
          </div>

          <button
            onClick={() => setActiveStep("pyspark")}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeStep === "pyspark"
                ? "bg-[#F59E0B]/15 border-[#F59E0B] shadow-lg shadow-[#F59E0B]/10"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-[#F59E0B]" />
              <div>
                <span className="text-sm font-semibold text-white">Production-Ready PySpark</span>
                <p className="text-[11px] text-[#94A3B8]">AWS Glue / Databricks ready</p>
              </div>
            </div>
          </button>
        </div>

        {/* Performance Spotlight */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#6366F1]/10 via-[#38BDF8]/10 to-[#F59E0B]/10 border border-[#6366F1]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <div>
              <span className="text-xs font-bold text-white">Migration Performance</span>
              <span className="text-xs text-slate-400 ml-2">End-to-end legacy ETL modernization</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
              <p className="text-lg font-bold text-[#F59E0B]">2–3 min</p>
              <p className="text-[10px] text-slate-400">Complex migration</p>
            </div>
            <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
              <p className="text-lg font-bold text-[#38BDF8]">&lt;2 sec</p>
              <p className="text-[10px] text-slate-400">Single job parse</p>
            </div>
            <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
              <p className="text-lg font-bold text-[#10B981]">~30 sec</p>
              <p className="text-[10px] text-slate-400">100+ jobs parsed</p>
            </div>
            <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
              <p className="text-lg font-bold text-[#A78BFA]">40–50 stages</p>
              <p className="text-[10px] text-slate-400">Job complexity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Inspector */}
      {selected && (
        <div className="mt-6 pt-5 border-t border-white/[0.08] bg-white/[0.02] rounded-xl p-4">

          <div className="flex items-start justify-between gap-4 flex-wrap mb-2">

            <div>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#38BDF8]" />

                <h5 className="text-sm font-bold text-white">
                  {selected.title}
                </h5>
              </div>

              <p className="text-xs text-[#38BDF8] font-medium">
                {selected.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selected.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#CBD5E1] leading-relaxed mt-2">
            {selected.desc}
          </p>
        </div>
      )}
    </div>
  );
}