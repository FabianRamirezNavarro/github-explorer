export interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: string;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
  updated_at: Date,
}

export interface PullRequest {
  id: string;
  title: string;
  html_url: string;
}

export interface Issue {
  id: string;
  title: string;
  html_url: string;
  pull_request?: Record<string, unknown>;
}
