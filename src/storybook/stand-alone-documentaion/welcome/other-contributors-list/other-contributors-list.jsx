import { useEffect, useMemo, useState } from "react";
import { Link, Paragraph } from "../../../components";
import "./other-contributors-list.scss";

const BASE_CLASS = "monday-other-contributors-list";

const excludedDevelopers = new Set();
excludedDevelopers.add(41898282); // github-actions[bot]
excludedDevelopers.add(49699333); // dependabot[bot]

export const OtherContributorsList = () => {
  const [contributorsJson, setContributorsJson] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/mondaycom/monday-ui-react-core/contributors")
      .then(response => response.json())
      .then(data => setContributorsJson(data));
  }, []);

  const contributors = useMemo(() => {
    const finalContributors = [];
    if (contributorsJson) {
      // designer contributors
      finalContributors.push(
        <Link href="https://il.linkedin.com/in/rotem-dekel-7a8b12133" className={`${BASE_CLASS}_developer`}>
          Rotem Dekel
        </Link>
      );

      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .map(contributor => (
          <Link href={contributor.html_url} className={`${BASE_CLASS}_developer`}>
            {contributor.login}
          </Link>
        ));

      finalContributors.push(...developerContributors);
      return finalContributors;
    }
  }, [contributorsJson]);

  return (
    <Paragraph className={BASE_CLASS}>
      {contributors ? <>Thanks to all of our contributors {contributors}</> : null}
    </Paragraph>
  );
};
