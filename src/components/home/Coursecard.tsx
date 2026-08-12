// import Link from "next/link";
// import {
//   ArrowRight,
//   Clock3,
//   Laptop,
//   FolderKanban,
//   Star,
//   GraduationCap,
//   Sparkles,
// } from "lucide-react";

// import type { Course } from "@/types/course";

// type CourseCardProps = {
//   course: Course;
// };

// export default function CourseCard({ course }: CourseCardProps) {
//   return (
//     <Link
//       href={`/courses/${course.slug}`}
//       className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
//     >
//       {/* Category Badge */}
//       <div className="flex items-center justify-between">
//         <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
//           {course.category}
//         </span>

//         <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
//           <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//           <span className="text-xs font-bold text-slate-900">
//             {course.rating}
//           </span>
//         </div>
//       </div>

//       {/* Icon */}
//       <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 transition duration-300 group-hover:scale-110">
//         <GraduationCap className="h-8 w-8 text-white" />
//       </div>

//       {/* Title */}
//       <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
//         {course.title}
//       </h3>

//       {/* Summary */}
//       <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
//         {course.summary}
//       </p>

//       {/* Highlights */}
//       <div className="mt-6 flex flex-wrap gap-2">
//         {course.highlights.slice(0, 3).map((item) => (
//           <span
//             key={item}
//             className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
//           >
//             {item}
//           </span>
//         ))}
//       </div>

//       {/* Course Info */}
//       <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4">
//         <div className="flex items-start gap-3">
//           <Clock3 className="mt-1 h-5 w-5 text-blue-600" />

//           <div>
//             <p className="text-xs text-slate-500">Duration</p>
//             <p className="font-semibold">{course.duration}</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-3">
//           <Laptop className="mt-1 h-5 w-5 text-blue-600" />

//           <div>
//             <p className="text-xs text-slate-500">Mode</p>
//             <p className="font-semibold">{course.mode}</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-3">
//           <FolderKanban className="mt-1 h-5 w-5 text-blue-600" />

//           <div>
//             <p className="text-xs text-slate-500">Projects</p>
//             <p className="font-semibold">{course.projects}</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-3">
//           <Sparkles className="mt-1 h-5 w-5 text-blue-600" />

//           <div>
//             <p className="text-xs text-slate-500">Level</p>
//             <p className="font-semibold">{course.level}</p>
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
//         <span className="text-sm font-semibold text-slate-600">
//           Explore Course
//         </span>

//         <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
//           <ArrowRight className="h-5 w-5" />
//         </div>
//       </div>
//     </Link>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Laptop,
  FolderKanban,
  Star,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

// Maps a course's category to the site's 4-color accent system.
// Covers both the nav mega-menu taxonomy (Development/Data/Design) and the
// tab taxonomy (Technology/Finance/Marketing/HR) — falls back to blue.
const CATEGORY_STYLES: Record<
  string,
  {
    badge: string;
    gradient: string;
    infoIcon: string;
    infoBg: string;
    cta: string;
    hoverBorder: string;
    hoverText: string;
  }
> = {
  Technology: {
    badge: "bg-[#EAF0FF] text-[#2E5EFF]",
    gradient: "from-[#2E5EFF] to-[#1E3FCC]",
    infoIcon: "text-[#2E5EFF]",
    infoBg: "bg-[#EAF0FF]",
    cta: "bg-[#2E5EFF]",
    hoverBorder: "hover:border-[#2E5EFF]",
    hoverText: "group-hover:text-[#2E5EFF]",
  },
  Development: {
    badge: "bg-[#EAF0FF] text-[#2E5EFF]",
    gradient: "from-[#2E5EFF] to-[#1E3FCC]",
    infoIcon: "text-[#2E5EFF]",
    infoBg: "bg-[#EAF0FF]",
    cta: "bg-[#2E5EFF]",
    hoverBorder: "hover:border-[#2E5EFF]",
    hoverText: "group-hover:text-[#2E5EFF]",
  },
  Data: {
    badge: "bg-[#E6FBF4] text-[#0E9A78]",
    gradient: "from-[#16C79A] to-[#0E9A78]",
    infoIcon: "text-[#0E9A78]",
    infoBg: "bg-[#E6FBF4]",
    cta: "bg-[#16C79A]",
    hoverBorder: "hover:border-[#16C79A]",
    hoverText: "group-hover:text-[#0E9A78]",
  },
  Finance: {
    badge: "bg-[#E6FBF4] text-[#0E9A78]",
    gradient: "from-[#16C79A] to-[#0E9A78]",
    infoIcon: "text-[#0E9A78]",
    infoBg: "bg-[#E6FBF4]",
    cta: "bg-[#16C79A]",
    hoverBorder: "hover:border-[#16C79A]",
    hoverText: "group-hover:text-[#0E9A78]",
  },
  Design: {
    badge: "bg-[#FFF3DE] text-[#B87700]",
    gradient: "from-[#FFB020] to-[#D18A00]",
    infoIcon: "text-[#B87700]",
    infoBg: "bg-[#FFF3DE]",
    cta: "bg-[#FFB020]",
    hoverBorder: "hover:border-[#FFB020]",
    hoverText: "group-hover:text-[#B87700]",
  },
  Marketing: {
    badge: "bg-[#FFE9E9] text-[#D14747]",
    gradient: "from-[#FF6B6B] to-[#D14747]",
    infoIcon: "text-[#D14747]",
    infoBg: "bg-[#FFE9E9]",
    cta: "bg-[#FF6B6B]",
    hoverBorder: "hover:border-[#FF6B6B]",
    hoverText: "group-hover:text-[#D14747]",
  },
  HR: {
    badge: "bg-[#FFE9E9] text-[#D14747]",
    gradient: "from-[#FF6B6B] to-[#D14747]",
    infoIcon: "text-[#D14747]",
    infoBg: "bg-[#FFE9E9]",
    cta: "bg-[#FF6B6B]",
    hoverBorder: "hover:border-[#FF6B6B]",
    hoverText: "group-hover:text-[#D14747]",
  },
};

const DEFAULT_STYLE = CATEGORY_STYLES.Technology;

export default function CourseCard({ course }: CourseCardProps) {
  const styles = CATEGORY_STYLES[course.category] ?? DEFAULT_STYLE;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E9FB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.25)] ${styles.hoverBorder}`}
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${styles.badge}`}
        >
          {course.category}
        </span>

        <div className="flex items-center gap-1 rounded-full bg-[#FFF3DE] px-2.5 py-1">
          <Star className="h-3.5 w-3.5 fill-[#FFB020] text-[#FFB020]" />
          <span className="text-xs font-black text-[#0F172A]">
            {course.rating}
          </span>
        </div>
      </div>

      {/* Icon */}
      <div
        className={`mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition duration-300 group-hover:scale-110 ${styles.gradient}`}
      >
        <GraduationCap className="h-8 w-8 text-white" />
      </div>

      {/* Title */}
      <h3
        className={`mt-6 text-2xl font-black leading-tight text-[#0F172A] transition-colors ${styles.hoverText}`}
      >
        {course.title}
      </h3>

      {/* Summary */}
      <p className="mt-4 flex-1 text-sm leading-7 text-[#5B6685]">
        {course.summary}
      </p>

      {/* Highlights */}
      <div className="mt-6 flex flex-wrap gap-2">
        {course.highlights.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-lg bg-[#F4F6FF] px-3 py-1 text-xs font-semibold text-[#4B5675]"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Course Info */}
      <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-[#F4F6FF] p-4">
        <div className="flex items-start gap-3">
          <Clock3 className={`mt-1 h-5 w-5 ${styles.infoIcon}`} />

          <div>
            <p className="text-xs font-medium text-[#8892B0]">Duration</p>
            <p className="font-bold text-[#0F172A]">{course.duration}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Laptop className={`mt-1 h-5 w-5 ${styles.infoIcon}`} />

          <div>
            <p className="text-xs font-medium text-[#8892B0]">Mode</p>
            <p className="font-bold text-[#0F172A]">{course.mode}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FolderKanban className={`mt-1 h-5 w-5 ${styles.infoIcon}`} />

          <div>
            <p className="text-xs font-medium text-[#8892B0]">Projects</p>
            <p className="font-bold text-[#0F172A]">{course.projects}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sparkles className={`mt-1 h-5 w-5 ${styles.infoIcon}`} />

          <div>
            <p className="text-xs font-medium text-[#8892B0]">Level</p>
            <p className="font-bold text-[#0F172A]">{course.level}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex items-center justify-between border-t border-[#E4E9FB] pt-6">
        <span className="text-sm font-bold text-[#4B5675]">
          Explore course
        </span>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 ${styles.cta}`}
        >
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
