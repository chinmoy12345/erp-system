import { Package } from 'lucide-react';
import { INVENTORY_ALERTS } from '@/constants/dashboardMockData';

export function InventoryAlerts() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div><h3 className="text-lg font-semibold text-gray-800">Inventory Alerts</h3><p className="text-sm text-gray-500">Items below reorder point</p></div>
        <Package className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {INVENTORY_ALERTS.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div><p className="font-medium text-gray-800">{item.product}</p><p className="text-xs text-gray-500">SKU: {item.sku}</p></div>
            <div className="text-right"><p className="text-sm font-semibold">Stock: {item.stock}</p>
              <p className={`text-xs ${item.status === "Critical" ? "text-red-600" : "text-orange-600"}`}>
                {item.status === "Critical" ? "⚠️ Critical" : "⚠️ Low"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right"><a href="#" className="text-sm text-blue-600 hover:underline">Manage inventory →</a></div>
    </div>
  );
}