import { GithubContributorResponse } from './github-contributors-types';

export async function fetchContributors(
  organizationName: string,
  packageName: string,
  page: number,
): Promise<GithubContributorResponse[]> {
  try {
    const request = await fetch(
      `https://api.github.com/repos/${organizationName}/${packageName}/contributors?per_page=100&page=${page}&order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const contributors = await request.json();
    if (!contributors || !Array.isArray(contributors)) {
      throw new Error('Unexpected API response, contributors = ', contributors);
    }
    return contributors;
  } catch (e) {
    console.error('Error while loading Github contributors, page ', page, ' - ', e);
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
