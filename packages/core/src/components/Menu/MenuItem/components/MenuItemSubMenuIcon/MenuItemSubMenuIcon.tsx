import React, { forwardRef } from "react";
import cx from "classnames";
import Divider from "../../../../Divider/Divider";
import { Icon } from "@vibe/icon";
import Flex from "../../../../Flex/Flex";
import IconButton from "../../../../IconButton/IconButton";
import { DropdownChevronRight } from "@vibe/icons";
import styles from "./MenuItemSubMenuIcon.module.scss";
import { type MenuItemSubMenuIconProps } from "./MenuItemSubMenuIcon.types";

const MenuItemSubMenuIcon = forwardRef((props: MenuItemSubMenuIconProps, ref: React.ForwardedRef<HTMLDivElement>) => (
  <Flex justify="center" className={styles.subMenuIconWrapper}>
    {props.isSplit === true ? (
      <>
        <Divider direction="vertical" className={styles.divider} />
        <IconButton
          icon={DropdownChevronRight}
          className={styles.splitMenuItemIconButton}
          kind="tertiary"
          size={null} // Customizing size via className
          iconClassName={cx(styles.splitSubMenuIcon, { [styles.disabled]: props.disabled })}
          tabIndex={-1}
          ref={ref}
          active={props.active}
          disabled={props.disabled}
        />
      </>
    ) : (
      <Icon
        icon={DropdownChevronRight}
        iconLabel={props.label}
        className={cx(styles.subMenuIcon, { [styles.disabled]: props.disabled })}
        ignoreFocusStyle
        iconSize={18}
      />
    )}
  </Flex>
));

export default MenuItemSubMenuIcon;
