export type PlacementApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  courseSlug?: string;
  courseName?: string;
  resumeUrl?: string;
  resumeName?: string;
};

export type PlacementApplicationStatus =
  | "NEW"
  | "REVIEWED"
  | "SHORTLISTED"
  | "REJECTED";