"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Lead } from "@/services/lead.client";

interface UpdateStatusModalProps {
  open: boolean;
  lead: Lead | null;
  loading?: boolean;
  onClose: () => void;
  onUpdate: (
    id: string,
    status: "NEW" | "CONTACTED" | "CLOSED"
  ) => Promise<void>;
}

export default function UpdateStatusModal({
  open,
  lead,
  loading = false,
  onClose,
  onUpdate,
}: UpdateStatusModalProps) {
  const [status, setStatus] = useState<
    "NEW" | "CONTACTED" | "CLOSED"
  >("NEW");

  useEffect(() => {
    if (lead) {
      setStatus(lead.status);
    }
  }, [lead]);

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
          <div>
            <h2 className="text-xl font-bold">
              Update Lead Status
            </h2>

            <p className="text-sm text-slate-500">
              Change enquiry status
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Lead
            </label>

            <div className="rounded-xl border bg-slate-50 px-4 py-3">
              <p className="font-semibold">
                {lead.fullName}
              </p>

              <p className="text-sm text-slate-500">
                {lead.email}
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                    | "NEW"
                    | "CONTACTED"
                    | "CLOSED"
                )
              }
              className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-600"
            >
              <option value="NEW">
                NEW
              </option>

              <option value="CONTACTED">
                CONTACTED
              </option>

              <option value="CLOSED">
                CLOSED
              </option>
            </select>
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
            onClick={() =>
              onUpdate(lead.id, status)
            }
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading
              ? "Updating..."
              : "Update Status"}
          </button>
        </div>
      </div>
    </>
  );
}