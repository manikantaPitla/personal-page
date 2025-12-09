import { useState, useEffect } from "react";

const getInitialStatus = (): boolean => {
  if (typeof navigator === "undefined") {
    return true;
  }
  return navigator.onLine;
};

// Custom hook to monitor network status
export const useNetworkStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(getInitialStatus());

  useEffect(() => {
    const handleOnline = (): void => setIsOnline(true);
    const handleOffline = (): void => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
