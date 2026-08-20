


import { values } from "@/data/values";
import ValueCard from "./ValueCard";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Core Values
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            The Principles That
            <br />
            Guide Everything We Do
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our values shape the way we teach, mentor, innovate, and support
            every learner throughout their career journey.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              title={value.title}
              description={value.description}
              Icon={value.icon}
              accent={ACCENTS[index % ACCENTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
