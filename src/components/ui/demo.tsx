import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Dorm Sync",
    title: "Micro Workout",
    rightLabel: "5-Min Bursts",
    background: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
  },
  {
    leftLabel: "Campus Commute",
    title: "Kinetic Route",
    rightLabel: "Step Rewards",
    background: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1920&auto=format&fit=crop",
  },
  {
    leftLabel: "Study Boost",
    title: "Focus & Flow",
    rightLabel: "Posture AI",
    background: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop",
  },
  {
    leftLabel: "Social Fitness",
    title: "Squad League",
    rightLabel: "Dorm Battles",
    background: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function DemoOne() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <div className="w-full relative">
      <FullScreenScrollFX
        apiRef={apiRef}
        sections={sections}
        header={<><div>STUDENT INNOVATION</div><div>FITNESS SHOWCASE</div></>}
        footer={<div className="text-[#A5A5A5] font-mono text-sm tracking-wider">SCROLL TO EXPLORE ACTIVE BREAKTHROUGHS</div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
      />
    </div>
  );
}
