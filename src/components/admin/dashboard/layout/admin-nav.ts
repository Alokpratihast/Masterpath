import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  MessageSquare,
  BarChart3,
  ClipboardList,
  PhoneCall,
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

  

  
];