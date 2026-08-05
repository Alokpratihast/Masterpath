import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div>
      <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
        Placement Cell
      </span>

      <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
        Launch Your Career
        <br />
        With Confidence
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
        We don't just teach skills. We prepare you for interviews,
        build your resume, conduct mock interviews and connect you
        with top hiring companies.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Book Free Counselling

          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href="/courses"
          className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
}