"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-bold text-slate-900">
          {question}
        </h3>

        {open ? (
          <Minus className="h-5 w-5 text-blue-600" />
        ) : (
          <Plus className="h-5 w-5 text-blue-600" />
        )}
      </button>

      {open && (
        <div className="border-t border-slate-200 px-6 py-5">
          <p className="leading-8 text-slate-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}