




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
      icon: Clock3,
      value: course.duration,
      label: "Duration",
    },
    {
      icon: Laptop,
      value: course.mode,
      label: "Mode",
    },
    {
      icon: GraduationCap,
      value: course.level,
      label: "Level",
    },
    {
      icon: Star,
      value: `${course.rating}/5`,
      label: "Rating",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
            <Icon className="h-5 w-5 text-blue-300" />
          </div>

          <div>
            <p className="text-sm font-bold text-white">
              {value}
            </p>

            <p className="text-xs text-slate-400">
              {label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}