"use client";

interface LeadStatusBadgeProps {
  status: "NEW" | "CONTACTED" | "CLOSED";
}

export default function LeadStatusBadge({
  status,
}: LeadStatusBadgeProps) {
  const styles = {
    NEW: "bg-blue-100 text-blue-700",
    CONTACTED: "bg-amber-100 text-amber-700",
    CLOSED: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}