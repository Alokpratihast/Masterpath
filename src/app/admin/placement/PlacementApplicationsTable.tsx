"use client";

import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Filter,
  Loader2,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type PlacementStatus =
  | "NEW"
  | "REVIEWED"
  | "SHORTLISTED"
  | "REJECTED";

type PlacementApplication = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  courseName: string | null;
  resumeUrl: string | null;
  status: PlacementStatus;
  createdAt: Date | string;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type Props = {
  applications: PlacementApplication[];
  pagination: Pagination;
};

const statuses: PlacementStatus[] = [
  "NEW",
  "REVIEWED",
  "SHORTLISTED",
  "REJECTED",
];

function getStatusClass(status: PlacementStatus) {
  switch (status) {
    case "NEW":
      return "bg-blue-50 text-blue-700 border-blue-100";

    case "REVIEWED":
      return "bg-amber-50 text-amber-700 border-amber-100";

    case "SHORTLISTED":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";

    case "REJECTED":
      return "bg-red-50 text-red-700 border-red-100";

    default:
      return "bg-slate-50 text-slate-700 border-slate-100";
  }
}

export default function PlacementApplicationsTable({
  applications,
  pagination,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [updatingId, setUpdatingId] = useState<string | null>(
    null
  );

  const [deletingId, setDeletingId] = useState<string | null>(
    null
  );

  const [deleteApplication, setDeleteApplication] =
    useState<PlacementApplication | null>(null);

  const [viewApplication, setViewApplication] =
    useState<PlacementApplication | null>(null);

  // Lint fix: initialize filters from URL instead of syncing state in an effect.
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [statusFilter, setStatusFilter] = useState<
    PlacementStatus | "ALL"
  >(
    (searchParams.get("status") as PlacementStatus | null) ||
      "ALL"
  );

  const [isSearching, setIsSearching] = useState(false);


  /*
   * Update URL query parameters.
   *
   * Backend will read:
   * page
   * limit
   * search
   * status
   */
  function updateFilters(
    nextSearch: string,
    nextStatus: PlacementStatus | "ALL"
  ) {
    const params = new URLSearchParams();

    params.set("page", "1");
    params.set("limit", String(pagination.limit));

    const trimmedSearch = nextSearch.trim();

    if (trimmedSearch) {
      params.set("search", trimmedSearch);
    }

    if (nextStatus !== "ALL") {
      params.set("status", nextStatus);
    }

    setIsSearching(true);

    router.push(
      `/admin/placement?${params.toString()}`
    );
  }

  /*
   * Search is triggered when Enter is pressed.
   */
  function handleSearchSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    updateFilters(search, statusFilter);
  }

  /*
   * Status filter immediately calls backend.
   */
  function handleStatusFilter(
    status: PlacementStatus | "ALL"
  ) {
    setStatusFilter(status);

    updateFilters(search, status);
  }

  /*
   * Clear search and status filter.
   */
  function clearFilters() {
    setSearch("");
    setStatusFilter("ALL");

    setIsSearching(true);

    router.push(
      `/admin/placement?page=1&limit=${pagination.limit}`
    );
  }

  /*
   * Pagination navigation.
   */
  function goToPage(page: number) {
    if (page < 1 || page > pagination.totalPages) {
      return;
    }

    const params = new URLSearchParams();

    params.set("page", String(page));
    params.set("limit", String(pagination.limit));

    const trimmedSearch = search.trim();

    if (trimmedSearch) {
      params.set("search", trimmedSearch);
    }

    if (statusFilter !== "ALL") {
      params.set("status", statusFilter);
    }

    setIsSearching(true);

    router.push(
      `/admin/placement?${params.toString()}`
    );
  }

  /*
   * Change number of records per page.
   */
  function handleLimitChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const limit = Number(event.target.value);

    const params = new URLSearchParams();

    params.set("page", "1");
    params.set("limit", String(limit));

    const trimmedSearch = search.trim();

    if (trimmedSearch) {
      params.set("search", trimmedSearch);
    }

    if (statusFilter !== "ALL") {
      params.set("status", statusFilter);
    }

    setIsSearching(true);

    router.push(
      `/admin/placement?${params.toString()}`
    );
  }

  /*
   * Update application status.
   */
  async function handleStatusChange(
    id: string,
    status: PlacementStatus
  ) {
    try {
      setUpdatingId(id);

      const response = await fetch(
        `/api/admin/placement/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const contentType =
        response.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        const text = await response.text();

        console.error("Non-JSON API response:", text);

        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Failed to update application."
        );
      }

      router.refresh();
    } catch (error) {
      console.error("Status update error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to update application."
      );
    } finally {
      setUpdatingId(null);
    }
  }

  /*
   * Delete application.
   */
  async function handleDelete() {
    if (!deleteApplication) {
      return;
    }

    try {
      setDeletingId(deleteApplication.id);

      const response = await fetch(
        `/api/admin/placement/${deleteApplication.id}`,
        {
          method: "DELETE",
        }
      );

      const contentType =
        response.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        const text = await response.text();

        console.error("Non-JSON API response:", text);

        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Failed to delete application."
        );
      }

      setDeleteApplication(null);

      router.refresh();
    } catch (error) {
      console.error("Delete application error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete application."
      );
    } finally {
      setDeletingId(null);
    }
  }

  const hasActiveFilters =
    search.trim() !== "" || statusFilter !== "ALL";

  /*
   * Generate pagination numbers.
   */
  function getPaginationPages() {
    const pages: (number | "...")[] = [];

    const currentPage = pagination.page;
    const totalPages = pagination.totalPages;

    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  }

  return (
    <>
      <div className="space-y-4">
        {/* Search + Filters */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex-1"
            >
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search by name, email, phone or course..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
              />
            </form>

            {/* Status Filter */}
            <div className="relative w-full lg:w-56">
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                value={statusFilter}
                onChange={(event) =>
                  handleStatusFilter(
                    event.target.value as
                      | PlacementStatus
                      | "ALL"
                  )
                }
                className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="ALL">
                  All Statuses
                </option>

                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                disabled={isSearching}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>

          {/* Result information */}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {applications.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {pagination.total}
              </span>{" "}
              applications
            </p>

            {statusFilter !== "ALL" && (
              <span
                className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                  statusFilter
                )}`}
              >
                {statusFilter}
              </span>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1250px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Student
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Course
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Resume
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Applied
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {applications.map((application) => {
                  const isUpdating =
                    updatingId === application.id;

                  const isDeleting =
                    deletingId === application.id;

                  return (
                    <tr
                      key={application.id}
                      className="transition hover:bg-slate-50"
                    >
                      {/* Student */}
                      <td className="px-6 py-5">
                        <p className="font-semibold text-slate-900">
                          {application.fullName}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          ID: {application.id}
                        </p>
                      </td>

                      {/* Contact */}
                      <td className="px-6 py-5">
                        <p className="text-sm text-slate-700">
                          {application.email}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {application.phone}
                        </p>
                      </td>

                      {/* Course */}
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-800">
                          {application.courseName ||
                            "Not specified"}
                        </p>
                      </td>

                      {/* Resume */}
                      <td className="px-6 py-5">
                        {application.resumeUrl ? (
                          <a
                            href={application.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-blue-600 transition hover:border-blue-200 hover:bg-blue-50"
                          >
                            <FileText className="h-4 w-4" />
                            View Resume
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span className="text-sm text-slate-400">
                            No resume
                          </span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <select
                            value={application.status}
                            disabled={
                              isUpdating || isDeleting
                            }
                            onChange={(event) =>
                              handleStatusChange(
                                application.id,
                                event.target
                                  .value as PlacementStatus
                              )
                            }
                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold outline-none transition focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 ${getStatusClass(
                              application.status
                            )}`}
                          >
                            {statuses.map((status) => (
                              <option
                                key={status}
                                value={status}
                              >
                                {status}
                              </option>
                            ))}
                          </select>

                          {isUpdating && (
                            <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                          )}
                        </div>
                      </td>

                      {/* Applied */}
                      <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-500">
                        {new Date(
                          application.createdAt
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={
                              isUpdating || isDeleting
                            }
                            onClick={() =>
                              setViewApplication(
                                application
                              )
                            }
                            className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            View
                          </button>

                          <button
                            type="button"
                            disabled={
                              isUpdating || isDeleting
                            }
                            onClick={() =>
                              setDeleteApplication(
                                application
                              )
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {isDeleting ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}

                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {/* Empty */}
                {applications.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-16 text-center"
                    >
                      <Search className="mx-auto h-10 w-10 text-slate-300" />

                      <p className="mt-4 font-medium text-slate-700">
                        No applications found
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Try changing your search or status
                        filter.
                      </p>

                      {hasActiveFilters && (
                        <button
                          type="button"
                          onClick={clearFilters}
                          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                          <X className="h-4 w-4" />
                          Clear Filters
                        </button>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.totalPages > 0 && (
            <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Page size */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Rows per page:</span>

                <select
                  value={pagination.limit}
                  onChange={handleLimitChange}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={50}>50</option>
                </select>
              </div>

              {/* Pagination controls */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={
                    !pagination.hasPreviousPage ||
                    isSearching
                  }
                  onClick={() =>
                    goToPage(pagination.page - 1)
                  }
                  className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                <div className="hidden items-center gap-1 sm:flex">
                  {getPaginationPages().map(
                    (page, index) => {
                      if (page === "...") {
                        return (
                          <span
                            key={`dots-${index}`}
                            className="px-2 text-sm text-slate-400"
                          >
                            ...
                          </span>
                        );
                      }

                      const isCurrent =
                        page === pagination.page;

                      return (
                        <button
                          key={page}
                          type="button"
                          disabled={isSearching}
                          onClick={() =>
                            goToPage(page)
                          }
                          className={`h-9 min-w-9 rounded-lg px-2 text-sm font-medium transition ${
                            isCurrent
                              ? "bg-blue-600 text-white"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                  )}
                </div>

                <span className="px-2 text-sm font-medium text-slate-600 sm:hidden">
                  Page {pagination.page} of{" "}
                  {pagination.totalPages}
                </span>

                <button
                  type="button"
                  disabled={
                    !pagination.hasNextPage ||
                    isSearching
                  }
                  onClick={() =>
                    goToPage(pagination.page + 1)
                  }
                  className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* View Application Modal */}
      {viewApplication && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setViewApplication(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="view-placement-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2
                  id="view-placement-title"
                  className="text-lg font-bold text-slate-900"
                >
                  Application Details
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  {viewApplication.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setViewApplication(null)
                }
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Details */}
            <div className="space-y-5 p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Student
                </p>

                <p className="mt-1 text-base font-semibold text-slate-900">
                  {viewApplication.fullName}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-700">
                    {viewApplication.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    {viewApplication.phone}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Course
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {viewApplication.courseName ||
                    "Not specified"}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Status
                  </p>

                  <span
                    className={`mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                      viewApplication.status
                    )}`}
                  >
                    {viewApplication.status}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Applied
                  </p>

                  <p className="mt-2 text-sm text-slate-700">
                    {new Date(
                      viewApplication.createdAt
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white p-2 shadow-sm">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Resume
                      </p>

                      <p className="text-xs text-slate-500">
                        Student resume document
                      </p>
                    </div>
                  </div>

                  {viewApplication.resumeUrl ? (
                    <a
                      href={viewApplication.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      View Resume
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">
                      No resume
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-slate-200 px-6 py-4">
              <button
                type="button"
                onClick={() =>
                  setViewApplication(null)
                }
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteApplication && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              if (deletingId === null) {
                setDeleteApplication(null);
              }
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-placement-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>

            <div className="mt-5">
              <h2
                id="delete-placement-title"
                className="text-lg font-bold text-slate-900"
              >
                Delete Application?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Are you sure you want to delete the
                application of{" "}
                <span className="font-semibold text-slate-700">
                  {deleteApplication.fullName}
                </span>
                ?
              </p>

              <p className="mt-2 text-xs text-red-500">
                This action cannot be undone.
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={deletingId !== null}
                onClick={() =>
                  setDeleteApplication(null)
                }
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={deletingId !== null}
                onClick={handleDelete}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deletingId !== null && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}

                {deletingId !== null
                  ? "Deleting..."
                  : "Delete Application"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
