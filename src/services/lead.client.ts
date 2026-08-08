export interface Lead {
  id: string;

  fullName: string;
  phone: string | null;
  email: string | null;

  type: "ADMISSION" | "CONTACT";

  courseSlug: string | null;
  courseName: string | null;

  subject: string | null;
  message: string | null;

  source:
    | "WEBSITE"
    | "GOOGLE"
    | "FACEBOOK"
    | "INSTAGRAM"
    | "LINKEDIN";

  status: "NEW" | "CONTACTED" | "CLOSED";

  remarks: string | null;

  createdAt: string;
  updatedAt: string;
}

export class LeadClient {
  /**
   * Get All Leads
   */
  static async getAllLeads(): Promise<Lead[]> {
    const response = await fetch("/api/admin/leads", {
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to fetch leads."
      );
    }

    return result.data as Lead[];
  }

  /**
   * Get Lead By Id
   */
  static async getLeadById(id: string): Promise<Lead> {
    const response = await fetch(
      `/api/admin/leads/${id}`,
      {
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Lead not found."
      );
    }

    return result.data as Lead;
  }

  /**
   * Update Lead Status
   */
  static async updateStatus(
    id: string,
    status: "NEW" | "CONTACTED" | "CLOSED"
  ): Promise<Lead> {
    const response = await fetch(
      `/api/admin/leads/${id}`,
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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to update lead."
      );
    }

    return result.data as Lead;
  }

  /**
   * Delete Lead
   */
  static async deleteLead(id: string) {
    const response = await fetch(
      `/api/admin/leads/${id}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to delete lead."
      );
    }

    return result;
  }
}