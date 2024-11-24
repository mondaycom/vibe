import React from "react";
import Link from "../../../../components/Link/Link";
import styles from "./Ability.module.scss";

interface AbilityProps {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  linkHref: string;
}

export const Ability = ({ title, children, imageSrc, linkHref }: AbilityProps) => {
  return (
    <section className={styles.ability}>
      <img src={imageSrc} alt="" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.content}>{children}</span>
      <Link text="Read more" href={linkHref} target="_top" />
    </section>
  );
};
