import {
  Award,
  BookOpen,
  Clock3,
  FolderKanban,
  Laptop,
  Star,
} from "lucide-react";

import type { Course } from "@/types/course";
import AboutFeature from "./Aboutfeature";

type AboutCourseProps = {
  course: Course;
};

export default function AboutCourse({
  course,
}: AboutCourseProps) {
  const features = [
    {
      title: "Live Projects",
      description:
        "Hands-on practical projects to build your portfolio.",
      Icon: FolderKanban,
    },
    {
      title: "Industry Mentors",
      description:
        "Learn directly from experienced professionals.",
      Icon: Award,
    },
    {
      title: "Practical Curriculum",
      description:
        "Industry-oriented syllabus with real use cases.",
      Icon: BookOpen,
    },
    {
      title: "Placement Support",
      description:
        "Resume building, mock interviews and hiring guidance.",
      Icon: Laptop,
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}

          <div>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
              About Course
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              {course.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {course.about}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {course.description}
            </p>

            <div className="mt-12 grid gap-6">
              {features.map((feature) => (
                <AboutFeature
                  key={feature.title}
                  Icon={feature.Icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="sticky top-24 h-fit rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Course Overview
            </h3>

            <div className="mt-10 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-blue-700" />
                  <span>Duration</span>
                </div>

                <strong>{course.duration}</strong>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Laptop className="text-blue-700" />
                  <span>Mode</span>
                </div>

                <strong>{course.mode}</strong>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FolderKanban className="text-blue-700" />
                  <span>Projects</span>
                </div>

                <strong>{course.projects}+</strong>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500" />
                  <span>Rating</span>
                </div>

                <strong>{course.rating}/5</strong>
              </div>
            </div>

            <button className="mt-12 w-full rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}