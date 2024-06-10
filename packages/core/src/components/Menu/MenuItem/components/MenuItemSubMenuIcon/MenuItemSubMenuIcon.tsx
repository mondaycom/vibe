import React, { forwardRef } from "react";
import cx from "classnames";
import Divider from "../../../../Divider/Divider";
import Icon from "../../../../Icon/Icon";
import Flex from "../../../../Flex/Flex";
import IconButton from "../../../../IconButton/IconButton";
import { DropdownChevronRight } from "../../../../Icon/Icons";
import styles from "./MenuItemSubMenuIcon.module.scss";
import { MenuItemSubMenuIconProps } from "./MenuItemSubMenuIcon.types";

const MenuItemSubMenuIcon = forwardRef((props: MenuItemSubMenuIconProps, ref: React.ForwardedRef<HTMLDivElement>) => (
  <Flex justify={Flex.justify.CENTER} className={styles.subMenuIconWrapper}>
    {props.isSplit === true ? (
      <>
        <Divider direction={Divider.directions.VERTICAL} className={styles.divider} />
        <IconButton
          icon={DropdownChevronRight}
          className={styles.splitMenuItemIconButton}
          kind={IconButton.kinds.TERTIARY}
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
        clickable={false}
        icon={DropdownChevronRight}
        iconLabel={props.label}
        className={styles.subMenuIcon}
        ignoreFocusStyle
        iconSize={18}
      />
    )}
  </Flex>
));

export default MenuItemSubMenuIcon;
