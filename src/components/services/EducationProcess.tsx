import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Laptop,
  Target,
} from "lucide-react";

import { educationProcess } from "@/data/services";

const iconMap = {
  Target,
  BookOpen,
  Laptop,
  ClipboardCheck,
  BriefcaseBusiness,
};

export default function EducationProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#2E5EFF 0.7px, transparent 0.7px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2E5EFF] shadow-sm">
            <BookOpen className="h-4 w-4" />
            Learning Journey
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            From Learning
            <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
              To Employment.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64708B] sm:text-lg sm:leading-8">
            Our approach is designed around the complete career journey — from
            understanding your goals to building skills, gaining practical
            experience and becoming ready for the right opportunity.
          </p>
        </div>

        {/* Journey */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-[40px] hidden h-px bg-gradient-to-r from-blue-200 via-[#2E5EFF] to-emerald-200 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {educationProcess.map((step, index) => {
              const Icon =
                iconMap[
                  step.icon as keyof typeof iconMap
                ] ?? Target;

              const isLast =
                index === educationProcess.length - 1;

              return (
                <div
                  key={step.id}
                  className="group relative"
                >
                  {/* Mobile / Tablet Connector */}
                  {!isLast && (
                    <div className="absolute bottom-[-24px] left-[27px] top-[72px] w-px bg-gradient-to-b from-blue-200 to-transparent sm:hidden" />
                  )}

                  {/* Card */}
                  <div className="relative h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_-25px_rgba(15,23,42,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_55px_-25px_rgba(46,94,255,0.3)] lg:p-5">
                    {/* Step Number + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E5EFF] text-white shadow-lg shadow-[#2E5EFF]/20 transition-transform duration-500 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-3xl font-black text-slate-100">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2E5EFF]">
                        Step {step.id}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-[#0F172A]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="h-1 w-8 rounded-full bg-[#2E5EFF]" />
                      <div className="h-1 w-4 rounded-full bg-blue-100" />
                      <div className="h-1 w-2 rounded-full bg-slate-100" />
                    </div>
                  </div>

                  {/* Desktop Arrow */}
                  {!isLast && (
                    <div className="absolute -right-3 top-[31px] z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm lg:flex">
                      <ArrowRight className="h-3.5 w-3.5 text-[#2E5EFF]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Career Outcome */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#071A4D] via-[#0B2B73] to-[#071A4D] px-6 py-8 shadow-[0_25px_70px_-30px_rgba(7,26,77,0.5)] sm:px-8 sm:py-9">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2E5EFF]/20 blur-3xl" />

          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16C79A]/10">
                <CheckCircle2 className="h-6 w-6 text-[#35D9A8]" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#7DB1FF]">
                  The Goal
                </p>

                <h3 className="mt-1 text-xl font-black text-white">
                  Become confident. Become job-ready.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Every stage is designed to move you one step closer to
                  becoming a skilled professional ready for real-world
                  opportunities.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <BriefcaseBusiness className="h-5 w-5 text-[#35D9A8]" />

              <div>
                <p className="text-xs font-black text-white">
                  Career Ready
                </p>

                <p className="text-[10px] text-slate-400">
                  Skills + Projects + Preparation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}