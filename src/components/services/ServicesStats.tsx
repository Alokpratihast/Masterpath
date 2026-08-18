import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

import { servicesStats } from "@/data/services";

const iconMap = [
  GraduationCap,
  BriefcaseBusiness,
  Users,
  BarChart3,
];

export default function ServicesStats() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#2E5EFF]/8 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#16C79A]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          {/* LEFT — Main Statement */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#071A4D] via-[#0B2B73] to-[#06143B] p-7 shadow-[0_25px_70px_-30px_rgba(7,26,77,0.5)] sm:p-9 lg:p-10">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2E5EFF]/20 blur-3xl" />

            <div className="relative flex h-full flex-col">
              {/* Badge */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#7DB1FF]">
                <Sparkles className="h-3.5 w-3.5" />
                Our Impact
              </span>

              {/* Heading */}
              <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                Built Around
                <span className="block bg-gradient-to-r from-[#5EA2FF] to-[#35D9A8] bg-clip-text text-transparent">
                  Real Outcomes.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                Whether it&apos;s helping learners become job-ready or helping
                businesses build digital products, our focus remains on
                practical outcomes and measurable value.
              </p>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-white/10" />

              {/* Mini Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E5EFF]/10">
                    <GraduationCap className="h-4 w-4 text-[#5EA2FF]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Career Focused
                    </p>

                    <p className="text-xs text-slate-400">
                      Skills, projects and placement support
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16C79A]/10">
                    <BarChart3 className="h-4 w-4 text-[#35D9A8]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Technology Driven
                    </p>

                    <p className="text-xs text-slate-400">
                      Modern solutions built for real requirements
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="mt-auto pt-10">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold leading-6 text-slate-300">
                    &quot;Learn with purpose. Build with technology. Grow with
                    confidence.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div className="grid gap-5 sm:grid-cols-2">
            {servicesStats.map((stat, index) => {
              const Icon = iconMap[index] ?? BarChart3;

              const isGreen =
                index === 1 || index === 3;

              return (
                <div
                  key={stat.label}
                  className={`
                    group relative overflow-hidden rounded-[1.75rem]
                    border bg-white p-6
                    shadow-[0_15px_45px_-25px_rgba(15,23,42,0.25)]
                    transition-all duration-500
                    hover:-translate-y-1
                    sm:p-7
                    ${
                      isGreen
                        ? "border-emerald-100 hover:border-emerald-200 hover:shadow-[0_25px_55px_-25px_rgba(22,199,154,0.3)]"
                        : "border-blue-100 hover:border-blue-200 hover:shadow-[0_25px_55px_-25px_rgba(46,94,255,0.3)]"
                    }
                  `}
                >
                  {/* Glow */}
                  <div
                    className={`
                      pointer-events-none absolute -right-12 -top-12
                      h-32 w-32 rounded-full blur-3xl
                      opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                      ${
                        isGreen
                          ? "bg-emerald-400/10"
                          : "bg-blue-500/10"
                      }
                    `}
                  />

                  <div className="relative">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`
                          flex h-11 w-11 items-center justify-center
                          rounded-xl
                          ${
                            isGreen
                              ? "bg-emerald-50 text-[#16C79A]"
                              : "bg-blue-50 text-[#2E5EFF]"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowUpRight
                        className={`
                          h-5 w-5 transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          ${
                            isGreen
                              ? "text-emerald-200"
                              : "text-blue-200"
                          }
                        `}
                      />
                    </div>

                    {/* Value */}
                    <div className="mt-7">
                      <p
                        className={`
                          text-4xl font-black tracking-tight sm:text-5xl
                          ${
                            isGreen
                              ? "text-[#0FAF87]"
                              : "text-[#2E5EFF]"
                          }
                        `}
                      >
                        {stat.value}
                      </p>

                      <h3 className="mt-2 text-lg font-black text-[#0F172A]">
                        {stat.label}
                      </h3>

                      {stat.description && (
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {stat.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-7 flex items-center gap-2">
                      <div
                        className={`
                          h-1 w-10 rounded-full
                          ${
                            isGreen
                              ? "bg-[#16C79A]"
                              : "bg-[#2E5EFF]"
                          }
                        `}
                      />

                      <div className="h-1 w-5 rounded-full bg-slate-100" />

                      <div className="h-1 w-2 rounded-full bg-slate-100" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <BriefcaseBusiness className="h-4.5 w-4.5 text-[#2E5EFF]" />
            </div>

            <div>
              <p className="text-sm font-black text-[#0F172A]">
                Focused on long-term success
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                Building careers and technology with a practical approach.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#16C79A]" />
            Education + Technology
          </div>
        </div>
      </div>
    </section>
  );
}