import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  CheckCircle2 
} from "lucide-react";

interface HeroProps {
  onOpenSubmitModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubmitModal }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#F8FAFC]">
      {/* Light Sky & Soft Silver Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-sky-400/[0.06] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-300/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Dot Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Innovation Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-600 text-xs font-mono tracking-wide mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-sans font-medium text-slate-700">2026 Student Fitness Tech Initiative</span>
            <span className="text-slate-300">|</span>
            <span className="font-semibold text-sky-700 font-sans">48 Campus Prototypes Live</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-slate-900">
            Student Innovation To{" "}
            <span className="bg-gradient-to-r from-slate-950 via-sky-800 to-sky-600 bg-clip-text text-transparent">
              Boost Campus Activity
            </span>{" "}
            & Stay Fit, By Design.
          </h1>

          {/* Subtitle with high contrast and generous breathing room */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Engineered by university students for real campus life. Discover peer-built micro-workout routines, dorm room hacks, gamified stairways, and open-source fitness tech that keep you active between classes.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#innovations"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-sky-600/20 hover:shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Innovations</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="#generator"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs tracking-wider uppercase border border-slate-200 hover:border-slate-300 shadow-xs transition-all transform hover:-translate-y-0.5"
            >
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>Spin Idea Generator</span>
            </a>

            <button
              onClick={onOpenSubmitModal}
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 font-semibold text-xs tracking-wider uppercase border border-slate-200/80 transition-all transform hover:-translate-y-0.5"
            >
              <span>Submit Your Idea</span>
            </button>
          </div>

          {/* Evidence-backed & Responsible Disclaimer Badge */}
          <div className="mt-6 inline-flex items-center space-x-2 text-[11px] text-slate-500 bg-white border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
            <span>Peer-tested behavioral habit designs. Non-clinical fitness promotion.</span>
          </div>

          {/* Hero Live Stats Card Strip */}
          <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-left">
            <div className="silver-card p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-slate-500">ACTIVE STUDENTS</span>
                <div className="p-1 rounded-md bg-sky-50 text-sky-600">
                  <Activity className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
                14,820+
              </div>
              <div className="text-[11px] text-sky-700 font-medium flex items-center gap-1 mt-1 font-sans">
                <TrendingUp className="w-3 h-3 text-sky-600" /> +24% this exam week
              </div>
            </div>

            <div className="silver-card p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-slate-500">STUDENT IDEAS</span>
                <div className="p-1 rounded-md bg-sky-50 text-sky-600">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
                128
              </div>
              <div className="text-[11px] text-slate-600 font-medium flex items-center gap-1 mt-1 font-sans">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 48 campus pilots
              </div>
            </div>

            <div className="silver-card p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-slate-500">STAIRWAYS CLIMBED</span>
                <div className="p-1 rounded-md bg-sky-50 text-sky-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
                342K+
              </div>
              <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-1 font-sans">
                Elevator skips logged
              </div>
            </div>

            <div className="silver-card p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-slate-500">UNIVERSITIES</span>
                <div className="p-1 rounded-md bg-sky-50 text-sky-600">
                  <Zap className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
                38 Labs
              </div>
              <div className="text-[11px] text-sky-700 font-medium flex items-center gap-1 mt-1 font-sans">
                Cross-campus network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
