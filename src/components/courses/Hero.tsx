import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  Star,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Professional Courses",
    icon: GraduationCap,
  },
  {
    value: "1.1k+",
    label: "Students Trained",
    icon: Users,
  },
  {
    value: "30+",
    label: "Hiring Partners",
    icon: BriefcaseBusiness,
  },
  {
    value: "4.9",
    label: "Student Rating",
    icon: Star,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Our Programs
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              Courses Designed
              <br />
              For Real Careers
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Gain practical skills through live projects, expert
              mentorship, and industry-focused training that prepares
              you for today's most in-demand careers.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Free Counselling

                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#courses"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Browse Courses
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <Icon className="h-10 w-10 text-blue-300" />

                <h3 className="mt-6 text-5xl font-black text-white">
                  {value}
                </h3>

                <p className="mt-3 text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}