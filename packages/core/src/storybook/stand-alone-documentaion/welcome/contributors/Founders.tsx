import React from "react";
import Contributor from "./Contributor";
import Evgeniy from "./assets/Evgeniy.png";
import Orr from "./assets/Orr.png";
import Meytal from "./assets/Meytal.png";
import Hadas from "./assets/Hadas.png";
import styles from "./Founders.module.scss";

const FOUNDERS = [
  {
    name: "Evgeniy Kazinec",
    href: "https://www.linkedin.com/in/evgeniy-kazinec/",
    image: Evgeniy,
    tooltip: "Product Designer"
  },
  {
    name: "Orr Gottlieb",
    href: "https://www.linkedin.com/in/orrgottlieb/",
    image: Orr,
    tooltip: "Software Engineer"
  },
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
  }
];

export default function Founders() {
  return (
    <div className={styles.founders}>
      {FOUNDERS.map((founder, index) => (
        <Contributor
          key={index}
          name={founder.name}
          image={founder.image}
          href={founder.href}
          tooltip={founder.tooltip}
        />
      ))}
    </div>
  );
}
