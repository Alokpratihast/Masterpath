import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFF] to-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#2E5EFF]/10 blur-3xl" />

        {/* Green Glow */}
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#16C79A]/10 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E4FF] bg-[#EEF3FF] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2E5EFF] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Education • Technology • Career
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl xl:text-7xl">
              We Build Skills.
              <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
                We Build Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#64708B] sm:text-lg sm:leading-8">
              From industry-focused education and career support to modern
              software development and digital solutions, Masterpath helps
              people and businesses move forward through technology.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#education-services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2E5EFF] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2E5EFF]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2451E8] hover:shadow-xl"
              >
                Explore Education
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#software-services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E5EFF]/30 hover:shadow-lg"
              >
                Explore Software
                <Code2 className="h-4 w-4 text-[#2E5EFF]" />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-[#16C79A]" />
                Industry Focused
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-[#16C79A]" />
                Practical Approach
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-[#16C79A]" />
                End-to-End Support
              </div>
            </div>
          </div>

          {/* RIGHT - Dual Capability Card */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#2E5EFF]/15 via-transparent to-[#16C79A]/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.35)]">
              {/* Top mini header */}
              <div className="flex items-center justify-between rounded-[1.5rem] bg-[#071A4D] px-5 py-4 text-white">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                    Masterpath
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    Education × Technology
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles className="h-5 w-5 text-[#5EA2FF]" />
                </div>
              </div>

              {/* Two Capability Cards */}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {/* Education */}
                <div className="group rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-[#EEF3FF] to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2E5EFF] text-white shadow-lg shadow-[#2E5EFF]/20">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#2E5EFF]">
                    Education
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#0F172A]">
                    Build Skills.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Training, projects, career preparation and placement
                    support.
                  </p>

                  <div className="mt-5 space-y-2">
                    {[
                      "Professional Training",
                      "Live Projects",
                      "Interview Preparation",
                      "In-House Placement",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#2E5EFF]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software */}
                <div className="group rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-[#ECFDF8] to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16C79A] text-white shadow-lg shadow-[#16C79A]/20">
                    <Code2 className="h-5 w-5" />
                  </div>

                  <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0FAF87]">
                    Software
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#0F172A]">
                    Build Solutions.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Modern digital products built for businesses and growing
                    teams.
                  </p>

                  <div className="mt-5 space-y-2">
                    {[
                      "Web Applications",
                      "Custom Software",
                      "AI & Automation",
                      "Cloud & DevOps",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#16C79A]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-3 grid grid-cols-3 divide-x divide-slate-200 rounded-[1.5rem] border border-slate-100 bg-slate-50/80">
                <div className="px-3 py-4 text-center">
                  <p className="text-xl font-black text-[#2E5EFF]">
                    500+
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-500">
                    Students
                  </p>
                </div>

                <div className="px-3 py-4 text-center">
                  <p className="text-xl font-black text-[#16C79A]">
                    30+
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-500">
                    Partners
                  </p>
                </div>

                <div className="px-3 py-4 text-center">
                  <p className="text-xl font-black text-[#F59E0B]">
                    95%
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-500">
                    Success
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <BriefcaseBusiness className="h-4 w-4 text-[#2E5EFF]" />
              </div>

              <div>
                <p className="text-xs font-black text-slate-900">
                  Career + Technology
                </p>
                <p className="text-[10px] font-medium text-slate-500">
                  One ecosystem. Two capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="relative mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}