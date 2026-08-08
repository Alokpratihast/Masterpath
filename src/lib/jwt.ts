import { SignJWT, jwtVerify, JWTPayload } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing.");
}

const secret = new TextEncoder().encode(JWT_SECRET);

export interface JwtPayload extends JWTPayload {
  adminId: string;
  email: string;
}

export class JwtService {
  /**
   * Generate JWT
   */
  static async generateToken(
    payload: JwtPayload
  ): Promise<string> {
    return await new SignJWT(payload)
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);
  }

  /**
   * Verify JWT
   */
  static async verifyToken(
    token: string
  ): Promise<JwtPayload> {
    const { payload } = await jwtVerify(token, secret);

    if (
      typeof payload.adminId !== "string" ||
      typeof payload.email !== "string"
    ) {
      throw new Error("Invalid JWT payload.");
    }

    return {
      adminId: payload.adminId,
      email: payload.email,
    };
  }
}