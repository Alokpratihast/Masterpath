"use client";

import { X, Mail, Phone, BookOpen, Calendar } from "lucide-react";

import { Lead } from "@/services/lead.client";
import LeadStatusBadge from "./LeadStatusBadge";

interface LeadDetailsModalProps {
  open: boolean;
  lead: Lead | null;
  onClose: () => void;
}

export default function LeadDetailsModal({
  open,
  lead,
  onClose,
}: LeadDetailsModalProps) {
  if (!open || !lead) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-2xl font-bold">
              Lead Details
            </h2>

            <p className="text-sm text-slate-500">
              Complete enquiry information
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Name */}
          <div>
            <h3 className="text-lg font-semibold">
              {lead.fullName}
            </h3>

            <LeadStatusBadge
              status={lead.status}
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-600" />

            <span>{lead.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-green-600" />

            <span>{lead.phone ?? "-"}</span>
          </div>

          {/* Subject */}
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-purple-600" />

            <span>{lead.subject ?? "-"}</span>
          </div>

          {/* Created */}
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-orange-600" />

            <span>
              {new Date(
                lead.createdAt
              ).toLocaleString()}
            </span>
          </div>

          {/* Message */}
          <div>
            <h4 className="mb-3 font-semibold">
              Message
            </h4>

            <div className="rounded-xl bg-slate-50 p-4 text-slate-700">
              {lead.message}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}