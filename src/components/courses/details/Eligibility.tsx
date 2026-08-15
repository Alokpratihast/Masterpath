import { Users, CheckCircle2 } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function Eligibility({ course }: Props) {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <Users className="h-7 w-7 text-blue-600" />
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Who Can Join?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            This course is designed for learners from different backgrounds
            who want to build practical, industry-ready skills.
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {course.eligibility.map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
              </div>

              <span className="text-base font-bold text-slate-800">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}