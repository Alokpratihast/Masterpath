import { Award, CheckCircle2 } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function Certification({ course }: Props) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
          <Award className="h-7 w-7 text-yellow-500" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Certification
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          {course.certification}
        </p>

        {/* Certification highlight */}
        <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-amber-100 bg-amber-50/60 px-5 py-4">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

          <span className="text-sm font-semibold text-slate-700 sm:text-base">
            Get certified after successfully completing the course.
          </span>
        </div>

      </div>
    </section>
  );
}
