import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Laptop,
  Sparkles,
} from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-600 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#2E5EFF]" />
            What We Do
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Two Capabilities.
            <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
              One Technology Ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64708B] sm:text-lg sm:leading-8">
            Whether you are building your career or building a digital
            product, Masterpath brings education, technology and practical
            expertise together under one ecosystem.
          </p>
        </div>

        {/* Main Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Education Card */}
          <div
            id="education-services"
            className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-[#EEF3FF] via-white to-white p-7 shadow-[0_20px_60px_-30px_rgba(46,94,255,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(46,94,255,0.35)] sm:p-9 lg:p-10"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/15" />

            <div className="relative">
              {/* Top */}
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E5EFF] text-white shadow-xl shadow-[#2E5EFF]/20">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#2E5EFF]">
                  Education
                </span>
              </div>

              {/* Heading */}
              <h3 className="mt-8 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
                Build Skills.
                <span className="block text-[#2E5EFF]">
                  Build Careers.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Practical, industry-focused education designed to help
                students and professionals develop relevant skills, build
                strong portfolios and prepare for career opportunities.
              </p>

              {/* Service List */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: GraduationCap,
                    text: "Professional Training",
                  },
                  {
                    icon: Laptop,
                    text: "Live Project Training",
                  },
                  {
                    icon: BriefcaseBusiness,
                    text: "In-House Placement",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Interview Preparation",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl border border-blue-100/80 bg-white/80 px-4 py-3 transition-colors duration-300 group-hover:border-blue-200"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#2E5EFF]" />

                      <span className="text-sm font-bold text-slate-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/courses"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#2E5EFF] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#2E5EFF]/20 transition-all duration-300 hover:bg-[#2451E8] hover:shadow-xl"
                >
                  Explore Education Services

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-16 rounded-full bg-[#2E5EFF]" />
                <div className="h-1 w-8 rounded-full bg-blue-200" />
                <div className="h-1 w-3 rounded-full bg-blue-100" />
              </div>
            </div>
          </div>

          {/* Software Card */}
          <div
            id="software-services"
            className="group relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-[#ECFDF8] via-white to-white p-7 shadow-[0_20px_60px_-30px_rgba(22,199,154,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(22,199,154,0.35)] sm:p-9 lg:p-10"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-400/15" />

            <div className="relative">
              {/* Top */}
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16C79A] text-white shadow-xl shadow-[#16C79A]/20">
                  <Code2 className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-emerald-100 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0FAF87]">
                  Software
                </span>
              </div>

              {/* Heading */}
              <h3 className="mt-8 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
                Build Products.
                <span className="block text-[#0FAF87]">
                  Scale Businesses.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Modern software solutions designed around your business
                requirements, from websites and applications to AI-powered
                products, SaaS platforms and cloud infrastructure.
              </p>

              {/* Service List */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Code2,
                    text: "Web Development",
                  },
                  {
                    icon: Laptop,
                    text: "Custom Software",
                  },
                  {
                    icon: Sparkles,
                    text: "AI & Automation",
                  },
                  {
                    icon: BriefcaseBusiness,
                    text: "Cloud & DevOps",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl border border-emerald-100/80 bg-white/80 px-4 py-3 transition-colors duration-300 group-hover:border-emerald-200"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#16C79A]" />

                      <span className="text-sm font-bold text-slate-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                   href="#software-companies"
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#16C79A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#16C79A]/20 transition-all duration-300 hover:bg-[#0FAF87] hover:shadow-xl"
                >
                  Explore Software Services

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-16 rounded-full bg-[#16C79A]" />
                <div className="h-1 w-8 rounded-full bg-emerald-200" />
                <div className="h-1 w-3 rounded-full bg-emerald-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm font-semibold text-slate-500">
            Learn. Build. Launch.{" "}
            <span className="font-black text-[#0F172A]">
              One ecosystem for people and businesses.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}