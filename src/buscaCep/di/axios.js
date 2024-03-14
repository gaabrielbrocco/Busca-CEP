import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://brasilapi.com.br/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

export default axiosInstance