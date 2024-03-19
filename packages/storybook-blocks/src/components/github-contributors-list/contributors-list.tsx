import { FC } from 'react';
import cx from 'classnames';
import Link from '../../../src/components/link/link';
import { GithubContributor } from './github-contributors-types';
import styles from './contributors.module.scss';

interface ContributorsListProps {
  contributorsData: Array<GithubContributor>;
  showContributionAmount?: boolean;
}

const ContributorsList: FC<ContributorsListProps> = ({ contributorsData, showContributionAmount = false }) => {
  const lastIndex = contributorsData.length - 1;
  return (
    <>
      {contributorsData.map(({ name, href, key, contributions }, index) => (
        <Link key={key || href} href={href} className={cx({ [styles.contributor]: index < lastIndex })}>
          {`${name}${showContributionAmount ? ` (${contributions})` : ''}`}
        </Link>
      ))}
    </>
  );
};

export default ContributorsList;
