// import {
//   BriefcaseBusiness,
//   Brain,
//   Code2,
//   Users,
//   Rocket,
//   Award,
// } from "lucide-react";

// import FeatureCard from "./FeatureCard";

// const features = [
//   {
//     title: "Industry Ready Skills",
//     description:
//       "Students work on real-world technologies and projects that match current industry requirements.",
//     icon: Code2,
//   },

//   {
//     title: "Practical Learning",
//     description:
//       "Hands-on assignments, live projects, and case studies prepare students for actual work environments.",
//     icon: Brain,
//   },

//   {
//     title: "Communication Skills",
//     description:
//       "Interview communication, presentation skills, and confidence-building sessions are included.",
//     icon: Users,
//   },

//   {
//     title: "Career Focused Training",
//     description:
//       "Every course is designed around job roles that companies actively hire for.",
//     icon: BriefcaseBusiness,
//   },

//   {
//     title: "Professional Mentorship",
//     description:
//       "Learn from experienced industry professionals with continuous guidance and career mentoring.",
//     icon: Award,
//   },

//   {
//     title: "Placement Success",
//     description:
//       "Mock interviews, resume reviews, hiring drives, and dedicated placement assistance improve hiring chances.",
//     icon: Rocket,
//   },
// ];

// export default function WhyCompaniesHire() {
//   return (
//     <section className="py-28 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Header */}

//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
//             Why Companies Hire Our Students
//           </span>

//           <h2 className="mt-6 text-5xl font-black text-slate-900">
//             Built For
//             <br />
//             Real Industry Careers
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Companies hire our students because they graduate with practical
//             experience, strong technical skills, and the confidence to solve
//             real business problems from day one.
//           </p>
//         </div>

//         {/* Cards */}

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {features.map((feature) => (
//             <FeatureCard
//               key={feature.title}
//               {...feature}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  BriefcaseBusiness,
  Brain,
  Code2,
  Users,
  Rocket,
  Award,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

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
    <section className="relative overflow-hidden py-28 bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-emerald-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
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
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              accent={ACCENTS[index % ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
