export interface GitHubProfile {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  repos_url: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  visibility: string;
  html_url: string;
  default_branch: string;
  homepage?: string | null;
  languages_url: string;
}

export type RepositoryLanguageBreakdown = Record<string, number>;
