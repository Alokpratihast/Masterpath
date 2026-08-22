type BlogHeroProps = {
  title?: string;
  description?: string;
};

export default function BlogHero({
  title = "Learn. Build. Grow.",
  description = "Practical insights, tutorials, technology guides, and career resources to help you build better skills and move forward.",
}: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071B3A] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow - left */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[110px]" />

        {/* Cyan glow - right */}
        <div className="absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-220px] left-1/3 h-[420px] w-[650px] rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.07]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:52px_52px]
          "
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071B3A] to-transparent" />
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[7%] top-1/2 hidden h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

      <div className="pointer-events-none absolute right-[11%] top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

      <div className="pointer-events-none absolute right-[16%] top-1/2 hidden h-[210px] w-[210px] -translate-y-1/2 rounded-full border border-blue-300/20 lg:block" />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          {/* Left content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.9)]" />

              MasterPath Insights
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {/* Accent */}
            <div className="mt-7 h-1 w-16 rounded-full bg-blue-400" />

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-lg sm:leading-8">
              {description}
            </p>

            {/* Topics */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                Technology
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                Development
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                AI & Cloud
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                Career
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden h-[360px] lg:block">
            {/* Central glow */}
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Main glass card */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.07] shadow-2xl backdrop-blur-xl">
              <span className="text-5xl font-extrabold tracking-[-0.05em] text-white">
                MP
              </span>

              <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                Knowledge Hub
              </span>
            </div>

            {/* Floating card - Learn */}
            <div className="absolute left-0 top-12 z-20 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs font-semibold text-white">
                Learn
              </p>

              <p className="mt-1 text-[10px] text-blue-200/70">
                New skills
              </p>
            </div>

            {/* Floating card - Build */}
            <div className="absolute bottom-10 right-0 z-20 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 shadow-xl backdrop-blur-md">
              <p className="text-xs font-semibold text-white">
                Build
              </p>

              <p className="mt-1 text-[10px] text-blue-200/70">
                Real projects
              </p>
            </div>

            {/* Floating card - Grow */}
            <div className="absolute right-10 top-4 z-20 rounded-xl border border-blue-300/10 bg-blue-400/10 px-3 py-2 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-200">
                Grow
              </p>
            </div>

            {/* Decorative dots */}
            <span className="absolute right-20 top-20 h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.9)]" />

            <span className="absolute bottom-8 left-20 h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_14px_rgba(103,232,249,0.6)]" />

            <span className="absolute left-16 top-28 h-1.5 w-1.5 rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
    </section>
  );
}