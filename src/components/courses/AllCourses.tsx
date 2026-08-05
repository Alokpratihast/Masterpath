"use client";

import { useMemo, useState } from "react";

import { courses } from "@/data/courses";
import CourseCard from "@/components/home/Coursecard";

import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import LevelFilter from "./LevelFilter";
import ModeFilter from "./ModeFilter";

import type {
  Category,
  Level,
  Mode,
} from "@/types/filter";

export default function AllCourses() {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<Category>("All");

  const [level, setLevel] =
    useState<Level>("All");

  const [mode, setMode] =
    useState<Mode>("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        course.category === category;

      const matchesLevel =
        level === "All" ||
        course.level === level;

      const matchesMode =
        mode === "All" ||
        course.mode === mode;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesMode
      );
    });
  }, [search, category, level, mode]);

  return (
    <section
      id="courses"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            All Courses
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Find Your Perfect Course
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Browse our complete collection of
            industry-focused training programs.
          </p>
        </div>

        {/* Filters */}

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <div className="mt-8">
            <CategoryTabs
              active={category}
              onChange={setCategory}
            />
          </div>

          <div className="mt-8">
            <LevelFilter
              active={level}
              onChange={setLevel}
            />
          </div>

          <div className="mt-8">
            <ModeFilter
              active={mode}
              onChange={setMode}
            />
          </div>
        </div>

        {/* Result Count */}

        <div className="mt-10 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">
            Courses
          </h3>

          <p className="text-slate-600">
            {filteredCourses.length} Courses Found
          </p>
        </div>

        {/* Grid */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
            />
          ))}
        </div>

        {/* Empty */}

        {filteredCourses.length === 0 && (
          <div className="mt-20 rounded-3xl border border-dashed border-slate-300 p-16 text-center">
            <h3 className="text-2xl font-bold">
              No Courses Found
            </h3>

            <p className="mt-3 text-slate-600">
              Try changing your search or
              filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}