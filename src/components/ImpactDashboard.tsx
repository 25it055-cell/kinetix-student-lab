import React from "react";
import { 
  Activity, 
  Leaf, 
  TrendingUp, 
  BarChart3, 
  HeartPulse, 
  Users 
} from "lucide-react";

export const ImpactDashboard: React.FC = () => {
  const hourlyRhythm = [
    { hour: "8 AM", val: 65, label: "Morning Commute Walk" },
    { hour: "10 AM", val: 35, label: "Lecture Break Stretch" },
    { hour: "12 PM", val: 78, label: "Dining Hall Walk & Stairs" },
    { hour: "2 PM", val: 50, label: "Post-Lunch Micro Burst" },
    { hour: "4 PM", val: 88, label: "Library Study Reset" },
    { hour: "6 PM", val: 95, label: "Sunset Pop-Up & Run Clubs" },
    { hour: "9 PM", val: 40, label: "Late Night Mobility" },
  ];

  return (
    <section id="impact" className="py-20 relative bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Activity className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold text-slate-800">CAMPUS IMPACT METRICS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Collective Student Impact Dashboard
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Aggregated data from student habit tracking across 38 participating university labs and campus residence networks.
          </p>
        </div>

        {/* 4 Primary Big Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="silver-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 shadow-xs">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">
              14,820
            </div>
            <div className="text-xs font-mono font-semibold text-sky-700 mt-1">
              Active Student Innovators
            </div>
            <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
              Logging daily habit movements across residence halls and libraries.
            </p>
          </div>

          {/* Card 2 */}
          <div className="silver-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 shadow-xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">
              342,000+
            </div>
            <div className="text-xs font-mono font-semibold text-sky-700 mt-1">
              Elevator Flights Skipped
            </div>
            <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
              Diverted into heart-healthy stair ascents verified via QR beacons.
            </p>
          </div>

          {/* Card 3 */}
          <div className="silver-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 shadow-xs">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">
              18.4 Tons
            </div>
            <div className="text-xs font-mono font-semibold text-sky-700 mt-1">
              Carbon Emissions Saved
            </div>
            <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
              Through student active walking and pedal commute initiatives.
            </p>
          </div>

          {/* Card 4 */}
          <div className="silver-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 shadow-xs">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">
              41% Less
            </div>
            <div className="text-xs font-mono font-semibold text-sky-700 mt-1">
              Exam Week Study Fatigue
            </div>
            <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
              Self-reported survey scores among regular 4-min micro-interval users.
            </p>
          </div>
        </div>

        {/* Dynamic Activity Rhythm Graphic */}
        <div className="silver-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-sky-600" />
                <span>Campus Daily Movement Rhythm</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time active student distribution throughout a typical university day.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block shadow-xs" />
                Active Peaks
              </span>
            </div>
          </div>

          {/* Visual SVG / CSS Bar Chart */}
          <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-52 pt-8 pb-2 border-b border-slate-200">
            {hourlyRhythm.map((item, i) => (
              <div key={i} className="flex flex-col items-center h-full justify-end group">
                <span className="text-[10px] font-mono text-sky-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                  {item.val}%
                </span>
                <div
                  className="w-full max-w-[42px] rounded-t-xl bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 group-hover:brightness-110 shadow-xs transition-all duration-300"
                  style={{ height: `${item.val}%` }}
                />
                <span className="text-[11px] font-mono text-slate-500 mt-2 font-medium">
                  {item.hour}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>Primary campus hotspots: Main Quad, Library Level 2, Dorm Quad Staircases</span>
            <span className="font-mono text-[11px] text-sky-700 font-medium">Data updated hourly</span>
          </div>
        </div>
      </div>
    </section>
  );
};
