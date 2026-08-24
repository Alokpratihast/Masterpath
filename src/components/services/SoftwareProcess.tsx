import {
  ArrowDown,
  ArrowRight,
  Code2,
  Compass,
  Layers3,
  PenTool,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";

import { softwareProcess } from "@/data/services";

const iconMap = {
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
};

export default function SoftwareProcess() {
  return (
    <section className="relative overflow-hidden bg-[#06143B] py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#2E5EFF]/20 blur-3xl" />

        {/* Green Glow */}
        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#16C79A]/15 blur-3xl" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7DB1FF]">
            <Code2 className="h-4 w-4" />
            Our Development Process
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Idea
            <span className="bg-gradient-to-r from-[#5EA2FF] to-[#35D9A8] bg-clip-text text-transparent">
              {" "}
              to Impact.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            A structured development process that transforms your idea into a
            reliable, scalable and production-ready digital product.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Desktop Connector */}
          <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-[#2E5EFF]/30 via-[#5EA2FF] to-[#16C79A]/40 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {softwareProcess.map((step, index) => {
              const Icon =
                iconMap[
                  step.icon as keyof typeof iconMap
                ] ?? Code2;

              const isLast =
                index === softwareProcess.length - 1;

              return (
                <div
                  key={step.id}
                  className="group relative"
                >
                  {/* Mobile Connector */}
                  {!isLast && (
                    <div className="absolute bottom-[-22px] left-[27px] top-[72px] w-px bg-gradient-to-b from-blue-400/40 to-transparent sm:hidden" />
                  )}

                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_-30px_rgba(46,94,255,0.5)] lg:p-5">
                    {/* Card Glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E5EFF] to-[#2451E8] text-white shadow-lg shadow-[#2E5EFF]/20 transition-transform duration-500 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-3xl font-black text-white/5">
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative mt-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#5EA2FF]">
                        Phase {step.id}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div className="relative mt-6 flex items-center gap-2">
                      <div className="h-1 w-8 rounded-full bg-[#2E5EFF]" />
                      <div className="h-1 w-4 rounded-full bg-blue-400/30" />
                      <div className="h-1 w-2 rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* Desktop Arrow */}
                  {!isLast && (
                    <div className="absolute -right-3 top-[31px] z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0B2B73] shadow-lg lg:flex">
                      <ArrowRight className="h-3.5 w-3.5 text-[#5EA2FF]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Lifecycle */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#16C79A]/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16C79A]/10">
                  <Layers3 className="h-5 w-5 text-[#35D9A8]" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#35D9A8]">
                    Product Lifecycle
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    Built for today. Ready for tomorrow.
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                We focus on clean architecture, maintainable code, scalable
                infrastructure and a development approach that keeps your
                product ready for future growth.
              </p>
            </div>

            {/* Lifecycle */}
            <div className="flex flex-wrap items-center gap-2 lg:max-w-md lg:justify-end">
              {[
                "Plan",
                "Build",
                "Test",
                "Deploy",
                "Scale",
              ].map((item, index, items) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300">
                    {item}
                  </span>

                  {index < items.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E5EFF] to-[#16C79A] shadow-xl">
            <Rocket className="h-5 w-5 text-white" />
          </div>

          <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
            Ready to build your next product?
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Let&apos;s turn your business requirement or product idea into a
            practical digital solution.
          </p>

          <a
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#16C79A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#16C79A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0FAF87] hover:shadow-xl"
          >
            Start a Project

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Direction Indicator */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 sm:hidden">
          <Compass className="h-4 w-4 text-[#5EA2FF]" />
          Discover → Design → Develop → Deploy → Scale
          <ArrowDown className="h-4 w-4 text-[#35D9A8]" />
        </div>
      </div>
    </section>
  );
}
