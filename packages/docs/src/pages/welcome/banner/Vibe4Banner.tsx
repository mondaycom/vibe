import React from "react";
import styles from "./Vibe4Banner.module.scss";

const Vibe4Banner: React.FC = () => {
  return (
    <div className={styles.vibe4Banner}>
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.title}>Vibe 4 is here!</span> Check out the{" "}
          <a
            href="https://vibe.monday.com/?path=/docs/migration-guide--docs"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            migration guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vibe4Banner;
