import { prisma } from "@/lib/prisma";

import type {
  PlacementApplicationInput,
  PlacementApplicationStatus,
} from "@/types/placement";

export class PlacementService {
  /**
   * Create a new placement application
   */
  static async createApplication(
    data: PlacementApplicationInput
  ) {
    return await prisma.placementApplication.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,

        courseSlug: data.courseSlug || null,
        courseName: data.courseName || null,

        resumeUrl: data.resumeUrl || null,
        resumeName: data.resumeName || null,

        status: "NEW",
      },
    });
  }

  /**
   * Get paginated placement applications
   * Supports:
   * - Pagination
   * - Search
   * - Status filter
   */
  static async getApplications({
    page = 1,
    limit = 10,
    search,
    status,
  }: {
    page?: number;
    limit?: number;
    search?: string;
    status?: PlacementApplicationStatus;
  } = {}) {
    // Normalize pagination values
    const currentPage = Math.max(
      1,
      Math.floor(page)
    );

    const pageSize = Math.min(
      50,
      Math.max(1, Math.floor(limit))
    );

    const skip = (currentPage - 1) * pageSize;

    // Build search conditions
    const searchValue = search?.trim();

    const where = {
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
    courseName: {
      contains: searchValue,
    },
  },
],
          }
        : {}),
    };

    const [applications, total] =
      await prisma.$transaction([
        prisma.placementApplication.findMany({
          where,
          skip,
          take: pageSize,
          orderBy: {
            createdAt: "desc",
          },
        }),

        prisma.placementApplication.count({
          where,
        }),
      ]);

    const totalPages = Math.ceil(
      total / pageSize
    );

    return {
      applications,

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
   * Get all placement applications
   *
   * Kept for existing server-side usages.
   */
  static async getAllApplications() {
    return await prisma.placementApplication.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  /**
 * Get placement application statistics
 */
static async getApplicationStats() {
  const [
    total,
    newApplications,
    reviewedApplications,
    shortlistedApplications,
    rejectedApplications,
  ] = await prisma.$transaction([
    prisma.placementApplication.count(),

    prisma.placementApplication.count({
      where: {
        status: "NEW",
      },
    }),

    prisma.placementApplication.count({
      where: {
        status: "REVIEWED",
      },
    }),

    prisma.placementApplication.count({
      where: {
        status: "SHORTLISTED",
      },
    }),

    prisma.placementApplication.count({
      where: {
        status: "REJECTED",
      },
    }),
  ]);

  return {
    total,
    new: newApplications,
    reviewed: reviewedApplications,
    shortlisted: shortlistedApplications,
    rejected: rejectedApplications,
  };
}

  /**
   * Get placement application by ID
   */
  static async getApplicationById(id: string) {
    return await prisma.placementApplication.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * Update application status
   */
  static async updateApplicationStatus(
    id: string,
    status: PlacementApplicationStatus
  ) {
    return await prisma.placementApplication.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  /**
   * Delete placement application
   */
  static async deleteApplication(id: string) {
    return await prisma.placementApplication.delete({
      where: {
        id,
      },
    });
  }
}