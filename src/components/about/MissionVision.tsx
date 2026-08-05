import { missionVision } from "@/data/missionVision";
import MissionCard from "./MissionCard";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Driven by Purpose,
            <br />
            Focused on Your Success
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Everything we do is centered around helping learners gain
            practical knowledge, build confidence, and achieve lasting
            career success.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {missionVision.map((item) => (
            <MissionCard
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}