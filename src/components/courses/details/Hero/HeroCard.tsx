import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Laptop,
  IndianRupee,
} from "lucide-react";

import type { Course } from "@/types/course";

type HeroCardProps = {
  course: Course;
};

export default function HeroCard({
  course,
}: HeroCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
      <h2 className="text-3xl font-black text-white">
        Course Overview
      </h2>

      <div className="mt-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-300">
            <Clock3 className="h-5 w-5 text-blue-300" />

            Duration
          </div>

          <span className="font-bold text-white">
            {course.duration}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-300">
            <Laptop className="h-5 w-5 text-blue-300" />

            Mode
          </div>

          <span className="font-bold text-white">
            {course.mode}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-300">
            <BadgeCheck className="h-5 w-5 text-blue-300" />

            Level
          </div>

          <span className="font-bold text-white">
            {course.level}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-300">
            <IndianRupee className="h-5 w-5 text-blue-300" />

            Fees
          </div>

          <span className="text-2xl font-black text-white">
            {course.price}
          </span>
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Enquire Now

        <ArrowRight className="h-5 w-5" />
      </Link>

      <p className="mt-5 text-center text-sm text-slate-400">
        Free career counselling • Placement Assistance
      </p>
    </div>
  );
}