import DashboardLayout from "@/components/dashboard/DashboardLayout"

const roles = [
  {
    id: 1,
    name: "SUPER_ADMIN",
    users: 2,
  },
  {
    id: 2,
    name: "HR",
    users: 12,
  },
  {
    id: 3,
    name: "EMPLOYEE",
    users: 48,
  },
]

export default function RolesPage() {
  return (
    <DashboardLayout>

      <div className="flex items-center justify-between mb-8">
        
        <div>
          <h1 className="text-4xl font-bold">
            Roles & Permissions
          </h1>

          <p className="text-slate-500 mt-2">
            Manage access control
          </p>
        </div>

        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl">
          Add Role
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        
        <table className="w-full">
          
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left px-6 py-5">
                Role Name
              </th>

              <th className="text-left px-6 py-5">
                Users
              </th>

              <th className="text-left px-6 py-5">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {roles.map((role) => (
              <tr
                key={role.id}
                className="border-t border-slate-100"
              >
                <td className="px-6 py-5 font-semibold">
                  {role.name}
                </td>

                <td className="px-6 py-5">
                  {role.users}
                </td>

                <td className="px-6 py-5 flex gap-3">
                  
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-xl">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}