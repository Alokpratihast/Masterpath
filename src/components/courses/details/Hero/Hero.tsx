

import type { Course } from "@/types/course";
import HeroStats from "./HeroStats";
import HeroCard from "./HeroCard";

type HeroProps = {
  course: Course;
};

export default function Hero({ course }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-10 lg:py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">

        {/* LEFT */}
        <div>
          {/* Category */}
          <span className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            {course.category}
          </span>

          {/* Title */}
          <h1 className="mt-5 max-w-none text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            {course.title}
          </h1>

          {/* Short Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            {course.summary}
          </p>

          {/* Stats */}
          <HeroStats course={course} />

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Enquire Now
              <span>→</span>
            </a>

            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:bg-white/5"
            >
              View Curriculum
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <HeroCard course={course} />
      </div>
    </section>
  );
}