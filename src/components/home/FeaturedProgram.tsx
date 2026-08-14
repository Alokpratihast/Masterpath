


// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import { ArrowRight, Compass, PackageOpen, Sparkles } from "lucide-react";

// import { courses } from "@/data/courses";
// import CourseCard from "./Coursecard";
// import ProgramTabs from "./ProgramTabs";
// import type { Category } from "@/types/category";

// export default function FeaturedProgram() {
//   const [activeCategory, setActiveCategory] = useState<Category>("All");

//   const filteredCourses = useMemo(() => {
//     let result = courses.filter((course) => course.featured);

//     if (activeCategory !== "All") {
//       result = result.filter((course) => course.category === activeCategory);
//     }

//     return result;
//   }, [activeCategory]);

//   return (
//     <section className="relative overflow-hidden bg-[#F6F8FF] py-24 md:py-32">
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#2E5EFF]/10 blur-[100px]" />

//         <div className="absolute -right-32 top-[35%] h-[450px] w-[450px] rounded-full bg-[#16C79A]/10 blur-[120px]" />

//         <div className="absolute right-[25%] top-0 h-72 w-72 rounded-full bg-[#7C5CFC]/8 blur-[100px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* =====================================================
//             HEADER
//         ====================================================== */}
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
//           {/* Left */}
//           <div className="max-w-3xl">
//             {/* Eyebrow */}
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE4FF] bg-white px-4 py-2 shadow-[0_8px_30px_rgba(46,94,255,0.06)]">
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF0FF]">
//                 <Compass className="h-3.5 w-3.5 text-[#2E5EFF]" />
//               </span>

//               <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#2E5EFF]">
//                 Career Opportunities
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.03em] text-[#0F172A] sm:text-5xl lg:text-6xl">
//               Still Looking for the{" "}
//               <span className="text-[#2E5EFF]">Right Opportunity?</span>
//             </h2>

//             {/* Supporting line */}
//             <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#56617D] md:text-xl">
//               Learn With Us &amp; Get{" "}
//               <span className="font-bold text-[#0F172A]">
//                 In-House Placement Support.
//               </span>
//             </p>

//             <p className="mt-3 max-w-2xl text-base leading-7 text-[#69738D]">
//               Industry-focused training, real-world projects, expert mentors,
//               and career support designed to help you become job-ready.
//             </p>
//           </div>

//           {/* Right CTA */}
//           <div className="shrink-0 lg:pb-2">
//             <Link
//               href="/courses"
//               className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2E5EFF] hover:shadow-[0_16px_35px_rgba(46,94,255,0.22)]"
//             >
//               View all courses

//               <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
//                 <ArrowRight className="h-4 w-4" />
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* =====================================================
//             VALUE STRIP
//         ====================================================== */}
//         <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-[#DDE4F5] py-5">
//           <div className="flex items-center gap-2 text-sm font-semibold text-[#47536F]">
//             <Sparkles className="h-4 w-4 text-[#2E5EFF]" />
//             Industry-focused programs
//           </div>

//           <span className="hidden h-1 w-1 rounded-full bg-[#AAB4CC] sm:block" />

//           <div className="text-sm font-semibold text-[#47536F]">
//             Real-world projects
//           </div>

//           <span className="hidden h-1 w-1 rounded-full bg-[#AAB4CC] sm:block" />

//           <div className="text-sm font-semibold text-[#47536F]">
//             Expert mentors
//           </div>

//           <span className="hidden h-1 w-1 rounded-full bg-[#AAB4CC] sm:block" />

//           <div className="text-sm font-semibold text-[#47536F]">
//             Placement support
//           </div>
//         </div>

//         {/* =====================================================
//             CATEGORY TABS
//         ====================================================== */}
//         <div className="mt-10 flex justify-center">
//           <div className="rounded-2xl border border-[#DDE4F5] bg-white p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
//             <ProgramTabs
//               activeCategory={activeCategory}
//               onChange={setActiveCategory}
//             />
//           </div>
//         </div>

//         {/* =====================================================
//             COURSE CARDS
//         ====================================================== */}
//         <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {filteredCourses.map((course) => (
//             <CourseCard key={course.slug} course={course} />
//           ))}
//         </div>

//         {/* =====================================================
//             EMPTY STATE
//         ====================================================== */}
//         {filteredCourses.length === 0 && (
//           <div className="mt-12 rounded-[28px] border border-[#D9E1F5] bg-white p-12 text-center shadow-[0_15px_50px_rgba(15,23,42,0.06)] md:p-16">
//             <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#2E5EFF]">
//               <PackageOpen className="h-7 w-7" />
//             </div>

//             <h3 className="text-2xl font-black text-[#0F172A]">
//               No courses found
//             </h3>

//             <p className="mx-auto mt-3 max-w-md text-[#68738E]">
//               We&apos;re working on adding more programs in this category.
//             </p>

//             <button
//               onClick={() => setActiveCategory("All")}
//               className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EAF0FF] px-5 py-2.5 text-sm font-bold text-[#2E5EFF] transition hover:bg-[#DDE7FF]"
//             >
//               View all programs
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, PackageOpen, Sparkles } from "lucide-react";

import { courses } from "@/data/courses";
import CourseCard from "./Coursecard";
import ProgramTabs from "./ProgramTabs";
import type { Category } from "@/types/category";

export default function FeaturedProgram() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => course.featured);

    if (activeCategory !== "All") {
      result = result.filter((course) => course.category === activeCategory);
    }

    return result;
  }, [activeCategory]);

  return (
    <section className="relative bg-[#FAFBFF] py-20 md:py-28">
      {/* Flat dot-grid background instead of blurred glow orbs —
          matches the flat/SaaS direction of the redesign */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(#DCE4FF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#DCE4FF] bg-white px-3 py-1.5">
              <Compass className="h-3.5 w-3.5 text-[#2E5EFF]" />

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#2E5EFF]">
                Career Opportunities
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl font-black leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Still looking for the{" "}
              <span className="text-[#2E5EFF]">right opportunity?</span>
            </h2>

            {/* Supporting line */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B6685] md:text-lg">
              Learn with us &amp; get{" "}
              <span className="font-bold text-[#0F172A]">
                in-house placement support.
              </span>{" "}
              Industry-focused training, real-world projects, expert mentors.
            </p>
          </div>

          {/* Right CTA */}
          <div className="shrink-0">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#2E5EFF]"
            >
              View all courses
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* =====================================================
            VALUE STRIP — compact single-line, flat dividers
        ====================================================== */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#E5E9F2] py-4 text-sm font-semibold text-[#47536F]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#2E5EFF]" />
            Industry-focused programs
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-[#C6CEE4] sm:block" />
          <div>Real-world projects</div>

          <span className="hidden h-1 w-1 rounded-full bg-[#C6CEE4] sm:block" />
          <div>Expert mentors</div>

          <span className="hidden h-1 w-1 rounded-full bg-[#C6CEE4] sm:block" />
          <div>In-house Placement support</div>

          
        </div>

        {/* =====================================================
            CATEGORY TABS
        ====================================================== */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-lg border border-[#E5E9F2] bg-white p-1">
            <ProgramTabs
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        {/* =====================================================
            COURSE CARDS
        ====================================================== */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}
        {filteredCourses.length === 0 && (
          <div className="mt-10 rounded-xl border border-[#E5E9F2] bg-white p-12 text-center md:p-16">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#EAF0FF] text-[#2E5EFF]">
              <PackageOpen className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0F172A]">
              No courses found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-[#68738E]">
              We&apos;re working on adding more programs in this category.
            </p>

            <button
              onClick={() => setActiveCategory("All")}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#EAF0FF] px-4 py-2.5 text-sm font-bold text-[#2E5EFF] transition-colors hover:bg-[#DDE7FF]"
            >
              View all programs
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
