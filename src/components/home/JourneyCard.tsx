


import type { LucideIcon } from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<
  Accent,
  { ring: string; bg: string; fg: string; step: string }
> = {
  blue: {
    ring: "ring-[#2E5EFF]",
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    step: "bg-[#2E5EFF] text-white",
  },
  amber: {
    ring: "ring-[#FFB020]",
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    step: "bg-[#FFB020] text-[#41240A]",
  },
  mint: {
    ring: "ring-[#16C79A]",
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    step: "bg-[#16C79A] text-white",
  },
  coral: {
    ring: "ring-[#FF6B6B]",
    bg: "bg-[#FFE9E9]",
    fg: "text-[#D14747]",
    step: "bg-[#FF6B6B] text-white",
  },
};

type JourneyCardProps = {
  step: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  accent?: Accent;
  /** When true, card sits lower to create a zigzag rhythm on desktop */
  offset?: boolean;
};

export default function JourneyCard({
  step,
  title,
  description,
  Icon,
  accent = "blue",
  offset = false,
}: JourneyCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`relative pt-2 transition-transform duration-300 ${
        offset ? "lg:translate-y-14" : "lg:translate-y-0"
      }`}
    >
      {/* Dot that sits on the desktop timeline line */}
      <div
        className={`absolute -top-[26px] left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#F4F6FF] ${styles.step} lg:block`}
      />

      <div
        className={`group h-full rounded-3xl border border-[#E4E9FB] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.2)] hover:ring-2 ${styles.ring}`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`icon-pulse-wrap relative flex h-14 w-14 items-center justify-center rounded-2xl ${styles.bg} ${styles.fg}`}
          >
            <span className="icon-pulse-ring" />

            <Icon className={`relative z-10 h-7 w-7 ${styles.fg}`} />
          </div>

          <span
            className={`grid h-9 w-9 place-items-center rounded-full text-sm font-black ${styles.step}`}
          >
            {step}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-black text-[#0F172A]">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-[#5B6685]">{description}</p>
      </div>
    </div>
  );
}
