"use client";

import {
  BookOpen,
  Mail,
  UserPlus,
  Users,
} from "lucide-react";

import StatsCard from "./StatsCard";
import { DashboardData } from "@/services/dashboard.client";

interface StatsGridProps {
  data: DashboardData;
}

export default function StatsGrid({
  data,
}: StatsGridProps) {
  const stats = [
    {
      title: "Total Leads",
      value: data.totalLeads,
      change: "Live Data",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "New Leads",
      value: data.newLeads,
      change: "Live Data",
      icon: UserPlus,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Contacted Leads",
      value: data.contactedLeads,
      change: "Live Data",
      icon: Mail,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Closed Leads",
      value: data.closedLeads,
      change: "Live Data",
      icon: BookOpen,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          iconBg={stat.iconBg}
          iconColor={stat.iconColor}
        />
      ))}
    </section>
  );
}