type Role = {
  id: number
  name: string
  users: number
}

const roles: Role[] = [
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

export default function RoleTable() {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      
      <table className="w-full">
        
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left px-6 py-5">
              Role
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
  )
}