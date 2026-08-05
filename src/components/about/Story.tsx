import { CheckCircle2 } from "lucide-react";
import { aboutStory } from "@/data/aboutStory";

export default function Story() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}

        <div className="relative">
          {/* Background Decoration */}

          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-60" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-50 to-emerald-50 shadow-xl">
            <div className="flex h-[520px] flex-col items-center justify-center p-10 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-700 text-5xl font-black text-white">
                MP
              </div>

              <h3 className="mt-8 text-4xl font-black text-slate-900">
                13+ Years
              </h3>

              <p className="mt-4 max-w-sm leading-8 text-slate-600">
                Transforming careers through practical learning,
                expert mentorship, and industry-ready training.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Our Story
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {aboutStory.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {aboutStory.description1}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {aboutStory.description2}
          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {aboutStory.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
              >
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />

                <span className="font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Statistics */}

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-10">
            <div>
              <h3 className="text-4xl font-black text-blue-700">
                13+
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-700">
                5000+
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-700">
                300+
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Hiring Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}