




// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import { ArrowRight, Compass, PackageOpen, Sparkles } from "lucide-react";

// import { courses } from "@/data/courses";
// import CourseCard from "./Coursecard";
// import ProgramTabs from "./ProgramTabs";
// import Marquee from "./Marquee";
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
//     <section className="relative bg-[#FAFBFF] py-20 md:py-28">
//       {/* Flat dot-grid background instead of blurred glow orbs —
//           matches the flat/SaaS direction of the redesign */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "radial-gradient(#DCE4FF 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* =====================================================
//             HEADER
//         ====================================================== */}
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
//           {/* Left */}
//           <div className="max-w-3xl">
//             {/* Eyebrow */}
//             <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#DCE4FF] bg-white px-3 py-1.5">
//               <Compass className="h-3.5 w-3.5 text-[#2E5EFF]" />

//               <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#2E5EFF]">
//                 Career Opportunities
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="max-w-3xl text-3xl font-black leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
//               Still looking for the{" "}
//               <span className="text-[#2E5EFF]">right opportunity?</span>
//             </h2>

//             {/* Supporting line */}
//             <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B6685] md:text-lg">
//               Learn with us &amp; get{" "}
//               <span className="font-bold text-[#0F172A]">
//                 in-house placement support.
//               </span>{" "}
//               Industry-focused training, real-world projects, expert mentors.
//             </p>
//           </div>

//           {/* Right CTA */}
//           <div className="shrink-0">
//             <Link
//               href="/courses"
//               className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#2E5EFF]"
//             >
//               View all courses
//               <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </div>

//         {/* =====================================================
//             VALUE STRIP — auto-scrolling marquee
//         ====================================================== */}
//         <div className="mt-8 flex items-center gap-2 border-y border-[#E5E9F2] py-4">
//           <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#2E5EFF]" />

//           <Marquee
//             items={[
//               "Industry-focused programs",
//               "Real-world projects",
//               "Expert mentors",
//               "In-house Placement support",
//             ]}
//             speed={18}
//           />
//         </div>

//         {/* =====================================================
//             CATEGORY TABS
//         ====================================================== */}
//         <div className="mt-8 flex justify-center">
//           <div className="rounded-lg border border-[#E5E9F2] bg-white p-1">
//             <ProgramTabs
//               activeCategory={activeCategory}
//               onChange={setActiveCategory}
//             />
//           </div>
//         </div>

//         {/* =====================================================
//             COURSE CARDS
//         ====================================================== */}
//         <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//           {filteredCourses.map((course) => (
//             <CourseCard key={course.slug} course={course} />
//           ))}
//         </div>

//         {/* =====================================================
//             EMPTY STATE
//         ====================================================== */}
//         {filteredCourses.length === 0 && (
//           <div className="mt-10 rounded-xl border border-[#E5E9F2] bg-white p-12 text-center md:p-16">
//             <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#EAF0FF] text-[#2E5EFF]">
//               <PackageOpen className="h-6 w-6" />
//             </div>

//             <h3 className="text-xl font-bold text-[#0F172A]">
//               No courses found
//             </h3>

//             <p className="mx-auto mt-2 max-w-md text-[#68738E]">
//               We&apos;re working on adding more programs in this category.
//             </p>

//             <button
//               onClick={() => setActiveCategory("All")}
//               className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#EAF0FF] px-4 py-2.5 text-sm font-bold text-[#2E5EFF] transition-colors hover:bg-[#DDE7FF]"
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
import {
  ArrowRight,
  Compass,
  PackageOpen,
  Sparkles,
} from "lucide-react";

import { courses } from "@/data/courses";
import CourseCard from "./Coursecard";
import ProgramTabs from "./ProgramTabs";
import Marquee from "./Marquee";
import type { Category } from "@/types/category";

export default function FeaturedProgram() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => course.featured);

    if (activeCategory !== "All") {
      result = result.filter(
        (course) => course.category === activeCategory
      );
    }

    return result;
  }, [activeCategory]);

  return (
    <section className="relative bg-[#FAFBFF] py-14 md:py-20">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(#DCE4FF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          {/* Left Content */}
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
              <span className="text-[#2E5EFF]">
                right opportunity?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B6685] md:text-lg">
              Learn with us &amp; get{" "}
              <span className="font-bold text-[#0F172A]">
                in-house placement support.
              </span>{" "}
              Industry-focused training, real-world projects,
              expert mentors.
            </p>
          </div>

          {/* CTA */}
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

        {/* ================= VALUE STRIP ================= */}
        <div className="mt-6 flex items-center gap-2 border-y border-[#E5E9F2] py-3.5">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#2E5EFF]" />

          <Marquee
            items={[
              "Industry-focused programs",
              "Real-world projects",
              "Expert mentors",
              "In-house Placement support",
            ]}
            speed={18}
          />
        </div>

        {/* ================= CATEGORY TABS ================= */}
        <div className="mt-6 flex justify-center">
          <div className="rounded-lg border border-[#E5E9F2] bg-white p-1">
            <ProgramTabs
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        {/* ================= COURSE CARDS ================= */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
            />
          ))}
        </div>

        {/* ================= EMPTY STATE ================= */}
        {filteredCourses.length === 0 && (
          <div className="mt-8 rounded-xl border border-[#E5E9F2] bg-white p-12 text-center md:p-16">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#EAF0FF] text-[#2E5EFF]">
              <PackageOpen className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-[#0F172A]">
              No courses found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-[#68738E]">
              We&apos;re working on adding more programs in this
              category.
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