import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  RotateCw, 
  Play, 
  Pause, 
  Timer, 
  Flame, 
  MapPin, 
  Clock, 
  BatteryCharging, 
  Dumbbell,
  Copy,
  Check
} from "lucide-react";
import { GeneratorResult } from "../types/fitness";

export const IdeaGenerator: React.FC = () => {
  const [location, setLocation] = useState<"dorm" | "library" | "lawn" | "stairs">("dorm");
  const [time, setTime] = useState<"2min" | "5min" | "12min" | "25min">("5min");
  const [energy, setEnergy] = useState<"low" | "medium" | "high">("medium");
  const [equipment, setEquipment] = useState<"bodyweight" | "chair" | "backpack">("bodyweight");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentIdea, setCurrentIdea] = useState<GeneratorResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Timer State
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 mins default
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerTotal, setTimerTotal] = useState(300);

  const handleStart5MinTimer = () => {
    setTimerTotal(300);
    setTimerSeconds(300);
    setTimerRunning(true);
  };

  const handleCopyProtocol = () => {
    if (!currentIdea) return;
    const text = `${currentIdea.title}\nDuration: ${currentIdea.duration}\nEquipment: ${currentIdea.equipment}\n\nMovement Breakdown:\n${currentIdea.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nStudent Tip: ${currentIdea.studentTip}\nEstimated Benefit: ${currentIdea.burnEstimate}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sample Generated Ideas library
  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let result: GeneratorResult;

      if (location === "library") {
        result = {
          title: "The Silent Stacks Mobility & Spine Reset",
          duration: time === "2min" ? "2 Minutes" : "5 Minutes",
          intensity: "Low / Silent & Non-Disruptive",
          equipment: "Library Chair & Desk",
          steps: [
            "Seated Pelvic Tilts & Thoracic Extensions (12 reps)",
            "Silent Standing Calf & Soleus Raises while reading (40 reps)",
            "Wall / Stack Angel Retractions to undo screen posture (10 slow reps)",
            "Gentle 4-7-8 Diaphragmatic Breath + Quad Stretch in the corridor"
          ],
          studentTip: "Do this at the 45-minute mark of study sessions to keep oxygen flowing to the prefrontal cortex.",
          burnEstimate: "~30-50 active cal & relieved spinal compression"
        };
      } else if (location === "dorm") {
        if (equipment === "backpack") {
          result = {
            title: "Textbook Backpack Ruck & Squat Complex",
            duration: time === "12min" ? "12 Minutes" : "5 Minutes",
            intensity: energy === "high" ? "High" : "Moderate",
            equipment: "Dorm Backpack packed with 2-3 textbooks (~15 lbs)",
            steps: [
              "Suitcase Squats hugging the backpack (3 sets x 12 reps)",
              "Backpack Bent-Over Rows targeting mid-back (3 sets x 12 reps)",
              "Bed-Edge Elevated Pushups (3 sets x 10 reps)",
              "Dorm Doorframe Chest Opener Stretch (45 seconds each side)"
            ],
            studentTip: "Keep straps pulled snug so the weight doesn't shift into your lower back.",
            burnEstimate: "~80-120 active cal & posture stabilization"
          };
        } else {
          result = {
            title: "Dorm Room Micro Calisthenics Sprint",
            duration: time === "2min" ? "2 Minutes" : "5 Minutes",
            intensity: energy === "high" ? "High" : "Moderate",
            equipment: "Dorm Floor & Bed Frame",
            steps: [
              "Bed-Edge Tricep Dips (30 seconds)",
              "Bodyweight Isometric Wall Sit (45 seconds)",
              "Slow Tempo Mountain Climbers (45 seconds)",
              "Supine Glute Bridges on carpet (60 seconds)"
            ],
            studentTip: "Place a towel under your palms if your dorm floor is cold linoleum.",
            burnEstimate: "~45-75 active cal & instant mental reboot"
          };
        }
      } else if (location === "stairs") {
        result = {
          title: "The Academic Hall Stair Climb Interval",
          duration: "5-10 Minutes",
          intensity: "High (Great for cardio between lectures)",
          equipment: "Any 3-4 story campus academic building",
          steps: [
            "Ascend 2 flights at steady brisk walking pace (Skip elevators)",
            "Pause at landing: 10 Air Squats or Calf Pulses",
            "Ascend next 2 flights with double-step strides (glute focus)",
            "Slow controlled walk back down to recover"
          ],
          studentTip: "Look up at the stairs ahead rather than at your phone to maintain upright breathing alignment.",
          burnEstimate: "~100-140 active cal & lower body power"
        };
      } else {
        result = {
          title: "Campus Quad Sun & Stride Workout",
          duration: time === "25min" ? "25 Minutes" : "12 Minutes",
          intensity: energy === "high" ? "High" : "Moderate",
          equipment: "Quad Lawn & Park Bench",
          steps: [
            "Barefoot grass mobility strides & high knees (3 minutes)",
            "Park Bench Incline Pushups + Single Leg Step-Ups (3 rounds x 12 reps)",
            "Bear Crawls or Crab Walks across 20 meters of grass",
            "Deep breathing squat holds facing sunlight"
          ],
          studentTip: "Bring your water bottle and soak up natural daylight to re-calibrate your circadian rhythm.",
          burnEstimate: "~150-200 active cal & mood elevation"
        };
      }

      // Sync timer duration
      const totalSec = time === "2min" ? 120 : time === "5min" ? 300 : time === "12min" ? 720 : 1500;
      setTimerTotal(totalSec);
      setTimerSeconds(totalSec);
      setTimerRunning(false);

      setCurrentIdea(result);
      setIsGenerating(false);
    }, 350);
  };

  // Initial load
  useEffect(() => {
    generateIdea();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer countdown hook
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const progressPercent = Math.max(0, Math.min(100, ((timerTotal - timerSeconds) / timerTotal) * 100));

  return (
    <section id="generator" className="py-20 relative bg-[#F8FAFC] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold text-slate-800">ALGORITHMIC HABIT ENGINE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Interactive Fitness Idea Generator
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Stuck between lectures, in the library, or in your dorm room? Set your immediate constraints and spin instant, science-aligned micro-workouts designed for students.
          </p>
        </div>

        {/* Generator Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (5 cols) */}
          <div className="lg:col-span-5 silver-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-sky-600" />
              <span>Customize Your Session</span>
            </h3>

            {/* Location Selector */}
            <div>
              <label className="text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mb-2.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Current Location</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "dorm", label: "Dorm Room" },
                  { id: "library", label: "Library / Desk" },
                  { id: "stairs", label: "Campus Stairs" },
                  { id: "lawn", label: "Quad / Lawn" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLocation(item.id as any)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                      location === item.id
                        ? "bg-sky-600 text-white border-sky-600 font-bold shadow-xs shadow-sky-600/20"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selector */}
            <div>
              <label className="text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mb-2.5">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Available Window</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: "2min", label: "2 Min" },
                  { id: "5min", label: "5 Min" },
                  { id: "12min", label: "12 Min" },
                  { id: "25min", label: "25 Min" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTime(item.id as any)}
                    className={`py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                      time === item.id
                        ? "bg-sky-600 text-white border-sky-600 font-bold shadow-xs shadow-sky-600/20"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Energy Selector */}
            <div>
              <label className="text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mb-2.5">
                <BatteryCharging className="w-3.5 h-3.5 text-sky-600" />
                <span>Energy State</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "low", label: "Exhausted" },
                  { id: "medium", label: "Steady" },
                  { id: "high", label: "Hyped" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEnergy(item.id as any)}
                    className={`py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                      energy === item.id
                        ? "bg-sky-600 text-white border-sky-600 font-bold shadow-xs shadow-sky-600/20"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Equipment Selector */}
            <div>
              <label className="text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5 mb-2.5">
                <Dumbbell className="w-3.5 h-3.5 text-sky-600" />
                <span>Available Gear</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "bodyweight", label: "Bodyweight" },
                  { id: "chair", label: "Chair / Bed" },
                  { id: "backpack", label: "Textbook Bag" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEquipment(item.id as any)}
                    className={`py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                      equipment === item.id
                        ? "bg-sky-600 text-white border-sky-600 font-bold shadow-xs shadow-sky-600/20"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={generateIdea}
              disabled={isGenerating}
              className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-600/25 flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
            >
              <RotateCw className={`w-3.5 h-3.5 text-white ${isGenerating ? "animate-spin" : ""}`} />
              <span>{isGenerating ? "Synthesizing Protocol..." : "Generate Fitness Idea"}</span>
            </button>
          </div>

          {/* Result Card & Workout Timer (7 cols) */}
          <div className="lg:col-span-7">
            {currentIdea && (
              <div className="silver-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                      CUSTOM STUDENT PROTOCOL
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mt-1">
                      {currentIdea.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-xs">
                      {currentIdea.duration}
                    </span>
                  </div>
                </div>

                {/* Protocol Tags: Equipment & Target */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 pb-3 border-b border-slate-100">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 shadow-xs">
                    <span className="font-semibold text-slate-800">Equipment:</span>
                    <span>{equipment === "bodyweight" ? "None" : equipment === "chair" ? "Chair / Bed" : "Textbook Bag"}</span>
                    <span className="text-slate-300">|</span>
                    <span className="font-semibold text-slate-800">Target:</span>
                    <span className="text-sky-700 font-semibold">Mobility & Heart Rate</span>
                  </div>

                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    ✓ Verified Micro-Protocol
                  </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-3 pb-1 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={handleStart5MinTimer}
                    className="flex-1 min-w-[150px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-xs shadow-sky-600/20 active:scale-95 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Start 5-Min Timer</span>
                  </button>

                  <button
                    onClick={handleCopyProtocol}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold shadow-xs active:scale-95 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Habit Protocol</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Steps Section */}
                <div className="mt-4">
                  <h4 className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider mb-2.5">
                    Movement Breakdown
                  </h4>
                  <div className="space-y-2">
                    {currentIdea.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                      >
                        <div className="w-5 h-5 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0 mt-0.5 border border-sky-200">
                          {idx + 1}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-800 leading-snug font-normal">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tip & Estimated Benefit */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                    <span className="font-mono text-[9px] text-sky-600 font-bold block mb-0.5">STUDENT LAB TIP</span>
                    <p className="text-[11px] leading-relaxed">{currentIdea.studentTip}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                    <span className="font-mono text-[9px] text-sky-600 font-bold block mb-0.5">ESTIMATED BENEFIT</span>
                    <p className="text-[11px] leading-relaxed">{currentIdea.burnEstimate}</p>
                  </div>
                </div>

                {/* Interactive Embedded Routine Timer */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-xs">
                        <Timer className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 font-bold block">SESSION TIMER</span>
                        <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-wider font-mono">
                          {formatTimer(timerSeconds)}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar & Controls */}
                    <div className="flex items-center space-x-2.5">
                      <button
                        onClick={() => setTimerRunning(!timerRunning)}
                        className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-xs ${
                          timerRunning
                            ? "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                            : "bg-sky-600 text-white hover:bg-sky-500 shadow-sky-600/20"
                        }`}
                      >
                        {timerRunning ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>PAUSE</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>START NOW</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          setTimerRunning(false);
                          setTimerSeconds(timerTotal);
                        }}
                        className="p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-xs"
                        title="Reset Timer"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
