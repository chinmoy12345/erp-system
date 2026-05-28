import axiosInstance from "@/lib/axios"

export const getSales = async () => {
  const res = await axiosInstance.get("/sales")

  return res.data
}

export const createSale = async (
  data: any
) => {
  const res = await axiosInstance.post(
    "/sales",
    data
  )

  return res.data
}

export const updateSale = async (
  id: string,
  data: any
) => {
  const res = await axiosInstance.patch(
    `/sales/${id}`,
    data
  )

  return res.data
}

export const deleteSale = async (
  id: string
) => {
  const res = await axiosInstance.delete(
    `/sales/${id}`
  )

  return res.data
}