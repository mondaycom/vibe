import React from "react";
import Contributor from "./Contributor";
import useContributors from "./useContributors";
import Sergey from "./assets/Sergey.png";
import Rotem from "./assets/Rotem.png";
import Devorah from "./assets/Devorah.png";
import Dmitry from "./assets/Dmitry.png";
import Shay from "./assets/Shay.png";
import Eylon from "./assets/Eylon.png";
import Noa from "./assets/Noa.png";
import LeanyLabs from "./assets/LeanyLabs.png";
import Meytal from "./assets/Meytal.png";
import Hadas from "./assets/Hadas.png";

const CONTRIBUTORS = [
  {
    name: "Meytal Badichi",
    href: "https://www.linkedin.com/in/meytal-badichi-561439125/",
    image: Meytal,
    tooltip: "Product Designer"
  },
  {
    name: "Hadas Farhi",
    href: "https://www.linkedin.com/in/hadasfarhi/",
    image: Hadas,
    tooltip: "Software Engineer"
  },
  {
    name: "Sergey Roytman",
    href: "https://www.linkedin.com/in/sergey-roytman/",
    image: Sergey
  },
  {
    name: "Dmitry Kogan",
    href: "mailto:dimako@monday.com",
    image: Dmitry
  },
  {
    name: "Eylon Goren",
    href: "mailto:eylon@monday.com",
    image: Eylon
  },
  {
    name: "Rotem Dekel",
    href: "https://www.linkedin.com/in/rotem-dekel-7a8b12133/",
    image: Rotem
  },
  {
    name: "Devorah Friedman",
    href: "mailto:devorahfr@monday.com",
    image: Devorah
  },
  {
    name: "Shay Cohen",
    href: "mailto:shay@monday.com",
    image: Shay
  },
  {
    name: "Noa Fenko",
    href: "mailto:noafe@monday.com",
    image: Noa
  },
  {
    name: "LeanyLabs",
    href: "https://github.com/LeanyLabs",
    image: LeanyLabs
  }
];

const excludedContributors = ["dependabot[bot]", "github-actions[bot]", "snyk-bot", "vibe-gh"];

export default function Contributors() {
  const { contributors } = useContributors({
    organizationName: "mondaycom",
    packageName: "vibe",
    excludedContributors
  });
  return (
    <div>
      {[...CONTRIBUTORS, ...contributors].map((founder, index) => (
        <Contributor key={index} name={founder.name} image={founder.image} href={founder.href} />
      ))}
    </div>
  );
}
