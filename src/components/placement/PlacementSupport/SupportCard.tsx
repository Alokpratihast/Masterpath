// import {
//   ArrowRight,
//   LucideIcon,
// } from "lucide-react";

// type SupportCardProps = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
// };

// export default function SupportCard({
//   title,
//   description,
//   icon: Icon,
// }: SupportCardProps) {
//   return (
//     <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
//       <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
//         <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
//       </div>

//       <h3 className="mt-6 text-2xl font-black text-slate-900">
//         {title}
//       </h3>

//       <p className="mt-4 leading-7 text-slate-600">
//         {description}
//       </p>

//       <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
//         Learn More

//         <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
//       </div>
//     </div>
//   );
// }






import {
  ArrowRight,
  LucideIcon,
} from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<
  Accent,
  { bg: string; fg: string; hoverBg: string; hoverBorder: string; link: string }
> = {
  blue: {
    bg: "bg-blue-100",
    fg: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    hoverBorder: "hover:border-blue-500",
    link: "text-blue-600",
  },
  amber: {
    bg: "bg-amber-100",
    fg: "text-amber-600",
    hoverBg: "group-hover:bg-amber-500",
    hoverBorder: "hover:border-amber-500",
    link: "text-amber-600",
  },
  mint: {
    bg: "bg-emerald-100",
    fg: "text-emerald-600",
    hoverBg: "group-hover:bg-emerald-600",
    hoverBorder: "hover:border-emerald-500",
    link: "text-emerald-600",
  },
  coral: {
    bg: "bg-rose-100",
    fg: "text-rose-600",
    hoverBg: "group-hover:bg-rose-500",
    hoverBorder: "hover:border-rose-500",
    link: "text-rose-600",
  },
};

type SupportCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: Accent;
};

export default function SupportCard({
  title,
  description,
  icon: Icon,
  accent = "blue",
}: SupportCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.hoverBorder}`}
    >
      <div
        className={`icon-pulse-wrap relative flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 ${styles.bg} ${styles.fg} ${styles.hoverBg}`}
      >
        <span className="icon-pulse-ring" />
        <Icon className="relative z-10 h-8 w-8 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-2xl font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className={`mt-6 flex items-center gap-2 font-semibold ${styles.link}`}>
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}
