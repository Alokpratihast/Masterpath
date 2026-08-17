// import type { LucideIcon } from "lucide-react";

// type Props = {
//   title: string;
//   description: string;
//   Icon: LucideIcon;
// };

// export default function ValueCard({
//   title,
//   description,
//   Icon,
// }: Props) {
//   return (
//     <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
//       <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-700">
//         <Icon className="h-8 w-8 text-blue-700 transition group-hover:text-white" />
//       </div>

//       <h3 className="mt-8 text-2xl font-black text-slate-900">
//         {title}
//       </h3>

//       <p className="mt-5 leading-8 text-slate-600">
//         {description}
//       </p>
//     </div>
//   );
// }

import type { LucideIcon } from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<
  Accent,
  { bg: string; fg: string; hoverBg: string; hoverBorder: string; glow: string }
> = {
  blue: {
    bg: "bg-blue-100",
    fg: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    hoverBorder: "hover:border-blue-500",
    glow: "bg-blue-200",
  },
  amber: {
    bg: "bg-amber-100",
    fg: "text-amber-600",
    hoverBg: "group-hover:bg-amber-500",
    hoverBorder: "hover:border-amber-500",
    glow: "bg-amber-200",
  },
  mint: {
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
    hoverBorder: "hover:border-emerald-500",
    glow: "bg-emerald-200",
  },
  coral: {
    bg: "bg-rose-100",
    fg: "text-rose-600",
    hoverBg: "group-hover:bg-rose-500",
    hoverBorder: "hover:border-rose-500",
    glow: "bg-rose-200",
  },
};

type ValueCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  accent?: Accent;
};

export default function ValueCard({
  title,
  description,
  Icon,
  accent = "blue",
}: ValueCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.hoverBorder}`}
    >
      {/* Corner accent wash — appears on hover */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 ${styles.glow}`}
      />

      <div
        className={`icon-pulse-wrap relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${styles.bg} ${styles.fg} ${styles.hoverBg} group-hover:-rotate-6 group-hover:scale-110`}
      >
        <span className="icon-pulse-ring" />
        <Icon className="relative z-10 h-8 w-8 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="relative mt-6 text-xl font-black text-slate-900">
        {title}
      </h3>

      <p className="relative mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}
