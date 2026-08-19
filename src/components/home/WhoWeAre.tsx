




import {
  Building2,
  GraduationCap,
  Users,
  Award,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import CountUp from "./Countup";

const credentials: {
  value: string;
  label: string;
  Icon: LucideIcon;
  bg: string;
  fg: string;
  hoverBg: string;
}[] = [
  {
    value: "5+ years",
    label: "Training experience",
    Icon: Award,
    bg: "bg-[#FFB020]/15",
    fg: "text-[#FFC553]",
    hoverBg: "group-hover:bg-[#FFB020]",
  },
  {
    value: "40+",
    label: "Industry mentors",
    Icon: Users,
    bg: "bg-[#FF6B6B]/15",
    fg: "text-[#FF9B9B]",
    hoverBg: "group-hover:bg-[#FF6B6B]",
  },
  {
    value: "30+",
    label: "Hiring partner companies",
    Icon: Building2,
    bg: "bg-[#16C79A]/15",
    fg: "text-[#5FE3C0]",
    hoverBg: "group-hover:bg-[#16C79A]",
  },
  {
    value: "10+",
    label: "Job-ready programs",
    Icon: GraduationCap,
    bg: "bg-[#2E5EFF]/15",
    fg: "text-[#8AA5FF]",
    hoverBg: "group-hover:bg-[#2E5EFF]",
  },
];

const mentorPreview: { initials: string; bg: string }[] = [
  { initials: "AK", bg: "bg-[#2E5EFF]" },
  { initials: "PN", bg: "bg-[#16C79A]" },
  { initials: "RS", bg: "bg-[#FFB020]" },
  { initials: "MJ", bg: "bg-[#FF6B6B]" },
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[30%] top-1/3 h-72 w-72 rounded-full bg-[#FFB020]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left — story */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFB020]/15 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#FFC553]">
              <Sparkles className="h-4 w-4" />
              Who we are
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              Built by mentors who've
              <br />
              actually done the job.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              MasterPath was founded with one goal — close the gap between
              classroom learning and what companies actually hire for. Every
              course is designed and taught by professionals who've worked
              inside the industry, not just around it, so what you learn on
              day one is what you'll use on the job.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-400">
              No recycled slides, no outdated curriculum — just practical,
              project-first training backed by real placement outcomes.
            </p>

            {/* Signature strip: ties "who we are" directly back to hiring outcomes */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <div className="flex -space-x-2.5">
                {mentorPreview.map((m) => (
                  <span
                    key={m.initials}
                    className={`grid h-9 w-9 place-items-center rounded-full border-2 border-[#0F172A] text-xs font-black text-white ${m.bg}`}
                  >
                    {m.initials}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-300">
                Mentors previously at{" "}
                <span className="text-white">TCS, Infosys, Zoho</span> and
                more
              </p>
            </div>
          </div>

          {/* Right — credentials grid */}
          <div className="grid grid-cols-2 gap-5">
            {credentials.map(({ value, label, Icon, bg, fg, hoverBg }) => (
              <div
                key={label}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} transition ${hoverBg}`}
                >
                  <Icon
                    className={`h-7 w-7 ${fg} transition group-hover:text-white`}
                  />
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  <CountUp value={value} />
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
