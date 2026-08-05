import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export default function ValueCard({
  title,
  description,
  Icon,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-700">
        <Icon className="h-8 w-8 text-blue-700 transition group-hover:text-white" />
      </div>

      <h3 className="mt-8 text-2xl font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}