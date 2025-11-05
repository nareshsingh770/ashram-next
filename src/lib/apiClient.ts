import axios from "axios";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  withCredentials: true, // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use((config) => {
  // You can add auth token here if needed
  // const token = getTokenFromStorage();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  console.log(
    `Making ${config.method?.toUpperCase()} request to: ${config.url}`
  );
  return config;
});

// Response interceptor
apiClient.interceptors.response.use((response) => {
  console.log(`Response from ${response.config.url}:`, response.status);
  return response;
});

export default apiClient;

// Helper functions for common API patterns
export const apiHelpers = {
  // GET request
  get: <T = any>(url: string, config?: any) => apiClient.get<T>(url, config),

  // POST request
  post: <T = any>(url: string, data?: any, config?: any) =>
    apiClient.post<T>(url, data, config),

  // PUT request
  put: <T = any>(url: string, data?: any, config?: any) =>
    apiClient.put<T>(url, data, config),

  // PATCH request
  patch: <T = any>(url: string, data?: any, config?: any) =>
    apiClient.patch<T>(url, data, config),

  // DELETE request
  delete: <T = any>(url: string, config?: any) =>
    apiClient.delete<T>(url, config),
};
