import { useEffect, useMemo, useState } from "react";

export type GithubContributor = {
  name: string;
  href: string;
  id?: number;
  key?: string;
  contributions?: number;
  image?: string;
};

export type GithubContributorResponse = {
  id: number;
  login: string;
  html_url: string;
  contributions: number;
  avatar_url: string;
};

export async function fetchContributors(
  organizationName: string,
  packageName: string,
  page: number
): Promise<GithubContributorResponse[]> {
  try {
    const request = await fetch(
      `https://api.github.com/repos/${organizationName}/${packageName}/contributors?per_page=100&page=${page}&order=desc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const contributors = await request.json();
    if (!contributors || !Array.isArray(contributors)) {
      throw new Error("Unexpected API response, contributors = ", contributors);
    }
    return contributors;
  } catch (e) {
    console.error("Error while loading Github contributors, page ", page, " - ", e);
    return [];
  }
}

export async function fetchAllContributors(organizationName: string, packageName: string) {
  let contributors: GithubContributorResponse[] = [];
  let page = 1;
  let list;
  do {
    list = await fetchContributors(organizationName, packageName, page++);
    contributors = contributors.concat(list);
  } while (list.length > 0);

  return contributors;
}

interface useContributorsProps {
  organizationName: string;
  packageName: string;
  excludedContributors?: string[];
}

export default function useContributors({ organizationName, packageName, excludedContributors }: useContributorsProps) {
  const [contributorsJson, setContributorsJson] = useState<GithubContributorResponse[]>([]);
  useEffect(() => {
    fetchAllContributors(organizationName, packageName).then(contributors => setContributorsJson(contributors));
  }, [organizationName, packageName]);

  const contributors = useMemo(() => {
    return contributorsJson
      .filter(contributor => !excludedContributors.includes(contributor.login))
      .sort((a, b) => (b?.contributions || 0) - (a?.contributions || 0))
      .map(contributor => {
        console.log(contributor);
        return {
          id: contributor.id,
          name: contributor.login,
          href: contributor.html_url,
          key: contributor.id.toString(),
          contributions: contributor.contributions,
          image: contributor.avatar_url
        } as GithubContributor;
      });
  }, [contributorsJson, excludedContributors]);

  return {
    contributors
  };
}
