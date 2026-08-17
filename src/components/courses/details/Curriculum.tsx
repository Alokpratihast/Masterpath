

import { BookOpen, Layers, ListChecks, Sparkles } from "lucide-react";
import type { Course } from "@/types/course";
import CurriculumItem from "./CurriculumItem";
import CourseEnquiryForm from "./CourseEnquiryForm";

type CurriculumProps = {
  course: Course;
};

export default function Curriculum({
  course,
}: CurriculumProps) {
  // Guard: some course entries in the data file may not have a
  // curriculum array yet — fall back to an empty array instead of
  // crashing the page.
  const curriculum = course.curriculum ?? [];

  const moduleCount = curriculum.length;

  const lessonCount = curriculum.reduce((total, module: any) => {
    const lessons = module?.lessons ?? module?.topics ?? [];
    return total + (Array.isArray(lessons) ? lessons.length : 0);
  }, 0);

  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        {/* Right Glow */}
        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-3xl" />
        {/* Bottom Glow */}
        <div className="absolute bottom-[-180px] left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="icon-pulse-wrap relative inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            <BookOpen className="h-4 w-4" />
            Course Curriculum
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A Structured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A practical, industry-focused curriculum designed to help
            you build real-world skills and become job-ready.
          </p>

          {/* Quick stats strip */}
          {moduleCount > 0 && (
            <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                <Layers className="h-4 w-4 text-blue-600" />
                {moduleCount} Modules
              </div>

              {lessonCount > 0 && (
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                  <ListChecks className="h-4 w-4 text-emerald-600" />
                  {lessonCount}+ Lessons
                </div>
              )}

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Hands-on Projects
              </div>
            </div>
          )}
        </div>

        {/* Curriculum + Form */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* LEFT - Curriculum, with a connecting timeline line behind the cards */}
          <div className="relative space-y-4 pl-2">
            {moduleCount > 0 && (
              <div className="absolute bottom-4 left-[22px] top-4 hidden w-px bg-gradient-to-b from-blue-300 via-slate-300 to-transparent sm:block" />
            )}

            {moduleCount > 0 ? (
              curriculum.map((module) => (
                <CurriculumItem
                  key={module?.id ?? Math.random()}
                  module={module}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm font-medium text-slate-500">
                Curriculum details for this course are coming soon.
              </div>
            )}
          </div>

          {/* RIGHT - Enquiry Form, wrapped in a subtle glow card */}
          <aside className="lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-400/30 via-cyan-300/20 to-transparent blur-xl" />

              <div className="relative rounded-3xl border border-white bg-white/80 p-1 shadow-xl backdrop-blur-sm">
                <CourseEnquiryForm
                  courseName={course.title}
                  brochure={course.brochure}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
