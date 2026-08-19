



import {
  BookOpen,
  Handshake,
  Star,
  Users,
} from "lucide-react";

import { homeHero } from "@/data/homeHero";
import CountUp from "./Countup";

const icons = {
  book: BookOpen,
  users: Users,
  handshake: Handshake,
  star: Star,
};

export default function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:grid-cols-4 lg:mt-10">
      {homeHero.stats.map((stat, index) => {
        const Icon =
          icons[stat.icon as keyof typeof icons];

        return (
          <div
            key={stat.label}
            className={`group px-5 py-7 text-center transition-all duration-300 hover:bg-white/10 sm:px-6 ${
              index !== homeHero.stats.length - 1
                ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                : ""
            } ${
              index === 1
                ? "sm:border-b-0"
                : ""
            } ${
              index === 2
                ? "sm:border-t-0"
                : ""
            }`}
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15">
              <Icon className="h-5 w-5 text-cyan-300" />
            </div>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              <CountUp value={stat.value} />
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

