"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Lead, LeadClient } from "@/services/lead.client";

import LeadsHeader from "@/components/admin/dashboard/leads/LeadsHeader";
import LeadsTable from "@/components/admin/dashboard/leads/LeadsTable";
import SearchBar from "@/components/admin/dashboard/leads/SearchBar";
import StatusFilter, {
  LeadStatusFilter,
} from "@/components/admin/dashboard/leads/StatusFilter";
import LeadDetailsModal from "@/components/admin/dashboard/leads/LeadDetailsModal";
import UpdateStatusModal from "@/components/admin/dashboard/leads/UpdateStatusModal";
import DeleteLeadDialog from "@/components/admin/dashboard/leads/DeleteLeadDialog";

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] =
    useState<LeadStatusFilter>("ALL");

  // View Modal
  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  // Edit Modal
  const [selectedLeadForEdit, setSelectedLeadForEdit] =
    useState<Lead | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);

  const [updating, setUpdating] =
    useState(false);

  // Delete Modal
  const [selectedLeadForDelete, setSelectedLeadForDelete] =
    useState<Lead | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);

  const [deleting, setDeleting] =
    useState(false);

  /**
   * Load all leads
   */
  async function loadLeads() {
    try {
      setLoading(true);

      const data = await LeadClient.getAllLeads();

      setLeads(data);
    } catch (error) {
      console.error("Failed to load leads:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to load leads."
      );
    } finally {
      setLoading(false);
    }
  }

  /**
   * Initial load
   */
  useEffect(() => {
    loadLeads();
  }, []);

  /**
   * Filter Leads
   */
  const filteredLeads = useMemo(() => {
    const query = search.toLowerCase().trim();

    return leads.filter((lead) => {
      const matchesSearch =
        lead.fullName
          .toLowerCase()
          .includes(query) ||

        (lead.email ?? "")
          .toLowerCase()
          .includes(query) ||

        (lead.phone ?? "")
          .toLowerCase()
          .includes(query) ||

        (lead.subject ?? "")
          .toLowerCase()
          .includes(query) ||

        (lead.courseName ?? "")
          .toLowerCase()
          .includes(query) ||

        lead.type
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        status === "ALL" ||
        lead.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, status]);

  /**
   * View Lead
   */
  async function handleViewLead(id: string) {
    try {
      const lead =
        await LeadClient.getLeadById(id);

      setSelectedLead(lead);
      setIsModalOpen(true);
    } catch (error) {
      console.error(
        "Failed to fetch lead:",
        error
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to load lead."
      );
    }
  }

  /**
   * Open Edit Modal
   */
  function handleEditLead(lead: Lead) {
    setSelectedLeadForEdit(lead);
    setIsEditModalOpen(true);
  }

  /**
   * Open Delete Modal
   */
  function handleDeleteClick(lead: Lead) {
    setSelectedLeadForDelete(lead);
    setIsDeleteModalOpen(true);
  }

  /**
   * Update Lead Status
   */
  async function handleUpdateStatus(
    id: string,
    status: "NEW" | "CONTACTED" | "CLOSED"
  ) {
    try {
      setUpdating(true);

      await LeadClient.updateStatus(
        id,
        status
      );

      toast.success(
        "Lead status updated successfully."
      );

      await loadLeads();

      setIsEditModalOpen(false);
      setSelectedLeadForEdit(null);
    } catch (error) {
      console.error(
        "Failed to update lead:",
        error
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update lead."
      );
    } finally {
      setUpdating(false);
    }
  }

  /**
   * Delete Lead
   */
  async function handleDeleteLead(id: string) {
    try {
      setDeleting(true);

      await LeadClient.deleteLead(id);

      toast.success(
        "Lead deleted successfully."
      );

      await loadLeads();

      setIsDeleteModalOpen(false);
      setSelectedLeadForDelete(null);
    } catch (error) {
      console.error(
        "Failed to delete lead:",
        error
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to delete lead."
      );
    } finally {
      setDeleting(false);
    }
  }

  /**
   * Loading State
   */
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-slate-500">
          Loading leads...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <LeadsHeader />

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by name, email, phone, course or subject..."
        />

        <StatusFilter
          value={status}
          onChange={setStatus}
        />
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {filteredLeads.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-700">
            {leads.length}
          </span>{" "}
          leads
        </p>
      </div>

      {/* Leads Table */}
      <LeadsTable
        leads={filteredLeads}
        onView={handleViewLead}
        onEdit={handleEditLead}
        onDelete={handleDeleteClick}
      />

      {/* Delete Lead Dialog */}
      <DeleteLeadDialog
        open={isDeleteModalOpen}
        lead={selectedLeadForDelete}
        loading={deleting}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedLeadForDelete(null);
        }}
        onDelete={handleDeleteLead}
      />

      {/* View Lead Modal */}
      <LeadDetailsModal
        open={isModalOpen}
        lead={selectedLead}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedLead(null);
        }}
      />

      {/* Update Status Modal */}
      <UpdateStatusModal
        open={isEditModalOpen}
        lead={selectedLeadForEdit}
        loading={updating}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedLeadForEdit(null);
        }}
        onUpdate={handleUpdateStatus}
      />
    </div>
  );
}