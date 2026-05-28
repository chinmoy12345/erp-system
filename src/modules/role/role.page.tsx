import DashboardLayout from "@/components/dashboard/DashboardLayout"

import RoleForm from "./role-form"
import RoleTable from "./role-table"

export default function RolePage() {
  return (
    <DashboardLayout>
      
      <div className="space-y-8">
        
        <div>
          <h1 className="text-4xl font-bold">
            Roles & Permissions
          </h1>

          <p className="text-slate-500 mt-2">
            Manage role access control
          </p>
        </div>

        <RoleForm />

        <RoleTable />
      </div>
    </DashboardLayout>
  )
}