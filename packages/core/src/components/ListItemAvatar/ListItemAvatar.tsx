import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import { VibeComponent, withStaticProps } from "../../types";
import Avatar, { AvatarProps } from "../Avatar/Avatar";
import { ListItemComponentType } from "../ListItem/ListItemConstants";
import styles from "./ListItemAvatar.module.scss";

export interface ListItemAvatarProps extends AvatarProps {
  /**
   * the ListItem component [li, div, a]
   */
  component?: ListItemComponentType;
  src?: string;
  avatarClassName?: string;
}

const ListItemAvatar: VibeComponent<ListItemAvatarProps> & { components?: typeof ListItemComponentType } = forwardRef(
  (props, ref) => {
    const {
      className,
      id,
      src,
      avatarClassName,
      component: Component = ListItemAvatar.components.DIV,
      ...avatarProps
    } = props;

    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <Component ref={mergedRef} className={cx(styles.listItemAvatar, className)} id={id} aria-hidden="true">
        <Avatar
          src={src}
          type={Avatar.types.IMG}
          size={Avatar.sizes.SMALL}
          className={cx(styles.avatar, avatarClassName)}
          {...avatarProps}
        />
      </Component>
    );
  }
);

export default withStaticProps(ListItemAvatar, {
  components: ListItemComponentType
});
