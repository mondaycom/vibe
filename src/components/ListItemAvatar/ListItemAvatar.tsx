import React, { FC, forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { VibeComponentProps } from "../../types";
import Avatar from "../Avatar/Avatar";
import styles from "./ListItemAvatar.module.scss";

export interface ListItemAvatarProps extends VibeComponentProps {
  src?: string;
  avatarClassName?: string;
}

const ListItemAvatar: FC<ListItemAvatarProps> = forwardRef(({ className, id, src, avatarClassName }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div ref={mergedRef} className={cx(styles.listItemAvatar, className)} id={id} aria-hidden="true">
      <Avatar
        src={src}
        type={Avatar.types.IMG}
        size={Avatar.sizes.SMALL}
        className={cx(styles.avatar, avatarClassName)}
      />
    </div>
  );
});

export default ListItemAvatar;
