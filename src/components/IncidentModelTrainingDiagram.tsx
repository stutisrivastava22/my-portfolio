import { ArrowDown, ArrowRight, BadgeCheck, Database, Filter, GitBranch } from "lucide-react";

const trainingStages = [
  {
    title: "Historical ServiceNow Incidents",
    subtitle: "Past incident records",
    icon: Database,
    color: "text-[#38BDF8]",
    border: "border-[#38BDF8]/40",
    surface: "bg-[#38BDF8]/10"
  },
  {
    title: "Feature Selection + PII Removal",
    subtitle: "Preprocessed training data",
    icon: Filter,
    color: "text-[#A78BFA]",
    border: "border-[#A78BFA]/40",
    surface: "bg-[#A78BFA]/10"
  },
  {
    title: "Random Forest Training",
    subtitle: "Incident category classifier",
    icon: GitBranch,
    color: "text-[#F59E0B]",
    border: "border-[#F59E0B]/40",
    surface: "bg-[#F59E0B]/10"
  },
  {
    title: "Model Validation",
    subtitle: "91% accuracy",
    icon: BadgeCheck,
    color: "text-[#10B981]",
    border: "border-[#10B981]/40",
    surface: "bg-[#10B981]/10"
  }
];

export function IncidentModelTrainingDiagram() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0F172A]/90 p-5 sm:p-7">
      <div className="mb-5 flex items-center gap-2.5 border-b border-white/[0.08] pb-4">
        <div className="rounded-lg bg-[#6366F1]/20 p-2 text-[#A78BFA]">
          <GitBranch className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white">Random Forest Model Training</h4>
          <p className="text-xs text-[#94A3B8]">Historical incidents to validated classifier</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 xl:flex-row xl:items-stretch xl:gap-2">
        {trainingStages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <div key={stage.title} className="contents">
              <div className={`flex min-h-20 min-w-0 flex-1 items-center gap-3 rounded-xl border ${stage.border} ${stage.surface} p-3.5`}>
                <Icon className={`h-5 w-5 shrink-0 ${stage.color}`} />
                <div className="min-w-0">
                  <h5 className="text-xs font-semibold leading-snug text-white">{stage.title}</h5>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">{stage.subtitle}</p>
                </div>
              </div>
              {index < trainingStages.length - 1 && (
                <div className="flex shrink-0 items-center justify-center text-[#A78BFA]">
                  <ArrowRight className="flow-arrow-right hidden h-4 w-4 xl:block" aria-hidden="true" />
                  <ArrowDown className="flow-arrow-down h-4 w-4 xl:hidden" aria-hidden="true" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}