// import Image from "next/image";
// import { BriefcaseBusiness, GraduationCap, Star } from "lucide-react";

// type Props = {
//   testimonial: {
//     name: string;
//     role: string;
//     company: string;
//     course: string;
//     salary: string;
//     rating: number;
//     image: string;
//     review: string;
//   };
// };

// export default function TestimonialCard({
//   testimonial,
// }: Props) {
//   return (
//     <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
//       {/* Student */}

//       <div className="flex items-center gap-5">
//         <Image
//           src={testimonial.image}
//           alt={testimonial.name}
//           width={72}
//           height={72}
//           className="rounded-full object-cover"
//         />

//         <div>
//           <h3 className="text-xl font-bold text-slate-900">
//             {testimonial.name}
//           </h3>

//           <p className="text-sm text-slate-600">
//             {testimonial.role}
//           </p>
//         </div>
//       </div>

//       {/* Rating */}

//       <div className="mt-6 flex gap-1">
//         {Array.from({ length: testimonial.rating }).map((_, index) => (
//           <Star
//             key={index}
//             className="h-5 w-5 fill-yellow-400 text-yellow-400"
//           />
//         ))}
//       </div>

//       {/* Review */}

//       <p className="mt-6 leading-8 text-slate-600">
//         "{testimonial.review}"
//       </p>

//       {/* Footer */}

//       <div className="mt-8 flex flex-wrap gap-3">
//         <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
//           <BriefcaseBusiness className="h-4 w-4" />
//           {testimonial.company}
//         </div>

//         <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
//           <GraduationCap className="h-4 w-4" />
//           {testimonial.course}
//         </div>
//       </div>

//       <div className="mt-6 rounded-xl bg-slate-100 p-4">
//         <p className="text-xs uppercase tracking-widest text-slate-500">
//           Current Package
//         </p>

//         <h4 className="mt-1 text-2xl font-black text-slate-900">
//           {testimonial.salary}
//         </h4>
//       </div>
//     </div>
//   );
// }

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

      {/* Salary — placement outcome gets its own highlighted strip, not a plain gray box */}
      <div className="mt-6 rounded-2xl bg-[#E6FBF4] p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0E9A78]">
          Current package
        </p>

        <h4 className="mt-1 text-2xl font-black text-[#0F172A]">
          {testimonial.salary}
        </h4>
      </div>
    </div>
  );
}
