import React from "react";
import { TeamMember } from "./TeamMember";
import Meirav from "./assets/Meirav.png";
import Yossi from "./assets/Yossi.png";
import Rivka from "./assets/Rivka.png";
import Elad from "./assets/Elad.png";
import Dan from "./assets/Dan.png";
import Naama from "./assets/Naama.png";
import Yael from "./assets/Yael.png";
import Talko from "./assets/Talko.png";
import Anna from "./assets/Anna.png";
import Orr from "./assets/Orr.png";
import Flex from "../../../../components/Flex/Flex";
import styles from "./Team.module.scss";

const team = [
  {
    imgSrc: Orr,
    name: "Orr Gottlieb",
    linkedinUrl: "https://www.linkedin.com/in/orrgottlieb/",
    title: "Software Engineer"
  },
  {
    imgSrc: Yossi,
    name: "Yossi Saadi",
    linkedinUrl: "https://www.linkedin.com/in/yossisaadi/",
    title: "Software Engineer"
  },
  {
    imgSrc: Talko,
    name: "Tal Koren",
    linkedinUrl: "https://www.linkedin.com/in/talkor/",
    title: "Software Engineer"
  },
  {
    imgSrc: Rivka,
    name: "Rivka Ungar",
    linkedinUrl: "https://www.linkedin.com/in/rivka-ungar/",
    title: "Software Engineer"
  },
  {
    imgSrc: Meirav,
    name: "Meirav Ron",
    linkedinUrl: "https://www.linkedin.com/in/meirav-ron-1903b0197/",
    title: "Product Designer"
  },
  {
    imgSrc: Elad,
    name: "Elad Mizrahi",
    linkedinUrl: "https://www.linkedin.com/in/elad-mizrahi/",
    title: "Product Designer"
  },

  {
    imgSrc: Yael,
    name: "Yael Bein",
    linkedinUrl: "https://www.linkedin.com/in/yaelbein/",
    title: "Product Designer"
  },
  {
    imgSrc: Dan,
    name: "Dan Fishbein",
    linkedinUrl: "https://www.linkedin.com/in/danfishbein90s/",
    title: "Product Designer"
  },
  {
    imgSrc: Naama,
    name: "Naama Yeffet",
    linkedinUrl: "https://il.linkedin.com/in/naama-yeffet-80280a242/",
    title: "Product Designer"
  },
  {
    imgSrc: Anna,
    name: "Anna Hyatt",
    linkedinUrl: "https://www.linkedin.com/in/anna-hyatt-design/",
    title: "Product Designer"
  }
];

export default function Team() {
  return (
    <Flex direction="column" align="start" style={{ gap: "42px" }}>
      <p className={styles.text}>
        A team of thinkers, doers, and innovators
        <br /> pushing the monday.com design experience forward.
      </p>
      <div className={styles.team}>
        {team.map(({ imgSrc, name, linkedinUrl, title }) => (
          <TeamMember key={name} image={imgSrc} name={name} linkedinUrl={linkedinUrl} title={title} />
        ))}
      </div>
    </Flex>
  );
}
