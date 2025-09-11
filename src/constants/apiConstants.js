// API configuration constants
export const API_CONFIG = {
  GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN,
  GITHUB_API_URL: "https://api.github.com/users/manikantaPitla",
};

export const API_HEADERS = {
  Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
};
