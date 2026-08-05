import {
  Star,
  Laptop,
  Clock3,
  GraduationCap,
} from "lucide-react";

import type { Course } from "@/types/course";

type HeroStatsProps = {
  course: Course;
};

export default function HeroStats({
  course,
}: HeroStatsProps) {
  const stats = [
    {
      icon: Star,
      value: course.rating,
      label: "Rating",
    },
    {
      icon: Laptop,
      value: `${course.projects}+`,
      label: "Projects",
    },
    {
      icon: Clock3,
      value: course.duration,
      label: "Duration",
    },
    {
      icon: GraduationCap,
      value: course.level,
      label: "Level",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
        >
          <Icon className="h-7 w-7 text-blue-300" />

          <h3 className="mt-4 text-2xl font-black text-white">
            {value}
          </h3>

          <p className="mt-1 text-sm text-slate-300">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}