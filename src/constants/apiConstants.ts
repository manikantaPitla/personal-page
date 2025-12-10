import { PROFILE_DATA } from "./profileData";
import { ENV_CONFIG } from "../config/env";

// API configuration constants
export const API_CONFIG = {
  GITHUB_TOKEN: ENV_CONFIG.GITHUB_TOKEN,
  GITHUB_API_URL: PROFILE_DATA.githubUrl,
} as const;

export const API_HEADERS: Record<string, string> = API_CONFIG.GITHUB_TOKEN
  ? {
      Authorization: `token ${API_CONFIG.GITHUB_TOKEN}`,
    }
  : {};
