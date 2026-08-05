import { Award } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function Certification({ course }: Props) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-4 text-center">

        <Award className="mx-auto h-16 w-16 text-yellow-500" />

        <h2 className="mt-8 text-4xl font-black">
          Certification
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          {course.certification}
        </p>
      </div>
    </section>
  );
}