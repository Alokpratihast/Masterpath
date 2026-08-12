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
      className="group relative flex h-full min-h-[285px] flex-col overflow-hidden rounded-3xl border border-[#E1E7F5] bg-white p-7 shadow-[0_15px_45px_-25px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-2 hover:border-[#BFD0FF] hover:shadow-[0_25px_60px_-25px_rgba(46,94,255,0.3)] sm:p-8"
    >
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2E5EFF] via-[#1261C9] to-[#16C79A] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF0FF] text-[#2E5EFF] transition-all duration-300 group-hover:bg-[#2E5EFF] group-hover:text-white group-hover:shadow-[0_10px_25px_-8px_rgba(46,94,255,0.7)] sm:h-16 sm:w-16">
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
        </div>

        {/* Arrow */}
        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#F4F6FF] text-[#2E5EFF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#2E5EFF] group-hover:text-white">
          <span className="text-lg leading-none">→</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-7">
        <h3 className="text-xl font-black tracking-tight text-[#0F172A] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 break-words text-base font-black text-[#2E5EFF] sm:text-lg">
          {value}
        </p>

        <p className="mt-3 max-w-sm text-sm leading-6 text-[#64708B] sm:text-[15px] sm:leading-7">
          {description}
        </p>
      </div>

      {/* Bottom Link */}
      <div className="mt-auto pt-6">
        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2E5EFF] transition-all duration-300 group-hover:gap-3">
          {title === "Call Us"
            ? "Call Now"
            : title === "Email Us"
              ? "Send Email"
              : "Get Directions"}

          <span>→</span>
        </span>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#2E5EFF]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2E5EFF]/10" />
    </Link>
  );
}