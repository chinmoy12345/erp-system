import { 
  DollarSign, 
  ShoppingBag, 
  TrendingUp, 
  Package, 
  Users, 
  CreditCard   // ← added missing import
} from 'lucide-react';
import type { KpiCard, RevenueData, CategoryData, ProductData, Order, InventoryAlert, Activity } from '@/types/dashboard';

export const KPI_CARDS: KpiCard[] = [
  { title: "Total Revenue", value: "$1,284,567", change: 12.5, icon: DollarSign, color: "bg-blue-500", bgLight: "bg-blue-50" },
  { title: "Total Orders", value: "8,549", change: 8.2, icon: ShoppingBag, color: "bg-green-500", bgLight: "bg-green-50" },
  { title: "Avg. Order Value", value: "$150.20", change: 3.1, icon: TrendingUp, color: "bg-purple-500", bgLight: "bg-purple-50" },
  { title: "Inventory Turnover", value: "4.2", change: -0.5, icon: Package, color: "bg-orange-500", bgLight: "bg-orange-50" },
  { title: "Customer Satisfaction", value: "94.2%", change: 2.3, icon: Users, color: "bg-teal-500", bgLight: "bg-teal-50" },
  { title: "Conversion Rate", value: "3.24%", change: 0.8, icon: TrendingUp, color: "bg-rose-500", bgLight: "bg-rose-50" },
];

export const REVENUE_TREND: RevenueData[] = [
  { month: "Jan", revenue: 120000, orders: 890 },
  { month: "Feb", revenue: 135000, orders: 950 },
  { month: "Mar", revenue: 148000, orders: 1100 },
  { month: "Apr", revenue: 162000, orders: 1240 },
  { month: "May", revenue: 179000, orders: 1380 },
  { month: "Jun", revenue: 211000, orders: 1650 },
];

export const SALES_CATEGORIES: CategoryData[] = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Clothing", value: 25, color: "#10b981" },
  { name: "Home & Living", value: 18, color: "#f59e0b" },
  { name: "Books", value: 7, color: "#8b5cf6" },
  { name: "Toys", value: 5, color: "#ec489a" },
];

export const TOP_PRODUCTS: ProductData[] = [
  { name: "ERP Pro Suite", sales: 12400, revenue: 248000, color: "#3b82f6" },
  { name: "Inventory Manager", sales: 8700, revenue: 174000, color: "#10b981" },
  { name: "CRM Advanced", sales: 5600, revenue: 112000, color: "#f59e0b" },
  { name: "HR Cloud", sales: 3400, revenue: 68000, color: "#8b5cf6" },
  { name: "Analytics Hub", sales: 2100, revenue: 42000, color: "#ec489a" },
];

export const RECENT_ORDERS: Order[] = [
  { id: "ORD-1001", customer: "Acme Corporation", amount: 12500, status: "Delivered", date: "2025-05-26", payment: "Paid" },
  { id: "ORD-1002", customer: "TechStart Inc.", amount: 8700, status: "Shipping", date: "2025-05-25", payment: "Paid" },
  { id: "ORD-1003", customer: "Global Retail Group", amount: 23400, status: "Processing", date: "2025-05-24", payment: "Pending" },
  { id: "ORD-1004", customer: "Eco Solutions Ltd.", amount: 6200, status: "Pending", date: "2025-05-23", payment: "Pending" },
  { id: "ORD-1005", customer: "FinTech Dynamics", amount: 18900, status: "Delivered", date: "2025-05-22", payment: "Paid" },
];

export const INVENTORY_ALERTS: InventoryAlert[] = [
  { product: "Wireless Mouse", sku: "WM-001", stock: 12, reorderPoint: 50, status: "Critical" },
  { product: "USB-C Hub", sku: "UC-022", stock: 28, reorderPoint: 40, status: "Low" },
  { product: "Mechanical Keyboard", sku: "MK-099", stock: 5, reorderPoint: 30, status: "Critical" },
  { product: "Monitor Stand", sku: "MS-045", stock: 18, reorderPoint: 25, status: "Low" },
];

export const RECENT_ACTIVITIES: Activity[] = [
  { action: "New order #ORD-1006 created", user: "Sarah Chen", time: "5 minutes ago", icon: ShoppingBag },
  { action: "Inventory updated for 'Wireless Mouse'", user: "System", time: "1 hour ago", icon: Package },
  { action: "Invoice #INV-2345 paid", user: "John Doe", time: "3 hours ago", icon: CreditCard },
  { action: "Customer 'Acme Corp' profile updated", user: "Emily Wong", time: "5 hours ago", icon: Users },
];