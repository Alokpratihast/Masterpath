import Image from "next/image";
import type { SoftwareCompany } from "@/types/service";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type CompanyLogoProps = {
  company: SoftwareCompany;
};

export default function CompanyLogo({
  company,
}: CompanyLogoProps) {
  return (
    <a
      href={company.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_-25px_rgba(46,94,255,0.28)]"
    >
      {/* Hover Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
          Live Project
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      {/* Logo */}
      <div className="relative z-10 mt-6 flex h-28 items-center justify-center rounded-2xl bg-slate-50/70 px-6 transition-all duration-500 group-hover:bg-blue-50/50">
        <Image
          src={company.logo}
          alt={company.name}
          width={220}
          height={100}
          unoptimized
          className="max-h-20 w-auto max-w-[190px] object-contain opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        />
      </div>

      {/* Info */}
      <div className="relative z-10 mt-5">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-center text-lg font-extrabold tracking-tight text-slate-900">
            {company.name}
          </h3>

          <ExternalLink className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-blue-600" />
        </div>

        {company.description && (
          <p className="mt-1 text-center text-xs font-medium text-slate-400">
            {company.description}
          </p>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-20" />

      {/* CTA */}
      <div className="mt-4 text-center text-xs font-bold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
        Visit Live Project →
      </div>
    </a>
  );
}