import {
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function PlacementSupport({
  course,
}: Props) {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <BriefcaseBusiness className="h-7 w-7 text-blue-600" />
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Placement Support
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Get complete career support to prepare for interviews and
            take the next step toward your career.
          </p>
        </div>

        {/* Support Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {course.placementSupport.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
              </div>

              <h3 className="text-base font-bold text-slate-800">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}