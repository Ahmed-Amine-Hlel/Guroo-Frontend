import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

//  request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Replace with your token retrieval logic
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
