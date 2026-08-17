// import { CheckCircle2 } from "lucide-react";
// import Image from "next/image";
// import { aboutStory } from "@/data/aboutStory";

// import CountUp from "@/components/home/Countup";

// export default function Story() {
//   return (
//     <section className="bg-white py-28">
//       <div className="mx-auto grid max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//         {/* Left Side */}

//         <div className="relative">
//           {/* Background Decoration */}

//           <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-60" />
//           <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-60" />

//           <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-blue-50 to-emerald-50 shadow-xl">
//             {/* Subtle dot-grid texture */}
//             <div
//               className="pointer-events-none absolute inset-0 opacity-[0.4]"
//               style={{
//                 backgroundImage:
//                   "radial-gradient(rgba(37,99,235,0.15) 1px, transparent 1px)",
//                 backgroundSize: "22px 22px",
//               }}
//             />

//             <div className="relative flex h-[520px] flex-col items-center justify-center p-10 text-center">
//               <div className="icon-pulse-wrap relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg shadow-blue-700/20">
//                 <span className="icon-pulse-ring" />
//                 <Image
//                   src="/images/logo/newlogo1.png"
//                   alt="MasterPath"
//                   width={72}
//                   height={72}
//                   className="relative z-10 h-16 w-16 object-contain"
//                 />
//               </div>

//               <h3 className="mt-8 text-4xl font-black text-slate-900">
//                 <CountUp value="5+" /> Years
//               </h3>

//               <p className="mt-4 max-w-sm leading-8 text-slate-600">
//                 Transforming careers through practical learning,
//                 expert mentorship, and industry-ready training.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}

//         <div>
//           <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//             <span className="live-dot-wrap relative flex h-2 w-2">
//               <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
//             </span>
//             Our Story
//           </span>

//           <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
//             {aboutStory.title}
//           </h2>

//           <p className="mt-8 text-lg leading-8 text-slate-600">
//             {aboutStory.description1}
//           </p>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             {aboutStory.description2}
//           </p>

//           {/* Highlights */}

//           <div className="mt-10 grid gap-5 sm:grid-cols-2">
//             {aboutStory.highlights.map((item) => (
//               <div
//                 key={item}
//                 className="group flex items-center gap-3 rounded-xl border border-transparent bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/60"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-600">
//                   <CheckCircle2 className="h-5 w-5 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
//                 </span>

//                 <span className="font-semibold text-slate-800">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Statistics */}

//           <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-10">
//             <div>
//               <h3 className="text-4xl font-black text-blue-700">
//                 <CountUp value="5+" />
//               </h3>

//               <p className="mt-2 text-sm text-slate-600">
//                 Years
//               </p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-black text-blue-700">
//                 <CountUp value="5000+" />
//               </h3>

//               <p className="mt-2 text-sm text-slate-600">
//                 Students
//               </p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-black text-blue-700">
//                 <CountUp value="300+" />
//               </h3>

//               <p className="mt-2 text-sm text-slate-600">
//                 Hiring Partners
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { aboutStory } from "@/data/aboutStory";

import CountUp from "@/components/home/Countup";

export default function Story() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}

        <div className="relative">
          {/* Background Decoration */}

          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl opacity-60" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-60" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl">
            {/* Subtle dot-grid texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Glow accents */}
            <div className="glow-drift-1 pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="glow-drift-2 pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative flex h-[520px] flex-col items-center justify-center p-10 text-center">
              <div className="icon-pulse-wrap animate-float relative flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-xl shadow-blue-500/20">
                <span className="icon-pulse-ring" />
                <Image
                  src="/images/logo/newlogo1.png"
                  alt="MasterPath"
                  width={100}
                  height={100}
                  className="relative z-10 h-24 w-24 object-contain"
                />
              </div>

              <h3 className="mt-8 text-4xl font-black text-white">
                <CountUp value="13+" /> Years
              </h3>

              <p className="mt-4 max-w-sm leading-8 text-slate-300">
                Transforming careers through practical learning,
                expert mentorship, and industry-ready training.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes glow-drift-1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, 15px); }
          }
          @keyframes glow-drift-2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-20px, -15px); }
          }
          .glow-drift-1 {
            animation: glow-drift-1 8s ease-in-out infinite;
          }
          .glow-drift-2 {
            animation: glow-drift-2 9s ease-in-out infinite;
          }
        `}</style>

        {/* Right Side */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Our Story
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {aboutStory.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {aboutStory.description1}
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {aboutStory.description2}
          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {aboutStory.highlights.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-xl border border-transparent bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/60"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-600">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
                </span>

                <span className="font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Statistics */}

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-10">
            <div>
              <h3 className="text-4xl font-black text-blue-700">
                <CountUp value="13+" />
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-700">
                <CountUp value="5000+" />
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-700">
                <CountUp value="300+" />
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Hiring Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
