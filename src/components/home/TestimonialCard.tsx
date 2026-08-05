import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, Star } from "lucide-react";

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
};

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      {/* Student */}

      <div className="flex items-center gap-5">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={72}
          height={72}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="text-sm text-slate-600">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating */}

      <div className="mt-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}

      <p className="mt-6 leading-8 text-slate-600">
        "{testimonial.review}"
      </p>

      {/* Footer */}

      <div className="mt-8 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          <BriefcaseBusiness className="h-4 w-4" />
          {testimonial.company}
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          <GraduationCap className="h-4 w-4" />
          {testimonial.course}
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-100 p-4">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Current Package
        </p>

        <h4 className="mt-1 text-2xl font-black text-slate-900">
          {testimonial.salary}
        </h4>
      </div>
    </div>
  );
}