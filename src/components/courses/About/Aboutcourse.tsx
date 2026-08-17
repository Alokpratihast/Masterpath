


import {
  Award,
  FolderKanban,
  Laptop,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

import type { Course } from "@/types/course";
import AboutFeature from "./Aboutfeature";

type AboutCourseProps = {
  course: Course;
};

const FEATURE_ACCENTS = ["blue", "amber", "mint"] as const;

export default function AboutCourse({
  course,
}: AboutCourseProps) {
  const features = [
    {
      title: "Live Projects",
      description:
        "Build real-world projects that strengthen your practical skills and portfolio.",
      Icon: FolderKanban,
    },
    {
      title: "Industry Mentors",
      description:
        "Learn from experienced professionals with practical industry guidance.",
      Icon: Award,
    },
    {
      title: "Placement Support",
      description:
        "Get resume support, mock interviews and complete placement guidance.",
      Icon: Laptop,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Content */}

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT */}

          <div>

            {/* Label */}

            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
              About This Course
            </span>

            {/* Heading */}

            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
              Build Skills That
              <span className="block text-blue-600">
                Move Your Career Forward
              </span>
            </h2>

            {/* About — pull-quote treatment so the course's own pitch reads
                as a statement, not a wall of paragraph text */}

            <div className="relative mt-7 max-w-2xl border-l-4 border-blue-600 bg-blue-50/50 py-4 pl-5 pr-4">
              <Quote className="absolute -top-2 left-3 h-6 w-6 -scale-x-100 text-blue-200" />

              <p className="text-base font-medium leading-8 text-slate-800 sm:text-lg">
                {course.about}
              </p>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {course.description}
            </p>

            {/* Small Highlights */}

            <div className="mt-7 flex flex-wrap gap-3">
              {course.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Image */}

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.35)]">

              <img
                src={course.image}
                alt={course.title}
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[400px]"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

              {/* Image Content */}

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    Masterpath Training
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    {course.title}
                  </h3>
                </div>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-slate-900 shadow-lg">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

              </div>
            </div>

            {/* Floating Stats — glass "Course Snapshot" panel */}

            <div className="absolute -bottom-8 left-5 right-5 overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-xl backdrop-blur-xl sm:left-8 sm:right-8">

              <p className="border-b border-slate-100 px-4 pt-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                Course Snapshot
              </p>

              <div className="grid grid-cols-3">
                <div className="border-r border-slate-200 px-3 py-3 text-center">
                  <p className="text-lg font-black text-slate-900">
                    {course.projects}+
                  </p>

                  <p className="text-[11px] font-semibold text-slate-500">
                    Projects
                  </p>
                </div>

                <div className="border-r border-slate-200 px-3 py-3 text-center">
                  <p className="text-lg font-black text-slate-900">
                    {course.duration}
                  </p>

                  <p className="text-[11px] font-semibold text-slate-500">
                    Duration
                  </p>
                </div>

                <div className="px-3 py-3 text-center">
                  <p className="text-lg font-black text-slate-900">
                    {course.rating}/5
                  </p>

                  <p className="text-[11px] font-semibold text-slate-500">
                    Rating
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid gap-5 md:grid-cols-3 lg:mt-28">

          {features.map((feature, index) => (
            <AboutFeature
              key={feature.title}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              accent={FEATURE_ACCENTS[index % FEATURE_ACCENTS.length]}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
