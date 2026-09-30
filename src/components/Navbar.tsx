import React, { useState } from "react";
import { 
  Sparkles, 
  PlusCircle, 
  Menu, 
  X, 
  Activity,
  Compass, 
  Trophy, 
  Cpu, 
  Users
} from "lucide-react";

interface NavbarProps {
  onOpenSubmitModal: () => void;
  selectedCampus: string;
  onSelectCampus: (campus: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenSubmitModal,
  selectedCampus,
  onSelectCampus
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const campuses = [
    "All Universities",
    "Georgia Tech",
    "Stanford BioLab",
    "MIT Media Lab",
    "UW Madison",
    "Purdue Eng",
    "UCLA"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-100 group-hover:border-sky-300 transition-all shadow-xs">
                <Activity className="w-4 h-4 text-sky-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg tracking-tight text-slate-900 flex items-center gap-1.5">
                  Kineti<span className="text-sky-600">X</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 tracking-wide">
                    Student Lab
                  </span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-wider -mt-0.5 hidden sm:block">
                  CAMPUS FITNESS INNOVATION
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="#showcase" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Showcase
            </a>
            <a 
              href="#innovations" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Innovations
            </a>
            <a 
              href="#generator" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              Idea Engine
            </a>
            <a 
              href="#challenges" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Challenges
            </a>
            <a 
              href="#campus" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Campus Pop-Ups
            </a>
            <a 
              href="#wall" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Wall
            </a>
            <a 
              href="#impact" 
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Impact
            </a>
          </div>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Campus Filter */}
            <div className="relative">
              <select
                aria-label="Filter by university campus"
                value={selectedCampus}
                onChange={(e) => onSelectCampus(e.target.value)}
                className="bg-white text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-1.5 pr-7 focus:outline-none focus:border-sky-500 appearance-none cursor-pointer transition-colors shadow-xs"
              >
                {campuses.map((c) => (
                  <option key={c} value={c} className="bg-white text-slate-900">
                    {c}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                <span className="text-[9px]">▼</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onOpenSubmitModal}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wide shadow-sm shadow-sky-600/20 transition-all active:scale-95"
            >
              <PlusCircle className="w-3.5 h-3.5 text-white" />
              <span>Submit Idea</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSubmitModal}
              className="px-3 py-1 rounded-lg bg-sky-600 text-white text-xs font-semibold shadow-xs"
            >
              Submit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a 
              href="#showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-2 hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-sky-600" /> Showcase
            </a>
            <a 
              href="#innovations" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-2 hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              <Cpu className="w-3.5 h-3.5 text-sky-600" /> Innovations
            </a>
            <a 
              href="#generator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-2 hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Idea Engine
            </a>
            <a 
              href="#challenges" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-2 hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              <Trophy className="w-3.5 h-3.5 text-sky-600" /> Challenges
            </a>
            <a 
              href="#campus" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-2 hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              <Users className="w-3.5 h-3.5 text-sky-600" /> Campus Pop-Ups
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-2 hover:bg-sky-50 hover:text-sky-700 transition-colors"
            >
              <Activity className="w-3.5 h-3.5 text-sky-600" /> Impact Data
            </a>
          </div>
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Switch Campus</label>
            <select
              value={selectedCampus}
              onChange={(e) => {
                onSelectCampus(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white text-xs text-slate-800 border border-slate-200 rounded-lg p-2.5 shadow-xs"
            >
              {campuses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};
