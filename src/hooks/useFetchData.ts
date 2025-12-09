import { useCallback, useEffect, useState } from "react";
import { apiClient } from "../lib/axios";

const hasNavigatorSupport = (): boolean => typeof navigator !== "undefined";
const isOnline = (): boolean => (hasNavigatorSupport() ? navigator.onLine : true);

function useFetchData<T = unknown>(url?: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    if (!url) {
      return;
    }

    const controller = new AbortController();
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    try {
      setLoading(true);
      setError(null);

      if (!isOnline()) {
        throw new Error("Network Error: No internet connection");
      }

      timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await apiClient.get<T>(url, {
        signal: controller.signal,
      });

      setData(response.data);
    } catch (err) {
      let errorMessage = "Something went wrong";

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const axiosError = err as any;
      
      if (axiosError.code === "ECONNABORTED" || axiosError.message?.includes("timeout")) {
        errorMessage = "Network Error: Request timed out";
      } else if (axiosError.code === "ERR_CANCELED" || axiosError.name === "CanceledError") {
        errorMessage = "Network Error: Request cancelled";
      } else if (axiosError.response) {
        errorMessage = `API Error: ${axiosError.response.status} ${axiosError.response.statusText || ""}`;
      } else if (axiosError.request) {
        errorMessage = "Network Error: Unable to connect to server";
      } else if (err instanceof DOMException && err.name === "AbortError") {
        errorMessage = "Network Error: Request timed out";
      } else if (err instanceof Error && err.message.includes("fetch")) {
        errorMessage = "Network Error: Unable to connect to the internet";
      }

      if (!isOnline()) {
        errorMessage = "Network Error: No internet connection";
      }

      setError(errorMessage);
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      void fetchData();
    }
  }, [fetchData, url]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetchData;
