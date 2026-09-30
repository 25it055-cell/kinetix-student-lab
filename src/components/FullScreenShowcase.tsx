import React, { useState } from "react";
import { 
  Sparkles, 
  Layers, 
  ChevronRight, 
  ArrowRight
} from "lucide-react";

export const FullScreenShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "dorm-sync",
      index: "01",
      pillarTag: "Dorm Sync",
      title: "Micro Bursts",
      subtitle: "4-Minute Study Intervals",
      description:
        "High-frequency, short-duration movement intervals designed for tiny dorm rooms. Timed right after 50-minute study blocks to decompress hip flexors and clear mental fatigue.",
      metrics: [
        { label: "Interval Time", val: "4 Minutes" },
        { label: "Required Gear", val: "None (Floor & Chair)" },
        { label: "Daily Energy Gain", val: "+38% Focus" }
      ],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      badge: "Dorm Life"
    },
    {
      id: "campus-commute",
      index: "02",
      pillarTag: "Campus Commute",
      title: "Active Routes",
      subtitle: "Step Rewards & Walking Hubs",
      description:
        "Converting everyday 15-minute campus walks into structured cardio sessions. Dynamic GPS routes guide students along scenic shaded quads, stair towers, and campus bike routes.",
      metrics: [
        { label: "Average Route", val: "1.4 Miles" },
        { label: "Elevator Bypass", val: "100% Stairs" },
        { label: "CO2 Offset", val: "18.4 Tons" }
      ],
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop",
      badge: "Campus Transit"
    },
    {
      id: "posture-lab",
      index: "03",
      pillarTag: "Ergonomics Lab",
      title: "Thoracic AI",
      subtitle: "Edge-Vision Posture Coach",
      description:
        "Privacy-first browser utility using computer vision to gently monitor text-neck and hunching during late-night coding and studying, triggering 60-second spinal resets.",
      metrics: [
        { label: "Processing", val: "100% Client-Side" },
        { label: "Posture Drift Alert", val: "< 15 Mins" },
        { label: "Spine Relief", val: "High Impact" }
      ],
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
      badge: "Tech & AI"
    },
    {
      id: "social-fitness",
      index: "04",
      pillarTag: "Social Fitness",
      title: "Squad League",
      subtitle: "Inter-Dorm Clash",
      description:
        "Gamified friendly rivalries between dorm floors and residence halls. Scan QR checkpoints on stair landings to earn points, ascend hall leaderboards, and win dining hall perks.",
      metrics: [
        { label: "Active Dorms", val: "38 Quad Halls" },
        { label: "Weekly Steps", val: "89K / Student" },
        { label: "Social Adherence", val: "4.8 / 5.0" }
      ],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
      badge: "Community"
    },
  ];

  const current = pillars[activeTab];

  return (
    <section id="showcase" className="py-20 relative w-full bg-[#F8FAFC] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold text-slate-800">ACTIVE BREAKTHROUGHS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            The 4 Student Fitness Pillars
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Peer-engineered habit architectures proven to keep students physically energized without interfering with demanding academic schedules.
          </p>
        </div>

        {/* Responsive Horizontal Navigation Pills */}
        <div className="flex items-center justify-start md:justify-center space-x-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {pillars.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shadow-xs ${
                activeTab === index
                  ? "bg-sky-600 text-white font-bold shadow-md shadow-sky-600/25 scale-[1.02]"
                  : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded-md ${
                activeTab === index ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {item.index}
              </span>
              <span>{item.pillarTag}</span>
              <span className={`text-[11px] ${activeTab === index ? "text-sky-200" : "text-slate-400"}`}>
                • {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Card Stage - Responsive with ZERO absolute overlapping text */}
        <div className="silver-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md mb-8 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                  Pillar {current.index} • {current.pillarTag}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
                  {current.badge}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-sky-700 mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-3.5">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold block uppercase">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 block truncate">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href="#innovations"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm shadow-sky-600/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Innovations In {current.pillarTag}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Right Visual Image Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-72 sm:h-96 w-full border border-slate-200 shadow-sm bg-slate-100 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-semibold tracking-wide">
                      {current.pillarTag} Pilot
                    </span>
                  </div>
                  <span className="text-[11px] font-mono bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30 font-medium">
                    Verified Campus Routine
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Horizontal Pill/Cards Grid with Clear Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center space-x-3.5 ${
                activeTab === idx
                  ? "bg-white border-sky-400 shadow-md ring-2 ring-sky-500/20"
                  : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300 shadow-xs"
              }`}
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/15" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-mono font-bold text-sky-600">
                    {item.index}
                  </span>
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {item.pillarTag}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">
                  {item.title} • {item.subtitle}
                </div>
              </div>

              <ChevronRight className={`w-4 h-4 flex-shrink-0 ${
                activeTab === idx ? "text-sky-600" : "text-slate-300"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
