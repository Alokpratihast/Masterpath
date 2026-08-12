// import { placementJourney } from "@/data/placementJourney";
// import JourneyCard from "./JourneyCard";

// export default function PlacementJourney() {
//   return (
//     <section className="relative overflow-hidden bg-slate-50 py-28">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
//         <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//             Placement Journey
//           </span>

//           <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
//             Your Journey From Learning
//             <br />
//             to Getting Hired
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//             We support you throughout every stage of your career journey —
//             from choosing the right course to securing your first job.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative mt-24">
//           {/* Desktop Line */}
//           <div className="absolute left-0 right-0 top-24 hidden h-1 bg-slate-200 lg:block" />

//           <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
//             {placementJourney.map((item) => (
//   <JourneyCard
//     key={item.id}
//     step={String(item.id)}
//     title={item.title}
//     description={item.description}
//     Icon={item.icon}
//   />
// ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { placementJourney } from "@/data/placementJourney";
import JourneyCard from "./JourneyCard";
import { Route } from "lucide-react";

const ACCENTS = ["blue", "amber", "mint", "coral"] as const;

export default function PlacementJourney() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FF] py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#2E5EFF]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#16C79A]/10 blur-3xl" />
        <div className="absolute right-[25%] top-1/2 h-64 w-64 rounded-full bg-[#FF6B6B]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE9E9] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#D14747]">
            <Route className="h-4 w-4" />
            Placement journey
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0F172A] md:text-5xl">
            Your journey from learning
            <br />
            to getting hired
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4B5675]">
            We support you throughout every stage of your career journey —
            from choosing the right course to securing your first job.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Desktop Line — gradient across the 4 accent colors, mirrors step progression */}
          <div className="absolute left-0 right-0 top-8 hidden h-1 rounded-full bg-gradient-to-r from-[#2E5EFF] via-[#FFB020] via-[#16C79A] to-[#FF6B6B] lg:block" />

          <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {placementJourney.map((item, index) => (
              <JourneyCard
                key={item.id}
                step={String(item.id)}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                accent={ACCENTS[index % ACCENTS.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
