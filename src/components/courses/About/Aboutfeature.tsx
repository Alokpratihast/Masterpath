import type { LucideIcon } from "lucide-react";

type AboutFeatureProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export default function AboutFeature({
  Icon,
  title,
  description,
}: AboutFeatureProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-600 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
        <Icon className="h-7 w-7 text-blue-700" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}