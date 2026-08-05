import { Building2 } from "lucide-react";

import { hiringPartners } from "@/data/hiringPartners";

import PartnerCard from "./PartnerCard";

export default function HiringPartners() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <Building2 className="h-4 w-4" />
            Hiring Partners
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Trusted By Leading
            <br />
            Companies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our students have received interview opportunities and
            career support for roles across startups, IT services,
            consulting firms, and product companies.
          </p>
        </div>

        {/* Company Grid */}

        <div className="mt-20 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hiringPartners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}