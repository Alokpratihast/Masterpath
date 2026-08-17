// import Link from "next/link";
// import {
//   ArrowRight,
//   Award,
//   Users,
//   BriefcaseBusiness,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-slate-200">
//       {/* Background Blur */}

//       <div className="absolute inset-0">
//         <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//         <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-200/30 blur-3xl" />
//       </div>

//       <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
//         {/* Left */}

//         <div className="flex flex-col justify-center">
//           <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
//             <Award className="h-4 w-4" />
//             About MasterPath
//           </span>

//           <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
//             Empowering Careers
//             <span className="block text-blue-700">
//               Through Practical Learning
//             </span>
//           </h1>

//           <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
//             MasterPath is committed to helping students and professionals
//             gain industry-ready skills through expert-led training,
//             real-world projects, and dedicated placement support.
//           </p>

//           {/* Buttons */}

//           <div className="mt-10 flex flex-wrap gap-4">
//             <Link
//               href="/courses"
//               className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
//             >
//               Explore Courses
//               <ArrowRight className="h-4 w-4" />
//             </Link>

//             <Link
//               href="/contact"
//               className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Stats */}

//           <div className="mt-12 flex flex-wrap gap-8">
//             <div>
//               <h3 className="text-3xl font-black text-blue-700">
//                 13+
//               </h3>

//               <p className="mt-1 text-sm text-slate-600">
//                 Years Experience
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-black text-blue-700">
//                 5000+
//               </h3>

//               <p className="mt-1 text-sm text-slate-600">
//                 Students Trained
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-black text-blue-700">
//                 300+
//               </h3>

//               <p className="mt-1 text-sm text-slate-600">
//                 Hiring Partners
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right */}

//         <div className="relative flex items-center justify-center">
//           <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
//             <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50">
//               <Users className="h-24 w-24 text-blue-700" />

//               <h3 className="mt-8 text-3xl font-black text-slate-900">
//                 13+ Years
//               </h3>

//               <p className="mt-3 max-w-xs text-center leading-7 text-slate-600">
//                 Building successful careers through
//                 practical education and industry mentorship.
//               </p>

//               <div className="mt-10 flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow">
//                 <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />

//                 <span className="font-semibold text-slate-900">
//                   Placement Focused
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import CountUp from "@/components/home/Countup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-slate-200">
      {/* Background Blur */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Left */}

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <Award className="h-4 w-4" />
            About MasterPath
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
            Empowering Careers
            <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Through Practical Learning
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            MasterPath is committed to helping students and professionals
            gain industry-ready skills through expert-led training,
            real-world projects, and dedicated placement support.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition-colors duration-300 hover:border-blue-700 hover:text-blue-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats — animated count-up */}

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-black text-blue-700">
                <CountUp value="5+" />
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-blue-700">
                <CountUp value="500+" />
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Students Trained
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-blue-700">
                <CountUp value="30+" />
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Hiring Partners
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex items-center justify-center">
          <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50">
              <div className="icon-pulse-wrap relative flex h-24 w-24 items-center justify-center rounded-full bg-white/60 text-blue-700">
                <span className="icon-pulse-ring" />
                <Users className="relative z-10 h-12 w-12" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                5+ Years
              </h3>

              <p className="mt-3 max-w-xs text-center leading-7 text-slate-600">
                Building successful careers through
                practical education and industry mentorship.
              </p>

              <div className="mt-10 flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow">
                <BriefcaseBusiness className="h-5 w-5 text-emerald-600" />

                <span className="font-semibold text-slate-900">
                  Placement Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
