import { useEffect, useMemo, useState } from "react";
import { Paragraph } from "vibe-storybook-components";
import { Contributors } from "./contributors";
import styles from "./other-contributors-list.module.scss";

const excludedDevelopers = new Set();
excludedDevelopers.add(41898282); // github-actions[bot]
excludedDevelopers.add(49699333); // dependabot[bot]

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
const STATIC_CONTRIBUTERS = [];

export const OtherContributorsList = () => {
  const [contributorsJson, setContributorsJson] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/mondaycom/monday-ui-style/contributors")
      .then(response => response.json())
      .then(data => setContributorsJson(data));
  }, []);

  const contributors = useMemo(() => {
    if (contributorsJson && Array.isArray(contributorsJson)) {
      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .map(contributor => ({ name: contributor.login, href: contributor.html_url, key: contributor.id }));
      const contributorsData = STATIC_CONTRIBUTERS.concat(developerContributors);
      return <Contributors contributorsData={contributorsData} />;
    }
  }, [contributorsJson]);

  return (
    <>
      <Paragraph className={styles.otherContributorsList}>
        Special thanks to our founding designers: <Contributors contributorsData={STATIC_FOUNDING_DESIGNERS} /> <br />
        {contributors ? <>Thanks to all of our contributors: {contributors}</> : null}
      </Paragraph>
    </>
  );
};
