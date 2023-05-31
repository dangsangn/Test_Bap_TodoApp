import { toast } from 'react-toastify';
import defaultAxios from "axios"

const axios = defaultAxios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
})

axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    toast.error(error.message)
    return Promise.reject(error)
  }
)

export default axios
