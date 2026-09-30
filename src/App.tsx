import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ResearchPillars } from "./components/ResearchPillars";
import { FullScreenShowcase } from "./components/FullScreenShowcase";
import { InnovationCatalog } from "./components/InnovationCatalog";
import { IdeaGenerator } from "./components/IdeaGenerator";
import { ChallengesSection } from "./components/ChallengesSection";
import { CampusActivity } from "./components/CampusActivity";
import { InnovationWall } from "./components/InnovationWall";
import { ImpactDashboard } from "./components/ImpactDashboard";
import { IdeaSubmissionModal } from "./components/IdeaSubmissionModal";
import { Footer } from "./components/Footer";

import { INITIAL_INNOVATIONS, FITNESS_CHALLENGES, CAMPUS_EVENTS } from "./data/mockData";
import { InnovationIdea } from "./types/fitness";

export default function App() {
  const [innovations, setInnovations] = useState<InnovationIdea[]>(() => {
    try {
      const saved = localStorage.getItem("kinetix_innovations");
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((item: InnovationIdea) => {
          if (item.id === "inno-1" && item.imageUrl.includes("1517838277536")) {
            return {
              ...item,
              imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
            };
          }
          if (item.imageUrl.includes("1551698618-1dfe5d97d256")) {
            return {
              ...item,
              imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop&q=80",
            };
          }
          return item;
        });
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_INNOVATIONS;
  });

  const [selectedCampus, setSelectedCampus] = useState("All Campuses");
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem("kinetix_innovations", JSON.stringify(innovations));
    } catch (e) {
      console.error(e);
    }
  }, [innovations]);

  const handleUpvote = (id: string) => {
    setInnovations((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const wasUpvoted = !!item.hasUpvoted;
          return {
            ...item,
            hasUpvoted: !wasUpvoted,
            upvotes: wasUpvoted ? item.upvotes - 1 : item.upvotes + 1,
          };
        }
        return item;
      })
    );
  };

  const handleNewIdea = (newIdea: InnovationIdea) => {
    setInnovations((prev) => [newIdea, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col selection:bg-sky-200 selection:text-sky-900">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        selectedCampus={selectedCampus}
        onSelectCampus={setSelectedCampus}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenSubmitModal={() => setIsSubmitModalOpen(true)} />

        {/* 2. Sleek 3-Step Research Logic Bridge */}
        <ResearchPillars />

        {/* 3. Responsive Horizontal Pillar Showcase (Active Breakthroughs) */}
        <FullScreenShowcase />

        {/* 3. Student Fitness Innovation Ideas (Catalog) */}
        <InnovationCatalog
          innovations={innovations}
          onUpvote={handleUpvote}
          selectedCampus={selectedCampus}
        />

        {/* 4. Interactive Fitness Idea Generator */}
        <IdeaGenerator />

        {/* 5. Fitness Challenges */}
        <ChallengesSection challenges={FITNESS_CHALLENGES} />

        {/* 6. Campus Activity Section */}
        <CampusActivity events={CAMPUS_EVENTS} />

        {/* 7. Student Innovation Wall */}
        <InnovationWall />

        {/* 8. Collective Impact Dashboard */}
        <ImpactDashboard />
      </main>

      {/* Idea Submission Modal */}
      <IdeaSubmissionModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitSuccess={handleNewIdea}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
