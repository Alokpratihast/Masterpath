import { Building2 } from "lucide-react";

import { hiringPartners } from "@/data/hiringPartners";
import PartnerCard from "./PartnerCard";

export default function HiringPartners() {
  // Split into two rows and duplicate each for seamless marquee loop
  const mid = Math.ceil(hiringPartners.length / 2);

  const rowOne = [
    ...hiringPartners.slice(0, mid),
    ...hiringPartners.slice(0, mid),
  ];

  const rowTwo = [
    ...hiringPartners.slice(mid),
    ...hiringPartners.slice(mid),
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFF] to-white py-20 sm:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#2E5EFF]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(#2E5EFF 0.7px, transparent 0.7px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9E4FF] bg-[#EEF3FF] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2E5EFF] shadow-sm sm:text-sm">
            <Building2 className="h-4 w-4" />
            Hiring Partners
          </span>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            Trusted By Leading
            <span className="block bg-gradient-to-r from-[#2E5EFF] to-[#16C79A] bg-clip-text text-transparent">
              Companies
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64708B] sm:text-lg sm:leading-8">
            Our students have received interview opportunities and career
            support for roles across startups, IT services, consulting firms,
            and product companies.
          </p>
        </div>
      </div>

      {/* Company Marquee */}
      <div className="relative mt-12 space-y-5">
        {/* Row 1 */}
        <div
          className="group/row1 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="partner-row1-track flex w-max gap-5 sm:gap-6">
            {rowOne.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="w-60 shrink-0 sm:w-64 lg:w-72"
              >
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="group/row2 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="partner-row2-track flex w-max gap-5 sm:gap-6">
            {rowTwo.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="w-60 shrink-0 sm:w-64 lg:w-72"
              >
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-[#071A4D] via-[#0B2B73] to-[#06143B] shadow-[0_25px_70px_-25px_rgba(15,23,42,0.45)] md:grid-cols-3">
          {/* Hiring Partners */}
          <div className="px-6 py-8 text-center sm:px-10">
            <h3 className="text-4xl font-black text-[#5EA2FF] sm:text-5xl">
              30+
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate-300 sm:text-base">
              Hiring Partners
            </p>
          </div>

          {/* Students */}
          <div className="border-y border-white/10 px-6 py-8 text-center md:border-x md:border-y-0 sm:px-10">
            <h3 className="text-4xl font-black text-[#35D9A8] sm:text-5xl">
              1.1k+
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate-300 sm:text-base">
              Students Trained
            </p>
          </div>

          {/* Placement */}
          <div className="px-6 py-8 text-center sm:px-10">
            <h3 className="text-4xl font-black text-[#FFD166] sm:text-5xl">
              95%
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate-300 sm:text-base">
              Placement Success
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Animations */}
      <style>{`
        @keyframes partner-scroll-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes partner-scroll-right {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
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