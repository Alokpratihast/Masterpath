


import Image from "next/image";
import { studentAchievements } from "@/data/studentAchievements";

export default function StudentAchievements() {
  const slides = [...studentAchievements, ...studentAchievements];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Student Success Stories
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Proof of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Real Success
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Our students are turning practical learning into real-world
            achievements, certifications, and career opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-md">
            <p className="text-2xl font-black text-white">100+</p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Students Trained
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-md">
            <p className="text-2xl font-black text-white">8+</p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Career Domains
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center backdrop-blur-md">
            <p className="text-2xl font-black text-white">100%</p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              Practical Learning
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-16">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent sm:w-32" />

          <div className="achievement-slider overflow-hidden">
            <div className="achievement-track flex w-max gap-6 py-4">
              {slides.map((achievement, index) => (
                <div
                  key={`${achievement.id}-${index}`}
                  className="group w-[280px] shrink-0 sm:w-[330px] lg:w-[360px]"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-400/40 group-hover:bg-white/[0.09]">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
                      <Image
                        src={achievement.image}
                        alt={`${achievement.title} student certificate`}
                        fill
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 330px, 360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Image overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70" />

                      {/* Number */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-xs font-bold text-white backdrop-blur-md">
                        {String(((index % studentAchievements.length) + 1)).padStart(
                          2,
                          "0"
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 pb-4 pt-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-white sm:text-lg">
                            {achievement.title}
                          </h3>

                          <p className="mt-1 text-xs text-slate-400">
                            MasterPath Student Achievement
                          </p>
                        </div>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                          ↗
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Scroll through our students&apos; achievements
          </p>
        </div>
      </div>
    </section>
  );
}