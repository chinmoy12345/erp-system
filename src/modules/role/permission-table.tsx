type Props = {
  permissions: string[]
}

export default function PermissionTable({
  permissions,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      
      <h2 className="text-2xl font-bold mb-6">
        Permissions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {permissions.map((permission) => (
          <div
            key={permission}
            className="border border-slate-200 rounded-2xl px-4 py-3"
          >
            {permission}
          </div>
        ))}
      </div>
    </div>
  )
}