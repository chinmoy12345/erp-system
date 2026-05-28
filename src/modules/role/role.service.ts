import axiosInstance from "@/lib/axios";

// Define the shape of role data (adjust according to your backend API)
export interface RoleData {
  name: string;
  description?: string;
  permissions?: string[];
  // add other fields as needed
}

export const getRoles = async () => {
  const res = await axiosInstance.get("/roles");
  return res.data;
};

export const createRole = async (data: RoleData) => {
  const res = await axiosInstance.post("/roles", data);
  return res.data;
};

export const updateRole = async (id: string, data: Partial<RoleData>) => {
  const res = await axiosInstance.patch(`/roles/${id}`, data);
  return res.data;
};

export const deleteRole = async (id: string) => {
  const res = await axiosInstance.delete(`/roles/${id}`);
  return res.data;
};