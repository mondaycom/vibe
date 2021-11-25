import { useEffect, useMemo, useState } from "react";
import { Link, Paragraph } from "../../components";
import "./other-contributors-list.scss";

const BASE_CLASS = "monday-other-contributors-list";

const excludedDevelopers = new Set();
/** excludedDevelopers.add(60314759); // Orr Gotlieb
excludedDevelopers.add(72390374); // Hadas Farhi
excludedDevelopers.add(35146205); // Moshe Zemah * */
excludedDevelopers.add(41898282); // github-actions[bot]
// excludedDevelopers.add(9280709); // Sahar Brodbeker
excludedDevelopers.add(49699333); // dependabot[bot]

export const OtherContributorsList = () => {
  const [contributorsJson, setContributorsJson] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/mondaycom/monday-ui-react-core/contributors")
      .then(response => response.json())
      .then(data => setContributorsJson(data));
  }, []);

  const contributors = useMemo(() => {
    if (contributorsJson) {
      console.log(contributorsJson);
      return contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .map(contributor => (
          <Link href={contributor.html_url} className={`${BASE_CLASS}_developer`}>
            {contributor.login}
          </Link>
        ));
    }
  }, [contributorsJson]);

  return (
    <Paragraph className={BASE_CLASS}>
      {contributors ? <>Thanks to all of our contributors {contributors}</> : null}
    </Paragraph>
  );
};
