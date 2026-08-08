export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  email: string | null;

  courseSlug: string;
  courseName: string;

  source: "WEBSITE" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM" | "LINKEDIN";

  status: "NEW" | "CONTACTED" | "CLOSED";

  remarks: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadInput {
  fullName: string;
  phone: string;
  email?: string;

  courseSlug: string;
  courseName: string;
}

export class LeadClient {
  /**
   * Create Admission Lead
   */
  static async createLead(data: CreateLeadInput) {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to submit lead."
      );
    }

    return result.data as Lead;
  }

  /**
   * Get All Leads
   */
  static async getAllLeads() {
    const response = await fetch("/api/admin/leads");

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
  static async getLeadById(id: string) {
    const response = await fetch(
      `/api/admin/leads/${id}`
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
  ) {
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