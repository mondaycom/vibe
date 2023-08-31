import React from "react";
import cx from "classnames";
import { FC } from "react";
import { Link } from "vibe-storybook-components";
import styles from "./contributors.module.scss";

type Contributor = {
  name: string;
  href: string;
  key?: string;
};

interface contributorsDataProps {
  contributorsData: Array<Contributor>;
}

export const Contributors: FC<contributorsDataProps> = ({ contributorsData }) => {
  const lastIndex = contributorsData.length - 1;
  return (
    <>
      {contributorsData.map(({ name, href, key }, index) => (
        <Link key={key || href} href={href} className={cx({ [styles.contributor]: index < lastIndex })}>
          {name}
        </Link>
      ))}
    </>
  );
};
