import { Clock3 } from "lucide-react";

import { contactInfo } from "@/data/contactInfo";
import { officeHours } from "@/data/officeHours";

import InfoCard from "./InfoCard";

export default function ContactInfo() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            We'd Love To Hear
            <br />
            From You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Reach out through phone, email, or visit our office.
            Our team is always ready to guide you.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {contactInfo.map((item) => (
            <InfoCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {/* Office Hours */}

        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <div className="flex items-center gap-3">
            <Clock3 className="h-7 w-7 text-blue-600" />

            <h3 className="text-3xl font-black text-slate-900">
              Office Hours
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {officeHours.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl bg-white px-6 py-4"
              >
                <span className="font-semibold text-slate-700">
                  {item.day}
                </span>

                <span className="font-bold text-blue-700">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}