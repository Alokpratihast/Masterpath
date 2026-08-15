import { Wrench, Check } from "lucide-react";

import type { Course } from "@/types/course";

type ToolsProps = {
  course: Course;
};

export default function Tools({
  course,
}: ToolsProps) {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            <Wrench className="h-4 w-4" />
            Tools & Technologies
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Learn Industry Standard Tools
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Build practical experience with the same tools and
            technologies used by professional teams.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.tools.map((tool) => (
            <div
              key={tool}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
            >
              {/* Left accent bar — appears on hover */}
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-y-100" />

              <div className="icon-pulse-wrap relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600">
                <span className="icon-pulse-ring" />

                <Check className="relative z-10 h-6 w-6 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold text-slate-900">
                  {tool}
                </h3>

                <p className="text-sm text-slate-500">
                  Practical hands-on training
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
