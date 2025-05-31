import React from "react";
import styles from "./Resources.module.scss";
import Card from "./Card";
import HeartIcon from "./icons/HeartIcon";
import CircleIcon from "./icons/CircleIcon";
import CirclesIcon from "./icons/CirclesIcon";
import LineIcon from "./icons/LineIcon";
import AsteriskIcon from "./icons/AsteriskIcon";

export default function Resources() {
  return (
    <div className={styles.resources}>
      <Card
        icon={<HeartIcon />}
        title="Foundations"
        description="Foundations inform the basis of any great user interface."
        page="Foundations/Accessibility"
      />
      <Card
        icon={<CircleIcon />}
        title="Components"
        description="Components are reusable building blocks."
        page="Components/Accordion"
      />
      <Card
        icon={<CirclesIcon />}
        title="Patterns"
        description="A UI pattern is one step up from a component. "
        page=""
      />
      <Card
        icon={<LineIcon />}
        title="Processes"
        description="Processes outline the design workflows and methods"
        page=""
      />
      <Card
        icon={<AsteriskIcon />}
        title="Other resources"
        description="Internal tools and utils that streamline our daily workflows"
        page=""
      />
    </div>
  );
}
