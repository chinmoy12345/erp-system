"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { REVENUE_TREND } from '@/constants/dashboardMockData';

export function RevenueChart() {
  return (
    <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Revenue Trend</h3>
          <p className="text-sm text-gray-500">Monthly revenue vs orders</p>
        </div>
        <TrendingUp className="h-5 w-5 text-gray-400" />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={REVENUE_TREND}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#888" fontSize={12} />
          <YAxis
            yAxisId="left"
            tickFormatter={(v) => {
              const value = v ?? 0;
              return `$${value / 1000}k`;
            }}
            stroke="#888"
            fontSize={12}
          />
          <YAxis yAxisId="right" orientation="right" stroke="#888" fontSize={12} />
          <Tooltip
            formatter={(v, name) => {
              const value = v ?? 0;
              return [`$${value.toLocaleString()}`, name === "revenue" ? "Revenue" : "Orders"];
            }}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            fill="url(#revenueGrad)"
            strokeWidth={2}
            name="Revenue"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}