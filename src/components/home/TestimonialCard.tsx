





import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, Star } from "lucide-react";

type Accent = "blue" | "amber" | "mint" | "coral";

const ACCENT_STYLES: Record<Accent, { ring: string; quote: string }> = {
  blue: { ring: "hover:border-[#2E5EFF]", quote: "text-[#2E5EFF]" },
  amber: { ring: "hover:border-[#FFB020]", quote: "text-[#B87700]" },
  mint: { ring: "hover:border-[#16C79A]", quote: "text-[#0E9A78]" },
  coral: { ring: "hover:border-[#FF6B6B]", quote: "text-[#D14747]" },
};

type Props = {
  testimonial: {
    name: string;
    role: string;
    company: string;
    course: string;
    salary: string;
    rating: number;
    image: string;
    review: string;
  };
  accent?: Accent;
};

export default function TestimonialCard({
  testimonial,
  accent = "blue",
}: Props) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className={`group rounded-3xl border border-[#E4E9FB] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.2)] ${styles.ring}`}
    >
      {/* Student */}
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={64}
          height={64}
          className="rounded-2xl object-cover"
        />

        <div>
          <h3 className="text-lg font-black text-[#0F172A]">
            {testimonial.name}
          </h3>

          <p className="text-sm font-medium text-[#6B7690]">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-[#FFB020] text-[#FFB020]"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 leading-7 text-[#4B5675]">
        <span className={`text-2xl font-black ${styles.quote}`}>“</span>
        {testimonial.review}
        <span className={`text-2xl font-black ${styles.quote}`}>”</span>
      </p>

      {/* Footer tags */}
      <div className="mt-7 flex flex-wrap gap-2.5">
        <div className="flex items-center gap-2 rounded-full bg-[#EAF0FF] px-3.5 py-1.5 text-xs font-bold text-[#2E5EFF]">
          <BriefcaseBusiness className="h-3.5 w-3.5" />
          {testimonial.company}
        </div>

        <div className="flex items-center gap-2 rounded-full bg-[#E6FBF4] px-3.5 py-1.5 text-xs font-bold text-[#0E9A78]">
          <GraduationCap className="h-3.5 w-3.5" />
          {testimonial.course}
        </div>
      </div>

      {/* Salary — placement outcome gets its own highlighted strip, with a live pulsing dot */}
      <div className="mt-6 rounded-2xl bg-[#E6FBF4] p-4">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0E9A78]">
          <span className="live-dot-wrap relative flex h-1.5 w-1.5">
            <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-[#0E9A78]" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0E9A78]" />
          </span>
          Current package
        </p>

        <h4 className="mt-1 text-2xl font-black text-[#0F172A]">
          {testimonial.salary}
        </h4>
      </div>
    </div>
  );
}

