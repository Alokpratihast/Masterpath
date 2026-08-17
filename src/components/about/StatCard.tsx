


import type { LucideIcon } from "lucide-react";

import CountUp from "@/components/home/Countup";

type StatCardProps = {
  value: string;
  label: string;
  description: string;
  Icon: LucideIcon;
};

export default function StatCard({
  value,
  label,
  description,
  Icon,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      <div className="icon-pulse-wrap relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700">
        <span className="icon-pulse-ring" />
        <Icon className="relative z-10 h-8 w-8 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-8 text-5xl font-black text-blue-700">
        <CountUp value={value} />
      </h3>

      <h4 className="mt-4 text-xl font-bold text-slate-900">
        {label}
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}
