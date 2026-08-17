


import { Trophy } from "lucide-react";

import { successStories } from "@/data/successStories";

import StoryCard from "../../../components/placement/SuccessStories/StoryCard";

export default function SuccessStories() {
  // duplicate the list so the scroll loop is seamless
  const loopStories = [...successStories, ...successStories];

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

        {/* Cards — auto-scrolling marquee, pauses on hover */}

        <div
          className="group/marquee mt-20 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div className="story-marquee-track flex w-max gap-8">
            {loopStories.map((story, index) => (
              <div key={`${story.id}-${index}`} className="w-[320px] shrink-0 md:w-[360px]">
                <StoryCard story={story} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes story-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .story-marquee-track {
          animation: story-marquee-scroll 40s linear infinite;
        }
        .group\\/marquee:hover .story-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
