


import { placementJourney } from "@/data/placementJourney";
import JourneyCard from "./JourneyCard";
import { Route } from "lucide-react";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function PlacementJourney() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FF] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[25%] top-1/2 h-64 w-64 rounded-full bg-[#FF6B6B]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE9E9] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#D14747]">
            <Route className="h-4 w-4" />
            Placement journey
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
            Your journey from learning
            <br />
            to getting hired
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4B5675]">
            We support you throughout every stage of your career journey —
            from choosing the right course to securing your first job.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Desktop zigzag connector — dashed wave instead of a straight line */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-6 hidden w-full lg:block"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            style={{ height: "140px" }}
          >
            <path
              d={Array.from({ length: placementJourney.length })
                .map((_, i) => {
                  const x = (1200 / (placementJourney.length - 1)) * i + 1;
                  const y = i % 2 === 0 ? 20 : 110;
                  return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                })
                .join(" ")}
              fill="none"
              stroke="#B5D4F4"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {placementJourney.map((item, index) => (
              <JourneyCard
                key={item.id}
                step={String(item.id)}
                title={
                  index === placementJourney.length - 1
                    ? "Get inhouse placement"
                    : item.title
                }
                description={item.description}
                Icon={item.icon}
                accent={ACCENTS[index % ACCENTS.length]}
                offset={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
