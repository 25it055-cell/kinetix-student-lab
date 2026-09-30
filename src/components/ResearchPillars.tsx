import React from "react";
import { 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export const ResearchPillars: React.FC = () => {
  const steps = [
    {
      step: "01",
      tag: "Academic Problem",
      title: "Sedentary Study Strain",
      subtitle: "8+ Hours Contiguous Sitting",
      icon: AlertCircle,
      description:
        "Rigid lecture schedules, library marathons, and cramped dorm desks lead to postural strain, lower-back compression, and cognitive fatigue during peak exam periods.",
      statValue: "74%",
      statLabel: "Undergrads reporting daily study fatigue & sluggish focus",
      colorBadge: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      step: "02",
      tag: "Student Prototype",
      title: "Low-Friction Habit Tech",
      subtitle: "4-Min Peer Micro-Protocols",
      icon: Cpu,
      description:
        "Student teams engineer zero-cost micro-movement protocols, dorm IoT door reminders, textbook harness weights, and QR-gamified stairways that fit between classes.",
      statValue: "48+",
      statLabel: "Campus-tested prototypes actively deployed across labs",
      colorBadge: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      step: "03",
      tag: "Measured Outcome",
      title: "Quantified Campus Vitality",
      subtitle: "Verified Behavioral Adherence",
      icon: CheckCircle2,
      description:
        "Measured 41% reduction in midterms fatigue, 342,000+ elevator flights bypassed for stairs, and recurring inter-dorm active leagues that build campus culture.",
      statValue: "41% Less",
      statLabel: "Midterms exhaustion & sustained daily energy improvement",
      colorBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-b border-slate-200 relative overflow-hidden">
      {/* Subtle ambient light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-sky-400/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold text-slate-800">THE RESEARCH METHODOLOGY</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            The 3-Step Innovation Logic Bridge
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            How collegiate problem-solving transforms isolated campus fatigue into sustained, peer-validated fitness habits.
          </p>
        </div>

        {/* 3 Steps Logic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="silver-card rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Arrow Connector on Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 items-center justify-center text-sky-600 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                        {item.step}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${item.colorBadge}`}>
                        {item.tag}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-sky-600 group-hover:border-sky-200 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-black text-xl text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono font-medium text-sky-600 mt-0.5">
                    {item.subtitle}
                  </div>

                  {/* Body description */}
                  <p className="text-xs text-slate-600 mt-3.5 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Measurable Impact Metric Callout */}
                <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/80 -mx-7 -mb-7 p-5 rounded-b-3xl">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-heading font-black text-slate-900">
                      {item.statValue}
                    </span>
                    <span className="text-[11px] font-mono text-sky-600 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Campus Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {item.statLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
