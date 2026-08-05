import Image from "next/image";
import { BriefcaseBusiness, Award } from "lucide-react";

type Mentor = {
  name: string;
  designation: string;
  company: string;
  experience: string;
  expertise: string[];
  image: string;
};

type Props = {
  mentor: Mentor;
};

export default function MentorCard({ mentor }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
      {/* Image */}

      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-8">
        <h3 className="text-2xl font-black text-slate-900">
          {mentor.name}
        </h3>

        <p className="mt-2 text-blue-700 font-semibold">
          {mentor.designation}
        </p>

        <div className="mt-5 flex items-center gap-2 text-slate-600">
          <BriefcaseBusiness className="h-5 w-5 text-blue-600" />

          <span>{mentor.company}</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-slate-600">
          <Award className="h-5 w-5 text-emerald-600" />

          <span>{mentor.experience}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {mentor.expertise.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}