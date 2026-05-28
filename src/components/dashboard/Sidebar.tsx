"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  Boxes,
  ShoppingCart,
  Settings,
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Employees",
    icon: Users,
    href: "/dashboard/employees",
  },
  {
    title: "Inventory",
    icon: Boxes,
    href: "/dashboard/inventory",
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    href: "/dashboard/sales",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white min-h-screen p-6 border-r border-slate-800">
      
      <div className="mb-12">
        <h1 className="text-3xl font-bold">
          NovaERP
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Enterprise Dashboard
        </p>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-slate-800 transition"
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}