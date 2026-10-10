"use client";

import { Fragment, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Database,
  FileText,
  Info,
  Layers,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const nodesInfo: Record<string, { title: string; subtitle: string; desc: string; tags: string[] }> = {
  textbooks: {
    title: "University Textbook PDFs",
    subtitle: "Knowledge Sources",
    desc: "Textbook PDF study material supplied for the university student learning assistant.",
    tags: ["Textbooks", "PDF"]
  },
  extraction: {
    title: "Text Extraction + Chunking",
    subtitle: "Python + Azure Document Intelligence",
    desc: "Python parsers and Azure Document Intelligence extract textbook content, which is prepared as chunks for indexing.",
    tags: ["Python Parsers", "Azure Document Intelligence", "Chunking"]
  },
  embeddings: {
    title: "Embeddings",
    subtitle: "Vector Representation",
    desc: "Create embeddings for the extracted textbook chunks so relevant passages can be found through vector search.",
    tags: ["Embeddings", "Text Chunks"]
  },
  index: {
    title: "Azure AI Search Index",
    subtitle: "Textbook Vector Database",
    desc: "Stores the embedded textbook chunks and makes them available to retrieve as context for student queries.",
    tags: ["Azure AI Search", "Vector Index"]
  },
  student: {
    title: "Student Query",
    subtitle: "Learning Assistant Request",
    desc: "A student asks a question about course or textbook material through the chatbot.",
    tags: ["Student", "Question"]
  },
  api: {
    title: "FastAPI on AKS",
    subtitle: "Chatbot API",
    desc: "FastAPI endpoints deployed on Azure Kubernetes Service receive student questions and return generated answers with citations.",
    tags: ["FastAPI", "Azure Kubernetes Service"]
  },
  guardrails: {
    title: "Scope + Safety Guardrails",
    subtitle: "LangKit + LLM Checks",
    desc: "LangKit and an LLM check that questions are appropriate and within the learning assistant's intended scope.",
    tags: ["LangKit", "LLM Guardrails", "Scope Checks"]
  },
  retrieval: {
    title: "Azure AI Search Retrieval",
    subtitle: "Relevant Textbook Context",
    desc: "Searches the indexed textbook chunks and returns passages relevant to the student's question.",
    tags: ["Vector Search", "Retrieved Passages"]
  },
  generation: {
    title: "Azure OpenAI",
    subtitle: "Query + Retrieved Context",
    desc: "Uses both the student's original query and retrieved textbook context to generate a grounded answer.",
    tags: ["Azure OpenAI", "Grounded Generation"]
  },
  answer: {
    title: "Cited Student Answer",
    subtitle: "Response + Sources",
    desc: "Returns the generated answer with citations pointing back to the source textbook material.",
    tags: ["Answer", "Citations"]
  }
};

const indexingStages = [
  { id: "textbooks", label: "Textbook PDFs", meta: "Study material", icon: FileText, color: "text-[#F472B6]" },
  { id: "extraction", label: "Extract + Chunk", meta: "Python + Document Intelligence", icon: Workflow, color: "text-[#38BDF8]" },
  { id: "embeddings", label: "Create Embeddings", meta: "Vectorize passages", icon: Layers, color: "text-[#A78BFA]" },
  { id: "index", label: "Azure AI Search", meta: "Vector index", icon: Database, color: "text-[#10B981]" }
];

const queryStages = [
  { id: "student", label: "Student Query", meta: "Question", icon: FileText, color: "text-[#F472B6]" },
  { id: "api", label: "FastAPI on AKS", meta: "Chat API", icon: Server, color: "text-[#38BDF8]" },
  { id: "guardrails", label: "Guardrails", meta: "LangKit + LLM", icon: ShieldCheck, color: "text-[#F59E0B]" },
  { id: "retrieval", label: "Azure AI Search", meta: "Retrieve context", icon: Search, color: "text-[#10B981]" },
  { id: "generation", label: "Azure OpenAI", meta: "Query + context", icon: Sparkles, color: "text-[#A78BFA]" },
  { id: "answer", label: "Cited Answer", meta: "Response + sources", icon: Activity, color: "text-[#38BDF8]" }
];

function FlowRow({
  stages,
  activeNode,
  onSelect
}: {
  stages: typeof indexingStages | typeof queryStages;
  activeNode: string;
  onSelect: (nodeId: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 xl:flex-row xl:items-stretch xl:gap-2">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        const isActive = activeNode === stage.id;

        return (
          <Fragment key={stage.id}>
            <button
              type="button"
              onClick={() => onSelect(stage.id)}
              aria-pressed={isActive}
              className={`flex min-h-16 min-w-0 flex-1 items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
                isActive
                  ? "border-[#A78BFA] bg-[#6366F1]/20 shadow-lg shadow-[#6366F1]/20"
                  : "border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 ${stage.color}`} />
              <span className="min-w-0">
                <span className="block text-xs font-semibold leading-snug text-white">{stage.label}</span>
                <span className="mt-0.5 block text-[10px] leading-snug text-[#94A3B8]">{stage.meta}</span>
              </span>
            </button>

            {index < stages.length - 1 && (
              <div className="flex shrink-0 items-center justify-center text-[#A78BFA]">
                <ArrowRight className="flow-arrow-right hidden h-4 w-4 xl:block" aria-hidden="true" />
                <ArrowDown className="flow-arrow-down h-4 w-4 xl:hidden" aria-hidden="true" />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export function RagArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState("guardrails");
  const selected = nodesInfo[activeNode];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F172A]/90 p-5 backdrop-blur-md sm:p-7">
      <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-[#6366F1]/10 blur-3xl" />

      <div className="relative space-y-6">
        <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-[#6366F1]/20 p-2 text-[#A78BFA]">
              <Workflow className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Student Learning RAG Architecture</h4>
              <p className="text-xs text-[#94A3B8]">Textbook indexing and citation-grounded query flow</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 self-start rounded-full border border-[#10B981]/30 bg-[#10B981]/15 px-2.5 py-1 text-[11px] font-mono text-[#10B981] sm:self-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Grounded Retrieval
          </span>
        </div>

        <div className="space-y-3">
          <h5 className="text-[10px] font-mono uppercase tracking-wide text-slate-400">Knowledge Indexing</h5>
          <FlowRow stages={indexingStages} activeNode={activeNode} onSelect={setActiveNode} />
        </div>

        <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#A78BFA]">
          <ArrowDown className="flow-arrow-down h-4 w-4" />
          Indexed textbook chunks power runtime retrieval
        </div>

        <div className="space-y-3">
          <h5 className="text-[10px] font-mono uppercase tracking-wide text-slate-400">Student Query</h5>
          <FlowRow stages={queryStages} activeNode={activeNode} onSelect={setActiveNode} />
        </div>

        {selected && (
          <div className="rounded-xl border-t border-white/[0.08] bg-white/[0.02] p-4 pt-5">
            <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-[#38BDF8]" />
                  <h5 className="text-sm font-bold text-white">{selected.title}</h5>
                </div>
                <p className="text-xs font-medium text-[#38BDF8]">{selected.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <span key={tag} className="rounded border border-white/[0.08] bg-white/[0.06] px-2 py-0.5 text-[10px] font-mono text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#CBD5E1]">{selected.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}