"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, Menu } from "lucide-react";

import UserMenu from "./UserMenu";
import MobileSidebar from "./MobileSidebar";

import { AuthClient, AdminUser } from "@/services/auth.client";

export default function Navbar() {
  const pathname = usePathname();

  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function loadAdmin() {
      try {
        const response = await AuthClient.me();
        setAdmin(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadAdmin();
  }, []);

  const pageTitle = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace("-", " ");

  const title =
    pageTitle && pageTitle !== "admin"
      ? pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
      : "Dashboard";

  return (
    <>
      <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {title}
            </h1>

            <p className="text-sm text-slate-500">
              Welcome back to the Admin Panel
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button className="relative rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {admin && (
            <UserMenu
              fullName={admin.fullName}
              email={admin.email}
            />
          )}
        </div>
      </header>

      <MobileSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}