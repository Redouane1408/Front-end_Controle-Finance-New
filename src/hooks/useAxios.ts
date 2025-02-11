import { useState } from "react";
import api from "@/utils/api";
import { showSuccessToast, showErrorToast } from "@/components/molecules/Toast";

/*  This hook handles API calls dynamically and provides loading/error state. */
/* We create a useAxios hook to handle GET, POST, PUT, and DELETE requests. */
export function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any,
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api[method](url, data);
      showSuccessToast("Request successful!");
      return response.data;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      showErrorToast(
        "Error: " + (err.response?.data?.message || "Request failed"),
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}
