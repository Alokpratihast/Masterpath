import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900" />

      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}

        <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur">
          Join MasterPath
        </span>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Your Career Transformation
          <br />
          Starts Here
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
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Explore Courses

            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Contact Our Team
          </Link>
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <GraduationCap className="mx-auto h-10 w-10 text-emerald-300" />

            <h3 className="mt-5 text-5xl font-black text-white">
              5000+
            </h3>

            <p className="mt-2 text-blue-100">
              Students Trained
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <BriefcaseBusiness className="mx-auto h-10 w-10 text-yellow-300" />

            <h3 className="mt-5 text-5xl font-black text-white">
              300+
            </h3>

            <p className="mt-2 text-blue-100">
              Hiring Partners
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <Users className="mx-auto h-10 w-10 text-cyan-300" />

            <h3 className="mt-5 text-5xl font-black text-white">
              13+
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