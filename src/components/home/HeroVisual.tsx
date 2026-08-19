




// import Link from "next/link";
// import Image from "next/image";
// import { Sparkles } from "lucide-react";

// import HeroStudent from "./HeroStudent";

// type HeroVisualProps = {
//   students: string[];
// };

// const programs = [
//   {
//     name: "Python",
//     icon: "/images/hero/python.png",
//     className: "left-[55px] top-[115px]",
//   },
//   {
//     name: "Full Stack development",
//     icon: "/images/hero/fullstack.png",
//     className: "right-[0px] top-[175px]",
//   },
//   {
//     name: "Data Analytics",
//     icon: "/images/hero/data_analytics.png",
//     className: "left-[25px] bottom-[65px]",
//   },
//   {
//     name: "Digital Marketing",
//     icon: "/images/hero/digital_marketing.png",
//     className: "right-[15px] bottom-[-10px]",
//   },

//   {
//     name: "Hr & Finance",
//     icon: "/images/hero/digital_marketing.png",
//     className: "right-[15px] bottom-[-10px]",
//   },
// ];

// export default function HeroVisual({
//   students,
// }: HeroVisualProps) {
//   const studentImages = students.slice(0, 4);

//   return (
//     <div className="relative h-[430px] w-[520px] max-w-full shrink-0">

//       {/* =========================
//           BACKGROUND GLOW
//       ========================== */}

//       <div className="absolute left-[270px] top-[205px] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

//       <div className="absolute right-[55px] top-[35px] h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

//       {/* =========================
//           ORBIT CIRCLES
//       ========================== */}

//       <div className="absolute left-[270px] top-[205px] h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

//       <div className="absolute left-[270px] top-[205px] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/20" />

//       {/* =========================
//           DECORATIVE CROSS
//       ========================== */}

//       <div className="absolute left-[270px] top-[65px] h-[280px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent" />

//       <div className="absolute left-[75px] top-[205px] h-px w-[390px] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />

//       {/* =========================
//           SMALL STUDENT
//           TOP RIGHT
//       ========================== */}

//       {studentImages[3] && (
//         <HeroStudent
//           src={studentImages[3]}
//           size="small"
//           className="absolute right-[20px] top-[10px] z-20"
//         />
//       )}

//       {/* =========================
//           LEFT STUDENT
//       ========================== */}

//       {studentImages[1] && (
//         <HeroStudent
//           src={studentImages[1]}
//           size="medium"
//           className="absolute left-[20px] top-[100px] z-20"
//         />
//       )}

//       {/* =========================
//           MAIN STUDENT
//       ========================== */}

//       {studentImages[0] && (
//         <HeroStudent
//           src={studentImages[0]}
//           size="large"
//           priority
//           className="absolute left-[190px] -top-[60px] z-20"
//         />
//       )}

//       {/* =========================
//           RIGHT STUDENT
//       ========================== */}

//       {studentImages[2] && (
//         <HeroStudent
//           src={studentImages[2]}
//           size="medium"
//           className="absolute left-[410px] -top-[350px] z-20"
//         />
//       )}

//       {/* =========================
//           PYTHON
//       ========================== */}

//       <Link
//         href="/courses/advanced-python-training"
//         className="absolute left-[55px] top-[115px] z-30 animate-float"
//       >
//         <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
//             <Image
//               src="/images/hero/python.png"
//               alt="Python"
//               width={32}
//               height={32}
//               className="h-7 w-7 object-contain sm:h-8 sm:w-8"
//             />
//           </span>

//           <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
//             Python
//           </span>
//         </div>
//       </Link>

//       {/* =========================
//           FULL STACK
//       ========================== */}

//       <Link
//         href="/courses/full-stack-development"
//         className="absolute right-0 top-[175px] z-30 animate-float [animation-delay:0.7s]"
//       >
//         <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
//             <Image
//               src="/images/hero/fullstack.png"
//               alt="Full Stack"
//               width={32}
//               height={32}
//               className="h-7 w-7 object-contain sm:h-8 sm:w-8"
//             />
//           </span>

//           <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
//             Full Stack
//           </span>
//         </div>
//       </Link>

//       {/* =========================
//           DATA ANALYTICS
//       ========================== */}

//       <Link
//         href="/courses/data-analyst-training"
//         className="absolute left-[25px] bottom-[65px] z-30 animate-float [animation-delay:1.4s]"
//       >
//         <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
//             <Image
//               src="/images/hero/data_analytics.png"
//               alt="Data Analytics"
//               width={32}
//               height={32}
//               className="h-7 w-7 object-contain sm:h-8 sm:w-8"
//             />
//           </span>

//           <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
//             Data Analytics
//           </span>
//         </div>
//       </Link>

//       {/* =========================
//           DIGITAL MARKETING
//       ========================== */}

//       <Link
//         href="/courses/digital-marketing"
//         className="absolute right-[15px] bottom-[-10px] z-30 animate-float [animation-delay:2.1s]"
//       >
//         <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
//             <Image
//               src="/images/hero/digital_marketing.png"
//               alt="Digital Marketing"
//               width={32}
//               height={32}
//               className="h-7 w-7 object-contain sm:h-8 sm:w-8"
//             />
//           </span>

//           <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
//             Digital Marketing
//           </span>
//         </div>
//       </Link>

//       {/* =========================
//           SPARKLE
//       ========================== */}

//       <div className="absolute left-[145px] top-[15px] z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
//         <Sparkles className="h-5 w-5 text-cyan-300" />
//       </div>

//       {/* =========================
//           CAREER CARD
//       ========================== */}

//       <div className="absolute left-[275px] top-[295px] z-30 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-5">
//         <p className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider text-slate-300 sm:text-xs">
//           Career focused
//         </p>

//         <p className="mt-1 whitespace-nowrap text-xs font-bold text-white sm:text-sm">
//           Learn - Build - Inhouse Hired
//         </p>
//       </div>
//     </div>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

import HeroStudent from "./HeroStudent";

type HeroVisualProps = {
  students: string[];
};

const programs = [
  {
    name: "Python",
    icon: "/images/hero/python.png",
    className: "left-[55px] top-[115px]",
  },
  {
    name: "Full Stack Development",
    icon: "/images/hero/fullstack.png",
    className: "right-[0px] top-[175px]",
  },
  {
    name: "Data Analytics",
    icon: "/images/hero/data_analytics.png",
    className: "left-[25px] bottom-[65px]",
  },
  {
    name: "Digital Marketing",
    icon: "/images/hero/digital_marketing.png",
    className: "right-[15px] bottom-[-55px]",
  },
  {
    name: "HR & Finance",
    icon: "/images/hero/hr_finance.png",
    className: "left-[130px] bottom-[20px]",
  },
];

export default function HeroVisual({
  students,
}: HeroVisualProps) {
  const studentImages = students.slice(0, 4);

  return (
    <div className="relative h-[430px] w-[520px] max-w-full shrink-0">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="absolute left-[270px] top-[205px] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute right-[55px] top-[35px] h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* =========================
          ORBIT CIRCLES
      ========================== */}

      <div className="absolute left-[270px] top-[205px] h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="absolute left-[270px] top-[205px] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/20" />

      {/* =========================
          DECORATIVE CROSS
      ========================== */}

      <div className="absolute left-[270px] top-[65px] h-[280px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent" />

      <div className="absolute left-[75px] top-[205px] h-px w-[390px] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />

      {/* =========================
          SMALL STUDENT
          TOP RIGHT
      ========================== */}

      {studentImages[3] && (
        <HeroStudent
          src={studentImages[3]}
          size="small"
          className="absolute right-[20px] top-[10px] z-20"
        />
      )}

      {/* =========================
          LEFT STUDENT
      ========================== */}

      {studentImages[1] && (
        <HeroStudent
          src={studentImages[1]}
          size="medium"
          className="absolute left-[20px] top-[100px] z-20"
        />
      )}

      {/* =========================
          MAIN STUDENT
      ========================== */}

      {studentImages[0] && (
        <HeroStudent
          src={studentImages[0]}
          size="large"
          priority
          className="absolute left-[190px] -top-[60px] z-20"
        />
      )}

      {/* =========================
          RIGHT STUDENT
      ========================== */}

      {studentImages[2] && (
        <HeroStudent
          src={studentImages[2]}
          size="medium"
          className="absolute left-[410px] -top-[350px] z-20"
        />
      )}

      {/* =========================
          PYTHON
      ========================== */}

      <Link
        href="/courses/advanced-python-training"
        className="absolute left-[55px] top-[115px] z-30 animate-float"
      >
        <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
            <Image
              src="/images/hero/python.png"
              alt="Python"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </span>

          <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
            Python
          </span>
        </div>
      </Link>

      {/* =========================
          FULL STACK
      ========================== */}

      <Link
        href="/courses/full-stack-development"
        className="absolute right-0 top-[175px] z-30 animate-float [animation-delay:0.7s]"
      >
        <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
            <Image
              src="/images/hero/fullstack.png"
              alt="Full Stack"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </span>

          <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
            Full Stack
          </span>
        </div>
      </Link>

      {/* =========================
          DATA ANALYTICS
      ========================== */}

      <Link
        href="/courses/data-analyst-training"
        className="absolute left-[25px] bottom-[65px] z-30 animate-float [animation-delay:1.4s]"
      >
        <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
            <Image
              src="/images/hero/data_analytics.png"
              alt="Data Analytics"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </span>

          <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
            Data Analytics
          </span>
        </div>
      </Link>

      {/* =========================
          DIGITAL MARKETING
      ========================== */}

      <Link
        href="/courses/digital-marketing"
        className="absolute right-[15px] bottom-[-10px] z-30 animate-float [animation-delay:2.1s]"
      >
        <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
            <Image
              src="/images/hero/digital_marketing.png"
              alt="Digital Marketing"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </span>

          <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
            Digital Marketing
          </span>
        </div>
      </Link>

      {/* =========================
          HR & FINANCE
      ========================== */}

      <Link
  href="/courses/hr-training"
  className="absolute left-[195px] top-[30px] z-30 animate-float [animation-delay:2.8s]"
>
        <div className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 sm:px-4 sm:py-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
            <Image
              src="/images/hero/hr_finance.png"
              alt="HR & Finance"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </span>

          <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">
            HR & Finance
          </span>
        </div>
      </Link>

      {/* =========================
          SPARKLE
      ========================== */}

      <div className="absolute left-[145px] top-[15px] z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
        <Sparkles className="h-5 w-5 text-cyan-300" />
      </div>

      {/* =========================
          CAREER CARD
      ========================== */}

      <div className="absolute left-[275px] top-[295px] z-30 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:px-5">
        <p className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider text-slate-300 sm:text-xs">
          Career focused
        </p>

        <p className="mt-1 whitespace-nowrap text-xs font-bold text-white sm:text-sm">
          Learn - Build - Inhouse Hired
        </p>
      </div>
    </div>
  );
}