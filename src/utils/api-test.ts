/* import axios from "axios";
import { useLoading } from "@/hooks/useLoading";
import { showSuccessToast, showErrorToast } from "@/components/molecules/Toast";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Handle requests globally
api.interceptors.request.use(
  (config) => {
    const { setLoading } = useLoading();
    setLoading(true);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Handle responses and show toasts
api.interceptors.response.use(
  (response) => {
    const { setLoading } = useLoading();
    setLoading(false);

    // ✅ Show success toast for certain requests
    if (response.config.method === "post") {
      showSuccessToast("Action completed successfully!");
    }

    return response;
  },
  (error) => {
    const { setLoading } = useLoading();
    setLoading(false);

    // ✅ Show error toast for different status codes
    const status = error.response?.status;
    if (status === 401) {
      showErrorToast("Unauthorized. Please login.");
    } else if (status === 404) {
      showErrorToast("Resource not found.");
    } else if (status === 500) {
      showErrorToast("Server error. Try again later.");
    } else {
      showErrorToast("Something went wrong.");
    }

    return Promise.reject(error);
  },
);

export default api;
 */
