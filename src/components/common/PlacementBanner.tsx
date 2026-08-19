"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";

export default function PlacementBanner() {
  return (
    <div className="relative z-50 overflow-hidden border-b border-[#FFD37A]/30 bg-gradient-to-r from-[#071638] via-[#102A69] to-[#071638]">
      {/* Animated glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-[#2E5EFF]/20 blur-3xl" />
        <div className="absolute right-[15%] top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-[#16C79A]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[52px] max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">

          {/* Icon */}
          <span className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#FFD37A]/30 bg-[#FFD37A]/10 sm:flex">
            <BriefcaseBusiness className="h-4 w-4 text-[#FFD37A]" />
          </span>

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#16C79A]/30 bg-[#16C79A]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#5EEAD4] sm:text-xs">
            <Sparkles className="h-3 w-3" />
            Career Promise
          </span>

          {/* Main Text */}
          <p className="text-xs font-medium text-white sm:text-sm">
            <span className="font-black text-[#FFD37A]">
              100% In-House Placement
            </span>{" "}
            <span className="hidden text-slate-300 sm:inline">
              — Learn • Build • Get Hired
            </span>
          </p>

          {/* CTA */}
          <Link
            href="/contact#contact-form"
            className="group inline-flex items-center gap-1 text-xs font-bold text-white transition-colors hover:text-[#FFD37A] sm:text-sm"
          >
            Talk to us
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}