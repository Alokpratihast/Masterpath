"use client";

import { Trash2, X } from "lucide-react";

import { Lead } from "@/services/lead.client";

interface DeleteLeadDialogProps {
  open: boolean;
  lead: Lead | null;
  loading?: boolean;
  onClose: () => void;
  onDelete: (id: string) => Promise<void>;
}

export default function DeleteLeadDialog({
  open,
  lead,
  loading = false,
  onClose,
  onDelete,
}: DeleteLeadDialogProps) {
  if (!open || !lead) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-3">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Delete Lead
              </h2>

              <p className="text-sm text-slate-500">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-3 p-6">
          <p className="text-slate-700">
            Are you sure you want to delete this lead?
          </p>

          <div className="rounded-xl border bg-slate-50 p-4">
            <p className="font-semibold">
              {lead.fullName}
            </p>

            <p className="text-sm text-slate-500">
              {lead.email}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t p-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2 font-medium hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={() => onDelete(lead.id)}
            className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete Lead"}
          </button>
        </div>
      </div>
    </>
  );
}