import axiosInstance from "@/lib/axios";

// Define the shape of sale data (adjust according to your backend API)
export interface SaleData {
  productId: string;
  quantity: number;
  price: number;
  customerId?: string;
  date?: string;
  // add other fields as needed
}

export const getSales = async () => {
  const res = await axiosInstance.get("/sales");
  return res.data;
};

export const createSale = async (data: SaleData) => {
  const res = await axiosInstance.post("/sales", data);
  return res.data;
};

export const updateSale = async (id: string, data: Partial<SaleData>) => {
  const res = await axiosInstance.patch(`/sales/${id}`, data);
  return res.data;
};

export const deleteSale = async (id: string) => {
  const res = await axiosInstance.delete(`/sales/${id}`);
  return res.data;
};