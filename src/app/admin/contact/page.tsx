import { LeadService } from "@/services/lead.service";

import ContactLeadsTable from "./ContactLeadsTable";

type SearchParams = {
  page?: string;
  limit?: string;
  search?: string;
  status?: string;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function ContactLeadsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const page = params.page
    ? Number(params.page)
    : 1;

  const limit = params.limit
    ? Number(params.limit)
    : 10;

  const search =
    params.search?.trim() || undefined;

  const status =
    params.status === "NEW" ||
    params.status === "CONTACTED" ||
    params.status === "CLOSED"
      ? params.status
      : undefined;

  const [result, stats] = await Promise.all([
    LeadService.getContactLeads({
      page,
      limit,
      search,
      status,
    }),

    LeadService.getContactLeadStats(),
  ]);

  const { leads, pagination } = result;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Contact Leads
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage and review enquiries submitted
          through the website contact form.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Leads
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {stats.totalLeads}
          </p>
        </div>

        {/* New */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            New
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {stats.newLeads}
          </p>
        </div>

        {/* Contacted */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Contacted
          </p>

          <p className="mt-2 text-3xl font-bold text-amber-600">
            {stats.contactedLeads}
          </p>
        </div>

        {/* Closed */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Closed
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {stats.closedLeads}
          </p>
        </div>
      </div>

      {/* Contact Leads Table */}
      <ContactLeadsTable
        leads={leads}
        pagination={pagination}
      />
    </div>
  );
}