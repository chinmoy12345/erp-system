"use client";

import { MoreHorizontal } from "lucide-react";

const companies = [
  { id: 1, name: "Acme Corp", plan: "Paid", users: 24, joined: "2025-01-15", revenue: "$2,400" },
  { id: 2, name: "TechStart Inc", plan: "Free", users: 12, joined: "2025-02-20", revenue: "$0" },
  { id: 3, name: "Global Retail", plan: "Paid", users: 89, joined: "2024-11-10", revenue: "$8,900" },
  { id: 4, name: "Eco Solutions", plan: "Free", users: 5, joined: "2025-03-05", revenue: "$0" },
  { id: 5, name: "FinTech Dynamics", plan: "Paid", users: 47, joined: "2024-12-01", revenue: "$4,700" },
];

export function CompaniesTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b px-5 py-3 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">All Companies</h3>
        <button className="text-sm text-indigo-600 hover:underline">View All →</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500">
            <tr>
              <th className="px-5 py-3">Company</th>
              <th className="px-5 py-3">Plan</th>
              <th className="px-5 py-3">Users</th>
              <th className="px-5 py-3">Joined</th>
              <th className="px-5 py-3">Revenue</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {companies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-medium">{company.name}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    company.plan === "Paid" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {company.plan}
                  </span>
                </td>
                <td className="px-5 py-3">{company.users}</td>
                <td className="px-5 py-3">{company.joined}</td>
                <td className="px-5 py-3">{company.revenue}</td>
                <td className="px-5 py-3">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}