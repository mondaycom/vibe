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
      // Add manually contributors which not inside git list
      finalContributors.push(
        <Link key="DevorahFriedman" href="mailto:devorahfr@monday.com" className={`${BASE_CLASS}_developer`}>
          Devorah Friedman
        </Link>
      );

      finalContributors.push(
        <Link key="DmitryKogan" href="mailto:dimako@monday.com" className={`${BASE_CLASS}_developer`}>
          Dmitry Kogan
        </Link>
      );

      finalContributors.push(
        <Link key="MeytalBadichi" href="mailto:meytal@monday.com" className={`${BASE_CLASS}_developer`}>
          Meytal Badichi
        </Link>
      );

      finalContributors.push(
        <Link key="ShayCohen" href="mailto:shay@monday.com" className={`${BASE_CLASS}_developer`}>
          Shay Cohen
        </Link>
      );

      finalContributors.push(
        <Link key="EylonGoren" href="mailto:eylon@monday.com" className={`${BASE_CLASS}_developer`}>
          Eylon Goren
        </Link>
      );

      finalContributors.push(
        <Link key="NoaFenko" href="mailto:noafe@monday.com" className={`${BASE_CLASS}_developer`}>
          Noa Fenko
        </Link>
      );

      finalContributors.push(
        <Link key="RotemDekel" href="https://il.linkedin.com/in/rotem-dekel-7a8b12133" className={`${BASE_CLASS}_developer`}>
          Rotem Dekel
        </Link>
      );

      finalContributors.push(
        <Link key="LeanyLabs" href="https://github.com/LeanyLabs" className={`${BASE_CLASS}_developer`}>
          LeanyLabs
        </Link>
      );

      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .map(contributor => (
          <Link href={contributor.html_url} className={`${BASE_CLASS}_developer`} key={contributor.id}>
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
