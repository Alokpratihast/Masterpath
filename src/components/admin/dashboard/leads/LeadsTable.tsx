"use client";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Lead } from "@/services/lead.client";
import LeadStatusBadge from "./LeadStatusBadge";

interface LeadsTableProps {
  leads: Lead[];
  onView: (id: string) => void;
  onEdit: (lead: Lead) => void;
  onDelete: (lead: Lead) => void;
}

export default function LeadsTable({
  leads,
  onView,
  onEdit,
  onDelete,
}: LeadsTableProps) {
  if (leads.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            No Leads Found
          </h3>

          <p className="mt-2 text-slate-500">
            New enquiries will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-slate-50">
            <tr>
              {/* Name */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Name
              </th>

              {/* Type */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Type
              </th>

              {/* Course / Subject */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Course / Subject
              </th>

              {/* Phone */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Phone
              </th>

              {/* Status */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>

              {/* Created */}
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Created
              </th>

              {/* Actions */}
              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                {/* Name */}
                <td className="px-6 py-5">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {lead.fullName}
                    </p>

                    <p className="text-sm text-slate-500">
                      {lead.email || "-"}
                    </p>
                  </div>
                </td>

                {/* Type */}
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      lead.type === "ADMISSION"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {lead.type}
                  </span>
                </td>

                {/* Course / Subject */}
                <td className="px-6 py-5">
                  {lead.type === "ADMISSION" ? (
                    <div>
                      <p className="font-medium text-slate-900">
                        {lead.courseName || "-"}
                      </p>

                      <p className="text-xs text-slate-500">
                        Admission Enquiry
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium text-slate-900">
                        {lead.subject || "General Enquiry"}
                      </p>

                      <p className="text-xs text-slate-500">
                        Contact Enquiry
                      </p>
                    </div>
                  )}
                </td>

                {/* Phone */}
                <td className="px-6 py-5 text-sm text-slate-700">
                  {lead.phone || "-"}
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <LeadStatusBadge status={lead.status} />
                </td>

                {/* Created */}
                <td className="px-6 py-5 text-sm text-slate-500">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    {/* View */}
                    <button
                      type="button"
                      onClick={() => onView(lead.id)}
                      title="View lead"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-100 hover:text-blue-600"
                    >
                      <Eye className="h-5 w-5" />
                    </button>

                    {/* Edit */}
                    <button
                      type="button"
                      onClick={() => onEdit(lead)}
                      title="Edit lead"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-amber-100 hover:text-amber-600"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => onDelete(lead)}
                      title="Delete lead"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-red-100 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}