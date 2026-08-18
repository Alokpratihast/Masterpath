import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(#2E5EFF 0.7px, transparent 0.7px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#071A4D] via-[#0B2B73] to-[#06143B] px-6 py-10 shadow-[0_35px_90px_-35px_rgba(7,26,77,0.55)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Decorative Glows */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#2E5EFF]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#16C79A]/15 blur-3xl" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7DB1FF]">
                <Sparkles className="h-4 w-4" />
                Let&apos;s Build Something
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your Next Step
                <span className="block bg-gradient-to-r from-[#5EA2FF] to-[#35D9A8] bg-clip-text text-transparent">
                  Starts Here.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Whether you want to build your career or build a digital
                product, Masterpath is here to help you take the next step.
              </p>
            </div>

            {/* Dual CTA Cards */}
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {/* Education CTA */}
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.09] sm:p-7">
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2E5EFF]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E5EFF]/15">
                    <GraduationCap className="h-6 w-6 text-[#7DB1FF]" />
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#7DB1FF]">
                    For Students & Professionals
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Build Your Career
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                    Learn in-demand skills, work on real projects, prepare for
                    interviews and move confidently toward your career goals.
                  </p>

                  <a
                    href="/courses"
                    className="group/btn mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#071A4D] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Explore Courses

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Software CTA */}
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#16C79A]/20 bg-[#16C79A]/[0.06] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-[#16C79A]/[0.09] sm:p-7">
                {/* Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#16C79A]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16C79A]/10">
                    <Code2 className="h-6 w-6 text-[#35D9A8]" />
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#35D9A8]">
                    For Businesses & Startups
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Build Your Product
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                    Turn your idea into a reliable digital product with modern
                    development, AI, cloud and scalable technology solutions.
                  </p>

                  <a
                    href="/contact"
                    className="group/btn mt-6 inline-flex items-center gap-2 rounded-xl bg-[#16C79A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#16C79A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0FAF87] hover:shadow-xl"
                  >
                    Start a Project

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Trust Row */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-7 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <GraduationCap className="h-4 w-4 text-[#5EA2FF]" />
                Career Development
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Code2 className="h-4 w-4 text-[#35D9A8]" />
                Software Development
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <BriefcaseBusiness className="h-4 w-4 text-[#FFD166]" />
                Industry Focused
              </div>
            </div>
          </div>
        </div>

        {/* Small Closing Statement */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-slate-500">
            Education, technology and opportunity —
            <span className="font-bold text-[#0F172A]">
              {" "}
              connected through Masterpath.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}