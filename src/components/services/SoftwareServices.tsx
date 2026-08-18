import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Cloud,
  CodeXml,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

import { softwareServices } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function SoftwareServices() {
  return (
    <section
      id="software-services"
      className="relative overflow-hidden bg-[#071A4D] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#2E5EFF]/20 blur-3xl" />

        {/* Green Glow */}
        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#16C79A]/15 blur-3xl" />

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
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7DB1FF]">
              <Code2 className="h-4 w-4" />
              Software & Technology
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technology That Moves
              <span className="block bg-gradient-to-r from-[#5EA2FF] to-[#35D9A8] bg-clip-text text-transparent">
                Businesses Forward.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              From websites and custom applications to AI-powered solutions,
              SaaS platforms and cloud infrastructure, we build modern digital
              products around real business requirements.
            </p>
          </div>

          {/* Technology Stack Highlight */}
          <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm sm:flex sm:items-center sm:gap-3 lg:mb-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16C79A]/10">
              <Cpu className="h-5 w-5 text-[#35D9A8]" />
            </div>

            <div>
              <p className="text-sm font-black text-white">
                Modern Technology
              </p>

              <p className="mt-0.5 text-xs font-medium text-slate-400">
                Build. Deploy. Scale.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Python",
            "ASP.NET Core",
            "AWS",
            "AI & Automation",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {softwareServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Product Development Banner */}
        <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-[#0B2B73] via-[#0A347F] to-[#083B73] px-6 py-8 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.6)] sm:px-8 sm:py-9">
          {/* Decorative Glows */}
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#2E5EFF]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#16C79A]/15 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            {/* Content */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Layers3 className="h-6 w-6 text-[#5EA2FF]" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#7DB1FF]">
                  Digital Product Development
                </p>

                <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                  Have an idea? Let&apos;s turn it into a product.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  From MVP development to production deployment, our team can
                  help transform your idea into a reliable and scalable digital
                  solution.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16C79A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#16C79A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0FAF87] hover:shadow-xl"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Capability Mini Row */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
            <CodeXml className="h-5 w-5 shrink-0 text-[#5EA2FF]" />

            <div>
              <p className="text-sm font-bold text-white">
                Scalable Development
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Built for growth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
            <BrainCircuit className="h-5 w-5 shrink-0 text-[#35D9A8]" />

            <div>
              <p className="text-sm font-bold text-white">
                AI-Ready Solutions
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Intelligent automation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
            <Cloud className="h-5 w-5 shrink-0 text-[#7DB1FF]" />

            <div>
              <p className="text-sm font-bold text-white">
                Cloud Deployment
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Reliable infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center">
          <Sparkles className="h-4 w-4 text-[#35D9A8]" />

          <p className="text-sm font-medium text-slate-400">
            From idea to production,
            <span className="ml-1 font-bold text-white">
              we build technology that works.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}