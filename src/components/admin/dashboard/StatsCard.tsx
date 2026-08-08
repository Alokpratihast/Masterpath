"use client";

import { LucideIcon, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number | string;
  change?: string;
  icon: LucideIcon;
  iconBg?: string;
  iconColor?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        {/* Left Side */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-slate-900">
            {value}
          </h3>

          {change && (
            <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
              <TrendingUp className="h-4 w-4" />
              <span>{change}</span>
            </div>
          )}
        </div>

        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
        >
          <Icon className={`h-7 w-7 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}