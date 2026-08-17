import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import type { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CTA({
  course,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-700 to-blue-900 py-28">
      {/* Dot-grid texture — matches the flat/SaaS surfaces used elsewhere on the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-100 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Seats filling fast
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
          Ready to Start
          <br />
          {course.title}?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
          Join thousands of students building successful careers with
          NFS MasterPath.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact#contact-form"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Enquire Now
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="tel:+917026543916"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition-colors duration-300 hover:bg-white/10"
          >
            <PhoneCall className="h-5 w-5" />
            Talk to a Counsellor
          </a>
        </div>
      </div>
    </section>
  );
}
