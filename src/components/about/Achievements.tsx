// import { achievements } from "@/data/achievements";
// import StatCard from "./StatCard";

// export default function Achievements() {
//   return (
//     <section className="relative overflow-hidden bg-white py-28">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />
//         <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
//             Our Achievements
//           </span>

//           <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
//             Numbers That Reflect
//             <br />
//             Our Commitment
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//             Every milestone represents the trust our students and industry
//             partners have placed in MasterPath over the years.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {achievements.map((item) => (
//             <StatCard
//               key={item.label}
//               value={item.value}
//               label={item.label}
//               description={item.description}
//               Icon={item.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { achievements } from "@/data/achievements";
import StatCard from "./StatCard";

export default function Achievements() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="live-dot-wrap relative flex h-2 w-2">
              <span className="live-dot-ring absolute inline-flex h-full w-full rounded-full bg-blue-600" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Numbers That Reflect
            <br />
            Our Commitment
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every milestone represents the trust our students and industry
            partners have placed in MasterPath over the years.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <StatCard
              key={item.label}
              value={item.value}
              label={item.label}
              description={item.description}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
