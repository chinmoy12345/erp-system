export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>

        <p className="text-slate-500 text-sm">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="text-right">
          <h3 className="font-semibold text-slate-900">
            Chinmoy
          </h3>

          <p className="text-sm text-slate-500">
            Super Admin
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
          C
        </div>
      </div>
    </header>
  )
}