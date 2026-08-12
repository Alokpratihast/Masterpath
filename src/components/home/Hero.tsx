// import Link from "next/link";
// import {
//   ArrowRight,
//   Award,
//   BriefcaseBusiness,
//   GraduationCap,
//   Users,
//   ShieldCheck,
//   CircleCheckBig,
//   type LucideIcon,
// } from "lucide-react";

// const stats: {
//   value: string;
//   label: string;
//   Icon: LucideIcon;
// }[] = [
//   {
//     value: "20+",
//     label: "Job-ready Courses",
//     Icon: GraduationCap,
//   },
//   {
//     value: "5k+",
//     label: "Learners Trained",
//     Icon: Users,
//   },
//   {
//     value: "30+",
//     label: "Hiring Partners",
//     Icon: BriefcaseBusiness,
//   },
//   {
//     value: "4.8/5",
//     label: "Student Rating",
//     Icon: Award,
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-slate-200">
//       {/* Background Blur */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//         <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-200/30 blur-3xl" />
//       </div>

//       <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
//         {/* Left */}
//         <div className="flex flex-col justify-center">
//           <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
//             <Award className="h-4 w-4" />
//             13+ Years of Career-Focused Training
//           </div>

//           <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
//             Upgrade your career with
//             <span className="block text-blue-700">
//               practical, placement-focused courses.
//             </span>
//           </h1>

//           <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
//             Learn from experienced industry professionals, build real-world
//             projects, earn recognized certifications, and receive dedicated
//             placement support to confidently launch your career.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-wrap gap-4">
//             <Link
//               href="/courses"
//               className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800 hover:shadow-xl"
//             >
//               Explore Courses
//               <ArrowRight className="h-4 w-4" />
//             </Link>

//             <Link
//               href="/contact"
//               className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
//             >
//               Book Free Counselling
//             </Link>
//           </div>

//           {/* Trust Points */}
//           <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-700">
//             <div className="flex items-center gap-2">
//               <CircleCheckBig className="h-5 w-5 text-emerald-600" />
//               Live Projects
//             </div>

//             <div className="flex items-center gap-2">
//               <CircleCheckBig className="h-5 w-5 text-emerald-600" />
//               Industry Mentors
//             </div>

//             <div className="flex items-center gap-2">
//               <ShieldCheck className="h-5 w-5 text-emerald-600" />
//               Placement Support
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="relative flex items-center justify-center">
//           {/* Decorative Card */}
//           <div className="absolute -top-8 right-0 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />

//           <div className="grid grid-cols-2 gap-5">
//             {stats.map(({ value, label, Icon }) => (
//               <div
//                 key={label}
//                 className="group rounded-3xl border border-slate-200 bg-white/90 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-700">
//                   <Icon className="h-7 w-7 text-blue-700 transition group-hover:text-white" />
//                 </div>

//                 <h3 className="mt-6 text-4xl font-black text-slate-900">
//                   {value}
//                 </h3>

//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   {label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  ShieldCheck,
  CircleCheckBig,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const stats: {
  value: string;
  label: string;
  Icon: LucideIcon;
  bg: string;
  fg: string;
  hoverBg: string;
}[] = [
  {
    value: "20+",
    label: "Job-ready courses",
    Icon: GraduationCap,
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    hoverBg: "group-hover:bg-[#2E5EFF]",
  },
  {
    value: "5k+",
    label: "Learners trained",
    Icon: Users,
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    hoverBg: "group-hover:bg-[#FFB020]",
  },
  {
    value: "30+",
    label: "Hiring partners",
    Icon: BriefcaseBusiness,
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    hoverBg: "group-hover:bg-[#16C79A]",
  },
  {
    value: "4.8/5",
    label: "Student rating",
    Icon: Award,
    bg: "bg-[#FFE9E9]",
    fg: "text-[#D14747]",
    hoverBg: "group-hover:bg-[#FF6B6B]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FF] border-b border-[#E4E9FB]">
      {/* Background blur — three tints instead of one, matches the multi-color card system */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[28%] top-10 h-56 w-56 rounded-full bg-[#FFB020]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0F172A] shadow-[0_4px_16px_-4px_rgba(15,23,42,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16C79A] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16C79A]" />
            </span>
            12 learners placed this week
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-[#0F172A] lg:text-6xl">
            Upgrade your career with
            <span className="relative mt-2 block w-fit text-[#2E5EFF]">
              practical, placement-focused courses.
              <svg
                className="absolute -bottom-2 left-0 w-full text-[#FFB020]"
                viewBox="0 0 400 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 130 3 200 6C270 9 340 3 398 5"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#4B5675]">
            Learn from experienced industry professionals, build real-world
            projects, earn recognized certifications, and receive dedicated
            placement support to confidently launch your career.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2E5EFF] px-7 py-4 font-bold text-white shadow-[0_10px_24px_-8px_rgba(46,94,255,0.55)] transition hover:-translate-y-0.5 hover:bg-[#1E3FCC]"
            >
              Explore courses
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border-2 border-[#E4E9FB] bg-white px-7 py-4 font-bold text-[#0F172A] transition hover:border-[#2E5EFF] hover:text-[#2E5EFF]"
            >
              Book free counselling
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold text-[#0F172A]">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <CircleCheckBig className="h-4 w-4 text-[#16C79A]" />
              Live projects
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <CircleCheckBig className="h-4 w-4 text-[#16C79A]" />
              Industry mentors
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#16C79A]" />
              Placement support
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          {/* Signature element: floating "just placed" toast, anchors the placement-first story */}
          <div className="absolute -top-7 -left-4 z-10 hidden -rotate-3 items-center gap-3 rounded-2xl border border-[#E4E9FB] bg-white px-4 py-3 shadow-[0_16px_32px_-12px_rgba(15,23,42,0.25)] sm:flex">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#2E5EFF] text-xs font-black text-white">
              RS
            </div>
            <div className="leading-tight">
              <p className="flex items-center gap-1 text-xs font-black text-[#0F172A]">
                <Sparkles className="h-3 w-3 text-[#FFB020]" />
                Rahul just got placed
              </p>
              <p className="text-[11px] font-semibold text-[#6B7690]">
                Full Stack Dev @ TCS ·{" "}
                <span className="text-[#0E9A78]">₹6.2 LPA</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label, Icon, bg, fg, hoverBg }) => (
              <div
                key={label}
                className="group rounded-3xl border border-[#E4E9FB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.25)]"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} transition ${hoverBg}`}
                >
                  <Icon
                    className={`h-7 w-7 ${fg} transition group-hover:text-white`}
                  />
                </div>

                <h3 className="mt-6 text-4xl font-black text-[#0F172A]">
                  {value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#5B6685]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

