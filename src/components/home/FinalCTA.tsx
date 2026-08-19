import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest backdrop-blur">
            Start Your Career Today
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Ready to Build a Successful Career?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join thousands of students who transformed their careers with
            industry-focused training, live projects, expert mentors, and
            dedicated placement assistance.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
            >
              Explore Courses

              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Book Free Counselling
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <GraduationCap className="mx-auto h-10 w-10 text-emerald-300" />

              <h3 className="mt-5 text-5xl font-black">
                1.1k+
              </h3>

              <p className="mt-2 text-blue-100">
                Students Trained
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <BriefcaseBusiness className="mx-auto h-10 w-10 text-yellow-300" />

              <h3 className="mt-5 text-5xl font-black">
                30+
              </h3>

              <p className="mt-2 text-blue-100">
                Hiring Partners
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <Star className="mx-auto h-10 w-10 fill-yellow-400 text-yellow-400" />

              <h3 className="mt-5 text-5xl font-black">
                4.8★
              </h3>

              <p className="mt-2 text-blue-100">
                Student Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}