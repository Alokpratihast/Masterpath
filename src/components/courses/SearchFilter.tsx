"use client";

import { useState } from "react";

import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import LevelFilter from "./LevelFilter";
import ModeFilter from "./ModeFilter";

import type {
  Category,
  Level,
  Mode,
} from "@/types/filter";

export default function SearchFilter() {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<Category>("All");

  const [level, setLevel] =
    useState<Level>("All");

  const [mode, setMode] =
    useState<Mode>("All");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">
            Find Your Perfect Course
          </h2>

          <p className="mt-3 text-slate-600">
            Search and filter courses based on your interests.
          </p>

          <div className="mt-8">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

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
      </div>
    </section>
  );
}