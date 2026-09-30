import React, { useState, useMemo } from "react";
import { InnovationIdea, CategoryType } from "../types/fitness";
import { 
  Search, 
  ExternalLink, 
  Clock, 
  DollarSign, 
  Dumbbell, 
  Sparkles, 
  X, 
  SlidersHorizontal,
  GraduationCap
} from "lucide-react";

interface InnovationCatalogProps {
  innovations: InnovationIdea[];
  onUpvote: (id: string) => void;
  selectedCampus: string;
}

export const InnovationCatalog: React.FC<InnovationCatalogProps> = ({
  innovations,
  onUpvote,
  selectedCampus,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"upvotes" | "feasibility" | "tested">("upvotes");
  const [selectedIdea, setSelectedIdea] = useState<InnovationIdea | null>(null);

  const categories: CategoryType[] = [
    "All",
    "Tech & AI",
    "Dorm Room",
    "Gamification",
    "Campus Commute",
    "Low-Cost Hacks",
  ];

  // Filtering & Sorting
  const filteredInnovations = useMemo(() => {
    return innovations
      .filter((item) => {
        const matchesCategory =
          activeCategory === "All" || item.category === activeCategory;
        const matchesCampus =
          selectedCampus === "All Campuses" ||
          selectedCampus === "All Universities" ||
          item.creator.university.toLowerCase().includes(selectedCampus.toLowerCase());
        const matchesSearch =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          item.creator.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesCampus && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "upvotes") return b.upvotes - a.upvotes;
        if (sortBy === "feasibility") return b.feasibilityScore - a.feasibilityScore;
        if (sortBy === "tested") return b.studentTestedCount - a.studentTestedCount;
        return 0;
      });
  }, [innovations, activeCategory, selectedCampus, searchQuery, sortBy]);

  return (
    <section id="innovations" className="py-20 relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span className="font-semibold">PEER-ENGINEERED FITNESS REPOSITORY</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Student Fitness Innovations
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mt-2 font-normal leading-relaxed">
              Browse prototypes, hardware hacks, and behavioral systems created by university students to make staying fit second nature.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
              Showing <strong className="text-slate-900">{filteredInnovations.length}</strong> verified innovations
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/90 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ideas, dorm hacks, AI vision, stairways, creators..."
                className="w-full bg-slate-50 text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 self-end md:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-medium text-slate-500">Sort:</span>
              <select
                aria-label="Sort innovations"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white text-xs font-medium text-slate-700 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500 cursor-pointer shadow-xs"
              >
                <option value="upvotes">Most Upvoted</option>
                <option value="feasibility">Feasibility Score</option>
                <option value="tested">Most Students Tested</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white font-bold shadow-sm shadow-sky-600/25"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Innovations Grid */}
        {filteredInnovations.length === 0 ? (
          <div className="silver-card p-12 text-center rounded-2xl border border-slate-200 my-8 shadow-sm">
            <p className="text-slate-500 text-sm">
              No student innovations match your current filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl uppercase tracking-wider shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInnovations.map((idea) => (
              <div
                key={idea.id}
                className="silver-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300"
              >
                <div>
                  {/* Image with stage badge */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={idea.imageUrl.includes("1551698618-1dfe5d97d256") ? "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop&q=80" : idea.imageUrl}
                      alt={idea.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Stage Pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/95 backdrop-blur-md text-sky-800 border border-sky-200/80 shadow-xs">
                        {idea.stage}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/95 backdrop-blur-md text-slate-700 border border-slate-200 shadow-xs">
                        {idea.category}
                      </span>
                    </div>

                    {/* Feasibility score indicator */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 drop-shadow-sm">
                      <span>Feasibility: <strong className="text-white font-semibold">{idea.feasibilityScore}%</strong></span>
                      <span>Tested: <strong className="text-white font-semibold">{idea.studentTestedCount}+</strong></span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                      {idea.title}
                    </h3>
                    <p className="text-xs text-sky-700 font-medium mt-1 line-clamp-1">
                      {idea.tagline}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {idea.description}
                    </p>

                    {/* Specs Checklist */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Dumbbell className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                        <span className="truncate">Equip: {idea.specs.equipmentNeeded}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                        <span className="truncate">Time: {idea.specs.timeRequired}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                        <span className="truncate">Cost: {idea.specs.costToImplement}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {idea.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-sky-50 text-[10px] text-sky-700 font-mono border border-sky-100"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Creator & Actions */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    {/* Creator Info */}
                    <div className="flex items-center space-x-2">
                      <img
                        src={idea.creator.avatar}
                        alt={idea.creator.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-900 truncate max-w-[110px]">
                          {idea.creator.name}
                        </span>
                        <span className="text-[9px] text-slate-400 truncate max-w-[110px]">
                          {idea.creator.university}
                        </span>
                      </div>
                    </div>

                    {/* Upvote & View Buttons */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpvote(idea.id)}
                        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                          idea.hasUpvoted
                            ? "bg-sky-600 text-white shadow-xs shadow-sky-600/20"
                            : "bg-white text-slate-700 hover:text-sky-700 hover:bg-sky-50 hover:border-sky-300 border border-slate-200 shadow-xs"
                        }`}
                        title="Upvote this student innovation"
                      >
                        <span className={`text-xs ${idea.hasUpvoted ? "text-white" : "text-sky-600"}`}>▲</span>
                        <span>{idea.hasUpvoted ? "Upvoted" : "Upvote"}</span>
                        <span className="opacity-50 font-normal">•</span>
                        <span>{idea.upvotes}</span>
                      </button>

                      <button
                        onClick={() => setSelectedIdea(idea)}
                        className="p-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
                        title="View Full Prototype Blueprint"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blueprint Details Modal */}
        {selectedIdea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-slate-200 relative shadow-2xl">
              <button
                onClick={() => setSelectedIdea(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 uppercase text-[10px] font-semibold text-sky-700">
                  {selectedIdea.stage}
                </span>
                <span className="text-slate-300">•</span>
                <span className="font-sans font-medium text-slate-600">{selectedIdea.category}</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                {selectedIdea.title}
              </h3>
              <p className="text-sky-700 font-semibold text-xs sm:text-sm mt-1">
                {selectedIdea.tagline}
              </p>

              <div className="mt-4 rounded-2xl overflow-hidden h-56 bg-slate-100 border border-slate-200">
                <img
                  src={selectedIdea.imageUrl}
                  alt={selectedIdea.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator details bar */}
              <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
                <img
                  src={selectedIdea.creator.avatar}
                  alt={selectedIdea.creator.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {selectedIdea.creator.name}
                    <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {selectedIdea.creator.major} • <span className="text-slate-700 font-medium">{selectedIdea.creator.university}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    The Problem & Campus Context
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Sedentary study habits, long library blocks, and lack of affordable fitness gear create health fatigue during midterms and finals.
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Student-Engineered Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed font-normal">
                    {selectedIdea.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Core Benefit & Behavioral Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-900 mt-1 leading-relaxed font-semibold">
                    ✓ {selectedIdea.keyBenefit}
                  </p>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono text-[10px] block font-semibold">EQUIPMENT</span>
                    <span className="font-bold text-slate-800 text-xs">{selectedIdea.specs.equipmentNeeded}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-[10px] block font-semibold">TIME COMMITMENT</span>
                    <span className="font-bold text-slate-800 text-xs">{selectedIdea.specs.timeRequired}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-[10px] block font-semibold">DEPLOYMENT COST</span>
                    <span className="font-bold text-slate-800 text-xs">{selectedIdea.specs.costToImplement}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => onUpvote(selectedIdea.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                    selectedIdea.hasUpvoted
                      ? "bg-sky-600 text-white shadow-xs shadow-sky-600/20"
                      : "bg-white text-slate-700 hover:text-sky-700 hover:bg-sky-50 hover:border-sky-300 border border-slate-200 shadow-xs"
                  }`}
                >
                  <span className={`text-xs ${selectedIdea.hasUpvoted ? "text-white" : "text-sky-600"}`}>▲</span>
                  <span>{selectedIdea.hasUpvoted ? "Upvoted" : "Upvote"}</span>
                  <span className="opacity-50 font-normal">•</span>
                  <span>{selectedIdea.upvotes}</span>
                </button>

                <button
                  onClick={() => setSelectedIdea(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
