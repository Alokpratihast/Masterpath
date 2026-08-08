"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import Logo from "./Logo";
import { adminNav } from "./admin-nav";

import { AuthClient } from "@/services/auth.client";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    try {
      await AuthClient.logout();

      toast.success("Logged out successfully.");

      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Logout failed.");
    }
  }

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-5">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {adminNav.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-5">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-medium text-red-600 transition hover:bg-red-100"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>

        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()}
        </p>

        <p className="mt-1 text-center text-sm font-semibold text-slate-700">
          NFS MasterPath
        </p>
      </div>
    </aside>
  );
}