import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Mail,
  Settings,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "Manage Leads",
    description: "View and manage all enquiries.",
    href: "/admin/leads",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Contact Messages",
    description: "Review contact enquiries.",
    href: "/admin/contact",
    icon: Mail,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Courses",
    description: "Create and update courses.",
    href: "/admin/courses",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Settings",
    description: "Manage application settings.",
    href: "/admin/settings",
    icon: Settings,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function QuickActions() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used shortcuts for administrators.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                Open

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}