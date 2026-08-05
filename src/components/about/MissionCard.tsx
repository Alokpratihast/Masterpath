import type { LucideIcon } from "lucide-react";

type MissionCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: "blue" | "emerald";
};

export default function MissionCard({
  title,
  description,
  Icon,
  color,
}: MissionCardProps) {
  const bg =
    color === "blue"
      ? "bg-blue-50 group-hover:bg-blue-700"
      : "bg-emerald-50 group-hover:bg-emerald-700";

  const icon =
    color === "blue"
      ? "text-blue-700 group-hover:text-white"
      : "text-emerald-700 group-hover:text-white";

  const border =
    color === "blue"
      ? "hover:border-blue-600"
      : "hover:border-emerald-600";

  return (
    <div
      className={`group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${border}`}
    >
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-2xl transition ${bg}`}
      >
        <Icon
          className={`h-10 w-10 transition ${icon}`}
        />
      </div>

      <h3 className="mt-8 text-3xl font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}