import { useMemo } from "react";
import { Link } from "../../components";

const BASE_CLASS = "monday-other-contributors-list";

const excludedDevelopers = new Set();
/** excludedDevelopers.add(60314759); // Orr Gotlieb
excludedDevelopers.add(72390374); // Hadas Farhi
excludedDevelopers.add(35146205); // Moshe Zemah * */
excludedDevelopers.add(41898282); // github-actions[bot]
// excludedDevelopers.add(9280709); // Sahar Brodbeker
excludedDevelopers.add(49699333); // dependabot[bot]

export const OtherContributorsList = () => {
  const contributors = useMemo(() => {
    let contributorsJson = fetch("https://api.github.com/repos/mondaycom/monday-ui-react-core/contributors");
    if (contributorsJson) {
      console.log(contributorsJson);
      contributorsJson = JSON.parse(contributorsJson)
        .filter(contributor => excludedDevelopers.has(contributor.id))
        .map(contributor => (
          <Link href={contributor.url} className={`${BASE_CLASS}_developer`}>
            {contributor.login}
          </Link>
        ));
    }
  }, []);

  return <span className={BASE_CLASS}>Thanks to all of our contributors {contributors}</span>;
};
