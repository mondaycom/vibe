import { useEffect, useMemo, useState } from "react";
import { Link, Paragraph } from "../../../components";
import "./other-contributors-list.scss";

const BASE_CLASS = "monday-other-contributors-list";

const excludedDevelopers = new Set();
excludedDevelopers.add(41898282); // github-actions[bot]
excludedDevelopers.add(49699333); // dependabot[bot]

const STATIC_CONTRIBUTERS = [
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
    name: "RotemDekel",
    href: "https://il.linkedin.com/in/rotem-dekel-7a8b12133"
  },
  {
    name: "LeanyLabs",
    href: "https://github.com/LeanyLabs"
  }
];

export const OtherContributorsList = () => {
  const [contributorsJson, setContributorsJson] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/mondaycom/monday-ui-react-core/contributors")
      .then(response => response.json())
      .then(data => setContributorsJson(data));
  }, []);

  const contributors = useMemo(() => {
    if (contributorsJson) {
      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .map(contributor => ({ name: contributor.login, href: contributor.html_url, key: contributor.id }));

      return STATIC_CONTRIBUTERS.concat(developerContributors).map(({ name, href, key }) => (
        <Link key={key || href} href={href} className={`${BASE_CLASS}_developer`}>
          {name}
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
