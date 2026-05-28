"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  LayoutDashboard, 
  BarChart3, 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Menu,
  X
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">ERP Horizon</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#demo" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Demo</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
          
          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              Sign In
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Start Free Trial
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#demo" className="text-gray-700 hover:text-indigo-600">Demo</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
              <hr />
              <button className="w-full rounded-lg border px-4 py-2 text-center text-sm font-medium">Sign In</button>
              <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white">Start Free Trial</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-white"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                <span className="mr-1">✨</span> Next‑Gen ERP Platform
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Enterprise‑Grade <span className="text-indigo-600">Dashboard</span> for Modern Business
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Real‑time analytics, inventory management, order tracking, and customer insights – all in one powerful platform. Built for scalability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-indigo-700">
                  Start Free Trial
                </button>
                <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                  Live Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">✓ No credit card required</span>
                <span className="flex items-center gap-1">✓ 14‑day free trial</span>
                <span className="flex items-center gap-1">✓ Cancel anytime</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 shadow-2xl">
                <div className="rounded-xl bg-white p-2">
                  <Image
                    src="/dashboard-preview.png"
                    alt="Dashboard Preview"
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-md"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/1e293b/ffffff?text=Dashboard+Preview";
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gray-300 ring-2 ring-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">2,500+ businesses</p>
                    <p className="text-xs text-gray-500">trust us worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-indigo-600">$2.5B+</p>
              <p className="text-sm text-gray-500">Processed Transactions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">98.7%</p>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">24/7</p>
              <p className="text-sm text-gray-500">Support & Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">150+</p>
              <p className="text-sm text-gray-500">Enterprise Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to scale
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features to manage your entire business operations
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BarChart3, title: "Real‑time Analytics", description: "Live dashboards with KPI tracking, revenue trends, and custom reports." },
              { icon: Package, title: "Inventory Management", description: "Low stock alerts, automated reordering, and full traceability." },
              { icon: ShoppingCart, title: "Order Processing", description: "Streamlined order management with status tracking and invoicing." },
              { icon: Users, title: "Customer 360", description: "Unified customer profiles with purchase history and support tickets." },
              { icon: TrendingUp, title: "Financial Insights", description: "Profit & loss, cash flow, and forecasting tools." },
              { icon: Shield, title: "Enterprise Security", description: "Role‑based access, audit logs, and SOC2 compliance." },
            ].map((feat, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
                <feat.icon className="h-10 w-10 text-indigo-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feat.title}</h3>
                <p className="mt-2 text-gray-600">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Demo Preview */}
      <section id="demo" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-800 p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold">See the dashboard in action</h2>
                <p className="mt-4 text-indigo-100">
                  Real‑time KPI cards, revenue charts, order tables, and inventory alerts – all fully interactive.
                </p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-semibold text-indigo-600 hover:bg-gray-100">
                  Watch Demo <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative">
                <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 rounded bg-white/20"></div>
                    <div className="h-20 rounded bg-white/20"></div>
                    <div className="col-span-2 h-32 rounded bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by industry leaders</h2>
            <p className="mt-4 text-lg text-gray-600">See what our customers say about us</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah Chen", role: "CEO, TechStart Inc.", text: "The dashboard transformed how we track our KPIs. The real‑time updates and intuitive design are game‑changers." },
              { name: "Michael Rodriguez", role: "Operations Director, Global Retail", text: "Inventory alerts alone saved us 30% in stockouts. Highly recommend for any growing business." },
              { name: "Emily Watson", role: "CFO, FinTech Dynamics", text: "Financial insights and forecasting tools are incredibly accurate. Best investment this year." },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="mt-4 text-gray-700">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Choose the plan that fits your business</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-4 text-4xl font-bold">$49<span className="text-base font-normal text-gray-500">/month</span></p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Up to 10 users</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Basic analytics</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> 5GB storage</li>
              </ul>
              <button className="mt-8 w-full rounded-lg border border-indigo-600 bg-white px-4 py-2 font-medium text-indigo-600 hover:bg-indigo-50">Get Started</button>
            </div>
            <div className="relative rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">Most Popular</div>
              <h3 className="text-xl font-semibold">Professional</h3>
              <p className="mt-4 text-4xl font-bold">$99<span className="text-base font-normal text-gray-500">/month</span></p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Up to 50 users</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Advanced analytics + API</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> 50GB storage</li>
              </ul>
              <button className="mt-8 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">Start Free Trial</button>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="mt-4 text-4xl font-bold">Custom</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Unlimited users</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Dedicated support</li>
                <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Custom integrations</li>
              </ul>
              <button className="mt-8 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to transform your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Join thousands of companies that use ERP Horizon to manage their operations efficiently.
          </p>
          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 shadow-md hover:bg-gray-100">
            Start Your 14‑Day Free Trial
          </button>
          <p className="mt-4 text-sm text-indigo-200">No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-6 w-6 text-indigo-400" />
                <span className="font-bold text-white">ERP Horizon</span>
              </div>
              <p className="mt-2 text-sm">The complete ERP dashboard for modern businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Legal</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            © 2026 ERP Horizon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}