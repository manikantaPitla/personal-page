// Error messages for better user experience
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Unable to connect to the internet. Please check your connection and try again.",
  GITHUB_API_ERROR: "Unable to fetch GitHub data. Please try again later.",
  GENERIC_ERROR: "Something went wrong. Please try again.",
  TIMEOUT_ERROR: "Request timed out. Please check your connection and try again.",
} as const;

export const getErrorMessage = (error?: string | null): string => {
  if (!error) return ERROR_MESSAGES.GENERIC_ERROR;

  const errorMessage = error.toLowerCase();

  if (
    errorMessage.includes("network") ||
    errorMessage.includes("fetch") ||
    errorMessage.includes("connection") ||
    errorMessage.includes("internet")
  ) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }

  if (errorMessage.includes("timeout")) {
    return ERROR_MESSAGES.TIMEOUT_ERROR;
  }

  if (errorMessage.includes("github") || errorMessage.includes("api")) {
    return ERROR_MESSAGES.GITHUB_API_ERROR;
  }

  return ERROR_MESSAGES.GENERIC_ERROR;
};
