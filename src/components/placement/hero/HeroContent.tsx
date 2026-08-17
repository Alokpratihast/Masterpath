


import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroContent() {
  return (
    <div>
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
        <span className="live-dot-wrap relative flex h-2 w-2">
          <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-400" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
        </span>
        Placement Cell
      </span>

      <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
        Launch Your Career
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          With Confidence
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
        We don't just teach skills. We prepare you for interviews,
        build your resume, conduct mock interviews and connect you
        with top hiring companies.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          href="/contact#contact-form"
          className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
        >
          Book Free Counselling
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          href="/courses"
          className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
        >
          Browse Courses
        </Link>
      </div>

      {/* Trust indicators */}
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          100% Placement Support
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Dedicated Career Mentors
        </div>
      </div>
    </div>
  );
}
