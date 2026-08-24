"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { AuthClient } from "@/services/auth.client";

import PasswordField from "./PasswordField";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await AuthClient.login({
        email,
        password,
      });

      router.push("/admin/dashboard");
    } catch (error: unknown) {
      // Lint fix: narrow unknown errors before reading message.
      alert(
        error instanceof Error
          ? error.message
          : "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Enter email"
          className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-600"
        />
      </div>

      <PasswordField
        value={password}
        onChange={setPassword}
      />

      <button
        disabled={loading}
        className="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </button>
    </form>
  );
}
