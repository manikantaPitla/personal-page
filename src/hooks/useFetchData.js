import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { API_HEADERS } from "../constants/apiConstants";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const controller = new AbortController();
    let timeoutId;

    try {
      setLoading(true);
      setError(null);

      // Check if online before making the request
      if (!navigator.onLine) {
        throw new Error("Network Error: No internet connection");
      }

      timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await axios.get(url, {
        headers: API_HEADERS,
        signal: controller.signal,
        timeout: 10000,
      });

      setData(response.data);
    } catch (err) {
      let errorMessage = err.message;

      if (axios.isAxiosError(err)) {
        if (err.code === "ECONNABORTED") {
          errorMessage = "Network Error: Request timed out";
        } else if (err.code === "ERR_CANCELED" || err.name === "CanceledError") {
          errorMessage = "Network Error: Request cancelled";
        } else if (err.response) {
          errorMessage = `API Error: ${err.response.status} ${err.response.statusText}`;
        } else if (err.request) {
          errorMessage = "Network Error: Unable to connect to server";
        }
      } else if (err.name === "AbortError") {
        errorMessage = "Network Error: Request timed out";
      } else if (err.name === "TypeError" && err.message.includes("fetch")) {
        errorMessage = "Network Error: Unable to connect to the internet";
      }

      if (!navigator.onLine) {
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
    if (url) fetchData();
  }, [fetchData, url]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetchData;
