import { ITodo } from "../types"
import axios from "./axios"

export const getListTaskApi = (): Promise<ITodo[]> => {
  return axios.get("/tasks")
}

export const postTaskApi = (data: Omit<ITodo, "id">) => {
  return axios.post("/tasks", data)
}

export const updateTaskApi = ({
  data,
  id,
}: {
  data: Partial<ITodo>
  id: number
}) => {
  return axios.patch(`/tasks/${id}`, data)
}

export const deleteTaskApi = (id: number) => {
  return axios.delete(`/tasks/${id}`)
}

export const getTaskDetailApi = (id: number): Promise<ITodo> => {
  return axios.get(`/tasks/${id}`)
}
