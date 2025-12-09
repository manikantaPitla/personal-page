import { apiClient } from "../../lib/axios";
import { PROFILE_DATA } from "../../constants";
import type { GitHubProfile, GitHubRepository } from "../../types/github";

const GITHUB_API_BASE = "https://api.github.com";

export const githubService = {
  /**
   * Fetch GitHub user profile
   */
  async getProfile(username?: string): Promise<GitHubProfile> {
    const url = username ? `${GITHUB_API_BASE}/users/${username}` : PROFILE_DATA.githubUrl;
    const response = await apiClient.get<GitHubProfile>(url);
    return response.data;
  },

  /**
   * Fetch GitHub user repositories
   */
  async getRepositories(reposUrl: string): Promise<GitHubRepository[]> {
    const response = await apiClient.get<GitHubRepository[]>(reposUrl);
    return response.data;
  },

  /**
   * Fetch repository languages
   */
  async getRepositoryLanguages(languagesUrl: string): Promise<Record<string, number>> {
    const response = await apiClient.get<Record<string, number>>(languagesUrl);
    return response.data;
  },
};

export default githubService;
