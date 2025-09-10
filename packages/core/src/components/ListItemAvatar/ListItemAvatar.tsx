import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import { withStaticProps } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import Avatar from "../Avatar/Avatar";
import { ListItemComponentType as ListItemComponentTypeEnum } from "../ListItem/ListItemConstants";
import { type ListItemElement } from "../ListItem";
import styles from "./ListItemAvatar.module.scss";

export interface ListItemAvatarProps extends VibeComponentProps {
  /**
   * The HTML element used for the list item avatar.
   */
  component?: ListItemElement;
  /**
   * The source URL of the avatar image.
   */
  src?: string;
  /**
   * Class name applied to the avatar.
   */
  avatarClassName?: string;
}

const ListItemAvatar = forwardRef(
  (
    { className, id, src, avatarClassName, component: Component = "div" }: ListItemAvatarProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <Component ref={mergedRef} className={cx(styles.listItemAvatar, className)} id={id} aria-hidden="true">
        <Avatar src={src} type="img" size="small" className={cx(styles.avatar, avatarClassName)} />
      </Component>
    );
  }
);

interface ListItemAvatarStaticProps {
  components: typeof ListItemComponentTypeEnum;
}

export default withStaticProps<ListItemAvatarProps, ListItemAvatarStaticProps>(ListItemAvatar, {
  components: ListItemComponentTypeEnum
});
