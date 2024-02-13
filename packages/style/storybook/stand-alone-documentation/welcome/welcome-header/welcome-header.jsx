import { ComponentNameDecorator } from "../../../components";
import styles from "./welcome-header.module.scss";

export const WelcomeHeader = () => (
  <ComponentNameDecorator className={styles.welcomeHeader}>
    <span className={styles.welcomeHeaderText}>
      Vibe Design System
      <br /> by monday.com
    </span>
  </ComponentNameDecorator>
);
