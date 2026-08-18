import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Industry Focused",
    description:
      "Our learning programs and technology solutions are designed around practical industry requirements rather than theory alone.",
    icon: Target,
  },
  {
    number: "02",
    title: "Practical Approach",
    description:
      "We focus on hands-on learning, real projects, usable products and solutions that create meaningful outcomes.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "From learning and career preparation to product development and deployment, we support the complete journey.",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Technology First",
    description:
      "We use modern technologies and development practices to build relevant skills and scalable digital solutions.",
    icon: Code2,
  },
];

export default function WhyMasterpath() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-10 h-[450px] w-[450px] rounded-full bg-[#2E5EFF]/7 blur-3xl" />

        <div className="absolute -right-48 bottom-10 h-[450px] w-[450px] rounded-full bg-[#16C79A]/7 blur-3xl" />

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
        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* LEFT — Brand Statement */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#071A4D] via-[#0B2B73] to-[#06143B] p-7 shadow-[0_30px_80px_-35px_rgba(7,26,77,0.5)] sm:p-9 lg:p-10">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2E5EFF]/20 blur-3xl" />

            <div className="relative flex h-full flex-col">
              {/* Badge */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#7DB1FF]">
                <Sparkles className="h-3.5 w-3.5" />
                Why Masterpath
              </span>

              {/* Heading */}
              <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                More Than a
                <span className="block bg-gradient-to-r from-[#5EA2FF] to-[#35D9A8] bg-clip-text text-transparent">
                  Service Provider.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Masterpath brings education and technology together to create
                practical outcomes — helping people develop the right skills
                and helping businesses build the right digital solutions.
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Two Pillars */}
              <div className="space-y-4">
                {/* Education */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/[0.08]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2E5EFF]/10">
                      <GraduationCap className="h-5 w-5 text-[#5EA2FF]" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-white">
                        Education
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Skills, projects, interview preparation and career
                        support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/[0.08]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#16C79A]/10">
                      <Code2 className="h-5 w-5 text-[#35D9A8]" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-white">
                        Technology
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Modern software, AI, cloud and digital product
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Statement */}
              <div className="mt-auto pt-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#35D9A8]" />

                  <p className="text-xs font-semibold text-slate-300">
                    Practical thinking. Modern technology. Real outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Reasons */}
          <div>
            {/* Header */}
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2E5EFF]">
                The Masterpath Difference
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
                Built Around What
                <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
                  Actually Matters.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                We combine practical expertise, modern technology and
                outcome-focused execution to create value that goes beyond a
                single course or project.
              </p>
            </div>

            {/* Reasons */}
            <div className="mt-8 space-y-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-400 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(46,94,255,0.25)] sm:p-6"
                  >
                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-500/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex gap-4 sm:gap-5">
                      {/* Number */}
                      <div className="hidden shrink-0 pt-1 sm:block">
                        <span className="text-xs font-black tracking-[0.16em] text-slate-200">
                          {reason.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2E5EFF] transition-all duration-300 group-hover:bg-[#2E5EFF] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-lg font-black text-[#0F172A]">
                            {reason.title}
                          </h4>

                          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-200 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2E5EFF]" />
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Mini Banner */}
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-blue-50 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <Sparkles className="h-4 w-4 text-[#16C79A]" />
              </div>

              <div>
                <p className="text-sm font-black text-[#0F172A]">
                  One ecosystem. Multiple possibilities.
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Learn skills, build products and create what comes next.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Principle */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Our Principle
              </p>

              <p className="mt-2 text-lg font-black text-[#0F172A] sm:text-xl">
                Don&apos;t just learn technology.
                <span className="text-[#2E5EFF]">
                  {" "}
                  Use it to create something meaningful.
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2E5EFF]" />
              <span className="h-2 w-2 rounded-full bg-[#16C79A]" />
              <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}