export interface KpiCard {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgLight: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
  orders: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface ProductData {
  name: string;
  sales: number;
  revenue: number;
  color: string;
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: 'Delivered' | 'Shipping' | 'Processing' | 'Pending';
  date: string;
  payment: 'Paid' | 'Pending';
}

export interface InventoryAlert {
  product: string;
  sku: string;
  stock: number;
  reorderPoint: number;
  status: 'Critical' | 'Low';
}

export interface Activity {
  action: string;
  user: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}