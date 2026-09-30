import React from "react";
import { Activity, ShieldCheck, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-xs">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-heading font-black text-lg text-slate-900 tracking-tight">
                Kineti<span className="text-sky-600">X</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-200">
                STUDENT LAB
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-xs max-w-sm font-normal">
              An open, peer-driven innovation network empowering university students to build, test, and share inventive fitness routines, dorm equipment hacks, and habit systems.
            </p>

            <div className="flex items-center space-x-3 text-slate-700 pt-1">
              <span className="text-[11px] font-sans font-medium text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" /> 38 Participating Campus Labs
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider mb-3">
              Platform Features
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#showcase" className="text-slate-600 hover:text-sky-600 transition-colors">
                  4 Innovation Pillars (Showcase)
                </a>
              </li>
              <li>
                <a href="#innovations" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Student Prototype Catalog
                </a>
              </li>
              <li>
                <a href="#generator" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Interactive Idea Engine
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Campus Fitness Quests
                </a>
              </li>
              <li>
                <a href="#campus" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Pop-Up Meetup Schedule
                </a>
              </li>
              <li>
                <a href="#wall" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Student Innovation Wall
                </a>
              </li>
              <li>
                <a href="#impact" className="text-slate-600 hover:text-sky-600 transition-colors">
                  Collective Impact Data
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Responsible Health Policy */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Evidence & Health Notice</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] leading-relaxed text-slate-600 font-normal">
              <strong className="text-slate-900 block mb-1 font-semibold">Non-Clinical Student Initiative:</strong>
              Innovations hosted on KinetiX represent peer-designed habit formation tools, ergonomics hacks, and motivational projects. They do not constitute medical diagnosis, treatment, or clinical health advice. Consult university health services for personalized fitness advice.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 KinetiX Student Fitness Innovation Network. Built for collegiate vitality.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-700 font-medium">Open Campus Initiative</span>
            <span>•</span>
            <span className="text-slate-400">Privacy First & Edge-Local</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
