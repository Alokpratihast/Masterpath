



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ChevronDown,
//   ChevronUp,
//   Clock3,
//   Laptop,
//   FolderKanban,
//   Star,
//   GraduationCap,
//   Sparkles,
//   Code2,
//   BarChart3,
//   Megaphone,
//   Users,
//   LineChart,
//   type LucideIcon,
// } from "lucide-react";

// import type { Course } from "@/types/course";

// type CourseCardProps = {
//   course: Course;
// };

// const CATEGORY_STYLES: Record<
//   string,
//   {
//     accent: string;
//     accentText: string;
//     badgeBg: string;
//     badgeText: string;
//     glow: string;
//     icon: LucideIcon;
//   }
// > = {
//   Technology: {
//     accent: "#2E5EFF",
//     accentText: "text-[#2E5EFF]",
//     badgeBg: "bg-[#EAF0FF]",
//     badgeText: "text-[#2E5EFF]",
//     glow: "rgba(46,94,255,0.30)",
//     icon: Code2,
//   },

//   Development: {
//     accent: "#2E5EFF",
//     accentText: "text-[#2E5EFF]",
//     badgeBg: "bg-[#EAF0FF]",
//     badgeText: "text-[#2E5EFF]",
//     glow: "rgba(46,94,255,0.30)",
//     icon: Code2,
//   },

//   Data: {
//     accent: "#16C79A",
//     accentText: "text-[#0E9A78]",
//     badgeBg: "bg-[#E6FBF4]",
//     badgeText: "text-[#0E9A78]",
//     glow: "rgba(22,199,154,0.28)",
//     icon: BarChart3,
//   },

//   Finance: {
//     accent: "#16C79A",
//     accentText: "text-[#0E9A78]",
//     badgeBg: "bg-[#E6FBF4]",
//     badgeText: "text-[#0E9A78]",
//     glow: "rgba(22,199,154,0.28)",
//     icon: LineChart,
//   },

//   Design: {
//     accent: "#FFB020",
//     accentText: "text-[#B87700]",
//     badgeBg: "bg-[#FFF3DE]",
//     badgeText: "text-[#B87700]",
//     glow: "rgba(255,176,32,0.28)",
//     icon: GraduationCap,
//   },

//   Marketing: {
//     accent: "#FF6B6B",
//     accentText: "text-[#D14747]",
//     badgeBg: "bg-[#FFE9E9]",
//     badgeText: "text-[#D14747]",
//     glow: "rgba(255,107,107,0.28)",
//     icon: Megaphone,
//   },

//   HR: {
//     accent: "#FF6B6B",
//     accentText: "text-[#D14747]",
//     badgeBg: "bg-[#FFE9E9]",
//     badgeText: "text-[#D14747]",
//     glow: "rgba(255,107,107,0.28)",
//     icon: Users,
//   },
// };

// const DEFAULT_STYLE = {
//   accent: "#2E5EFF",
//   accentText: "text-[#2E5EFF]",
//   badgeBg: "bg-[#EAF0FF]",
//   badgeText: "text-[#2E5EFF]",
//   glow: "rgba(46,94,255,0.30)",
//   icon: GraduationCap,
// };

// export default function CourseCard({ course }: CourseCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const styles = CATEGORY_STYLES[course.category] ?? DEFAULT_STYLE;
//   const CategoryIcon = styles.icon;

//   return (
//     <article
//       className="
//         group relative flex h-full flex-col
//         overflow-hidden rounded-[28px]
//         border border-[#E1E7F5]
//         bg-white
//         shadow-[0_12px_35px_rgba(15,23,42,0.06)]
//         transition-all duration-500 ease-out

//         hover:-translate-y-3
//         hover:shadow-[0_30px_70px_rgba(15,23,42,0.16)]
//       "
//       style={
//         {
//           "--card-glow": styles.glow,
//           "--accent": styles.accent,
//         } as React.CSSProperties
//       }
//     >
//       {/* =====================================================
//           ANIMATED GLOW
//       ====================================================== */}

//       <div
//         className="
//           pointer-events-none absolute
//           -right-20 -top-20
//           h-44 w-44
//           rounded-full
//           opacity-0
//           blur-3xl
//           transition-all duration-500
//           group-hover:opacity-100
//         "
//         style={{
//           background: "var(--card-glow)",
//         }}
//       />

//       {/* =====================================================
//           SHINE EFFECT
//       ====================================================== */}

//       <div
//         className="
//           pointer-events-none absolute inset-0 z-20
//           -translate-x-[120%]
//           bg-gradient-to-r
//           from-transparent
//           via-white/30
//           to-transparent
//           skew-x-[-20deg]
//           transition-transform
//           duration-1000
//           group-hover:translate-x-[120%]
//         "
//       />

//       {/* =====================================================
//           TOP VISUAL
//       ====================================================== */}

//       <div
//         className="
//           relative h-[150px]
//           shrink-0
//           overflow-hidden
//         "
//         style={{
//           background: `
//             radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 30%),
//             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.14), transparent 35%),
//             ${styles.accent}
//           `,
//         }}
//       >
//         {/* Grid */}
//         <div
//           className="
//             absolute inset-0
//             opacity-[0.12]
//           "
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//           }}
//         />

//         {/* Decorative circles */}
//         <div
//           className="
//             absolute -right-10 -top-12
//             h-32 w-32
//             rounded-full
//             border border-white/20
//             transition-transform duration-700
//             group-hover:scale-125
//           "
//         />

//         <div
//           className="
//             absolute -left-12 bottom-[-60px]
//             h-36 w-36
//             rounded-full
//             border border-white/10
//             transition-transform duration-700
//             group-hover:scale-125
//           "
//         />

//         {/* Category */}
//         <div className="absolute left-5 top-5">
//           <span
//             className="
//               rounded-full
//               bg-white/15
//               px-3 py-1.5
//               text-[10px]
//               font-black
//               uppercase
//               tracking-[0.14em]
//               text-white
//               backdrop-blur-md
//             "
//           >
//             {course.category}
//           </span>
//         </div>

//         {/* Rating */}
//         <div
//           className="
//             absolute right-5 top-5
//             flex items-center gap-1.5
//             rounded-full
//             bg-white
//             px-3 py-1.5
//             shadow-lg
//           "
//         >
//           <Star className="h-3.5 w-3.5 fill-[#FFB020] text-[#FFB020]" />

//           <span className="text-xs font-black text-[#0F172A]">
//             {course.rating}
//           </span>
//         </div>

//         {/* Floating Icon — now category-specific instead of always GraduationCap */}
//         <div
//           className="
//             absolute left-1/2 top-1/2
//             flex h-[72px] w-[72px]
//             -translate-x-1/2
//             -translate-y-1/2
//             items-center justify-center
//             rounded-[22px]
//             border border-white/30
//             bg-white/15
//             shadow-[0_15px_35px_rgba(0,0,0,0.15)]
//             backdrop-blur-md
//             transition-all duration-500
//             group-hover:scale-110
//             group-hover:rotate-3
//           "
//         >
//           <CategoryIcon
//             className="
//               h-9 w-9
//               text-white
//               transition-transform duration-500
//               group-hover:-rotate-6
//             "
//             strokeWidth={2}
//           />
//         </div>

//         {/* Floating Spark */}
//         <Sparkles
//           className="
//             absolute bottom-5 right-6
//             h-5 w-5
//             text-white/70
//             transition-all duration-500
//             group-hover:rotate-90
//             group-hover:scale-125
//           "
//         />
//       </div>

//       {/* =====================================================
//           BODY
//       ====================================================== */}

//       <div className="relative z-10 flex flex-1 flex-col p-7">

//         {/* Small category indicator */}
//         <div className="flex items-center gap-2">
//           <span
//             className="h-1.5 w-1.5 rounded-full"
//             style={{
//               background: styles.accent,
//             }}
//           />

//           <span
//             className={`text-[11px] font-black uppercase tracking-[0.15em] ${styles.accentText}`}
//           >
//             Career Program
//           </span>
//         </div>

//         {/* Title */}
//         <h3
//           className="
//             mt-3
//             text-[25px]
//             font-black
//             leading-[1.12]
//             tracking-[-0.025em]
//             text-[#0F172A]
//             transition-colors duration-300
//             group-hover:text-[#2E5EFF]
//           "
//         >
//           {course.title}
//         </h3>

//         {/* Description */}
//         <div className="mt-4">
//           <p
//             className={`text-sm leading-7 text-[#5B6685] ${
//               isExpanded ? "" : "line-clamp-3"
//             }`}
//           >
//             {course.summary}
//           </p>

//           <button
//             type="button"
//             onClick={() => setIsExpanded((prev) => !prev)}
//             aria-expanded={isExpanded}
//             className={`
//               mt-2
//               inline-flex
//               items-center
//               gap-1.5
//               text-xs
//               font-black
//               transition-all
//               hover:gap-2.5
//               ${styles.accentText}
//             `}
//           >
//             {isExpanded ? (
//               <>
//                 Read Less
//                 <ChevronUp className="h-3.5 w-3.5" />
//               </>
//             ) : (
//               <>
//                 Read More
//                 <ChevronDown className="h-3.5 w-3.5" />
//               </>
//             )}
//           </button>
//         </div>

//         {/* Highlights */}
//         <div className="mt-6 flex min-h-[50px] flex-wrap content-start gap-2">
//           {course.highlights.slice(0, 3).map((item) => (
//             <span
//               key={item}
//               className="
//                 rounded-full
//                 border border-[#E7EBF5]
//                 bg-[#F8F9FC]
//                 px-3 py-1.5
//                 text-[11px]
//                 font-bold
//                 text-[#4B5675]
//                 transition-all duration-300
//                 group-hover:border-[#D8DFF0]
//                 group-hover:bg-white
//               "
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* =====================================================
//             COURSE INFO
//         ====================================================== */}

//         <div
//           className="
//             mt-6
//             grid grid-cols-2
//             gap-x-5 gap-y-4
//             rounded-[20px]
//             border border-[#E8ECF5]
//             bg-[#F8F9FD]
//             p-4
//             transition-all duration-300
//             group-hover:bg-[#F5F7FC]
//           "
//         >
//           {/* Duration */}
//           <div className="flex items-center gap-2.5">
//             <Clock3
//               className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
//             />

//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
//                 Duration
//               </p>

//               <p className="mt-0.5 text-xs font-black text-[#172033]">
//                 {course.duration}
//               </p>
//             </div>
//           </div>

//           {/* Mode */}
//           <div className="flex items-center gap-2.5">
//             <Laptop
//               className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
//             />

//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
//                 Mode
//               </p>

//               <p className="mt-0.5 text-xs font-black text-[#172033]">
//                 {course.mode}
//               </p>
//             </div>
//           </div>

//           {/* Projects */}
//           <div className="flex items-center gap-2.5">
//             <FolderKanban
//               className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
//             />

//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
//                 Projects
//               </p>

//               <p className="mt-0.5 text-xs font-black text-[#172033]">
//                 {course.projects}
//               </p>
//             </div>
//           </div>

//           {/* Level */}
//           <div className="flex items-center gap-2.5">
//             <Sparkles
//               className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
//             />

//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
//                 Level
//               </p>

//               <p className="mt-0.5 truncate text-xs font-black text-[#172033]">
//                 {course.level}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             CTA
//         ====================================================== */}

//         <div className="mt-7 border-t border-[#E8ECF5] pt-5">
//           <Link
//             href={`/courses/${course.slug}`}
//             className="group/cta flex items-center justify-between"
//           >
//             <div>
//               <span className="block text-xs font-semibold text-[#8993AA]">
//                 Start your journey
//               </span>

//               <span className="mt-0.5 block text-sm font-black text-[#26324A]">
//                 Explore course
//               </span>
//             </div>

//             <span
//               className="
//                 flex h-11 w-11
//                 items-center justify-center
//                 rounded-full
//                 text-white
//                 shadow-lg
//                 transition-all duration-300
//                 group-hover/cta:translate-x-1
//                 group-hover/cta:scale-110
//               "
//               style={{
//                 background: styles.accent,
//                 boxShadow: `0 8px 20px ${styles.glow}`,
//               }}
//             >
//               <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// }


////////////////


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock3,
  Laptop,
  FolderKanban,
  Star,
  GraduationCap,
  Sparkles,
  Code2,
  BarChart3,
  Megaphone,
  Users,
  LineChart,
  type LucideIcon,
} from "lucide-react";

import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

const CATEGORY_STYLES: Record<
  string,
  {
    accent: string;
    accentText: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
    icon: LucideIcon;
  }
> = {
  Technology: {
    accent: "#2E5EFF",
    accentText: "text-[#2E5EFF]",
    badgeBg: "bg-[#EAF0FF]",
    badgeText: "text-[#2E5EFF]",
    glow: "rgba(46,94,255,0.30)",
    icon: Code2,
  },

  Development: {
    accent: "#2E5EFF",
    accentText: "text-[#2E5EFF]",
    badgeBg: "bg-[#EAF0FF]",
    badgeText: "text-[#2E5EFF]",
    glow: "rgba(46,94,255,0.30)",
    icon: Code2,
  },

  Data: {
    accent: "#16C79A",
    accentText: "text-[#0E9A78]",
    badgeBg: "bg-[#E6FBF4]",
    badgeText: "text-[#0E9A78]",
    glow: "rgba(22,199,154,0.28)",
    icon: BarChart3,
  },

  Finance: {
    accent: "#16C79A",
    accentText: "text-[#0E9A78]",
    badgeBg: "bg-[#E6FBF4]",
    badgeText: "text-[#0E9A78]",
    glow: "rgba(22,199,154,0.28)",
    icon: LineChart,
  },

  Design: {
    accent: "#FFB020",
    accentText: "text-[#B87700]",
    badgeBg: "bg-[#FFF3DE]",
    badgeText: "text-[#B87700]",
    glow: "rgba(255,176,32,0.28)",
    icon: GraduationCap,
  },

  Marketing: {
    accent: "#FF6B6B",
    accentText: "text-[#D14747]",
    badgeBg: "bg-[#FFE9E9]",
    badgeText: "text-[#D14747]",
    glow: "rgba(255,107,107,0.28)",
    icon: Megaphone,
  },

  HR: {
    accent: "#FF6B6B",
    accentText: "text-[#D14747]",
    badgeBg: "bg-[#FFE9E9]",
    badgeText: "text-[#D14747]",
    glow: "rgba(255,107,107,0.28)",
    icon: Users,
  },
};

const DEFAULT_STYLE = {
  accent: "#2E5EFF",
  accentText: "text-[#2E5EFF]",
  badgeBg: "bg-[#EAF0FF]",
  badgeText: "text-[#2E5EFF]",
  glow: "rgba(46,94,255,0.30)",
  icon: GraduationCap,
};

export default function CourseCard({ course }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const styles = CATEGORY_STYLES[course.category] ?? DEFAULT_STYLE;

  return (
    <article
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[28px]
        border border-[#E1E7F5]
        bg-white
        shadow-[0_12px_35px_rgba(15,23,42,0.06)]
        transition-all duration-500 ease-out

        hover:-translate-y-3
        hover:shadow-[0_30px_70px_rgba(15,23,42,0.16)]
      "
      style={
        {
          "--card-glow": styles.glow,
          "--accent": styles.accent,
        } as React.CSSProperties
      }
    >
      {/* =====================================================
          ANIMATED GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-20 -top-20
          h-44 w-44
          rounded-full
          opacity-0
          blur-3xl
          transition-all duration-500
          group-hover:opacity-100
        "
        style={{
          background: "var(--card-glow)",
        }}
      />

      {/* =====================================================
          SHINE EFFECT
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0 z-20
          -translate-x-[120%]
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          skew-x-[-20deg]
          transition-transform
          duration-1000
          group-hover:translate-x-[120%]
        "
      />

      {/* =====================================================
          COURSE IMAGE
      ====================================================== */}

      <div className="relative h-[190px] shrink-0 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/45 via-transparent to-transparent" />

        {/* =================================================
            CATEGORY BADGE
        ================================================== */}

        <div className="absolute left-5 top-5">
          <span
            className="
              inline-flex
              rounded-full
              border border-white/25
              bg-black/20
              px-3 py-1.5
              text-[10px]
              font-black
              uppercase
              tracking-[0.14em]
              text-white
              backdrop-blur-md
            "
          >
            {course.category}
          </span>
        </div>

        {/* =================================================
            RATING
        ================================================== */}

        <div
          className="
            absolute right-5 top-5
            flex items-center gap-1.5
            rounded-full
            bg-white
            px-3 py-1.5
            shadow-lg
          "
        >
          <Star className="h-3.5 w-3.5 fill-[#FFB020] text-[#FFB020]" />

          <span className="text-xs font-black text-[#0F172A]">
            {course.rating}
          </span>
        </div>

        {/* =================================================
            HOVER ARROW
        ================================================== */}

        <div
          className="
            absolute
            bottom-5
            right-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/15
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <ArrowRight className="h-4 w-4 -rotate-45" />
        </div>
      </div>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="relative z-10 flex flex-1 flex-col p-7">
        {/* Small category indicator */}

        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: styles.accent,
            }}
          />

          <span
            className={`text-[11px] font-black uppercase tracking-[0.15em] ${styles.accentText}`}
          >
            Career Program
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================== */}

        <h3
          className="
            mt-3
            text-[25px]
            font-black
            leading-[1.12]
            tracking-[-0.025em]
            text-[#0F172A]
            transition-colors duration-300
            group-hover:text-[#2E5EFF]
          "
        >
          {course.title}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <div className="mt-4">
          <p
            className={`text-sm leading-7 text-[#5B6685] ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {course.summary}
          </p>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className={`
              mt-2
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-black
              transition-all
              hover:gap-2.5
              ${styles.accentText}
            `}
          >
            {isExpanded ? (
              <>
                Read Less
                <ChevronUp className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                Read More
                <ChevronDown className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>

        {/* =================================================
            HIGHLIGHTS
        ================================================== */}

        <div className="mt-6 flex min-h-[50px] flex-wrap content-start gap-2">
          {course.highlights.slice(0, 3).map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border border-[#E7EBF5]
                bg-[#F8F9FC]
                px-3 py-1.5
                text-[11px]
                font-bold
                text-[#4B5675]
                transition-all duration-300
                group-hover:border-[#D8DFF0]
                group-hover:bg-white
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* =====================================================
            COURSE INFO
        ====================================================== */}

        <div
          className="
            mt-6
            grid grid-cols-2
            gap-x-5 gap-y-4
            rounded-[20px]
            border border-[#E8ECF5]
            bg-[#F8F9FD]
            p-4
            transition-all duration-300
            group-hover:bg-[#F5F7FC]
          "
        >
          {/* Duration */}

          <div className="flex items-center gap-2.5">
            <Clock3
              className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
                Duration
              </p>

              <p className="mt-0.5 text-xs font-black text-[#172033]">
                {course.duration}
              </p>
            </div>
          </div>

          {/* Mode */}

          <div className="flex items-center gap-2.5">
            <Laptop
              className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
                Mode
              </p>

              <p className="mt-0.5 text-xs font-black text-[#172033]">
                {course.mode}
              </p>
            </div>
          </div>

          {/* Projects */}

          <div className="flex items-center gap-2.5">
            <FolderKanban
              className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
                Projects
              </p>

              <p className="mt-0.5 text-xs font-black text-[#172033]">
                {course.projects}
              </p>
            </div>
          </div>

          {/* Level */}

          <div className="flex items-center gap-2.5">
            <Sparkles
              className={`h-[17px] w-[17px] shrink-0 ${styles.accentText}`}
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#929BB0]">
                Level
              </p>

              <p className="mt-0.5 truncate text-xs font-black text-[#172033]">
                {course.level}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="mt-7 border-t border-[#E8ECF5] pt-5">
          <Link
            href={`/courses/${course.slug}`}
            className="group/cta flex items-center justify-between"
          >
            <div>
              <span className="block text-xs font-semibold text-[#8993AA]">
                Start your journey
              </span>

              <span className="mt-0.5 block text-sm font-black text-[#26324A]">
                Explore course
              </span>
            </div>

            <span
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                text-white
                shadow-lg
                transition-all duration-300
                group-hover/cta:translate-x-1
                group-hover/cta:scale-110
              "
              style={{
                background: styles.accent,
                boxShadow: `0 8px 20px ${styles.glow}`,
              }}
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}