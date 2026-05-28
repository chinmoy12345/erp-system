"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  Users,
  Settings,
  BarChart3,
} from "lucide-react";
import { OwnerFooter, OwnerHeader, OwnerSidebar } from "@/shared/components/layout/owner";

const navItems = [
  { name: "Dashboard", href: "/owner/dashboard", icon: LayoutDashboard },
  { name: "Companies", href: "/owner/companies", icon: Building2 },
  { name: "Subscriptions", href: "/owner/subscriptions", icon: CreditCard },
  { name: "Users", href: "/owner/users", icon: Users },
  { name: "Analytics", href: "/owner/analytics", icon: BarChart3 },
  { name: "Settings", href: "/owner/settings", icon: Settings },
];

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <OwnerSidebar
        title="Owner Portal"
        navItems={navItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-1 flex-col overflow-auto">
        <OwnerHeader
          title="Owner Dashboard"
          onMenuClick={() => setSidebarOpen(true)}
          userName="Admin Owner"
        />
        <main className="flex-1 p-6">{children}</main>
        <OwnerFooter /> 
      </div>
    </div>
  );
}