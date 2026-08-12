// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// import { courses } from "@/data/courses";
// import CourseCard from "./Coursecard";
// import ProgramTabs from "./ProgramTabs";
// import type { Category } from "@/types/category";

// export default function FeaturedProgram() {
//   const [activeCategory, setActiveCategory] =
//     useState<Category>("All");

//   const filteredCourses = useMemo(() => {
//     let result = courses.filter((course) => course.featured);

//     if (activeCategory !== "All") {
//       result = result.filter(
//         (course) => course.category === activeCategory
//       );
//     }

//     return result;
//   }, [activeCategory]);

//   return (
//     <section className="relative overflow-hidden bg-slate-50 py-28">
//       {/* Background Decoration */}
//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
//         <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//             Featured Programs
//           </span>

//           <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
//             Choose the Right Career Path
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
//             Industry-focused programs designed to build practical skills,
//             real-world experience, and placement-ready confidence.
//           </p>

//           <div className="mt-8">
//             <Link
//               href="/courses"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
//             >
//               View All Courses
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="mt-14 flex justify-center">
//           <ProgramTabs
//             activeCategory={activeCategory}
//             onChange={setActiveCategory}
//           />
//         </div>

//         {/* Cards */}
//         <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {filteredCourses.map((course) => (
//             <CourseCard
//               key={course.slug}
//               course={course}
//             />
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredCourses.length === 0 && (
//           <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
//             <h3 className="text-2xl font-bold text-slate-900">
//               No courses found
//             </h3>

//             <p className="mt-3 text-slate-600">
//               We're working on adding more programs in this category.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, PackageOpen } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#F4F6FF] py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[15%] top-0 h-64 w-64 rounded-full bg-[#FFB020]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#2E5EFF] shadow-[0_4px_16px_-4px_rgba(15,23,42,0.1)]">
            <Compass className="h-4 w-4" />
            Featured programs
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
            Choose the right career path
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#4B5675]">
            Industry-focused programs designed to build practical skills,
            real-world experience, and placement-ready confidence.
          </p>

          <div className="mt-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#2E5EFF] shadow-sm transition hover:gap-3 hover:bg-[#EAF0FF]"
            >
              View all courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex justify-center">
          <ProgramTabs
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="mt-16 rounded-3xl border-2 border-dashed border-[#C9D3F7] bg-white p-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#2E5EFF]">
              <PackageOpen className="h-7 w-7" />
            </div>

            <h3 className="text-2xl font-black text-[#0F172A]">
              No courses found
            </h3>

            <p className="mt-3 text-[#5B6685]">
              We're working on adding more programs in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
