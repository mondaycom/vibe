import React, { useState } from "react";
import iconsMetaData from "@vibe/icons/meta";
import Search from "../../Search/Search";
import * as allIcons from "@vibe/icons";
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
      <Search value={query} onChange={setQuery} placeholder="Search for icons" className={styles.search} />
      <div className={styles.grid}>
        {iconsMetaData
          .filter((icon: IconMeta) => {
            return `${icon.tags},${icon.name}`.toLowerCase().includes(query.toLowerCase());
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
    <Flex className={styles.icon} gap="small">
      <Icon icon={Component} iconSize={26} />
      <span>{name as string}</span>
    </Flex>
  );
}
