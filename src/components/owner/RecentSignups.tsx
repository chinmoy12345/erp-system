"use client";

import { UserPlus, Calendar } from "lucide-react";

const recentSignups = [
  { name: "CloudNine Solutions", plan: "Free", date: "Today", email: "admin@cloudnine.com" },
  { name: "NexGen AI", plan: "Paid", date: "Yesterday", email: "contact@nexgen.ai" },
  { name: "GreenLeaf Energy", plan: "Free", date: "2 days ago", email: "info@greenleaf.com" },
  { name: "DataStream Inc", plan: "Paid", date: "3 days ago", email: "hello@datastream.com" },
];

export function RecentSignups() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Recent Signups</h3>
          <p className="text-sm text-gray-500">New companies this week</p>
        </div>
        <UserPlus className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {recentSignups.map((signup, idx) => (
          <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0">
            <div>
              <p className="font-medium text-gray-800">{signup.name}</p>
              <p className="text-xs text-gray-500">{signup.email}</p>
            </div>
            <div className="text-right">
              <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                signup.plan === "Paid" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
              }`}>
                {signup.plan}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <Calendar className="h-3 w-3" />
                <span>{signup.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <a href="#" className="text-sm text-indigo-600 hover:underline">View all signups →</a>
      </div>
    </div>
  );
}