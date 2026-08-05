import type { LucideIcon } from "lucide-react";

type JourneyCardProps = {
  step: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export default function JourneyCard({
  step,
  title,
  description,
  Icon,
}: JourneyCardProps) {
  return (
    <div className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      {/* Step Number */}
      <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white shadow-lg">
        {step}
      </div>

      {/* Icon */}
      <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-blue-700">
        <Icon className="h-8 w-8 text-blue-700 transition group-hover:text-white" />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}