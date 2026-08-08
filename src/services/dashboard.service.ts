import { prisma } from "@/lib/prisma";

export class DashboardService {
  /**
   * Dashboard Statistics
   */
  static async getDashboardStats() {
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