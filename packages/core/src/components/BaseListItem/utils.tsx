import { EndElement, StartElement } from "./BaseListItem.types";
import { TextType } from "../Text";
import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./BaseListItem.module.scss";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

export function renderSideElement(
  element: StartElement | EndElement,
  disabled: boolean,
  fontSize: TextType
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

    case "inset":
      return <div className={styles.inset} />;

    case "suffix":
      return (
        <Text type={fontSize} color="secondary" style={{ maxWidth: "112px" }}>
          {element.value}
        </Text>
      );

    case "custom":
      return element.render();
  }
}
