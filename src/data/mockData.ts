import { InnovationIdea, FitnessChallenge, CampusEvent } from "../types/fitness";

export const INITIAL_INNOVATIONS: InnovationIdea[] = [
  {
    id: "inno-1",
    title: "DormSync: Study-Break Micro Calisthenics",
    tagline: "Synchronized 4-minute movement intervals between browser study sessions",
    description: "A lightweight Chrome extension and dorm IoT door-hanger that prompts roommates to do quick 4-minute joint mobility and bodyweight intervals at the end of each Pomodoro study block.",
    category: "Dorm Room",
    stage: "Campus Pilot",
    creator: {
      name: "Marcus Vance & Emily Chen",
      major: "Computer Science & Kinesiology",
      university: "Georgia Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    upvotes: 412,
    hasUpvoted: false,
    feasibilityScore: 94,
    studentTestedCount: 820,
    tags: ["Pomodoro", "Desk Mobility", "Browser Extension", "Dorm Living"],
    specs: {
      equipmentNeeded: "Zero (Dorm Floor & Chair)",
      timeRequired: "4 minutes / hour",
      costToImplement: "$0 (Open Source)"
    },
    keyBenefit: "Breaks prolonged sedentary periods during exam study without leaving your room.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
    createdAt: "2026-02-14"
  },
  {
    id: "inno-2",
    title: "EcoPedal: Kinetic Desk Generator Hub",
    tagline: "Recycled bicycle trainer that powers campus laptop charging stations",
    description: "Student mechanical engineers retrofitted salvaged commuter bikes with miniature alternators and buck-converters to power USB-C laptop chargers in library quiet zones. 25 minutes of cycling provides a 45% laptop charge.",
    category: "Campus Commute",
    stage: "Scaled",
    creator: {
      name: "Siddharth Rao",
      major: "Mechanical Engineering",
      university: "Purdue University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    upvotes: 689,
    hasUpvoted: false,
    feasibilityScore: 88,
    studentTestedCount: 1450,
    tags: ["Green Energy", "Library Cardio", "Hardware Hack", "Sustainability"],
    specs: {
      equipmentNeeded: "Repurposed Bicycle Frame + Dynamo",
      timeRequired: "15-30 minutes",
      costToImplement: "~$45 per bike unit"
    },
    keyBenefit: "Incentivizes active pedaling while completing reading assignments.",
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&auto=format&fit=crop&q=80",
    createdAt: "2026-01-20"
  },
  {
    id: "inno-3",
    title: "PosturAI: Real-Time Webcam Ergonomics Coach",
    tagline: "Local browser edge-AI tracking text-neck and slouching during late-night coding",
    description: "An entirely client-side privacy-first web tool using MediaPipe to gently blur the screen if a student has been hunched over closer than 40cm for over 15 minutes, prompting a 60-second thoracic spine reset.",
    category: "Tech & AI",
    stage: "Prototype",
    creator: {
      name: "Aria Thorne",
      major: "Artificial Intelligence & Human Factors",
      university: "UW Madison",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    upvotes: 524,
    hasUpvoted: false,
    feasibilityScore: 92,
    studentTestedCount: 640,
    tags: ["MediaPipe", "Privacy First", "Thoracic Spine", "Late Night Study"],
    specs: {
      equipmentNeeded: "Standard Laptop Webcam",
      timeRequired: "Continuous ambient monitoring",
      costToImplement: "$0"
    },
    keyBenefit: "Prevents forward-head fatigue without wearable sensors.",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80",
    createdAt: "2026-03-01"
  },
  {
    id: "inno-4",
    title: "StairClimb QR Quest: Quad Leaderboard",
    tagline: "Gamified vertical step tracking in campus buildings replacing elevator lines",
    description: "Scan dynamic QR beacons on each floor landing of tall academic halls. Students earn points, unlock campus coffee coupons, and climb residence hall leaderboards by taking stairs instead of waiting 10 minutes for packed elevators.",
    category: "Gamification",
    stage: "Campus Pilot",
    creator: {
      name: "Jordan Lee & Mateo Rossi",
      major: "Behavioral Economics",
      university: "University of Michigan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    upvotes: 890,
    hasUpvoted: false,
    feasibilityScore: 96,
    studentTestedCount: 3200,
    tags: ["Stair Climbing", "QR Beacons", "Gamification", "Active Commute"],
    specs: {
      equipmentNeeded: "Laminated QR Checkpoints + Mobile PWA",
      timeRequired: "During regular class commutes",
      costToImplement: "$15 campus-wide"
    },
    keyBenefit: "Diverts elevator congestion into effortless daily cardio.",
    imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop&q=80",
    createdAt: "2026-02-05"
  },
  {
    id: "inno-5",
    title: "The Textbook Kettlebell & Heavy Bag Hack",
    tagline: "Modular fabric harness turning obsolete heavy textbooks into ergonomic weights",
    description: "A tear-resistant Cordura wrap with reinforced nylon webbing that securely bundles 10-35 lbs of heavy textbooks into a kettlebell / sandbag handle. Designed for dorm dwellers who cannot afford or store cast iron dumbbells.",
    category: "Low-Cost Hacks",
    stage: "Campus Pilot",
    creator: {
      name: "Devon Miller",
      major: "Industrial Design",
      university: "Rhode Island School of Design",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
    },
    upvotes: 345,
    hasUpvoted: false,
    feasibilityScore: 98,
    studentTestedCount: 410,
    tags: ["Budget Fitness", "Dorm Gym", "Textbook Re-use", "Industrial Design"],
    specs: {
      equipmentNeeded: "Heavy textbooks + Nylon strap harness",
      timeRequired: "Adaptable strength training",
      costToImplement: "$8 material cost"
    },
    keyBenefit: "Zero storage footprint, high-durability progressive resistance.",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
    createdAt: "2026-02-28"
  },
  {
    id: "inno-6",
    title: "CampusStride: Sunset Walk & Talk Matchmaker",
    tagline: "Pairing isolated students for 20-minute evening outdoor decompression walks",
    description: "An algorithm matching students based on common majors, favorite podcasts, or stress relief goals for prompt 20-minute campus loop walks at 6:30 PM. Overcomes the social friction of walking alone at night.",
    category: "Gamification",
    stage: "Campus Pilot",
    creator: {
      name: "Zoe Patel",
      major: "Social Work & Psychology",
      university: "UCLA",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    upvotes: 618,
    hasUpvoted: false,
    feasibilityScore: 91,
    studentTestedCount: 1100,
    tags: ["Mental Health", "Evening Walks", "Social Buddy", "Loneliness Buffer"],
    specs: {
      equipmentNeeded: "Campus Pathways & Shoes",
      timeRequired: "20 minutes",
      costToImplement: "$0 (Campus PWA)"
    },
    keyBenefit: "Combats sedentary isolation through mutual accountability.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80",
    createdAt: "2026-03-10"
  }
];

export const FITNESS_CHALLENGES: FitnessChallenge[] = [
  {
    id: "ch-1",
    title: "100K Steps Inter-Dorm League",
    subtitle: "West Campus vs North Quad collective step clash",
    category: "Campus Wide",
    duration: "7 Days Active",
    participants: 1840,
    currentProgress: 68,
    targetGoal: "100,000 Team Steps",
    rewardBadge: "Centurion Stride",
    points: 500,
    iconName: "Footprints",
    daysLeft: 3
  },
  {
    id: "ch-2",
    title: "Zero-Elevator November",
    subtitle: "Take academic hall stairs exclusively for 14 straight days",
    category: "Habit Streak",
    duration: "14 Days",
    participants: 920,
    currentProgress: 82,
    targetGoal: "250 Total Flights",
    rewardBadge: "Vertical Master",
    points: 750,
    iconName: "TrendingUp",
    daysLeft: 5
  },
  {
    id: "ch-3",
    title: "5-Min Midnight Study Stretch",
    subtitle: "Complete 1 mobility routine between 10 PM and 1 AM",
    category: "Micro Habit",
    duration: "Nightly Quest",
    participants: 2310,
    currentProgress: 45,
    targetGoal: "7 Sessions Logged",
    rewardBadge: "Night Owl Spine",
    points: 300,
    iconName: "Moon",
    daysLeft: 2
  },
  {
    id: "ch-4",
    title: "Dining Hall Ruck Challenge",
    subtitle: "Walk to dining with full backpack without taking campus shuttle",
    category: "Low-Cost Resistance",
    duration: "Weekly Quest",
    participants: 670,
    currentProgress: 90,
    targetGoal: "15 Miles Rucked",
    rewardBadge: "Campus Nomad",
    points: 450,
    iconName: "Backpack",
    daysLeft: 4
  }
];

export const CAMPUS_EVENTS: CampusEvent[] = [
  {
    id: "ev-1",
    title: "Sunrise Quad Sprint & Calisthenics",
    location: "Main Campus Quad / Flagpole Lawn",
    campusZone: "Central Campus",
    time: "Tomorrow at 7:15 AM",
    organizer: "Engineering Athletic Club",
    attendeesCount: 42,
    maxCapacity: 60,
    category: "Calisthenics",
    intensity: "High"
  },
  {
    id: "ev-2",
    title: "Exam Week Thoracic Spine & Foam Roll Lab",
    location: "Student Center 3rd Floor Terrace",
    campusZone: "Student Union",
    time: "Today at 4:30 PM",
    organizer: "Pre-Physical Therapy Society",
    attendeesCount: 38,
    maxCapacity: 45,
    category: "Mind & Mobility",
    intensity: "Low"
  },
  {
    id: "ev-3",
    title: "Sunset 5K Twilight Campus Run",
    location: "Starts at Campus Rec Belltower",
    campusZone: "Rec Center",
    time: "Thursday at 6:00 PM",
    organizer: "Student Striders Run Co-op",
    attendeesCount: 95,
    maxCapacity: 120,
    category: "Running",
    intensity: "Medium"
  },
  {
    id: "ev-4",
    title: "Dorm Hallway Tabata Blitz",
    location: "Maple Residence Hall Lounge B",
    campusZone: "East Quad",
    time: "Friday at 5:00 PM",
    organizer: "Floor 4 Wellness Committee",
    attendeesCount: 22,
    maxCapacity: 30,
    category: "HIIT",
    intensity: "High"
  }
];

export const GENERATOR_DATABASE: Record<string, string[]> = {
  dorm: [
    "Bed-Edge Tricep Dips (3x12) + Isometric Wall Sit (45s)",
    "Desk Plank to Downward Dog Transition Flow (2 mins)",
    "Dorm Door-Frame Lat Stretch & Thoracic Opener (90s)",
    "Textbook Single-Leg Romanian Deadlifts (3x10 each)"
  ],
  library: [
    "Subtle Seated Glute Activations & Ankle Circles (2 mins)",
    "Standing Calf Raises while reading journal articles (40 reps)",
    "Neck Retraction & Shoulder Blade Squeezes (60s hold)",
    "Stairwell Lunges during bathroom break (2 flights)"
  ],
  lawn: [
    "Barefoot Quad Grass Sprints (5x40 meters)",
    "Park Bench Incline Pushups + Step-Ups (4 rounds)",
    "Bear Crawls across the frisbee lawn (3x20 paces)",
    "Sun Salutation Vinyasa flow on the grass (5 mins)"
  ]
};
