import axiosInstance from "@/lib/axios"

export const getRoles = async () => {
  const res = await axiosInstance.get("/roles")

  return res.data
}

export const createRole = async (data: any) => {
  const res = await axiosInstance.post(
    "/roles",
    data
  )

  return res.data
}

export const updateRole = async (
  id: string,
  data: any
) => {
  const res = await axiosInstance.patch(
    `/roles/${id}`,
    data
  )

  return res.data
}

export const deleteRole = async (
  id: string
) => {
  const res = await axiosInstance.delete(
    `/roles/${id}`
  )

  return res.data
}