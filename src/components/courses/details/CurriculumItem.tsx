"use client";

import { useState } from "react";
import { ChevronDown, Clock3, BookOpen } from "lucide-react";
import type { CurriculumModule } from "@/types/course";

type CurriculumItemProps = {
  module: CurriculumModule;
};

export default function CurriculumItem({
  module,
}: CurriculumItemProps) {
  const [open, setOpen] = useState(module.id === 1);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase text-blue-700">
              Module {module.id}
            </span>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock3 className="h-4 w-4" />
              {module.duration}
            </div>
          </div>

          <h3 className="mt-3 text-xl font-bold text-slate-900">
            {module.title}
          </h3>
        </div>

        <ChevronDown
          className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-6">
          <div className="grid gap-4 md:grid-cols-2">
            {module.lessons.map((lesson) => (
              <div
                key={lesson}
                className="flex items-center gap-3 rounded-lg bg-white p-3"
              >
                <BookOpen className="h-5 w-5 text-blue-600" />

                <span className="text-slate-700">
                  {lesson}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}