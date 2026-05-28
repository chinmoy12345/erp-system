"use client";

import { Building2, Users, CreditCard, DollarSign, UserPlus } from "lucide-react";

const kpiData = [
  {
    title: "Total Companies",
    value: "1,284",
    change: "+12.5%",
    icon: Building2,
    color: "bg-blue-500",
    bgLight: "bg-blue-50",
  },
  {
    title: "Free Tier Companies",
    value: "892",
    change: "+8.2%",
    icon: Users,
    color: "bg-green-500",
    bgLight: "bg-green-50",
  },
  {
    title: "Paid Subscriptions",
    value: "392",
    change: "+18.4%",
    icon: CreditCard,
    color: "bg-purple-500",
    bgLight: "bg-purple-50",
  },
  {
    title: "Monthly Recurring Revenue",
    value: "$48,290",
    change: "+22.3%",
    icon: DollarSign,
    color: "bg-orange-500",
    bgLight: "bg-orange-50",
  },
  {
    title: "Active Users",
    value: "3,421",
    change: "+5.7%",
    icon: Users,
    color: "bg-teal-500",
    bgLight: "bg-teal-50",
  },
  {
    title: "New Signups (30d)",
    value: "147",
    change: "+32.1%",
    icon: UserPlus,
    color: "bg-rose-500",
    bgLight: "bg-rose-50",
  },
];

export function OwnerKpiCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {kpiData.map((kpi, idx) => (
        <div
          key={idx}
          className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className={`rounded-full ${kpi.bgLight} p-2`}>
              <kpi.icon className={`h-5 w-5 ${kpi.color.replace("bg-", "text-")}`} />
            </div>
            <span className="text-sm font-medium text-green-600">{kpi.change}</span>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
            <p className="text-xs text-gray-500">{kpi.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}