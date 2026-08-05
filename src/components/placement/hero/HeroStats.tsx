import {
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "5000+",
    label: "Students Trained",
    icon: Users,
  },
  {
    value: "300+",
    label: "Hiring Partners",
    icon: BriefcaseBusiness,
  },
  {
    value: "95%",
    label: "Placement Support",
    icon: Trophy,
  },
  {
    value: "20+",
    label: "Professional Courses",
    icon: GraduationCap,
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map(({ value, label, icon: Icon }) => (
        <div
          key={label}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <Icon className="h-10 w-10 text-blue-400" />

          <h3 className="mt-6 text-5xl font-black text-white">
            {value}
          </h3>

          <p className="mt-3 text-slate-300">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}