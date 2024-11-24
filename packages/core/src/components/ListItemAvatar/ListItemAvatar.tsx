import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import Avatar from "../Avatar/Avatar";
import { ListItemComponentType as ListItemComponentTypeEnum } from "../ListItem/ListItemConstants";
import { ListItemElement } from "../ListItem/ListItem.types";
import styles from "./ListItemAvatar.module.scss";

export interface ListItemAvatarProps extends VibeComponentProps {
  /**
   * the ListItem component [li, div, a]
   */
  component?: ListItemElement;
  src?: string;
  avatarClassName?: string;
}

const ListItemAvatar: VibeComponent<ListItemAvatarProps> & { components?: typeof ListItemComponentTypeEnum } =
  forwardRef(({ className, id, src, avatarClassName, component: Component = "div" }: ListItemAvatarProps, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <Component ref={mergedRef} className={cx(styles.listItemAvatar, className)} id={id} aria-hidden="true">
        <Avatar src={src} type="img" size="small" className={cx(styles.avatar, avatarClassName)} />
      </Component>
    );
  });

export default withStaticProps(ListItemAvatar, {
  components: ListItemComponentTypeEnum
});
