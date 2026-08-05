import { FolderKanban } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function Projects({ course }: Props) {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <FolderKanban className="h-4 w-4" />
            Live Projects
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Build Real Industry Projects
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.projectsList.map((project) => (
            <div
              key={project}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <FolderKanban className="h-10 w-10 text-blue-600" />

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {project}
              </h3>

              <p className="mt-3 text-slate-600">
                Industry-oriented implementation with complete guidance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}