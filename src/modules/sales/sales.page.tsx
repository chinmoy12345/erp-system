import DashboardLayout from "@/components/dashboard/DashboardLayout"

import SalesForm from "./sales-form"
import SalesTable from "./sales-table"

export default function SalesPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Sales Management
            </h1>

            <p className="text-slate-500 text-lg mt-2">
              Manage invoices and sales transactions
            </p>
          </div>

          <button className="bg-slate-900 text-white px-7 py-4 rounded-2xl font-bold">
            Add Sale
          </button>
        </div>

        <SalesForm />

        <SalesTable />
      </div>
    </DashboardLayout>
  )
}