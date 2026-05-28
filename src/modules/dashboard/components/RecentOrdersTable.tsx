import { MoreHorizontal } from 'lucide-react';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { PaymentBadge } from '@/components/ui/PaymentBadge';
import { RECENT_ORDERS } from '@/constants/dashboardMockData';

export function RecentOrdersTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b px-5 py-3">
        <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500">
            <tr>
              <th className="px-5 py-3">Order ID</th><th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Amount</th><th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Payment</th><th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {RECENT_ORDERS.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-medium">{order.id}</td>
                <td className="px-5 py-3">{order.customer}</td>
                <td className="px-5 py-3">${order.amount.toLocaleString()}</td>
                <td className="px-5 py-3"><StatusBadge status={order.status} /></td>
                <td className="px-5 py-3"><PaymentBadge status={order.payment} /></td>
                <td className="px-5 py-3"><button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t px-5 py-3 text-right">
        <a href="#" className="text-sm text-blue-600 hover:underline">View all orders →</a>
      </div>
    </div>
  );
}