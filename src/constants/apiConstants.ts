import { PROFILE_DATA } from "./profileData";

// API configuration constants
export const API_CONFIG = {
  GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN,
  GITHUB_API_URL: PROFILE_DATA.githubUrl,
};

export const API_HEADERS = API_CONFIG.GITHUB_TOKEN
  ? {
      Authorization: `token ${API_CONFIG.GITHUB_TOKEN}`,
    }
  : {};
