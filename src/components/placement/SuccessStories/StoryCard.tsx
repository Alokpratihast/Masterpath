


// import Image from "next/image";
// import {
//   Building2,
//   BriefcaseBusiness,
//   Star,
// } from "lucide-react";

// type StoryCardProps = {
//   story: {
//     id: number;
//     name: string;
//     course: string;
//     company: string;
//     package: string;
//     image: string;
//     review: string;
//   };
// };

// export default function StoryCard({ story }: StoryCardProps) {
//   return (
//     <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

//       {/* ================= STUDENT HEADER ================= */}
//       <div className="flex items-center gap-5 border-b border-slate-100 p-6">

//         {/* Student Image */}
//         <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-blue-50 bg-slate-100">
//           <Image
//             src={story.image}
//             alt={story.name}
//             fill
//             sizes="80px"
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>

//         {/* Student Info */}
//         <div className="min-w-0">

//           <h3 className="text-xl font-black text-slate-900">
//             {story.name}
//           </h3>

//           <p className="mt-1 text-sm text-slate-500">
//             {story.course}
//           </p>

//           {/* Rating */}
//           <div className="mt-3 flex items-center gap-1">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <Star
//                 key={index}
//                 className="h-4 w-4 fill-yellow-400 text-yellow-400"
//               />
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* ================= STORY CONTENT ================= */}
//       <div className="space-y-5 p-6">

//         {/* Company */}
//         <div className="flex items-center gap-3">

//           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
//             <Building2 className="h-5 w-5 text-blue-600" />
//           </span>

//           <div>
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//               Company
//             </p>

//             <span className="font-semibold text-slate-700">
//               {story.company}
//             </span>
//           </div>

//         </div>

//         {/* Package */}
//         <div className="flex items-center gap-3">

//           <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
//             <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />
//           </span>

//           <div>
//             <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//               Current Package
//             </p>

//             <span className="font-bold text-emerald-600">
//               {story.package}
//             </span>
//           </div>

//         </div>

//         {/* Review */}
//         <div className="rounded-2xl bg-slate-50 p-4">

//           <p className="text-[15px] leading-7 text-slate-600">
//             <span className="mr-1 text-2xl font-black text-blue-500">
//               “
//             </span>

//             {story.review}

//             <span className="ml-1 text-2xl font-black text-blue-500">
//               ”
//             </span>
//           </p>

//         </div>

//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import {
  Building2,
  BriefcaseBusiness,
  Star,
} from "lucide-react";

type StoryCardProps = {
  story: {
    id: number;
    name: string;
    course: string;
    company: string;
    package: string;
    image: string;
    review: string;
  };
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

      {/* ================= STUDENT HEADER ================= */}
      <div className="flex items-center gap-5 border-b border-slate-100 p-6">

        {/* Student Image */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-blue-50 bg-slate-100">
          <Image
            src={story.image}
            alt={story.name}
            fill
            sizes="80px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Student Info */}
        <div className="min-w-0">

          <h3 className="text-xl font-black text-slate-900">
            {story.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {story.course}
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

        </div>
      </div>

      {/* ================= STORY CONTENT ================= */}
      <div className="space-y-5 p-6">

        {/* Company */}
        <div className="flex items-center gap-3">

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <Building2 className="h-5 w-5 text-blue-600" />
          </span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </p>

            <span className="font-semibold text-slate-700">
              {story.company}
            </span>
          </div>

        </div>

        {/* Package — live pulsing dot to show it's a current/active offer */}
        <div className="flex items-center gap-3">

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
            <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />
          </span>

          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span className="live-dot-wrap relative flex h-1.5 w-1.5">
                <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Current Package
            </p>

            <span className="font-bold text-emerald-600">
              {story.package}
            </span>
          </div>

        </div>

        {/* Review */}
        <div className="rounded-2xl bg-slate-50 p-4">

          <p className="text-[15px] leading-7 text-slate-600">
            <span className="mr-1 text-2xl font-black text-blue-500">
              “
            </span>

            {story.review}

            <span className="ml-1 text-2xl font-black text-blue-500">
              ”
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}
