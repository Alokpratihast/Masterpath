import {
  BriefcaseBusiness,
  Code2,
  Users,
} from "lucide-react";

import { homeHero } from "@/data/homeHero";

const icons = {
  code: Code2,
  users: Users,
  briefcase: BriefcaseBusiness,
};

export default function HeroFeatures() {
  return (
    <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
      {homeHero.features.map((feature) => {
        const Icon =
          icons[feature.icon as keyof typeof icons];

        return (
          <div
            key={feature.label}
            className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/15"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20">
              <Icon className="h-4 w-4 text-cyan-300" />
            </span>

            <span className="text-sm font-semibold text-white">
              {feature.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}