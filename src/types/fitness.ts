export type CategoryType = 
  | "All"
  | "Tech & AI"
  | "Dorm Room"
  | "Gamification"
  | "Campus Commute"
  | "Low-Cost Hacks";

export type StageType = "Ideation" | "Prototype" | "Campus Pilot" | "Scaled";

export interface InnovationIdea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Tech & AI" | "Dorm Room" | "Gamification" | "Campus Commute" | "Low-Cost Hacks";
  stage: StageType;
  creator: {
    name: string;
    major: string;
    university: string;
    avatar: string;
  };
  upvotes: number;
  hasUpvoted?: boolean;
  feasibilityScore: number; // 1-100
  studentTestedCount: number;
  tags: string[];
  specs: {
    equipmentNeeded: string;
    timeRequired: string;
    costToImplement: string;
  };
  keyBenefit: string;
  imageUrl: string;
  demoUrl?: string;
  createdAt: string;
}

export interface FitnessChallenge {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  participants: number;
  currentProgress: number; // percentage
  targetGoal: string;
  rewardBadge: string;
  points: number;
  iconName: string;
  isJoined?: boolean;
  daysLeft: number;
}

export interface CampusEvent {
  id: string;
  title: string;
  location: string;
  campusZone: string;
  time: string;
  organizer: string;
  attendeesCount: number;
  maxCapacity: number;
  category: "Running" | "HIIT" | "Calisthenics" | "Mind & Mobility" | "Social Sport";
  isUserRsvp?: boolean;
  intensity: "Low" | "Medium" | "High";
}

export interface GeneratorResult {
  title: string;
  duration: string;
  intensity: string;
  equipment: string;
  steps: string[];
  studentTip: string;
  burnEstimate: string;
}
