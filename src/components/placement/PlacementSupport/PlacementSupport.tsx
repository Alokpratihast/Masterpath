// import {
//   FileText,
//   BriefcaseBusiness,
//   Users,
//   BadgeCheck,
//   GraduationCap,
//   MessageSquareText,
// } from "lucide-react";

// import SupportCard from "./SupportCard";

// const support = [
//   {
//     title: "Resume Building",
//     description:
//       "Build ATS-friendly resumes that stand out during recruiter screening.",
//     icon: FileText,
//   },

//   {
//     title: "Mock Interviews",
//     description:
//       "Technical and HR mock interviews with detailed performance feedback.",
//     icon: MessageSquareText,
//   },

//   {
//     title: "LinkedIn Optimization",
//     description:
//       "Optimize your LinkedIn profile to attract recruiters and hiring managers.",
//     icon: BadgeCheck,
//   },

//   {
//     title: "Career Mentorship",
//     description:
//       "One-on-one mentorship sessions for career planning and interview preparation.",
//     icon: Users,
//   },

//   {
//     title: "Placement Drives",
//     description:
//       "Regular recruitment drives with hiring partners and startup companies.",
//     icon: BriefcaseBusiness,
//   },

//   {
//     title: "Soft Skills Training",
//     description:
//       "Improve communication, confidence, presentation, and interview etiquette.",
//     icon: GraduationCap,
//   },
// ];

// export default function PlacementSupport() {
//   return (
//     <section className="bg-slate-50 py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}

//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//             Placement Support
//           </span>

//           <h2 className="mt-6 text-5xl font-black text-slate-900">
//             Everything You Need
//             <br />
//             To Get Hired
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Our placement cell provides complete career assistance from
//             resume building to interview preparation and company
//             referrals.
//           </p>
//         </div>

//         {/* Cards */}

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {support.map((item) => (
//             <SupportCard
//               key={item.title}
//               {...item}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import {
  FileText,
  BriefcaseBusiness,
  Users,
  BadgeCheck,
  GraduationCap,
  MessageSquareText,
} from "lucide-react";

import SupportCard from "./SupportCard";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

const support = [
  {
    title: "Resume Building",
    description:
      "Build ATS-friendly resumes that stand out during recruiter screening.",
    icon: FileText,
  },

  {
    title: "Mock Interviews",
    description:
      "Technical and HR mock interviews with detailed performance feedback.",
    icon: MessageSquareText,
  },

  {
    title: "LinkedIn Optimization",
    description:
      "Optimize your LinkedIn profile to attract recruiters and hiring managers.",
    icon: BadgeCheck,
  },

  {
    title: "Career Mentorship",
    description:
      "One-on-one mentorship sessions for career planning and interview preparation.",
    icon: Users,
  },

  {
    title: "Placement Drives",
    description:
      "Regular recruitment drives with hiring partners and startup companies.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Soft Skills Training",
    description:
      "Improve communication, confidence, presentation, and interview etiquette.",
    icon: GraduationCap,
  },
];

export default function PlacementSupport() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Placement Support
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Everything You Need
            <br />
            To Get Hired
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our placement cell provides complete career assistance from
            resume building to interview preparation and company
            referrals.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {support.map((item, index) => (
            <SupportCard
              key={item.title}
              {...item}
              accent={ACCENTS[index % ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
