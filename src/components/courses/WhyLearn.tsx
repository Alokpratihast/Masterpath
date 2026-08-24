import { courseBenefits } from "@/data/courseBenefits";
import FeatureCard from "./FeatureCard";

export default function WhyLearn() {
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
            Why Learn With MasterPath
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Everything You Need
            <br />
            To Become Job Ready
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We don&apos;t just teach technologies. We help students develop
            practical skills, industry confidence, and career-ready
            experience through comprehensive training.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courseBenefits.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}