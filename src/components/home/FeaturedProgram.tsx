"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { courses } from "@/data/courses";
import CourseCard from "./Coursecard";
import ProgramTabs from "./ProgramTabs";
import type { Category } from "@/types/category";

export default function FeaturedProgram() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => course.featured);

    if (activeCategory !== "All") {
      result = result.filter(
        (course) => course.category === activeCategory
      );
    }

    return result;
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Featured Programs
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Choose the Right Career Path
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Industry-focused programs designed to build practical skills,
            real-world experience, and placement-ready confidence.
          </p>

          <div className="mt-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex justify-center">
          <ProgramTabs
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              No courses found
            </h3>

            <p className="mt-3 text-slate-600">
              We're working on adding more programs in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}