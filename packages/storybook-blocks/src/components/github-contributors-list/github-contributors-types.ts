export type GithubContributor = {
  name: string;
  href: string;
  id?: number;
  key?: string;
  contributions?: number;
};

export type GithubContributorResponse = {
  id: number;
  login: string;
  html_url: string;
  contributions: number;
};
