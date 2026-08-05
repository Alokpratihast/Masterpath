import {
  ArrowRight,
  LucideIcon,
} from "lucide-react";

type SupportCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function SupportCard({
  title,
  description,
  icon: Icon,
}: SupportCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
        <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-2xl font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
        Learn More

        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </div>
  );
}