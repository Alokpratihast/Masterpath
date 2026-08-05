import type { Course } from "@/types/course";
import HeroStats from "./HeroStats";
import HeroCard from "./HeroCard";

type HeroProps = {
  course: Course;
};

export default function Hero({
  course,
}: HeroProps) {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">

        {/* Left */}

        <div>
          {/* Category */}

          <span className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
            {course.category}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white">
            {course.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {course.summary}
          </p>

          <HeroStats course={course} />
        </div>

        {/* Right */}

        <HeroCard course={course} />
      </div>
    </section>
  );
}