import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { educationServices } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function EducationServices() {
  return (
    <section
      id="education-services-detail"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFF] to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#2E5EFF]/8 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(#2E5EFF 0.7px, transparent 0.7px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2E5EFF] shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Education & Career
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Education That Leads
              <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
                Somewhere.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64708B] sm:text-lg sm:leading-8">
              We go beyond classroom learning. Our education services combine
              practical training, real-world projects, career preparation and
              placement support to help learners become job-ready.
            </p>
          </div>

          {/* Header Side Highlight */}
          <div className="hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:flex sm:items-center sm:gap-3 lg:mb-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Sparkles className="h-5 w-5 text-[#2E5EFF]" />
            </div>

            <div>
              <p className="text-sm font-black text-slate-900">
                Career Focused
              </p>

              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Learn. Practice. Get Hired.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {educationServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-r from-[#071A4D] via-[#0B2B73] to-[#071A4D] px-6 py-7 shadow-[0_20px_60px_-25px_rgba(7,26,77,0.45)] sm:px-8 sm:py-8">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#2E5EFF]/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <BriefcaseBusiness className="h-6 w-6 text-[#5EA2FF]" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-300">
                  Career Support
                </p>

                <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                  Learn skills that move your career forward.
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                  From your first class to interview preparation and placement
                  assistance, we support the complete learning journey.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/courses"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#071A4D] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Courses

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}