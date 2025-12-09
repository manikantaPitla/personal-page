// Environment configuration
export const ENV_CONFIG = {
  GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN,
  EMAIL_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  EMAIL_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
} as const;

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";
