"use client";

import { useState } from "react";
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Workflow, 
  Layers, 
  Lock, 
  Activity, 
  FileText, 
  UploadCloud, 
  ArrowRight,
  Info,
  Network,
  FileImage
} from "lucide-react";

export function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>("supervisor");

  const nodesInfo: Record<string, { title: string; subtitle: string; desc: string; tags: string[] }> = {
    intake: {
      title: "User Request / SDD (MyGIT UI)",
      subtitle: "Secure Document Intake",
      desc: "Software Design Documents (SDDs) are submitted through enterprise MyGIT UI. Pre-signed AWS S3 URLs are dynamically generated to pass encrypted references to the agent orchestration layer without persisting sensitive documents in agent runtime memory.",
      tags: ["MyGIT UI", "Pre-signed S3", "Encryption in transit"]
    },
    supervisor: {
      title: "Supervisor Agent (AWS Strands)",
      subtitle: "Central Orchestrator & Planner",
      desc: "Developed using AWS Strands in Python. Ingests the SDD, extracts the SDD contents with architecture diagrams, calls Ardoq MCP to get organizational context, and delegates concurrently to domain subagents using the A2A protocol. Synthesizes cross-agent findings into a final score.",
      tags: ["AWS Strands", "Ardoq MCP", "A2A Protocol", "Consensus Engine"]
    },
    infra: {
      title: "Infra Agent (Architecture & Cloud)",
      subtitle: "Domain Review Subagent",
      desc: "Audits compute definitions, VPC topologies, multi-AZ redundancy, Disaster Recovery (DR) RTO/RPO limits, and auto-scaling rules against enterprise cloud standards.",
      tags: ["AWS/Azure Infra", "Well-Architected Framework", "High Availability"]
    },
    data: {
      title: "Data Agent (Data & Analytics)",
      subtitle: "Domain Review Subagent",
      desc: "Inspects ETL topologies, storage tiers (S3, Blob, Lakehouse), schema evolution strategies, partition keys, and data retention policies for scalability and compliance.",
      tags: ["PySpark", "Databricks", "S3 Storage", "Data Lineage"]
    },
    security: {
      title: "Security Agent (Security & Compliance)",
      subtitle: "Domain Review Subagent",
      desc: "Validates zero-trust boundaries, IAM least-privilege configurations, Secrets Manager / CyberArk key rotations, transit/rest encryption, and regulatory guardrails (GDPR/HIPAA).",
      tags: ["Zero-Trust", "CyberArk", "IAM Least Privilege", "Encryption"]
    },
    integration: {
      title: "Integration Agent (APIs & System Interfaces)",
      subtitle: "Domain Review Subagent",
      desc: "Conducts integration-related reviews across API protocols, messaging topologies, event streaming, data contracts, and cross-system service integrations.",
      tags: ["API Contracts", "Event Streaming", "System Integration"]
    },
    diagram: {
      title: "Diagram Agent (Visual Architecture Assessment)",
      subtitle: "Domain Review Subagent",
      desc: "Reads the visual architecture diagrams in the SDD and assesses them against written specifications, verifying topological consistency and component relationships.",
      tags: ["Visual Assessment", "Diagram Analysis", "Topology Consistency"]
    },
    runtime: {
      title: "AgentCore Runtime & Substrate",
      subtitle: "Managed Execution Engine",
      desc: "Deployed via Terraform on AWS Bedrock AgentCore. Provides isolated serverless runtime containers, AgentCore session memory, A2A messaging buses, and unified policy guardrails.",
      tags: ["Terraform", "Bedrock AgentCore", "Managed Memory", "Serverless"]
    },
    observability: {
      title: "Observability & Guardrails",
      subtitle: "Enterprise Telemetry",
      desc: "Full-pipeline monitoring with Lumenova, SignalFx, Splunk, and AWS CloudWatch. Enforces input/output AI Guardrails to prevent hallucinations, monitor latency, and track per-token economics.",
      tags: ["Lumenova", "SignalFx", "CloudWatch", "AI Guardrails"]
    },
    report: {
      title: "Audit Report Generation",
      subtitle: "SharePoint Delivery",
      desc: "Generates an auditable, human-readable architecture assessment report with flagged vulnerabilities, compliance scores, and actionable remediation steps in under 10 minutes. The output report is stored in SharePoint, and the SharePoint URL is shared with the user.",
      tags: ["SharePoint Storage", "SharePoint URL", "Auditable Lineage"]
    }
  };

  const selected = activeNode ? nodesInfo[activeNode] : nodesInfo["supervisor"];

  return (
    <div className="w-full rounded-2xl bg-[#0F172A]/90 border border-white/[0.08] p-5 sm:p-7 relative overflow-hidden backdrop-blur-md">
      {/* Background ambient pulse */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#6366F1]/20 text-[#A78BFA]">
            <Workflow className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white tracking-tight">
              Interactive System Topology
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Click any node in the flow to inspect runtime responsibilities &amp; protocol details
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            A2A Protocol Active
          </span>
        </div>
      </div>

      {/* Visual Diagram Tree */}
      <div className="space-y-6">
        {/* Tier 1: Intake & S3 Pre-signed URL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <button
            onClick={() => setActiveNode("intake")}
            className={`md:col-span-4 p-3.5 rounded-xl border text-left transition-all ${
              activeNode === "intake"
                ? "bg-[#6366F1]/20 border-[#A78BFA] shadow-lg shadow-[#6366F1]/20"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1">
              <UploadCloud className="w-4 h-4 text-[#A78BFA]" />
              <span>User Request • SDD</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">MyGIT UI → Pre-signed S3 URL</p>
          </button>

          <div className="hidden md:flex md:col-span-1 justify-center text-[#A78BFA]">
            <ArrowRight className="flow-arrow-right w-4 h-4" />
          </div>

          {/* Tier 1: Supervisor Agent */}
          <button
            onClick={() => setActiveNode("supervisor")}
            className={`md:col-span-7 p-4 rounded-xl border text-left transition-all ${
              activeNode === "supervisor"
                ? "bg-gradient-to-r from-[#6366F1]/30 to-[#A78BFA]/20 border-[#A78BFA] shadow-lg shadow-[#6366F1]/25 ring-1 ring-[#A78BFA]/50"
                : "bg-white/[0.04] border-[#6366F1]/30 hover:bg-white/[0.07]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#6366F1] animate-ping" />
                <span className="text-sm font-bold text-white">Supervisor Agent</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6366F1]/30 text-[#A78BFA] border border-[#6366F1]/40">
                AWS Strands + Ardoq MCP
              </span>
            </div>
            <p className="text-xs text-[#CBD5E1] mt-1">
              Ingests SDD • Extracts diagrams • Ardoq MCP context • Coordinates 5 domain agents via A2A
            </p>
          </button>
        </div>

        {/* Connecting Line Downward */}
        <div className="flex justify-center -my-2">
          <div className="h-6 w-px bg-gradient-to-b from-[#6366F1] to-[#A78BFA]/50" />
        </div>

        {/* Tier 2: Domain Subagents (Infra, Data, Security, Integration, Diagram) */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 text-center">
            ── Concurrent Autonomous A2A Execution Fleet (5 Domain Subagents) ──
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Infra Agent */}
            <button
              onClick={() => setActiveNode("infra")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeNode === "infra"
                  ? "bg-[#38BDF8]/20 border-[#38BDF8] shadow-lg shadow-[#38BDF8]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Server className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs font-semibold text-white">Infra Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                HA/DR, compute, VPC &amp; cloud topologies
              </p>
            </button>

            {/* Data Agent */}
            <button
              onClick={() => setActiveNode("data")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeNode === "data"
                  ? "bg-[#A78BFA]/20 border-[#A78BFA] shadow-lg shadow-[#A78BFA]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Database className="w-4 h-4 text-[#A78BFA]" />
                <span className="text-xs font-semibold text-white">Data Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                Pipelines, storage tiers &amp; PySpark flows
              </p>
            </button>

            {/* Security Agent */}
            <button
              onClick={() => setActiveNode("security")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeNode === "security"
                  ? "bg-[#F472B6]/20 border-[#F472B6] shadow-lg shadow-[#F472B6]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F472B6]" />
                <span className="text-xs font-semibold text-white">Security Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                IAM policies, zero-trust &amp; secret rotations
              </p>
            </button>

            {/* Integration Agent */}
            <button
              onClick={() => setActiveNode("integration")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeNode === "integration"
                  ? "bg-[#EAB308]/20 border-[#EAB308] shadow-lg shadow-[#EAB308]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Network className="w-4 h-4 text-[#EAB308]" />
                <span className="text-xs font-semibold text-white">Integration Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                APIs, messaging topologies &amp; event contracts
              </p>
            </button>

            {/* Diagram Agent */}
            <button
              onClick={() => setActiveNode("diagram")}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeNode === "diagram"
                  ? "bg-[#EC4899]/20 border-[#EC4899] shadow-lg shadow-[#EC4899]/20"
                  : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <FileImage className="w-4 h-4 text-[#EC4899]" />
                <span className="text-xs font-semibold text-white">Diagram Agent</span>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                Reads &amp; assesses SDD architecture diagrams
              </p>
            </button>
          </div>
        </div>

        {/* Connecting Line Downward */}
        <div className="flex justify-center -my-2">
          <div className="h-6 w-px bg-gradient-to-b from-[#A78BFA]/50 to-[#10B981]/50" />
        </div>

        {/* Tier 3: Core Substrate & Runtime Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => setActiveNode("runtime")}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeNode === "runtime"
                ? "bg-[#F59E0B]/20 border-[#F59E0B] shadow-lg shadow-[#F59E0B]/20"
                : "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.05]"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-xs font-semibold text-white">AgentCore Runtime</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Terraform</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">
              Managed Memory • A2A Communication Bus • Secrets Manager
            </p>
          </button>

          <button
            onClick={() => setActiveNode("observability")}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeNode === "observability"
                ? "bg-[#10B981]/20 border-[#10B981] shadow-lg shadow-[#10B981]/20"
                : "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.05]"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs font-semibold text-white">Observability &amp; Guardrails</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">CloudWatch + Lumenova</span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">
              SignalFx Telemetry • AI Guardrails • Latency &amp; Failure Recovery
            </p>
          </button>
        </div>

        {/* Final output: Report */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setActiveNode("report")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all text-xs font-semibold ${
              activeNode === "report"
                ? "bg-[#10B981]/20 border-[#10B981] text-white shadow-md shadow-[#10B981]/20"
                : "bg-white/[0.04] border-white/[0.1] text-slate-300 hover:bg-white/[0.08]"
            }`}
          >
            <FileText className="w-4 h-4 text-[#10B981]" />
            <span>Output: Synthesized Architecture Assessment Report (SharePoint URL)</span>
          </button>
        </div>
      </div>

      {/* Selected Node Details Box */}
      {selected && (
        <div className="mt-7 pt-5 border-t border-white/[0.08] bg-white/[0.02] rounded-xl p-4">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
            <div>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#A78BFA]" />
                <h5 className="text-sm font-bold text-white">{selected.title}</h5>
              </div>
              <p className="text-xs text-[#A78BFA] font-medium">{selected.subtitle}</p>
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
