import CompanyLogo from "./CompanyLogo";
import { hiringPartners } from "@/data/hiringPartners";

export default function HiringPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Hiring Partners
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Trusted by Leading Companies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our students have launched successful careers at startups,
            fast-growing companies, and globally recognized organizations.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {hiringPartners.map((company) => (
            <CompanyLogo
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 rounded-3xl bg-slate-900 px-8 py-10 text-center text-white md:grid-cols-3">
          <div>
            <h3 className="text-5xl font-black text-blue-400">
              300+
            </h3>
            <p className="mt-2 text-slate-300">
              Hiring Partners
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-emerald-400">
              5000+
            </h3>
            <p className="mt-2 text-slate-300">
              Students Trained
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-yellow-400">
              95%
            </h3>
            <p className="mt-2 text-slate-300">
              Placement Success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}