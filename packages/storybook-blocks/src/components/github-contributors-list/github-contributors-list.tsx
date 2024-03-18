import { FC, useEffect, useMemo, useState } from 'react';
import ContributorsList from './contributors-list';
import Paragraph from '../../../src/components/paragraph/paragraph';
import { fetchAllContributors } from './github-contributors-utils';
import { GithubContributor, GithubContributorResponse } from './github-contributors-types';

interface GithubContributorsListProps {
  organizationName: string;
  packageName: string;
  text?: string;
  showContributionAmount?: boolean;
  excludedContributorsIds?: Set<number>;
  staticContributors?: GithubContributor[];
}

const GithubContributorsList: FC<GithubContributorsListProps> = ({
  organizationName,
  packageName,
  excludedContributorsIds = new Set(),
  staticContributors = [],
  text = 'Thanks to all of our contributors: ',
  showContributionAmount = false,
}) => {
  const [contributorsJson, setContributorsJson] = useState<GithubContributorResponse[]>([]);
  useEffect(() => {
    fetchAllContributors(organizationName, packageName).then(contributors => setContributorsJson(contributors));
  }, [organizationName, packageName]);

  const contributors = useMemo(() => {
    const developerContributors = contributorsJson
      .filter(contributor => !excludedContributorsIds.has(contributor.id))
      .sort((a, b) => (b?.contributions || 0) - (a?.contributions || 0))
      .map(
        contributor =>
          ({
            id: contributor.id,
            name: contributor.login,
            href: contributor.html_url,
            key: contributor.id.toString(),
            contributions: contributor.contributions,
          }) as GithubContributor,
      );
    const contributorsData = staticContributors.concat(developerContributors);
    return <ContributorsList contributorsData={contributorsData} showContributionAmount={showContributionAmount} />;
  }, [contributorsJson, excludedContributorsIds, showContributionAmount, staticContributors]);

  return (
    <Paragraph>
      <>
        {text}
        {contributors}
      </>
    </Paragraph>
  );
};

export default GithubContributorsList;
