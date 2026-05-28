"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, Building2 } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export function RegisterForm() {
  const router = useRouter();
  const { register, isLoading, error } = useAuth();
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (!agreeTerms) {
      alert("You must agree to the Terms of Service");
      return;
    }

    const success = await register({
      name: fullName,
      company: company || undefined,
      email,
      password,
    });

    if (success) router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full name *</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Company (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Company (optional)</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Building2 className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address *</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="you@company.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password *</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
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
            <p className="mt-1 text-xs text-gray-500">At least 8 characters</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm password *</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 pl-10 pr-10 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{" "}
              <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>Create account <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
          <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">Secure registration</span></div>
        </div>
        <div className="text-center text-xs text-gray-500">
          By signing up, you agree to receive product updates and marketing emails. You can unsubscribe anytime.
        </div>
      </div>
    </div>
  );
}