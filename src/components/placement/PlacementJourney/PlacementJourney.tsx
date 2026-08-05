import { Route } from "lucide-react";

import { placementJourney } from "@/data/placementJourney";

import JourneyStep from "./JourneyStep";

export default function PlacementJourney() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <Route className="h-4 w-4" />
            Placement Journey
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Your Journey From Learning
            <br />
            To Getting Hired
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every student follows a structured placement roadmap
            designed to make them industry-ready and confident for
            company interviews.
          </p>
        </div>

        {/* Timeline */}

        <div className="mx-auto mt-20 max-w-4xl space-y-2">
          {placementJourney.map((step, index) => (
            <JourneyStep
              key={step.id}
              step={step}
              isLast={index === placementJourney.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}