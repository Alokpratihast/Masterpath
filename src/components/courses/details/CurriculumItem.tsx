// "use client";

// import { useState } from "react";
// import { ChevronDown, Clock3, BookOpen } from "lucide-react";
// import type { CurriculumModule } from "@/types/course";

// type CurriculumItemProps = {
//   module: CurriculumModule;
// };

// export default function CurriculumItem({
//   module,
// }: CurriculumItemProps) {
//   const [open, setOpen] = useState(module.id === 1);

//   return (
//     <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
//       >
//         <div>
//           <div className="flex items-center gap-3">
//             <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase text-blue-700">
//               Module {module.id}
//             </span>

//             <div className="flex items-center gap-2 text-sm text-slate-500">
//               <Clock3 className="h-4 w-4" />
//               {module.duration}
//             </div>
//           </div>

//           <h3 className="mt-3 text-xl font-bold text-slate-900">
//             {module.title}
//           </h3>
//         </div>

//         <ChevronDown
//           className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {open && (
//         <div className="border-t border-slate-200 bg-slate-50 px-6 py-6">
//           <div className="grid gap-4 md:grid-cols-2">
//             {module.lessons.map((lesson) => (
//               <div
//                 key={lesson}
//                 className="flex items-center gap-3 rounded-lg bg-white p-3"
//               >
//                 <BookOpen className="h-5 w-5 text-blue-600" />

//                 <span className="text-slate-700">
//                   {lesson}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import {
  ChevronDown,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import type { CurriculumModule } from "@/types/course";

type CurriculumItemProps = {
  module: CurriculumModule;
};

export default function CurriculumItem({
  module,
}: CurriculumItemProps) {
  // Hooks must run unconditionally (Rules of Hooks), so default
  // safely here and guard the render further down instead.
  const [open, setOpen] = useState(module?.id === 1);

  // Guard: if this particular course's data is missing a module
  // (e.g. bad/incomplete entry in the data file), skip rendering
  // instead of crashing the whole page.
  if (!module) return null;

  const lessons = module.lessons ?? [];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? "border-blue-200 shadow-md shadow-blue-100/40"
          : "border-slate-200 shadow-sm hover:border-blue-200"
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        {/* Module Number */}
        <div
          className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all duration-300 ${
            open
              ? "scale-105 bg-blue-600 text-white ring-4 ring-blue-100"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          {String(module.id).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-base font-black text-slate-900 sm:text-lg">
              {module.title}
            </h3>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
              <Clock3 className="h-3.5 w-3.5" />
              {module.duration}
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-400">
            {lessons.length} lessons
          </p>
        </div>

        {/* Arrow */}
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-blue-600 text-white"
              : "bg-slate-50 text-slate-500"
          }`}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Lessons — smooth grid-based expand/collapse animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:px-6">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-colors duration-200 hover:border-blue-200"
                >
                  <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-blue-600" />

                  <span className="text-sm font-medium text-slate-700">
                    {lesson}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
