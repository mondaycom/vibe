import React from "react";
import Contributor from "./Contributor";
import useContributors from "./useContributors";
import Sergey from "../assets/contributors/Sergey.png";
import Rotem from "../assets/contributors/Rotem.png";
import Devorah from "../assets/contributors/Devorah.png";
import Dmitry from "../assets/contributors/Dmitry.png";
import Shay from "../assets/contributors/Shay.png";
import Eylon from "../assets/contributors/Eylon.png";
import Noa from "../assets/contributors/Noa.png";
import LeanyLabs from "../assets/contributors/LeanyLabs.png";

const CONTRIBUTORS = [
  {
    name: "Rotem Dekel",
    href: "https://www.linkedin.com/in/rotem-dekel-7a8b12133/",
    image: Rotem
  },
  {
    name: "Sergey Roytman",
    href: "https://www.linkedin.com/in/sergey-roytman/",
    image: Sergey
  },
  {
    name: "Devorah Friedman",
    href: "mailto:devorahfr@monday.com",
    image: Devorah
  },
  {
    name: "Dmitry Kogan",
    href: "mailto:dimako@monday.com",
    image: Dmitry
  },
  {
    name: "Shay Cohen",
    href: "mailto:shay@monday.com",
    image: Shay
  },
  {
    name: "Eylon Goren",
    href: "mailto:eylon@monday.com",
    image: Eylon
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
  "shaharzil",
  "hadasfa"
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
