"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DashboardLead } from "@/services/dashboard.client";

interface RecentLeadsProps {
  leads: DashboardLead[];
}

export default function RecentLeads({
  leads,
}: RecentLeadsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Recent Leads
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest enquiries received from the website.
          </p>
        </div>

        <Link
          href="/admin/leads"
          className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                Name
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                Subject
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {lead.fullName}
                    </p>

                    <p className="text-sm text-slate-500">
                      {lead.email}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-slate-700">
                  {lead.subject ?? "-"}
                </td>

                <td className="px-6 py-4 text-sm text-slate-700">
                  {lead.phone ?? "-"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      lead.status === "NEW"
                        ? "bg-blue-100 text-blue-700"
                        : lead.status === "CONTACTED"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {leads.length === 0 && (
          <div className="py-10 text-center text-slate-500">
            No leads found.
          </div>
        )}
      </div>
    </section>
  );
}