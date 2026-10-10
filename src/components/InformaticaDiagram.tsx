import {
  Activity,
  ArrowDown,
  ArrowRight,
  Code2,
  FileCode2,
  GitMerge,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Fragment } from "react";

const stages = [
  { title: "Informatica XML", icon: FileCode2, color: "text-[#F472B6]" },
  { title: "Python Parser", icon: Workflow, color: "text-[#38BDF8]" },
  { title: "Code Generation", icon: Sparkles, color: "text-[#A78BFA]" },
  { title: "Code Review", icon: ShieldCheck, color: "text-[#10B981]" },
  { title: "Transformation Merger", icon: GitMerge, color: "text-[#F59E0B]" },
  { title: "Consolidated PySpark", icon: Code2, color: "text-[#38BDF8]" },
];

export function InformaticaDiagram() {
  return (
    <div className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#0F172A]/90 p-4 sm:p-6">
      <div
        className="flex flex-col gap-2 lg:flex-row lg:items-stretch"
        aria-label="Informatica to PySpark workflow"
      >
        {stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <Fragment key={stage.title}>
              <div className="flex min-h-20 flex-1 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                <Icon className={`h-4 w-4 shrink-0 ${stage.color}`} />
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-[#F472B6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs font-semibold leading-snug text-white">
                    {stage.title}
                  </p>
                </div>
              </div>

              {index < stages.length - 1 && (
                <div className="flex shrink-0 items-center justify-center text-[#38BDF8]">
                  <ArrowRight className="flow-arrow-right hidden h-4 w-4 lg:block" aria-hidden="true" />
                  <ArrowDown className="flow-arrow-down h-4 w-4 lg:hidden" aria-hidden="true" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      <div className="flex items-center gap-2 border-t border-white/[0.06] pt-3 text-xs text-[#94A3B8]">
        <Activity className="h-4 w-4 text-[#10B981]" />
        <span>Streamlit displays the active workflow step in real time</span>
      </div>
    </div>
  );
}