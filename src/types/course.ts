export type CurriculumModule = {
  id: number;

  title: string;

  duration: string;

  lessons: string[];
};

export type Course = {
  slug: string;

  title: string;

  category: "Technology" | "Finance" | "Marketing" | "HR";

  summary: string;

  duration: string;

  mode: "Classroom" | "Online" | "Hybrid";

  level: "Beginner" | "Intermediate" | "Advanced";

  rating: number;

  projects: number;

  featured: boolean;

  price: string;

  image: string;
  brochure?: string;

  highlights: string[];

  

  about: string;

  description: string;

  learning: string[];

  tools: string[];

  projectsList: string[];

  eligibility: string[];

  certification: string;

  placementSupport: string[];

  // Curriculum

  curriculum: CurriculumModule[];
};