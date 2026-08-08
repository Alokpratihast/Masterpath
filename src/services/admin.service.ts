import { prisma } from "@/lib/prisma";

export class AdminService {
  /**
   * Get Admin By ID
   */
  static async getAdminById(adminId: string) {
    const admin = await prisma.admin.findUnique({
      where: {
        id: adminId,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        createdAt: true,
      },
    });

    if (!admin) {
      throw new Error("Admin not found.");
    }

    return admin;
  }
}