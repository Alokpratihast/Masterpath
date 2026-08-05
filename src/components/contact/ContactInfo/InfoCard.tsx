import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export default function InfoCard({
  title,
  value,
  description,
  href,
  icon: Icon,
}: InfoCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600">
        <Icon className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-8 text-2xl font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-lg font-semibold text-blue-700">
        {value}
      </p>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Link>
  );
}