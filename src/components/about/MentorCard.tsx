
import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";

type Mentor = {
  name: string;
  designation: string;
  company: string;
  experience: string;
  expertise: string[];
  image: string;
};

type Accent = "blue" | "amber" | "mint";

const ACCENT_STYLES: Record<
  Accent,
  { border: string; iconBg: string; iconFg: string; tag: string; ring: string }
> = {
  blue: {
    border: "hover:border-blue-500",
    iconBg: "bg-blue-50",
    iconFg: "text-blue-600",
    tag: "bg-blue-50 text-blue-700 group-hover:bg-blue-100",
    ring: "bg-blue-500",
  },
  amber: {
    border: "hover:border-amber-500",
    iconBg: "bg-amber-50",
    iconFg: "text-amber-600",
    tag: "bg-amber-50 text-amber-700 group-hover:bg-amber-100",
    ring: "bg-amber-500",
  },
  mint: {
    border: "hover:border-emerald-500",
    iconBg: "bg-emerald-50",
    iconFg: "text-emerald-600",
    tag: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100",
    ring: "bg-emerald-500",
  },
};

type Props = {
  mentor: Mentor;
  accent?: Accent;
};

export default function MentorCard({ mentor, accent = "blue" }: Props) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${styles.border}`}
    >
      {/* Image */}

      <div className="relative h-80 overflow-hidden bg-slate-100">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

        {/* Name + designation over the image */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-2xl font-black text-white">
            {mentor.name}
          </h3>

          <p className="mt-1 font-semibold text-blue-300">
            {mentor.designation}
          </p>
        </div>

        {/* Experience badge — pulses like a "verified/active mentor" marker */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur">
          <span className="live-dot-wrap relative flex h-1.5 w-1.5">
            <span
              className={`live-dot-ring absolute inline-flex h-full w-full rounded-full ${styles.ring}`}
            />
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${styles.ring}`}
            />
          </span>
          {mentor.experience}
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <div className="flex items-center gap-3 text-slate-600">
          <span
            className={`icon-pulse-wrap relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${styles.iconBg} ${styles.iconFg}`}
          >
            <span className="icon-pulse-ring" />
            <BriefcaseBusiness className="relative z-10 h-4 w-4" />
          </span>
          <span className="font-semibold text-slate-800">{mentor.company}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {mentor.expertise.map((skill) => (
            <span
              key={skill}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:scale-105 ${styles.tag}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
