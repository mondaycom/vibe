import React, { useState } from "react";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import LegacySearch from "../../LegacySearch/LegacySearch";
import * as allIcons from "../Icons";
import Flex from "../../Flex/Flex";
import styles from "./Icon.stories.module.scss";
import Icon from "../Icon";
import { SubIcon } from "../../../types";

interface IconMeta {
  name: string;
  tags: string;
  file: string;
}

export default function IconsList() {
  const [query, setQuery] = useState("");

  return (
    <section className={styles.wrapper}>
      <LegacySearch value={query} onChange={setQuery} placeholder="Search for icons" wrapperClassName={styles.search} />
      <div className={styles.grid}>
        {iconsMetaData
          .filter((icon: IconMeta) => {
            return icon.tags.toLowerCase().includes(query.toLowerCase());
          })
          .map((icon: IconMeta) => {
            const fileName = icon.file.split(".")[0] as string;
            // @ts-ignore
            const Component = allIcons[fileName] as SubIcon;
            return <IconDescription key={icon.name} name={icon.name} component={Component} />;
          })}
      </div>
    </section>
  );
}

function IconDescription({ name, component: Component }: { name: SubIcon; component: SubIcon }) {
  return (
    <Flex className={styles.icon} gap={Flex.gaps.SMALL}>
      <Icon icon={Component} iconSize={26} clickable={false} />
      <span>{name as string}</span>
    </Flex>
  );
}
