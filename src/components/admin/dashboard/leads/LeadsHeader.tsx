"use client";

import { Download, Plus } from "lucide-react";

export default function LeadsHeader() {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Leads Management
        </h1>

        <p className="mt-2 text-slate-500">
          Manage all enquiries received from the website.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
          <Download className="h-5 w-5" />

          Export
        </button>

        <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          <Plus className="h-5 w-5" />

          Add Lead
        </button>
      </div>
    </section>
  );
}