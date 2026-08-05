import {
  BriefcaseBusiness,
  Brain,
  Code2,
  Users,
  Rocket,
  Award,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Industry Ready Skills",
    description:
      "Students work on real-world technologies and projects that match current industry requirements.",
    icon: Code2,
  },

  {
    title: "Practical Learning",
    description:
      "Hands-on assignments, live projects, and case studies prepare students for actual work environments.",
    icon: Brain,
  },

  {
    title: "Communication Skills",
    description:
      "Interview communication, presentation skills, and confidence-building sessions are included.",
    icon: Users,
  },

  {
    title: "Career Focused Training",
    description:
      "Every course is designed around job roles that companies actively hire for.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Professional Mentorship",
    description:
      "Learn from experienced industry professionals with continuous guidance and career mentoring.",
    icon: Award,
  },

  {
    title: "Placement Success",
    description:
      "Mock interviews, resume reviews, hiring drives, and dedicated placement assistance improve hiring chances.",
    icon: Rocket,
  },
];

export default function WhyCompaniesHire() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Why Companies Hire Our Students
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Built For
            <br />
            Real Industry Careers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Companies hire our students because they graduate with practical
            experience, strong technical skills, and the confidence to solve
            real business problems from day one.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}