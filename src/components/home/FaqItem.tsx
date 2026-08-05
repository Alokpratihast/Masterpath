"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

export default function FaqItem({
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left transition hover:bg-slate-50"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {question}
        </h3>

        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-180 text-blue-700" : "text-slate-500"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-8 text-slate-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}