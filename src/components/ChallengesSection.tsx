import React, { useState } from "react";
import { FitnessChallenge } from "../types/fitness";
import { 
  Trophy, 
  Users, 
  Flame, 
  Footprints, 
  TrendingUp, 
  Moon, 
  Backpack, 
  CheckCircle2, 
  Clock, 
  Award,
  Plus
} from "lucide-react";

interface ChallengesSectionProps {
  challenges: FitnessChallenge[];
}

export const ChallengesSection: React.FC<ChallengesSectionProps> = ({ 
  challenges: initialChallenges 
}) => {
  const [challenges, setChallenges] = useState<FitnessChallenge[]>(initialChallenges);
  const [activeTab, setActiveTab] = useState<"active" | "leaderboard">("active");

  const toggleJoin = (id: string) => {
    setChallenges((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const isJoining = !c.isJoined;
          return {
            ...c,
            isJoined: isJoining,
            participants: isJoining ? c.participants + 1 : c.participants - 1,
            currentProgress: isJoining ? Math.min(100, c.currentProgress + 5) : c.currentProgress,
          };
        }
        return c;
      })
    );
  };

  const logDailyProgress = (id: string) => {
    setChallenges((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            currentProgress: Math.min(100, c.currentProgress + 8),
          };
        }
        return c;
      })
    );
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Footprints":
        return <Footprints className="w-5 h-5 text-sky-600" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-sky-600" />;
      case "Moon":
        return <Moon className="w-5 h-5 text-sky-600" />;
      case "Backpack":
        return <Backpack className="w-5 h-5 text-sky-600" />;
      default:
        return <Trophy className="w-5 h-5 text-sky-600" />;
    }
  };

  const dormLeaderboard = [
    { rank: 1, name: "North Quad Hall 4", score: "89,400 steps/student", badge: "Gold Stride" },
    { rank: 2, name: "Maple Residence Hall", score: "82,100 steps/student", badge: "Silver Stride" },
    { rank: 3, name: "Engineering Village B", score: "78,650 steps/student", badge: "Bronze Stride" },
    { rank: 4, name: "West Towers Wing C", score: "71,200 steps/student", badge: "Top Climber" },
  ];

  return (
    <section id="challenges" className="py-20 relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
              <Trophy className="w-3.5 h-3.5 text-sky-600" />
              <span className="font-semibold text-slate-800">COLLECTIVE CAMPUS QUESTS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Campus Fitness Challenges
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mt-2 font-normal leading-relaxed">
              Gamify your daily movement. Join peer-created fitness quests, log stair flights, compete inter-dorm, and unlock digital badge rewards.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="mt-4 md:mt-0 flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "active"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Active Challenges
            </button>
            <button
              onClick={() => setActiveTab("leaderboard")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "leaderboard"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dorm Leaderboard
            </button>
          </div>
        </div>

        {activeTab === "active" ? (
          /* Active Challenges Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((ch) => (
              <div
                key={ch.id}
                className="silver-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shadow-xs">
                        {getIcon(ch.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                          {ch.category} • {ch.duration}
                        </span>
                        <h3 className="font-heading font-bold text-base text-slate-900">
                          {ch.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200">
                        +{ch.points} PTS
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 font-normal leading-relaxed">
                    {ch.subtitle}
                  </p>

                  {/* Progress Indicator */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                      <span>Goal: {ch.targetGoal}</span>
                      <span className="text-slate-900 font-bold">{ch.currentProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all duration-500"
                        style={{ width: `${ch.currentProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Badges and metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <div className="flex items-center space-x-1.5 font-mono text-[11px] text-slate-600">
                      <Users className="w-3.5 h-3.5 text-sky-600" />
                      <span>{ch.participants.toLocaleString()} active students</span>
                    </div>

                    <div className="flex items-center space-x-1 font-mono text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{ch.daysLeft} days remaining</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-mono text-slate-600">
                      Reward: <strong className="text-slate-900">{ch.rewardBadge}</strong>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {ch.isJoined ? (
                      <>
                        <button
                          onClick={() => logDailyProgress(ch.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold flex items-center space-x-1 shadow-xs transition-all"
                        >
                          <Plus className="w-3.5 h-3.5 text-sky-600" />
                          <span>Log Flight</span>
                        </button>
                        <button
                          onClick={() => toggleJoin(ch.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Joined</span>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => toggleJoin(ch.id)}
                        className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs shadow-sky-600/20"
                      >
                        Join Quest
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Dorm Leaderboard View */
          <div className="silver-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 max-w-4xl mx-auto shadow-sm">
            <h3 className="font-heading font-black text-lg text-slate-900 mb-6 flex items-center gap-2">
              <Flame className="w-4 h-4 text-sky-600" />
              <span>Inter-Residence Hall Movement Standings</span>
            </h3>

            <div className="space-y-3">
              {dormLeaderboard.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 transition-all shadow-xs"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center font-mono font-bold text-xs text-sky-700">
                      #{item.rank}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-sky-50 text-[11px] font-mono font-semibold text-sky-700 border border-sky-200">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-xs text-slate-400 font-mono">
              Rankings refresh every midnight based on validated QR checkpoints and synced pedometer data.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
