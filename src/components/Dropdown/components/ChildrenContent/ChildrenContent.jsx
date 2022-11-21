import Avatar from "../../../Avatar/Avatar";
import Icon from "../../../Icon/Icon";
import styles from "./ChildrenContent.module.scss";
import cx from "classnames";

export const ChildrenContent = ({ data, children, avatarSize = 18 }) => {
  return (
    <div className={styles.valueContainer}>
      {data?.leftAvatar && (
        <Avatar
          withoutBorder
          customSize={avatarSize}
          src={data.leftAvatar}
          className={styles.avatar}
          type={Avatar.types.IMG}
        />
      )}
      {data?.leftIcon && <Icon icon={data.leftIcon} clickable={false} />}
      {children}
      {data?.rightIcon && <Icon icon={data.rightIcon} clickable={false} />}
      {data?.rightAvatar && (
        <Avatar src={data.rightAvatar} className={styles.avatar} type={Avatar.types.IMG} customSize={avatarSize} />
      )}
    </div>
  );
};
