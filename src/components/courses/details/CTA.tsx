import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CTA({
  course,
}: Props) {
  return (
    <section className="bg-blue-700 py-28">
      <div className="mx-auto max-w-5xl px-4 text-center">

        <h2 className="text-5xl font-black text-white">
          Ready to Start
          <br />
          {course.title}?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
          Join thousands of students building successful careers with
          NFS MasterPath.
        </p>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105"
          >
            Enquire Now

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}