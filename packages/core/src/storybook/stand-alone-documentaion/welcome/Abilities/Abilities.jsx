import React from "react";
import { Ability } from "./Ability";
import { components, foundations, gettingStarted } from "../assets";
import styles from "./Abilities.module.scss";

export const Abilities = () => (
  <div className={styles.abilities}>
    <Ability title="Getting started" imageSrc={gettingStarted} linkHref="/?path=/docs/getting-started--docs">
      Instructions and welcome to the monday.com OS design system
    </Ability>
    <Ability title="Foundations" imageSrc={foundations} linkHref="/?path=/docs/foundations-colors--docs">
      All information about colors, typography, spacing, and icons
    </Ability>
    <Ability title="Components" imageSrc={components} linkHref="/?path=/docs/buttons">
      All the information and guidelines you’ll ever need on each component
    </Ability>
  </div>
);
