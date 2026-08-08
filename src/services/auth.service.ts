import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { JwtService } from "@/lib/jwt";

import { LoginInput } from "@/validation/auth.validation";

export class AuthService {
  /**
   * Authenticate admin
   */
  static async login(data: LoginInput) {
    // Find admin by email
    const admin = await prisma.admin.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!admin) {
      throw new Error("Invalid email or password.");
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      data.password,
      admin.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid email or password.");
    }

    // Generate JWT
    const token = await JwtService.generateToken({
      adminId: admin.id,
      email: admin.email,
    });

    // Return authenticated admin
    return {
      token,
      admin: {
        id: admin.id,
        fullName: admin.fullName,
        email: admin.email,
      },
    };
  }
}