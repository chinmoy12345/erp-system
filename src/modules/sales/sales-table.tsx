import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react"

import PaymentStatus from "./payment-status"

const sales = [
  {
    id: 1,
    invoiceNo: "INV-2026-001",
    customerName: "John Doe",
    totalAmount: 2500,
    paymentStatus: "PAID",
    saleStatus: "COMPLETED",
  },

  {
    id: 2,
    invoiceNo: "INV-2026-002",
    customerName: "Sarah Khan",
    totalAmount: 900,
    paymentStatus: "PENDING",
    saleStatus: "PROCESSING",
  },
]

export default function SalesTable() {
  return (
    <div className="bg-white rounded-[36px] border border-slate-100 shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-50">
          <tr>

            <th className="text-left px-8 py-5">
              Invoice
            </th>

            <th className="text-left px-8 py-5">
              Customer
            </th>

            <th className="text-left px-8 py-5">
              Amount
            </th>

            <th className="text-left px-8 py-5">
              Payment
            </th>

            <th className="text-left px-8 py-5">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr
              key={sale.id}
              className="border-t border-slate-100"
            >

              <td className="px-8 py-6 font-bold">
                {sale.invoiceNo}
              </td>

              <td className="px-8 py-6">
                {sale.customerName}
              </td>

              <td className="px-8 py-6 font-semibold">
                ${sale.totalAmount}
              </td>

              <td className="px-8 py-6">
                <PaymentStatus
                  status={sale.paymentStatus}
                />
              </td>

              <td className="px-8 py-6">

                <div className="flex gap-3">

                  <button className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Eye size={18} />
                  </button>

                  <button className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Pencil size={18} />
                  </button>

                  <button className="w-11 h-11 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}