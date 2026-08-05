import { Trophy } from "lucide-react";

import { successStories } from "@/data/successStories";

import StoryCard from "../../../components/placement/SuccessStories/StoryCard";

export default function SuccessStories() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-700">
            <Trophy className="h-4 w-4" />
            Success Stories
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Students Who
            <br />
            Started Their Careers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our students have successfully started their careers
            with top companies after completing industry-focused
            training and placement preparation.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {successStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
            />
          ))}
        </div>
      </div>
    </section>
  );
}