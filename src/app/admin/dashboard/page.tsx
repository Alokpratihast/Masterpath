"use client";

import { useEffect, useState } from "react";

import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import StatsGrid from "@/components/admin/dashboard/StatsGrid";
import QuickActions from "@/components/admin/dashboard/QuickActions";
import RecentLeads from "@/components/admin/dashboard/RecentLeads";

import {
  DashboardClient,
  DashboardData,
} from "@/services/dashboard.client";

export default function DashboardPage() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data =
          await DashboardClient.getDashboard();

        setDashboard(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          Loading dashboard...
        </p>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-red-500">
          Failed to load dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid data={dashboard} />

      <QuickActions />

      <RecentLeads
        leads={dashboard.recentLeads}
      />
    </div>
  );
}