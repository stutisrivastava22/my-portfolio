"use client";

import { useEffect, useState } from "react";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  BadgeCheck, 
  FileText,
  ExternalLink
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO, EDUCATION_DATA, CERTIFICATIONS_DATA, AWARDS_DATA, EXPERIENCES_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<"pdf" | "web">("pdf");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-6xl h-[94vh] bg-[#0F172A] border border-white/[0.15] rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex flex-wrap items-center justify-between px-5 sm:px-6 py-3 border-b border-white/[0.08] bg-[#111726] gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <FileText className="w-4 h-4 text-[#A78BFA]" />
              <span className="hidden sm:inline">Resume Preview •</span>
              <span>Stuti Srivastava</span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white/[0.06] p-0.5 rounded-full border border-white/[0.08] text-xs">
              <button
                onClick={() => setViewMode("pdf")}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  viewMode === "pdf"
                    ? "bg-[#6366F1] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                PDF Document
              </button>
              <button
                onClick={() => setViewMode("web")}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  viewMode === "web"
                    ? "bg-[#6366F1] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Web View
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Stuti_Srivastava_Resume.pdf"
              download="Stuti_Srivastava_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-95 shadow-md shadow-[#6366F1]/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/Stuti_Srivastava_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
              title="Open full PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span className="hidden sm:inline">Open Full Screen</span>
            </a>

            {viewMode === "web" && (
              <button
                onClick={handlePrint}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all ml-1"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content View: PDF Viewer OR Web Canvas */}
        {viewMode === "pdf" ? (
          <div className="w-full flex-1 h-full bg-[#0B0F19] flex flex-col overflow-hidden">
            <div className="px-5 py-2 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px] text-[#A78BFA]">
                Resume Preview • 100% zoom
              </span>
              <a
                href="/Stuti_Srivastava_Resume.pdf"
                download="Stuti_Srivastava_Resume.pdf"
                className="text-[11px] text-[#F472B6] hover:underline flex items-center gap-1 font-mono"
              >
                <Download className="w-3 h-3" />
                Download PDF
              </a>
            </div>
            <iframe
              src="/Stuti_Srivastava_Resume.pdf#page=1&zoom=100&navpanes=0&toolbar=1"
              title="Resume Preview"
              className="w-full flex-1 h-full border-0 bg-slate-900"
            />
          </div>
        ) : (
          /* Printable Resume Canvas */
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0F172A] text-slate-200 text-sm print:bg-white print:text-black print:p-0">
            {/* Header */}
            <div className="border-b border-white/[0.1] print:border-black/20 pb-6 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                STUTI SRIVASTAVA
              </h1>
              <p className="text-sm font-medium text-[#A78BFA] print:text-gray-700 mt-1">
                GenAI Engineer | Data Scientist
              </p>

              {/* Contact details row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-[#94A3B8] print:text-gray-600 font-mono">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#F472B6] print:text-black" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#A78BFA] print:text-black" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#6366F1] print:text-black" />
                  linkedin.com/in/stuti-srivastava-a3668118b/
                </a>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#10B981] print:text-black" />
                  Bengaluru, India
                </span>
              </div>
            </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#F472B6] print:text-black font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              AI/ML Engineer with 5+ years of experience building and productionizing machine learning, NLP and Generative AI systems. Hands-on experience in transformer-based model fine-tuning, RAG, search, embeddings, vector databases, multi-agent systems and scalable ML inference. Experienced in taking AI solutions from problem definition and experimentation through low-latency production deployment, with a focus on accuracy, scalability, cost and business impact.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] print:text-black font-bold mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <strong className="text-white print:text-black font-semibold">
                  {EDUCATION_DATA.institution}
                </strong>
                <span className="text-slate-400 print:text-gray-600"> | Bengaluru, India</span>
                <p className="text-slate-300 print:text-gray-700">{EDUCATION_DATA.degree}</p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-slate-400 print:text-gray-600 mt-1 sm:mt-0">
                <div>CGPA: <strong className="text-[#10B981] print:text-black">{EDUCATION_DATA.cgpa}</strong></div>
                <div>{EDUCATION_DATA.period}</div>
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#6366F1] print:text-black font-bold mb-3">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-slate-200 print:text-black">Programming &amp; Frameworks:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700">Python, PySpark, SQL, FastAPI, Flask</span>
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">AI &amp; Generative AI:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700">
                  Machine Learning, Deep Learning, NLP, Transformers, Text Classification, Embeddings, Fine-tuning, LoRA/QLoRA, PyTorch, TensorFlow, LLMs/SLMs, RAG, Multi-Agent Systems, LangGraph, AWS Strands, A2A, MCP, Prompt Engineering, LLM Evaluation, Guardrails, Multimodal AI
                </span>
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">Search &amp; Retrieval:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700">Azure AI Search, Vector Search, Semantic Search, FAISS, Pinecone, Chroma, Embeddings, Knowledge Graphs</span>
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">ML Engineering &amp; Cloud:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700">Docker, Kubernetes, REST APIs, Microservices, CI/CD, Model Serving, AWS (Bedrock AgentCore, Secrets Manager, CloudWatch), Azure (ADF, Databricks, Kubernetes, Blob Storage, Functions, Container Apps, Key Vault), Jenkins, CloudBees</span>
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">Monitoring &amp; Observability:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700">Lumenova, SignalFx, Splunk, AWS CloudWatch, RAGAs, Grafana</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#10B981] print:text-black font-bold mb-4">
              Work Experience
            </h2>

            <div className="space-y-6">
              {/* EY GDS */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">EY GDS</h3>
                    <div className="text-slate-300 print:text-gray-800 font-medium">
                      Consultant | Senior Generative AI Engineer{" "}
                      <span className="text-slate-400 font-normal">(Oct 2025 – Present)</span>
                    </div>
                    <div className="text-slate-400 print:text-gray-600 text-xs">
                      Senior Analyst | Generative AI Engineer (Aug 2024 – Sep 2025)
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-400 print:text-gray-600 self-start sm:self-auto mt-1 sm:mt-0">
                    Aug 2024 – Present
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 print:text-gray-800">
                  <div className="font-semibold text-slate-200 print:text-black">
                    • Enterprise Architecture Governance Platform:
                  </div>
                  <p className="pl-4">
                    - Designed and developed a production-grade Enterprise Architecture Governance platform using AWS Strands in Python (1 supervisor + 6 specialized agents), deployed on Bedrock AgentCore using the A2A protocol for autonomous cross-agent coordination.
                  </p>
                  <p className="pl-4">
                    - Cut architecture review turnaround from 3–5 days to under 10 minutes (95%+ faster) while holding 85%+ precision on flagged compliance issues, validated against manual review.
                  </p>
                  <p className="pl-4">
                    - Built full-pipeline observability (Lumenova, SignalFx, Splunk, CloudWatch) and integrated AI Guardrails, reducing hallucinated/unsafe outputs and cutting agent-failure detection time.
                  </p>

                  <div className="font-semibold text-slate-200 print:text-black pt-1">
                    • Multi-Agent DataStage to PySpark Converter:
                  </div>
                  <p className="pl-4">
                    - Designed and developed a multi-agent AI system using LangGraph and Azure OpenAI LLM that autonomously analyzes and converts IBM DataStage (DSX) ETL pipelines into optimized PySpark code using Python FastAPI based orchestration.
                  </p>
                  <p className="pl-4">
                    - Engineered a redundancy-detection agent that scored and flagged duplicate pipelines, and a code-generation agent that generates optimized PySpark code and merges redundant jobs, reducing manual refactoring effort by 70% (deployed on Azure with Docker and Kubernetes).
                  </p>

                  <div className="font-semibold text-slate-200 print:text-black pt-1">
                    • Informatica to PySpark Converter:
                  </div>
                  <p className="pl-4">
                    - Designed a multi-agent AI system in LangGraph (Python) to convert Informatica ETL Workflows into optimized PySpark code with Streamlit visualization, reducing manual conversion effort from 5 days to 2 hours.
                  </p>
                </div>
              </div>

              {/* Unisys */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08] print:border-black/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">Unisys, India</h3>
                    <div className="text-slate-300 print:text-gray-800 font-medium">
                      Associate Software Engineer | Data Scientist
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-400 print:text-gray-600 self-start sm:self-auto mt-1 sm:mt-0">
                    Aug 2021 – Aug 2024
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800 pl-4">
                  <p>
                    • Fine-tuned Llama 2 using LoRA on enterprise underwriting datasets to generate domain-specific recommendations; deployed scalable FastAPI services on Azure Kubernetes Service (AKS).
                  </p>
                  <p>
                    • Fine-tuned Mistral using LoRA on enterprise application logs to build a contextual log-analysis assistant capable of interpreting previously unseen errors.
                  </p>
                  <p>
                    • Built a conversational assistant using Azure AI Search and RAG, implementing document retrieval and semantic search over university textbooks using Azure OpenAI (Flask on AKS).
                  </p>
                  <p>
                    • Built end-to-end ML pipeline generating automated ServiceNow incident resolutions with Random Forest and Azure Event Hubs.
                  </p>
                  <p>
                    • Implemented a time series ML solution using FBProphet to forecast VM utilization, enabling efficient resource scaling.
                  </p>
                  <p>
                    • Led migration from monolithic to microservices using FastAPI and Flask, containerizing with Docker and deploying on Azure Kubernetes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] print:text-black font-bold mb-2">
              Awards and Achievements
            </h2>
            <ul className="text-xs text-slate-300 print:text-gray-800 space-y-1.5 pl-4 list-disc">
              <li>
                Honoured with <strong className="text-white print:text-black">Achiever Extraordinaire Award</strong> consecutively for 2 years for contribution in Generative AI at EY GDS.
              </li>
              <li>
                Received <strong className="text-white print:text-black">GDS User Recognition Award</strong> for building an architecture assist application that reduced review time by 40%.
              </li>
              <li>
                Received commendations and recognition at Unisys for leading the successful migration from monolithic to microservices architecture.
              </li>
            </ul>
          </div>

          {/* Courses and Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#A78BFA] print:text-black font-bold mb-2">
              Courses and Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-800">
              <div>• AI-900: Microsoft Azure AI Fundamentals</div>
              <div>• GH-300: Github Copilot</div>
              <div>• Generative AI Fundamentals Badge by Databricks</div>
              <div>• Problem Solving by HackerRank</div>
              <div>• Generative AI with LLM, Applied ML using Python – Coursera</div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
