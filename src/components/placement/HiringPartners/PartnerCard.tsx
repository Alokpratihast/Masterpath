import Image from "next/image";

type PartnerCardProps = {
  partner: {
    id: number;
    name: string;
    logo: string;
  };
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div
      className="
        group relative h-32 w-full
        overflow-hidden rounded-2xl
        border border-slate-200/80
        bg-white
        shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_18px_40px_-18px_rgba(46,94,255,0.35)]
      "
    >
      {/* Hover Gradient */}
      <div
        className="
          pointer-events-none absolute inset-0 z-10
          bg-gradient-to-br
          from-blue-50/0
          via-transparent
          to-cyan-50/0
          opacity-0
          transition-opacity duration-300
          group-hover:from-blue-50/40
          group-hover:to-cyan-50/30
          group-hover:opacity-100
        "
      />

      {/* Company Image */}
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
        unoptimized
        className="
          object-cover
          transition-transform duration-300
          group-hover:scale-105
        "
      />
    </div>
  );
}