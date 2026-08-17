


"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Route } from "lucide-react";

import { placementJourney } from "@/data/placementJourney";
import JourneyStep from "./JourneyStep";

export default function PlacementJourney() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
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

        {/* Slider controls */}
        <div className="mt-12 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-500">
            {placementJourney.length} steps · scroll or drag to explore
          </p>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByAmount(-340)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-200 hover:border-blue-500 hover:text-blue-600"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollByAmount(340)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-200 hover:border-blue-500 hover:text-blue-600"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal slider */}
        <div
          ref={scrollerRef}
          className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {placementJourney.map((step) => (
            <JourneyStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
