import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  BookOpen,
  CheckCircle2,
  Cloud,
  CloudCog,
  Code2,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Laptop,
  MessageSquareText,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Target,
  TrendingUp,
  ClipboardCheck,
} from "lucide-react";

import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

const iconMap = {
  GraduationCap,
  Laptop,
  MessageSquareText,
  Compass,
  FileText,
  BriefcaseBusiness,
  Globe,
  Code2,
  Smartphone,
  CloudCog,
  BrainCircuit,
  Cloud,
  Target,
  BookOpen,
  ClipboardCheck,
  Search,
  PenTool,
  Rocket,
  TrendingUp,
};

export default function ServiceCard({
  service,
  index = 0,
}: ServiceCardProps) {
  const Icon =
    iconMap[service.icon as keyof typeof iconMap] ?? Code2;

  const isEducation = service.category === "Education";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[1.75rem]
        border bg-white p-6
        transition-all duration-500
        hover:-translate-y-1
        sm:p-7
        ${
          isEducation
            ? "border-blue-100 hover:border-blue-200 hover:shadow-[0_25px_60px_-25px_rgba(46,94,255,0.28)]"
            : "border-emerald-100 hover:border-emerald-200 hover:shadow-[0_25px_60px_-25px_rgba(22,199,154,0.28)]"
        }
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          pointer-events-none absolute -right-16 -top-16
          h-40 w-40 rounded-full blur-3xl
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
          ${
            isEducation
              ? "bg-blue-500/10"
              : "bg-emerald-400/10"
          }
        `}
      />

      <div className="relative">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          {/* Icon */}
          <div
            className={`
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-2xl text-white shadow-lg
              transition-transform duration-500
              group-hover:scale-105
              ${
                isEducation
                  ? "bg-[#2E5EFF] shadow-[#2E5EFF]/20"
                  : "bg-[#16C79A] shadow-[#16C79A]/20"
              }
            `}
          >
            <Icon className="h-5.5 w-5.5" />
          </div>

          {/* Number */}
          <span
            className={`
              text-xs font-black tracking-[0.16em]
              ${
                isEducation
                  ? "text-blue-200"
                  : "text-emerald-200"
              }
            `}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-xl font-black tracking-tight text-[#0F172A] sm:text-2xl">
            {service.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {service.description}
          </p>
        </div>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div className="mt-6 space-y-2.5">
            {service.features.slice(0, 4).map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2.5"
              >
                <CheckCircle2
                  className={`
                    mt-0.5 h-4 w-4 shrink-0
                    ${
                      isEducation
                        ? "text-[#2E5EFF]"
                        : "text-[#16C79A]"
                    }
                  `}
                />

                <span className="text-xs font-semibold leading-5 text-slate-600">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        {service.technologies &&
          service.technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

        {/* Bottom */}
        <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
          {service.href ? (
            <Link
              href={service.href}
              className={`
                group/link inline-flex items-center gap-2
                text-sm font-bold
                ${
                  isEducation
                    ? "text-[#2E5EFF]"
                    : "text-[#0FAF87]"
                }
              `}
            >
              Explore Service

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          ) : (
            <span
              className={`
                inline-flex items-center gap-2
                text-sm font-bold
                ${
                  isEducation
                    ? "text-[#2E5EFF]"
                    : "text-[#0FAF87]"
                }
              `}
            >
              Explore Service

              <ArrowRight className="h-4 w-4" />
            </span>
          )}

          {/* Category */}
          <span
            className={`
              rounded-full px-2.5 py-1 text-[9px]
              font-black uppercase tracking-[0.12em]
              ${
                isEducation
                  ? "bg-blue-50 text-[#2E5EFF]"
                  : "bg-emerald-50 text-[#0FAF87]"
              }
            `}
          >
            {service.category}
          </span>
        </div>
      </div>
    </article>
  );
}