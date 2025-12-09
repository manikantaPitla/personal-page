import axios from "axios";
import { API_HEADERS } from "../constants";

// Configured axios instance for API calls
export const apiClient = axios.create({
  timeout: 10000,
  headers: API_HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
