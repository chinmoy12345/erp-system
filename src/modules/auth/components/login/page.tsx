// src/app/auth/login/page.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Eye, EyeOff, LayoutDashboard, Mail, Lock, ArrowRight, 
  CheckCircle, TrendingUp, Package, Users, Zap 
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.yourbackend.com/v1";
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      const { access_token, user } = data;
      if (rememberMe) {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("access_token", access_token);
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side – brand & professional graphics */}
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

      {/* Right side – login form (unchanged but improved styling) */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center lg:hidden">
            <div className="flex items-center gap-2 text-indigo-600">
              <LayoutDashboard className="h-8 w-8" />
              <span className="text-2xl font-bold">ERP Horizon</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Start free trial
                </Link>
              </p>
            </div>

            {error && (
              <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="relative mt-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-gray-300 pl-10 pr-10 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Sign in <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Demo credentials</span>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-center text-sm text-gray-600">
              <p>Email: <span className="font-mono font-medium">demo@erphorizon.com</span></p>
              <p>Password: <span className="font-mono font-medium">demo1234</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add missing icon
function Shield(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}