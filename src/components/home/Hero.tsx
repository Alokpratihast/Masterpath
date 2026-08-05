import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  ShieldCheck,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";

const stats: {
  value: string;
  label: string;
  Icon: LucideIcon;
}[] = [
  {
    value: "20+",
    label: "Job-ready Courses",
    Icon: GraduationCap,
  },
  {
    value: "5k+",
    label: "Learners Trained",
    Icon: Users,
  },
  {
    value: "300+",
    label: "Hiring Partners",
    Icon: BriefcaseBusiness,
  },
  {
    value: "4.8/5",
    label: "Student Rating",
    Icon: Award,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-slate-200">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Award className="h-4 w-4" />
            13+ Years of Career-Focused Training
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
            Upgrade your career with
            <span className="block text-blue-700">
              practical, placement-focused courses.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Learn from experienced industry professionals, build real-world
            projects, earn recognized certifications, and receive dedicated
            placement support to confidently launch your career.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800 hover:shadow-xl"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
            >
              Book Free Counselling
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-5 w-5 text-emerald-600" />
              Live Projects
            </div>

            <div className="flex items-center gap-2">
              <CircleCheckBig className="h-5 w-5 text-emerald-600" />
              Industry Mentors
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              Placement Support
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          {/* Decorative Card */}
          <div className="absolute -top-8 right-0 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />

          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="group rounded-3xl border border-slate-200 bg-white/90 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-700">
                  <Icon className="h-7 w-7 text-blue-700 transition group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-slate-900">
                  {value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
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