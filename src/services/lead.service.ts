import { prisma } from "@/lib/prisma";
import { LeadInput } from "@/validation/lead";
import { ContactInput } from "@/validation/contact";

type LeadStatus = "NEW" | "CONTACTED" | "CLOSED";

export class LeadService {
  /**
   * Create a new admission lead
   */
  static async createLead(data: LeadInput) {
    return await prisma.lead.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,

        type: "ADMISSION",

        courseSlug: data.courseSlug,
        courseName: data.courseName,

        source: "WEBSITE",
        status: "NEW",
      },
    });
  }

  /**
   * Create a new contact lead
   */
  static async createContactLead(data: ContactInput) {
    return await prisma.lead.create({
      data: {
        fullName: data.fullName,
        phone: data.phone || null,
        email: data.email,

        type: "CONTACT",

        subject: data.subject || null,
        message: data.message,

        source: "WEBSITE",
        status: "NEW",
      },
    });
  }

  /**
   * Get all leads
   */
  static async getAllLeads() {
    return await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
   * Get lead by ID
   */
  static async getLeadById(id: string) {
    return await prisma.lead.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * Update lead status
   */
  static async updateLeadStatus(
    id: string,
    status: LeadStatus
  ) {
    return await prisma.lead.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  /**
   * Delete lead
   */
  static async deleteLead(id: string) {
    return await prisma.lead.delete({
      where: {
        id,
      },
    });
  }

  /**
   * Dashboard Statistics
   */
  static async getLeadStats() {
    const [
      totalLeads,
      newLeads,
      contactedLeads,
      closedLeads,
      recentLeads,
    ] = await Promise.all([
      prisma.lead.count(),

      prisma.lead.count({
        where: {
          status: "NEW",
        },
      }),

      prisma.lead.count({
        where: {
          status: "CONTACTED",
        },
      }),

      prisma.lead.count({
        where: {
          status: "CLOSED",
        },
      }),

      prisma.lead.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]);

    return {
      totalLeads,
      newLeads,
      contactedLeads,
      closedLeads,
      recentLeads,
    };
  }
}