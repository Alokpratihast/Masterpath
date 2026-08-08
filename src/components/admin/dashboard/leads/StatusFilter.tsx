"use client";

import { Filter } from "lucide-react";

export type LeadStatusFilter =
  | "ALL"
  | "NEW"
  | "CONTACTED"
  | "CLOSED";

interface StatusFilterProps {
  value: LeadStatusFilter;
  onChange: (value: LeadStatusFilter) => void;
}

const statusOptions: {
  label: string;
  value: LeadStatusFilter;
}[] = [
  {
    label: "All Leads",
    value: "ALL",
  },
  {
    label: "New",
    value: "NEW",
  },
  {
    label: "Contacted",
    value: "CONTACTED",
  },
  {
    label: "Closed",
    value: "CLOSED",
  },
];

export default function StatusFilter({
  value,
  onChange,
}: StatusFilterProps) {
  return (
    <div className="relative w-full sm:w-64">
      {/* Icon */}
      <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      {/* Select */}
      <select
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value as LeadStatusFilter
          )
        }
        className="h-12 w-full appearance-none rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      >
        {statusOptions.map((status) => (
          <option
            key={status.value}
            value={status.value}
          >
            {status.label}
          </option>
        ))}
      </select>
    </div>
  );
}