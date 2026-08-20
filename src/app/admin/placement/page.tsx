import { PlacementService } from "@/services/placement.service";

import PlacementApplicationsTable from "./PlacementApplicationsTable";

type SearchParams = {
  page?: string;
  limit?: string;
  search?: string;
  status?: string;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function PlacementApplicationsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const page = params.page
    ? Number(params.page)
    : 1;

  const limit = params.limit
    ? Number(params.limit)
    : 10;

  const search = params.search?.trim() || undefined;

  const status =
    params.status === "NEW" ||
    params.status === "REVIEWED" ||
    params.status === "SHORTLISTED" ||
    params.status === "REJECTED"
      ? params.status
      : undefined;

  /*
   * Fetch paginated applications
   * and global statistics in parallel.
   */
  const [result, stats] = await Promise.all([
    PlacementService.getApplications({
      page,
      limit,
      search,
      status,
    }),

    PlacementService.getApplicationStats(),
  ]);

  const {
    applications,
    pagination,
  } = result;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Placement Applications
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage and review student placement applications.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Applications
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {stats.total}
          </p>
        </div>

        {/* New */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            New
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {stats.new}
          </p>
        </div>

        {/* Reviewed */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Reviewed
          </p>

          <p className="mt-2 text-3xl font-bold text-amber-600">
            {stats.reviewed}
          </p>
        </div>

        {/* Shortlisted */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Shortlisted
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {stats.shortlisted}
          </p>
        </div>
      </div>

      {/* Applications Table */}
      <PlacementApplicationsTable
        applications={applications}
        pagination={pagination}
      />
    </div>
  );
}