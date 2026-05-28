"use client";
import { LayoutDashboard, ShoppingBag, Package, Truck, CreditCard, Users, FileText, Settings } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Sales", icon: ShoppingBag },
  { name: "Inventory", icon: Package },
  { name: "Purchasing", icon: Truck },
  { name: "Finance", icon: CreditCard },
  { name: "HR", icon: Users },
  { name: "Reports", icon: FileText },
  { name: "Settings", icon: Settings },
];

export function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useDashboardStore();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-6">
        <h1 className="text-xl font-bold text-gray-800">ERP System</h1>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden">✕</button>
      </div>
      <nav className="p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition ${
                item.active ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}