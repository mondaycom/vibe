import React from "react";
import Contributor from "./Contributor";
import Evgeniy from "./assets/Evgeniy.png";
import Orr from "./assets/Orr.png";

import styles from "./Founders.module.scss";

const FOUNDERS = [
  {
    name: "Orr Gottlieb",
    href: "https://www.linkedin.com/in/orrgottlieb/",
    image: Orr,
    tooltip: "Software Engineer"
  },
  {
    name: "Evgeniy Kazinec",
    href: "https://www.linkedin.com/in/evgeniy-kazinec/",
    image: Evgeniy,
    tooltip: "Product Designer"
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
