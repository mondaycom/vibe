import React from "react";
import Contributor from "./Contributor";
import useContributors from "./useContributors";
import Hadas from "./assets/Hadas.png";
import Sergey from "./assets/Sergey.png";
import Rotem from "./assets/Rotem.png";

const CONTRIBUTORS = [
  {
    name: "Rotem Dekel",
    href: "https://www.linkedin.com/in/rotem-dekel-7a8b12133/",
    image: Rotem
  },
  {
    name: "Hadas Farhi",
    href: "https://www.linkedin.com/in/hadasfarhi/",
    image: Hadas
  },
  {
    name: "Sergey Roytman",
    href: "https://www.linkedin.com/in/sergey-roytman/",
    image: Sergey
  },
  {
    name: "Devorah Friedman",
    href: "mailto:devorahfr@monday.com"
  },
  {
    name: "Dmitry Kogan",
    href: "mailto:dimako@monday.com"
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
  }
];

const excludedContributors = [
  "talkor",
  "dependabot[bot]",
  "SergeyRoyt",
  "orrgottlieb",
  "github-actions[bot]",
  "snyk-bot",
  "rivka-ungar",
  "vibe-gh",
  "YossiSaadi",
  "shaharzil"
];

export default function Founders() {
  const { contributors } = useContributors({
    organizationName: "mondaycom",
    packageName: "vibe",
    excludedContributors
  });
  return [...CONTRIBUTORS, ...contributors].map((founder, index) => (
    <Contributor key={index} name={founder.name} image={founder.image} href={founder.href} />
  ));
}
