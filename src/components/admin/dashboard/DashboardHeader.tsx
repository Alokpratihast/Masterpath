"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import { AuthClient, AdminUser } from "@/services/auth.client";

export default function DashboardHeader() {
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  useEffect(() => {
    async function loadAdmin() {
      try {
        const response = await AuthClient.me();
        setAdmin(response.data);
      } catch {
        setAdmin(null);
      }
    }

    loadAdmin();
  }, []);

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="mb-8 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <p className="text-sm font-medium text-blue-600">
          {today}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {greeting}
          {admin ? `, ${admin.fullName}` : ""} 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome back! Here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Right */}
      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
        <Plus className="h-5 w-5" />

        Add Course
      </button>
    </section>
  );
}