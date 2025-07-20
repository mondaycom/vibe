import React from "react";
import styles from "./Resources.module.scss";
import ResourceCard from "./ResourceCard";
import IconFoundations from "./icons/IconFoundations";
import IconFoundationsColored from "./icons/IconFoundationsColored";
import IconComponents from "./icons/IconComponents";
import IconComponentsColored from "./icons/IconComponentsColored";
import IconPatterns from "./icons/IconPatterns";
import IconPatternsColored from "./icons/IconPatternsColored";
import Section from "../Section";
import EntranceAnimation from "../EntranceAnimation";

export default function Resources() {
  return (
    <>
      <EntranceAnimation>
        <Section>Our Resources</Section>
      </EntranceAnimation>

      <EntranceAnimation>
        <p className={styles.text}>
          Explore monday.com’s open-source <br />
          design and development tools.
        </p>
        <div className={styles.resources}>
          <ResourceCard
            icon={<IconFoundations />}
            hoverIcon={<IconFoundationsColored />}
            title="Foundations"
            description="Colors, spacing, typography, and core design tokens."
            page="Foundations/Accessibility"
          />
          <ResourceCard
            icon={<IconComponents />}
            hoverIcon={<IconComponentsColored />}
            title="Components"
            description="Reusable blocks for creating monday.com experiences."
            page="Components/Accordion"
          />
          <ResourceCard
            icon={<IconPatterns />}
            hoverIcon={<IconPatternsColored />}
            title="Patterns"
            description="Best practices for solving common UX challenges."
            page=""
          />
        </div>
      </EntranceAnimation>
    </>
  );
}
