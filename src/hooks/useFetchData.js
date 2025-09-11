import { useCallback, useEffect, useState } from "react";
import { API_HEADERS } from "../constants/apiConstants";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if online before making the request
      if (!navigator.onLine) {
        throw new Error("Network Error: No internet connection");
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(url, {
        method: "GET",
        headers: API_HEADERS,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 0) {
          throw new Error("Network Error: Unable to connect to server");
        }
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      let errorMessage = err.message;

      // Handle specific error types
      if (err.name === "AbortError") {
        errorMessage = "Network Error: Request timed out";
      } else if (err.name === "TypeError" && err.message.includes("fetch")) {
        errorMessage = "Network Error: Unable to connect to the internet";
      } else if (!navigator.onLine) {
        errorMessage = "Network Error: No internet connection";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) fetchData();
  }, [fetchData, url]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetchData;
