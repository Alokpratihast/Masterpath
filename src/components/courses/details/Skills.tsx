// import {
//   CheckCircle2,
//   Brain,
// } from "lucide-react";

// import type { Course } from "@/types/course";

// type SkillsProps = {
//   course: Course;
// };

// export default function Skills({
//   course,
// }: SkillsProps) {
//   return (
//     <section className="py-28 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}

//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//             <Brain className="h-4 w-4" />
//             Skills You'll Learn
//           </span>

//           <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
//             Master Industry Ready Skills
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             Learn practical technologies and real-world concepts that
//             employers expect from modern professionals.
//           </p>
//         </div>

//         {/* Skills Grid */}

//         <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {course.learning.map((skill) => (
//             <div
//               key={skill}
//               className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-600">
//                 <CheckCircle2 className="h-7 w-7 text-blue-600 transition group-hover:text-white" />
//               </div>

//               <h3 className="mt-6 text-lg font-bold text-slate-900">
//                 {skill}
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-slate-600">
//                 Practical implementation with projects,
//                 assignments and interview preparation.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import {
  CheckCircle2,
  Brain,
} from "lucide-react";

import type { Course } from "@/types/course";

type SkillsProps = {
  course: Course;
};

const ACCENT_STYLES = {
  blue: {
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    hoverBg: "group-hover:bg-[#2E5EFF]",
    hoverBorder: "hover:border-[#2E5EFF]",
    badge: "bg-[#2E5EFF] text-white",
  },
  amber: {
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    hoverBg: "group-hover:bg-[#FFB020]",
    hoverBorder: "hover:border-[#FFB020]",
    badge: "bg-[#FFB020] text-[#41240A]",
  },
  mint: {
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    hoverBg: "group-hover:bg-[#16C79A]",
    hoverBorder: "hover:border-[#16C79A]",
    badge: "bg-[#16C79A] text-white",
  },
  coral: {
    bg: "bg-[#FFE9E9]",
    fg: "text-[#D14747]",
    hoverBg: "group-hover:bg-[#FF6B6B]",
    hoverBorder: "hover:border-[#FF6B6B]",
    badge: "bg-[#FF6B6B] text-white",
  },
} as const;

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function Skills({
  course,
}: SkillsProps) {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <Brain className="h-4 w-4" />
            Skills You'll Learn
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Master Industry Ready Skills
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn practical technologies and real-world concepts that
            employers expect from modern professionals.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {course.learning.map((skill, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const styles = ACCENT_STYLES[accent];

            return (
              <div
                key={skill}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.hoverBorder}`}
              >
                {/* Index badge — quietly encodes position in the skill list */}
                <span
                  className={`absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-black ${styles.badge} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`icon-pulse-wrap relative flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${styles.bg} ${styles.fg} ${styles.hoverBg}`}
                >
                  <span className="icon-pulse-ring" />

                  <CheckCircle2
                    className={`relative z-10 h-7 w-7 transition-colors duration-300 ${styles.fg} group-hover:text-white`}
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {skill}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Practical implementation with projects,
                  assignments and interview preparation.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
