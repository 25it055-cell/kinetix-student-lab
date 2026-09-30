import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, Sparkles, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { InnovationIdea } from "../types/fitness";

interface IdeaSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (newIdea: InnovationIdea) => void;
}

export const IdeaSubmissionModal: React.FC<IdeaSubmissionModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [category, setCategory] = useState<"Tech & AI" | "Dorm Room" | "Gamification" | "Campus Commute" | "Low-Cost Hacks">("Dorm Room");
  const [creatorName, setCreatorName] = useState("");
  const [creatorMajor, setCreatorMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("Zero equipment");
  const [timeReq, setTimeReq] = useState("5 minutes");
  const [cost, setCost] = useState("$0");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !tagline.trim() || !creatorName.trim() || !description.trim()) {
      setError("Please fill out all required fields marked with *");
      return;
    }

    const newIdea: InnovationIdea = {
      id: `custom-inno-${Date.now()}`,
      title: title.trim(),
      tagline: tagline.trim(),
      description: description.trim(),
      category: category,
      stage: "Prototype",
      creator: {
        name: creatorName.trim(),
        major: creatorMajor.trim() || "Undergraduate Studies",
        university: university.trim() || "Independent Student Lab",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      },
      upvotes: 1,
      hasUpvoted: true,
      feasibilityScore: 90,
      studentTestedCount: 1,
      tags: ["StudentSubmission", category.replace(/\s+/g, ""), "CampusInnovation"],
      specs: {
        equipmentNeeded: equipment.trim() || "Zero equipment",
        timeRequired: timeReq.trim() || "5 minutes",
        costToImplement: cost.trim() || "$0",
      },
      keyBenefit: "Peer-submitted prototype to encourage regular campus movement.",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      createdAt: new Date().toISOString().split("T")[0],
    };

    // Trigger celebratory sky blue, silver & white confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0284C7", "#38BDF8", "#BAE6FD", "#FFFFFF", "#E2E8F0"],
      });
    } catch (e) {
      // fallback if confetti fails
    }

    setIsSuccess(true);
    setTimeout(() => {
      onSubmitSuccess(newIdea);
      setIsSuccess(false);
      onClose();
      // Reset form
      setTitle("");
      setTagline("");
      setCreatorName("");
      setCreatorMajor("");
      setUniversity("");
      setDescription("");
      setError("");
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-slate-200 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-16 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              Idea Successfully Submitted!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-normal">
              Your student fitness innovation has been added to the live repository and the community wall.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span className="font-semibold font-sans">SUBMIT STUDENT INNOVATION</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Share Your Fitness Idea
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-6 font-normal">
              Have a dorm hack, software tool, or active campus concept? Submit it for peer testing and campus recognition.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                  Idea Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. QuadSync: 3-Minute Lawn Sprints"
                  className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                  Short Tagline *
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="One sentence elevator pitch..."
                  className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs"
                  >
                    <option value="Dorm Room">Dorm Room</option>
                    <option value="Tech & AI">Tech & AI</option>
                    <option value="Gamification">Gamification</option>
                    <option value="Campus Commute">Campus Commute</option>
                    <option value="Low-Cost Hacks">Low-Cost Hacks</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    Creator Name *
                  </label>
                  <input
                    type="text"
                    value={creatorName}
                    onChange={(e) => setCreatorName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    Major / Department
                  </label>
                  <input
                    type="text"
                    value={creatorMajor}
                    onChange={(e) => setCreatorMajor(e.target.value)}
                    placeholder="e.g. Mechanical Engineering"
                    className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    University / College
                  </label>
                  <input
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="e.g. University of Michigan"
                    className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-slate-500 font-bold block mb-1">
                  How Does It Work? (Description) *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explain how this helps students stay active during their study routines..."
                  rows={3}
                  className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    Gear Required
                  </label>
                  <input
                    type="text"
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    placeholder="e.g. Desk, Bed, Shoes"
                    className="w-full bg-slate-50 text-xs text-slate-900 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    Time Window
                  </label>
                  <input
                    type="text"
                    value={timeReq}
                    onChange={(e) => setTimeReq(e.target.value)}
                    placeholder="e.g. 5 minutes"
                    className="w-full bg-slate-50 text-xs text-slate-900 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                    Approx Cost
                  </label>
                  <input
                    type="text"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="e.g. $0"
                    className="w-full bg-slate-50 text-xs text-slate-900 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold shadow-xs"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-sm shadow-sky-600/20 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Publish to Platform</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
