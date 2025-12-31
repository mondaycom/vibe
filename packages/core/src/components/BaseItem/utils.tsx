import { type EndElement, type StartElement } from "./BaseItem.types";
import { type TextType } from "../Text";
import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./BaseItem.module.scss";
import { Icon } from "@vibe/icon";
import { Text } from "../../../../components/typography/dist";

export function renderSideElement(
  element: StartElement | EndElement,
  disabled: boolean,
  textVariant: TextType
): React.ReactNode {
  switch (element.type) {
    case "avatar":
      return (
        <Avatar
          className={styles.avatar}
          src={element.value}
          withoutBorder
          square={element.square}
          type="img"
          customSize={20}
          disabled={disabled}
        />
      );

    case "icon":
      return <Icon className={styles.icon} icon={element.value} iconSize={20} />;

    case "indent":
      return <div className={styles.indent} />;

    case "suffix":
      return (
        <Text type={textVariant} color="secondary" style={{ maxWidth: "112px" }}>
          {element.value}
        </Text>
      );

    case "custom":
      return element.render();
  }
}
