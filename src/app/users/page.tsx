"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  ShieldCheck,
  UserCheck,
  Users,
  Pencil,
  Trash2,
} from "lucide-react"

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@company.com",
    role: "SUPER_ADMIN",
    department: "Management",
    status: "Active",
  },

  {
    id: 2,
    name: "Sarah Khan",
    email: "sarah@company.com",
    role: "HR_MANAGER",
    department: "Human Resources",
    status: "Active",
  },

  {
    id: 3,
    name: "Alex Smith",
    email: "alex@company.com",
    role: "SALES_MANAGER",
    department: "Sales",
    status: "Inactive",
  },

  {
    id: 4,
    name: "Emily Watson",
    email: "emily@company.com",
    role: "EMPLOYEE",
    department: "Support",
    status: "Active",
  },
]

export default function UsersPage() {
  return (
    <DashboardLayout>
      
      <div className="space-y-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Users Management
            </h1>

            <p className="text-slate-500 text-lg mt-3">
              Manage company employees, roles and permissions
            </p>
          </div>

          <button className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-4 rounded-2xl flex items-center gap-3 font-semibold transition">
            
            <Plus size={20} />

            Add User
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Total Users
                </p>

                <h2 className="text-5xl font-black mt-3">
                  324
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-cyan-100 flex items-center justify-center">
                <Users className="text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Active Users
                </p>

                <h2 className="text-5xl font-black mt-3">
                  298
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center">
                <UserCheck className="text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Admin Roles
                </p>

                <h2 className="text-5xl font-black mt-3">
                  12
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-purple-100 flex items-center justify-center">
                <ShieldCheck className="text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-slate-500">
                  Departments
                </p>

                <h2 className="text-5xl font-black mt-3">
                  8
                </h2>
              </div>

              <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center">
                <Mail className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white rounded-[36px] shadow-sm border border-slate-100 overflow-hidden">

          {/* TOP */}
          <div className="p-8 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Company Users
              </h2>

              <p className="text-slate-500 mt-2">
                Manage all registered users
              </p>
            </div>

            {/* FILTERS */}
            <div className="flex gap-4">
              
              <div className="relative">
                
                <Search
                  size={20}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-12 pr-5 py-4 rounded-2xl border border-slate-200 w-72 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <button className="border border-slate-200 px-5 py-4 rounded-2xl flex items-center gap-3 hover:bg-slate-50 transition">
                
                <Filter size={20} />

                Filter
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            
            <table className="w-full">
              
              <thead className="bg-slate-50">
                <tr>
                  
                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    User
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Role
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Department
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Status
                  </th>

                  <th className="text-left px-8 py-5 text-slate-500 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >
                    
                    {/* USER */}
                    <td className="px-8 py-6">
                      
                      <div className="flex items-center gap-4">
                        
                        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                          {user.name.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">
                            {user.name}
                          </h3>

                          <p className="text-slate-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ROLE */}
                    <td className="px-8 py-6">
                      
                      <div className="inline-flex bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {user.role}
                      </div>
                    </td>

                    {/* DEPARTMENT */}
                    <td className="px-8 py-6 font-medium text-slate-700">
                      {user.department}
                    </td>

                    {/* STATUS */}
                    <td className="px-8 py-6">
                      
                      <div
                        className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                          user.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </div>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-8 py-6">
                      
                      <div className="flex gap-3">
                        
                        <button className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center hover:scale-105 transition">
                          <Pencil size={18} />
                        </button>

                        <button className="w-11 h-11 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center hover:scale-105 transition">
                          <Trash2 size={18} />
                        </button>

                        <button className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center hover:scale-105 transition">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}