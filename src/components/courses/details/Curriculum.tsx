import { BookOpenCheck } from "lucide-react";

import type { Course } from "@/types/course";
import CurriculumItem from "./CurriculumItem";

type CurriculumProps = {
  course: Course;
};

export default function Curriculum({
  course,
}: CurriculumProps) {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <BookOpenCheck className="h-4 w-4" />
            Course Curriculum
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Structured Learning Path
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our curriculum is carefully designed by industry experts
            to help you master every concept through practical
            learning and real-world projects.
          </p>
        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-6">
          {course.curriculum.map((module) => (
            <CurriculumItem
              key={module.id}
              module={module}
            />
          ))}
        </div>
      </div>
    </section>
  );
}