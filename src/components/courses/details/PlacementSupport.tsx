import { BriefcaseBusiness } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function PlacementSupport({
  course,
}: Props) {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-6xl px-4">

        <div className="text-center">
          <BriefcaseBusiness className="mx-auto h-12 w-12 text-blue-600" />

          <h2 className="mt-6 text-4xl font-black">
            Placement Support
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {course.placementSupport.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="font-bold text-xl">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}