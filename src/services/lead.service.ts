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
   * Get paginated contact leads
   *
   * Supports:
   * - Pagination
   * - Search
   * - Status filter
   *
   * Only CONTACT type leads are returned.
   */
  static async getContactLeads({
    page = 1,
    limit = 10,
    search,
    status,
  }: {
    page?: number;
    limit?: number;
    search?: string;
    status?: LeadStatus;
  } = {}) {
    // Normalize pagination values
    const currentPage = Math.max(1, Math.floor(page));

    const pageSize = Math.min(
      50,
      Math.max(1, Math.floor(limit))
    );

    const skip = (currentPage - 1) * pageSize;

    // Normalize search value
    const searchValue = search?.trim();

    // Build Prisma where condition
    const where = {
      // IMPORTANT:
      // Contact page should only show CONTACT leads
      type: "CONTACT" as const,

      ...(status
        ? {
            status,
          }
        : {}),

      ...(searchValue
        ? {
            OR: [
              {
                fullName: {
                  contains: searchValue,
                },
              },
              {
                email: {
                  contains: searchValue,
                },
              },
              {
                phone: {
                  contains: searchValue,
                },
              },
              {
                subject: {
                  contains: searchValue,
                },
              },
              {
                message: {
                  contains: searchValue,
                },
              },
            ],
          }
        : {}),
    };

    // Fetch data and total count together
    const [leads, total] = await prisma.$transaction([
      prisma.lead.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
      }),

      prisma.lead.count({
        where,
      }),
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(
      total / pageSize
    );

    return {
      leads,

      pagination: {
        page: currentPage,
        limit: pageSize,
        total,
        totalPages,
        hasNextPage:
          currentPage < totalPages,
        hasPreviousPage:
          currentPage > 1,
      },
    };
  }

  /**
 * Contact Lead Statistics
 *
 * Only CONTACT leads are counted.
 */
static async getContactLeadStats() {
  const [
    totalLeads,
    newLeads,
    contactedLeads,
    closedLeads,
  ] = await prisma.$transaction([
    prisma.lead.count({
      where: {
        type: "CONTACT",
      },
    }),

    prisma.lead.count({
      where: {
        type: "CONTACT",
        status: "NEW",
      },
    }),

    prisma.lead.count({
      where: {
        type: "CONTACT",
        status: "CONTACTED",
      },
    }),

    prisma.lead.count({
      where: {
        type: "CONTACT",
        status: "CLOSED",
      },
    }),
  ]);

  return {
    totalLeads,
    newLeads,
    contactedLeads,
    closedLeads,
  };
}

  /**
   * Get all leads
   *
   * Kept for existing server-side usages.
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


