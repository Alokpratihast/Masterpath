import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { courses } from "@/data/courses";
import CourseCard from "@/components/home/Coursecard";

export default function FeaturedCourses() {
  const featuredCourses = courses.filter(
    (course) => course.featured
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Featured Programs
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Most Popular Courses
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover our most in-demand programs designed by
              industry experts to help students become job-ready.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:gap-3"
          >
            Book Free Counselling

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}