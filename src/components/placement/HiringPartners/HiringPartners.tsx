

import { Building2 } from "lucide-react";

import { hiringPartners } from "@/data/hiringPartners";

import PartnerCard from "./PartnerCard";

export default function HiringPartners() {
  // split into two rows and duplicate each for a seamless loop
  const mid = Math.ceil(hiringPartners.length / 2);
  const rowOne = [...hiringPartners.slice(0, mid), ...hiringPartners.slice(0, mid)];
  const rowTwo = [...hiringPartners.slice(mid), ...hiringPartners.slice(mid)];

  return (
    <section className="relative overflow-hidden bg-white py-20">
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
      </div>

      {/* Company Marquee — two rows scrolling in opposite directions */}
      <div className="relative mt-12 space-y-4">
        {/* Row 1 — scrolls left */}
        <div
          className="group/row1 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="partner-row1-track flex w-max gap-6">
            {rowOne.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="w-56 shrink-0">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div
          className="group/row2 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="partner-row2-track flex w-max gap-6">
            {rowTwo.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="w-56 shrink-0">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partner-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes partner-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .partner-row1-track {
          animation: partner-scroll-left 35s linear infinite;
          will-change: transform;
        }
        .partner-row2-track {
          animation: partner-scroll-right 35s linear infinite;
          will-change: transform;
        }
        .group\\/row1:hover .partner-row1-track,
        .group\\/row2:hover .partner-row2-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
