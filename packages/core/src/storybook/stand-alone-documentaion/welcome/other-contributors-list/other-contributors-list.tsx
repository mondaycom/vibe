import React from "react";
import { GithubContributorsList, ContributorsList, Paragraph } from "vibe-storybook-components";
import styles from "./other-contributors-list.module.scss";

const excludedContributorsIds: Set<number> = new Set();
excludedContributorsIds.add(41898282); // github-actions[bot]
excludedContributorsIds.add(49699333); // dependabot[bot]
excludedContributorsIds.add(19733683); // snyk-bot

const STATIC_FOUNDING_DESIGNERS = [
  {
    name: "Evgeniy Kazinec",
    href: "https://www.linkedin.com/in/evgeniy-kazinec/"
  },
  {
    name: "Rotem Dekel",
    href: "https://www.linkedin.com/in/rotem-dekel-7a8b12133/"
  }
];
const STATIC_CONTRIBUTORS = [
  {
    name: "Devorah Friedman",
    href: "mailto:devorahfr@monday.com"
  },
  {
    name: "Dmitry Kogan",
    href: "mailto:dimako@monday.com"
  },
  {
    name: "Meytal Badichi",
    href: "mailto:mailto:meytal@monday.com"
  },
  {
    name: "Shay Cohen",
    href: "mailto:shay@monday.com"
  },
  {
    name: "Eylon Goren",
    href: "mailto:eylon@monday.com"
  },
  {
    name: "Noa Fenko",
    href: "mailto:noafe@monday.com"
  },
  {
    name: "LeanyLabs",
    href: "https://github.com/LeanyLabs"
  },
  {
    name: "Hadas Farhi",
    href: "https://github.com/hadasfa"
  }
];

export const OtherContributorsList = () => {
  return (
    <>
      <Paragraph className={styles.contributorsList}>
        Special thanks to our founding designers: <ContributorsList contributorsData={STATIC_FOUNDING_DESIGNERS} />
      </Paragraph>
      <GithubContributorsList
        organizationName="mondaycom"
        packageName="monday-ui-react-core"
        staticContributors={STATIC_CONTRIBUTORS}
        excludedContributorsIds={excludedContributorsIds}
      />
    </>
  );
};
