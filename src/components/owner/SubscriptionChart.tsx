"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", free: 650, paid: 210 },
  { month: "Feb", free: 680, paid: 225 },
  { month: "Mar", free: 720, paid: 245 },
  { month: "Apr", free: 770, paid: 270 },
  { month: "May", free: 820, paid: 310 },
  { month: "Jun", free: 892, paid: 392 },
];

export function SubscriptionChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800">Subscription Growth</h3>
      <p className="text-sm text-gray-500">Free vs Paid companies over time</p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="freeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="paidGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} />
          <Tooltip />
          <Area type="monotone" dataKey="free" stroke="#10b981" fill="url(#freeGrad)" name="Free Tier" />
          <Area type="monotone" dataKey="paid" stroke="#8b5cf6" fill="url(#paidGrad)" name="Paid" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}