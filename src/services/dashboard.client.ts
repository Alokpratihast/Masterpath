export interface DashboardLead {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: "NEW" | "CONTACTED" | "CLOSED";
  createdAt: string;
  updatedAt: string;
}

export interface DashboardData {
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  closedLeads: number;
  recentLeads: DashboardLead[];
}

export class DashboardClient {
  static async getDashboard(): Promise<DashboardData> {
    const response = await fetch("/api/admin/dashboard", {
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  }
}