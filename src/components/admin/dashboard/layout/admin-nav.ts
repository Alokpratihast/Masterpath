import {
  LayoutDashboard,
  MessageSquare,
  ClipboardList,
  BookOpen,
} from "lucide-react";

export type AdminNavItem = {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
};

export const adminNav: AdminNavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Contact Messages",
    href: "/admin/contact",
    icon: MessageSquare,
  },
  {
    title: "Placement Applications",
    href: "/admin/placement",
    icon: ClipboardList,
  },
  {
    title: "Blogs",
    href: "/admin/blogs",
    icon: BookOpen,
  },
];