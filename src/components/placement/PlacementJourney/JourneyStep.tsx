


// import { CheckCircle2 } from "lucide-react";

// type Accent = "blue" | "amber" | "mint" | "coral";

// const ACCENT_STYLES: Record<
//   Accent,
//   { bg: string; fg: string; badge: string; hoverBorder: string; line: string }
// > = {
//   blue: {
//     bg: "bg-[#EAF0FF]",
//     fg: "text-[#2E5EFF]",
//     badge: "bg-[#EAF0FF] text-[#2E5EFF]",
//     hoverBorder: "hover:border-[#2E5EFF]",
//     line: "bg-[#2E5EFF]",
//   },
//   amber: {
//     bg: "bg-[#FFF3DE]",
//     fg: "text-[#B87700]",
//     badge: "bg-[#FFF3DE] text-[#B87700]",
//     hoverBorder: "hover:border-[#FFB020]",
//     line: "bg-[#FFB020]",
//   },
//   mint: {
//     bg: "bg-[#E6FBF4]",
//     fg: "text-[#0E9A78]",
//     badge: "bg-[#E6FBF4] text-[#0E9A78]",
//     hoverBorder: "hover:border-[#16C79A]",
//     line: "bg-[#16C79A]",
//   },
//   coral: {
//     bg: "bg-[#FFE9E9]",
//     fg: "text-[#D14747]",
//     badge: "bg-[#FFE9E9] text-[#D14747]",
//     hoverBorder: "hover:border-[#FF6B6B]",
//     line: "bg-[#FF6B6B]",
//   },
// };

// const ACCENTS: Accent[] = ["blue", "amber", "mint", "coral"];

// type JourneyStepProps = {
//   step: {
//     id: number;
//     title: string;
//     description: string;
//   };
//   isLast: boolean;
// };

// export default function JourneyStep({
//   step,
//   isLast,
// }: JourneyStepProps) {
//   const accent = ACCENTS[(step.id - 1) % ACCENTS.length];
//   const styles = ACCENT_STYLES[accent];

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className={`relative w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${styles.hoverBorder}`}
//       >
//         {/* Step number badge — overlaps the card edge like a timeline node */}
//         <span
//           className={`absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white text-xs font-black shadow-sm ${styles.badge}`}
//         >
//           {step.id}
//         </span>

//         <div
//           className={`icon-pulse-wrap relative flex h-16 w-16 items-center justify-center rounded-2xl ${styles.bg} ${styles.fg}`}
//         >
//           <span className="icon-pulse-ring" />
//           <CheckCircle2 className="relative z-10 h-8 w-8" />
//         </div>

//         <span
//           className={`mt-6 inline-flex rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${styles.badge}`}
//         >
//           Step {step.id}
//         </span>

//         <h3 className="mt-5 text-3xl font-black text-slate-900">
//           {step.title}
//         </h3>

//         <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
//           {step.description}
//         </p>
//       </div>

//       {/* Connector — animated dashed line with a pulsing node, replaces the static arrow */}
//       {!isLast && (
//         <div className="relative flex h-16 w-px items-center justify-center">
//           <div
//             className={`h-full w-px opacity-40 ${styles.line}`}
//             style={{
//               maskImage:
//                 "repeating-linear-gradient(to bottom, black 0, black 6px, transparent 6px, transparent 14px)",
//               WebkitMaskImage:
//                 "repeating-linear-gradient(to bottom, black 0, black 6px, transparent 6px, transparent 14px)",
//             }}
//           />

//           <span className="live-dot-wrap absolute flex h-2.5 w-2.5">
//             <span
//               className={`live-dot-ring absolute inline-flex h-full w-full rounded-full ${styles.line}`}
//             />
//             <span
//               className={`relative inline-flex h-2.5 w-2.5 rounded-full ${styles.line}`}
//             />
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }


import { CheckCircle2 } from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<
  Accent,
  { bg: string; fg: string; badge: string; hoverBorder: string }
> = {
  blue: {
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    badge: "bg-[#2E5EFF] text-white",
    hoverBorder: "hover:border-[#2E5EFF]",
  },
  amber: {
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    badge: "bg-[#FFB020] text-[#41240A]",
    hoverBorder: "hover:border-[#FFB020]",
  },
  mint: {
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    badge: "bg-[#16C79A] text-white",
    hoverBorder: "hover:border-[#16C79A]",
  },
  coral: {
    bg: "bg-[#FFE9E9]",
    fg: "text-[#D14747]",
    badge: "bg-[#FF6B6B] text-white",
    hoverBorder: "hover:border-[#FF6B6B]",
  },
};

const ACCENTS: Accent[] = ["blue", "amber", "mint", "coral"];

type JourneyStepProps = {
  step: {
    id: number;
    title: string;
    description: string;
  };
};

export default function JourneyStep({ step }: JourneyStepProps) {
  const accent = ACCENTS[(step.id - 1) % ACCENTS.length];
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group relative flex h-full w-72 shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-80 ${styles.hoverBorder}`}
    >
      {/* Step number badge */}
      <span
        className={`absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white text-xs font-black shadow-sm ${styles.badge}`}
      >
        {step.id}
      </span>

      <div
        className={`icon-pulse-wrap relative flex h-12 w-12 items-center justify-center rounded-xl ${styles.bg} ${styles.fg}`}
      >
        <span className="icon-pulse-ring" />
        <CheckCircle2 className="relative z-10 h-6 w-6" />
      </div>

      <h3 className="mt-4 text-lg font-black text-slate-900">
        {step.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {step.description}
      </p>
    </div>
  );
}
