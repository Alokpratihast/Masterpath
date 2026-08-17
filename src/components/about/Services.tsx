import {
  GraduationCap,
  Compass,
  BriefcaseBusiness,
  Building2,
  Rocket,
  BadgeCheck,
} from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<
  Accent,
  { bg: string; fg: string; hoverBg: string; hoverBorder: string }
> = {
  blue: {
    bg: "bg-blue-100",
    fg: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    hoverBorder: "hover:border-blue-500",
  },
  amber: {
    bg: "bg-amber-100",
    fg: "text-amber-600",
    hoverBg: "group-hover:bg-amber-500",
    hoverBorder: "hover:border-amber-500",
  },
  mint: {
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
    hoverBorder: "hover:border-emerald-500",
  },
  coral: {
    bg: "bg-rose-100",
    fg: "text-rose-600",
    hoverBg: "group-hover:bg-rose-500",
    hoverBorder: "hover:border-rose-500",
  },
};

const ACCENTS: Accent[] = ["blue", "amber", "mint", "coral"];

// Edit this list to match your actual service offerings
const services = [
  {
    title: "Skill Training Programs",
    description:
      "Industry-focused courses in tech, data, and marketing designed around real hiring needs.",
    icon: GraduationCap,
  },
  {
    title: "Career Counselling",
    description:
      "One-on-one guidance to help students pick the right course and career path.",
    icon: Compass,
  },
  {
    title: "Placement Assistance",
    description:
      "Resume building, mock interviews, and direct hiring drives with our partner companies.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Corporate Training",
    description:
      "Customized upskilling programs delivered on-site or online for company teams.",
    icon: Building2,
  },
  {
    title: "Internship Programs",
    description:
      "Real-world internship opportunities that build practical, job-ready experience.",
    icon: Rocket,
  },
  {
    title: "Certification Courses",
    description:
      "Industry-recognized certifications that strengthen your resume and credibility.",
    icon: BadgeCheck,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From skill training to placement support, we cover every step
            of your career journey under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const styles = ACCENT_STYLES[accent];
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.hoverBorder}`}
              >
                <div
                  className={`icon-pulse-wrap relative flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 ${styles.bg} ${styles.fg} ${styles.hoverBg}`}
                >
                  <span className="icon-pulse-ring" />
                  <Icon className="relative z-10 h-8 w-8 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
