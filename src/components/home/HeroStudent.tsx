// import Image from "next/image";

// type HeroStudentProps = {
//   src: string;
//   size?: "small" | "medium" | "large";
//   className?: string;
//   priority?: boolean;
// };

// const sizeClasses = {
//   small:
//     "h-20 w-20 sm:h-20 sm:w-20 lg:h-24 lg:w-24",

//   medium:
//     "h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32",

//   large:
//     "h-40 w-40 sm:h-44 sm:w-44 lg:h-48 lg:w-48",
// };

// export default function HeroStudent({
//   src,
//   size = "medium",
//   className = "",
//   priority = false,
// }: HeroStudentProps) {
//   return (
//     <div
//       className={[
//         "relative shrink-0",
//         "rounded-full border-4 border-white/90",
//         "bg-white p-1",
//         "shadow-[0_0_35px_rgba(46,94,255,0.35)]",
//         sizeClasses[size],
//         className,
//       ].join(" ")}
//     >
//       <div className="relative h-full w-full overflow-hidden rounded-full">
//         <Image
//           src={src}
//           alt="MasterPath student"
//           fill
//           priority={priority}
//           sizes={
//   size === "large"
//     ? "(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
//     : size === "medium"
//       ? "(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
//       : "(max-width: 640px) 80px, (max-width: 1024px) 80px, 96px"
// }
//           className="select-none object-cover"
//           draggable={false}
//         />
//       </div>

//       <div className="pointer-events-none absolute -inset-2 rounded-full border border-cyan-400/30" />
//     </div>
//   );
// }


import Image from "next/image";

type HeroStudentProps = {
  src: string;
  size?: "small" | "medium" | "large";
  className?: string;
  priority?: boolean;
};

// Fixed base sizes — these match the exact px values HeroVisual's
// coordinates were designed around. Do NOT add sm:/lg: overrides
// here; the whole HeroVisual canvas is scaled as one unit from the
// Hero.tsx wrapper, so resizing here would double-scale and break
// alignment with the fixed coordinates in HeroVisual.
const sizeClasses = {
  small: "h-20 w-20",
  medium: "h-24 w-24",
  large: "h-40 w-40",
};

const sizesAttr = {
  small: "80px",
  medium: "96px",
  large: "160px",
};

export default function HeroStudent({
  src,
  size = "medium",
  className = "",
  priority = false,
}: HeroStudentProps) {
  return (
    <div
      className={[
        "group relative shrink-0",
        "rounded-full",
        // gradient ring instead of a flat white border
        "bg-gradient-to-br from-white via-cyan-100 to-blue-200",
        "p-[3px]",
        "shadow-[0_0_35px_rgba(46,94,255,0.35)]",
        "transition-transform duration-300 hover:scale-105",
        sizeClasses[size],
        className,
      ].join(" ")}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-white p-1">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src={src}
            alt="MasterPath student"
            fill
            priority={priority}
            sizes={sizesAttr[size]}
            className="select-none object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* soft glow ring */}
      <div className="pointer-events-none absolute -inset-2 rounded-full border border-cyan-400/30 transition-opacity duration-300 group-hover:border-cyan-300/60" />

      {/* subtle animated pulse ring for a bit of life */}
      <div className="pointer-events-none absolute -inset-2 rounded-full border border-cyan-400/20 animate-pulse" />
    </div>
  );
}
