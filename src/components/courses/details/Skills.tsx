import {
  CheckCircle2,
  Brain,
} from "lucide-react";

import type { Course } from "@/types/course";

type SkillsProps = {
  course: Course;
};

export default function Skills({
  course,
}: SkillsProps) {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <Brain className="h-4 w-4" />
            Skills You'll Learn
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Master Industry Ready Skills
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn practical technologies and real-world concepts that
            employers expect from modern professionals.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {course.learning.map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-600">
                <CheckCircle2 className="h-7 w-7 text-blue-600 transition group-hover:text-white" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {skill}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Practical implementation with projects,
                assignments and interview preparation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}