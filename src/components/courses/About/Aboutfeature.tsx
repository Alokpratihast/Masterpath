// import type { LucideIcon } from "lucide-react";

// type AboutFeatureProps = {
//   Icon: LucideIcon;
//   title: string;
//   description: string;
// };

// export default function AboutFeature({
//   Icon,
//   title,
//   description,
// }: AboutFeatureProps) {
//   return (
//     <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">

//       <div className="flex items-start gap-4">

//         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-600">
//           <Icon className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" />
//         </div>

//         <div>
//           <h3 className="text-base font-black text-slate-900">
//             {title}
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-slate-600">
//             {description}
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// }

import type { LucideIcon } from "lucide-react";

type Accent = "blue" | "amber" | "mint";

const ACCENT_STYLES: Record<
  Accent,
  { bg: string; fg: string; hoverBg: string; hoverBorder: string }
> = {
  blue: {
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    hoverBg: "group-hover:bg-[#2E5EFF]",
    hoverBorder: "hover:border-[#2E5EFF]/40",
  },
  amber: {
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    hoverBg: "group-hover:bg-[#FFB020]",
    hoverBorder: "hover:border-[#FFB020]/40",
  },
  mint: {
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    hoverBg: "group-hover:bg-[#16C79A]",
    hoverBorder: "hover:border-[#16C79A]/40",
  },
};

type AboutFeatureProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
  accent?: Accent;
};

export default function AboutFeature({
  Icon,
  title,
  description,
  accent = "blue",
}: AboutFeatureProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.hoverBorder}`}
    >
      {/* Corner accent wash — appears on hover, subtle signature detail */}
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${styles.bg}`}
      />

      <div className="relative flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${styles.bg} ${styles.hoverBg}`}
        >
          <Icon
            className={`h-6 w-6 transition-colors duration-300 ${styles.fg} group-hover:text-white`}
          />
        </div>

        <div>
          <h3 className="text-base font-black text-slate-900">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

