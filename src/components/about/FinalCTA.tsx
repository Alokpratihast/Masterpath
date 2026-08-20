



import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import CountUp from "@/components/home/Countup";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900" />

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}

        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur">
          <span className="live-dot-wrap relative flex h-2 w-2">
            <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-white" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Join MasterPath
        </span>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Your Career Transformation
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            Starts Here
          </span>
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Whether you're a student, graduate, or working professional,
          MasterPath provides the guidance, practical training, and
          placement support needed to help you achieve your career goals.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/courses"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
          >
            Explore Courses
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/20"
          >
            Contact Our Team
          </Link>
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
            <div className="icon-pulse-wrap relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
              <span className="icon-pulse-ring" />
              <GraduationCap className="relative z-10 h-8 w-8" />
            </div>

            <h3 className="mt-5 text-5xl font-black text-white">
              <CountUp value="1.1k+" />
            </h3>

            <p className="mt-2 text-blue-100">
              Students Trained
            </p>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
            <div className="icon-pulse-wrap relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-yellow-300">
              <span className="icon-pulse-ring" />
              <BriefcaseBusiness className="relative z-10 h-8 w-8" />
            </div>

            <h3 className="mt-5 text-5xl font-black text-white">
              <CountUp value="30+" />
            </h3>

            <p className="mt-2 text-blue-100">
              Hiring Partners
            </p>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
            <div className="icon-pulse-wrap relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
              <span className="icon-pulse-ring" />
              <Users className="relative z-10 h-8 w-8" />
            </div>

            <h3 className="mt-5 text-5xl font-black text-white">
              <CountUp value="5+" />
            </h3>

            <p className="mt-2 text-blue-100">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
