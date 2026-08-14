


import { ArrowRight, type LucideIcon } from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<
  Accent,
  { bg: string; fg: string; hoverBg: string; hoverBorder: string; link: string }
> = {
  blue: {
    bg: "bg-[#EAF0FF]",
    fg: "text-[#2E5EFF]",
    hoverBg: "group-hover:bg-[#2E5EFF]",
    hoverBorder: "hover:border-[#2E5EFF]",
    link: "text-[#2E5EFF]",
  },
  amber: {
    bg: "bg-[#FFF3DE]",
    fg: "text-[#B87700]",
    hoverBg: "group-hover:bg-[#FFB020]",
    hoverBorder: "hover:border-[#FFB020]",
    link: "text-[#B87700]",
  },
  mint: {
    bg: "bg-[#E6FBF4]",
    fg: "text-[#0E9A78]",
    hoverBg: "group-hover:bg-[#16C79A]",
    hoverBorder: "hover:border-[#16C79A]",
    link: "text-[#0E9A78]",
  },
  coral: {
    bg: "bg-[#FFE9E9]",
    fg: "text-[#D14747]",
    hoverBg: "group-hover:bg-[#FF6B6B]",
    hoverBorder: "hover:border-[#FF6B6B]",
    link: "text-[#D14747]",
  },
};

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  accent?: Accent;
};

export default function FeatureCard({
  title,
  description,
  Icon,
  accent = "blue",
}: FeatureCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group rounded-3xl border border-[#E4E9FB] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.2)] ${styles.hoverBorder}`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${styles.bg} ${styles.hoverBg}`}
      >
        <Icon
          className={`h-8 w-8 transition ${styles.fg} group-hover:text-white`}
        />
      </div>

      <h3 className="mt-8 text-2xl font-black text-[#0F172A]">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-[#5B6685]">{description}</p>

      <button
        className={`mt-8 inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3 ${styles.link}`}
      >
        Learn more
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
