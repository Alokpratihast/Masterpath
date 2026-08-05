import { Users } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function Eligibility({ course }: Props) {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <Users className="mx-auto h-12 w-12 text-blue-600" />

          <h2 className="mt-6 text-4xl font-black">
            Who Can Join?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {course.eligibility.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white border border-slate-200 p-6 text-lg font-semibold shadow-sm"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}