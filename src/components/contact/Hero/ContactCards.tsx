import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/data/site";

const cards = [
  {
    title: "Phone",
    value: siteConfig.phone,
    icon: Phone,
  },
  {
    title: "Email",
    value: siteConfig.email,
    icon: Mail,
  },
  {
    title: "Location",
    value: siteConfig.address,
    icon: MapPin,
  },
];

export default function ContactCards() {
  return (
    <div className="space-y-6">
      {cards.map(({ title, value, icon: Icon }) => (
        <div
          key={title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
              <Icon className="h-7 w-7 text-white" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {title}
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                {value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}