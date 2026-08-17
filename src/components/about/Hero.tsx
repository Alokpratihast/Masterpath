


import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import CountUp from "@/components/home/Countup";

const stats = [
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "5000+", label: "Students Trained", icon: Users },
  { value: "300+", label: "Hiring Partners", icon: BriefcaseBusiness },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-slate-200">
      {/* Background Blur */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left */}

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <Award className="h-4 w-4" />
            About MasterPath
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
            Empowering Careers
            <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Through Practical Learning
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            MasterPath is committed to helping students and professionals
            gain industry-ready skills through expert-led training,
            real-world projects, and dedicated placement support.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact#contact-form"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition-colors duration-300 hover:border-blue-700 hover:text-blue-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats — boxed cards, matching the Placement page hero style */}

          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md sm:p-5"
              >
                <div className="icon-pulse-wrap relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <span className="icon-pulse-ring" />
                  <Icon className="relative z-10 h-4 w-4" />
                </div>

                <h3 className="mt-3 text-2xl font-black text-blue-700 sm:text-3xl">
                  <CountUp value={value} />
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="relative flex items-center justify-center">
          <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50 p-8">
              <div className="icon-pulse-wrap animate-float relative flex h-24 w-24 items-center justify-center rounded-full bg-white/70 text-blue-700">
                <span className="icon-pulse-ring" />
                <Users className="relative z-10 h-12 w-12" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                <CountUp value="5+" /> Years
              </h3>

              <p className="mt-3 max-w-xs text-center leading-7 text-slate-600">
                Building successful careers through
                practical education and industry mentorship.
              </p>

              <div className="mt-10 flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow">
                <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />

                <span className="font-semibold text-slate-900">
                  Placement Focused
                </span>
              </div>

              {/* Mini badge row — mirrors the "GraduationCap" stat card style on Placement hero */}
              <div className="mt-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
                <GraduationCap className="h-3.5 w-3.5 text-blue-600" />
                20+ Job-ready Programs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
