import { LayoutDashboard, TrendingUp, Package, Users, Zap,Shield } from 'lucide-react';

export function AuthBranding() {
  return (
   <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 p-12 text-white">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Blurred gradient circles */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500 opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight">ERP Horizon</span>
            </div>
          </div>

          {/* Main illustration area */}
          <div className="my-12 text-center">
            <div className="relative mx-auto max-w-sm">
              {/* Dashboard preview mockup */}
              <div className="relative rounded-xl bg-white/10 p-2 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="rounded-lg bg-white p-3">
                  {/* Mini dashboard preview */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-12 rounded-full bg-gray-300"></div>
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded bg-indigo-100 p-1">
                        <div className="h-2 w-8 rounded bg-indigo-300"></div>
                        <div className="mt-1 h-4 w-10 rounded bg-indigo-400"></div>
                      </div>
                      <div className="h-16 rounded bg-green-100 p-1">
                        <div className="h-2 w-8 rounded bg-green-300"></div>
                        <div className="mt-1 h-4 w-10 rounded bg-green-400"></div>
                      </div>
                      <div className="h-16 rounded bg-purple-100 p-1">
                        <div className="h-2 w-8 rounded bg-purple-300"></div>
                        <div className="mt-1 h-4 w-10 rounded bg-purple-400"></div>
                      </div>
                    </div>
                    <div className="h-12 rounded bg-gray-100"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-full rounded bg-blue-100"></div>
                      <div className="h-8 w-full rounded bg-blue-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating icons around the mockup */}
              <div className="absolute -top-6 -right-6 rounded-full bg-indigo-500 p-2 shadow-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-full bg-green-500 p-2 shadow-lg">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 rounded-full bg-purple-500 p-2 shadow-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
            </div>

            <h1 className="mt-8 text-3xl font-bold">Enterprise Dashboard</h1>
            <p className="mt-2 text-indigo-100">
              Real‑time insights, powerful analytics
            </p>
          </div>

          {/* Feature list with icons */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-indigo-300" />
              <span>Real‑time KPI tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-indigo-300" />
              <span>Inventory & order management</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-indigo-300" />
              <span>Financial analytics & reporting</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-indigo-300" />
              <span>Secure, role‑based access</span>
            </div>
          </div>

          <div className="text-sm text-indigo-200">
            © 2026 ERP Horizon. All rights reserved.
          </div>
        </div>
      </div>
  );
}