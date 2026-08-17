// import {
//   GraduationCap,
//   BriefcaseBusiness,
//   Trophy,
//   Users,
// } from "lucide-react";

// const stats = [
//   {
//     value: "5000+",
//     label: "Students Trained",
//     icon: Users,
//   },
//   {
//     value: "300+",
//     label: "Hiring Partners",
//     icon: BriefcaseBusiness,
//   },
//   {
//     value: "95%",
//     label: "Placement Support",
//     icon: Trophy,
//   },
//   {
//     value: "20+",
//     label: "Professional Courses",
//     icon: GraduationCap,
//   },
// ];

// export default function HeroStats() {
//   return (
//     <div className="grid grid-cols-2 gap-6">
//       {stats.map(({ value, label, icon: Icon }) => (
//         <div
//           key={label}
//           className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
//         >
//           <Icon className="h-10 w-10 text-blue-400" />

//           <h3 className="mt-6 text-5xl font-black text-white">
//             {value}
//           </h3>

//           <p className="mt-3 text-slate-300">
//             {label}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }



import {
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Users,
} from "lucide-react";

import CountUp from "@/components/home/Countup";

const ACCENT_STYLES = {
  blue: { bg: "bg-blue-500/15", fg: "text-blue-400" },
  amber: { bg: "bg-amber-500/15", fg: "text-amber-400" },
  mint: { bg: "bg-emerald-500/15", fg: "text-emerald-400" },
  coral: { bg: "bg-rose-500/15", fg: "text-rose-400" },
} as const;

const stats = [
  {
    value: "5000+",
    label: "Students Trained",
    icon: Users,
    accent: "blue",
  },
  {
    value: "300+",
    label: "Hiring Partners",
    icon: BriefcaseBusiness,
    accent: "amber",
  },
  {
    value: "95%",
    label: "Placement Support",
    icon: Trophy,
    accent: "mint",
  },
  {
    value: "20+",
    label: "Professional Courses",
    icon: GraduationCap,
    accent: "coral",
  },
] as const;

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map(({ value, label, icon: Icon, accent }) => {
        const styles = ACCENT_STYLES[accent];

        return (
          <div
            key={label}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            <div
              className={`icon-pulse-wrap relative flex h-14 w-14 items-center justify-center rounded-2xl ${styles.bg} ${styles.fg}`}
            >
              <span className="icon-pulse-ring" />
              <Icon className="relative z-10 h-7 w-7" />
            </div>

            <h3 className="mt-6 text-5xl font-black text-white">
              <CountUp value={value} />
            </h3>

            <p className="mt-3 text-slate-300">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
