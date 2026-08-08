export interface LoginRequest {
  email: string;
  password: string;
}

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export class AuthClient {
  /**
   * Login Admin
   */
  static async login(
    data: LoginRequest
  ): Promise<ApiResponse<{ admin: AdminUser }>> {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  }

  /**
   * Logout Admin
   */
  static async logout(): Promise<ApiResponse<null>> {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  }

  /**
   * Get Current Admin
   */
  static async me(): Promise<ApiResponse<AdminUser>> {
    const response = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  }
}