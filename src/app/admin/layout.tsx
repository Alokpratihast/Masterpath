"use client";

import { usePathname } from "next/navigation";

import Sidebar from "@/components/admin/dashboard/layout/Sidebar";
import Navbar from "@/components/admin/dashboard/layout/Navbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  // Login page: only login form
  if (isLoginPage) {
    return (
      <main className="min-h-screen bg-slate-100">
        {children}
      </main>
    );
  }

  // Other admin pages: Sidebar + Navbar
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}