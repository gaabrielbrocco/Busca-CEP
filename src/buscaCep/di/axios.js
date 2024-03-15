import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://brasilapi.com.br",
});

export default axiosInstance