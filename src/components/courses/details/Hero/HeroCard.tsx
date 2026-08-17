


import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Laptop,
  IndianRupee,
  Star,
  FolderKanban,
} from "lucide-react";

import type { Course } from "@/types/course";

type HeroCardProps = {
  course: Course;
};

export default function HeroCard({ course }: HeroCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-7">

      <h2 className="text-2xl font-black text-white sm:text-3xl">
        Course Overview
      </h2>

      <div className="mt-6 divide-y divide-white/10">

        {/* Duration */}
        <div className="flex items-center justify-between py-4 first:pt-0">
          <div className="flex items-center gap-3 text-slate-300">
            <Clock3 className="h-5 w-5 text-blue-300" />
            <span>Duration</span>
          </div>

          <span className="font-bold text-white">
            {course.duration}
          </span>
        </div>

        {/* Mode */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-slate-300">
            <Laptop className="h-5 w-5 text-blue-300" />
            <span>Mode</span>
          </div>

          <span className="font-bold text-white">
            {course.mode}
          </span>
        </div>

        {/* Level */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-slate-300">
            <BadgeCheck className="h-5 w-5 text-blue-300" />
            <span>Level</span>
          </div>

          <span className="font-bold text-white">
            {course.level}
          </span>
        </div>

        {/* Projects */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-slate-300">
            <FolderKanban className="h-5 w-5 text-blue-300" />
            <span>Projects</span>
          </div>

          <span className="font-bold text-white">
            {course.projects}+
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-slate-300">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>Rating</span>
          </div>

          <span className="font-bold text-white">
            {course.rating}/5
          </span>
        </div>

        {/* Fees */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-slate-300">
            <IndianRupee className="h-5 w-5 text-blue-300" />
            <span>Fees</span>
          </div>

          <span className="text-2xl font-black text-white">
            {course.price}
          </span>
        </div>
      </div>

      <Link
        href="/contact#contact-form"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
      >
        Enquire Now
        <ArrowRight className="h-5 w-5" />
      </Link>

      <p className="mt-4 text-center text-xs text-slate-400">
        Free career counselling • Placement Assistance
      </p>
    </div>
  );
}