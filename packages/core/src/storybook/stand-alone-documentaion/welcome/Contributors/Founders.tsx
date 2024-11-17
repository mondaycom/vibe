import React from "react";
import Contributor from "./Contributor";
import Evgeniy from "../assets/contributors/Evgeniy.png";
import Orr from "../assets/contributors/Orr.png";
import Meytal from "../assets/contributors/Meytal.png";
import styles from "./Founders.module.scss";

const FOUNDERS = [
  {
    name: "Evgeniy Kazinec",
    href: "https://www.linkedin.com/in/evgeniy-kazinec/",
    image: Evgeniy
  },
  {
    name: "Orr Gottlieb",
    href: "https://www.linkedin.com/in/orrgottlieb/",
    image: Orr
  },
  {
    name: "Meytal Badichi",
    href: "https://www.linkedin.com/in/meytal-badichi-561439125/",
    image: Meytal
  }
];

export default function Founders() {
  return (
    <div className={styles.founders}>
      {FOUNDERS.map((founder, index) => (
        <Contributor key={index} name={founder.name} image={founder.image} href={founder.href} />
      ))}
    </div>
  );
}
