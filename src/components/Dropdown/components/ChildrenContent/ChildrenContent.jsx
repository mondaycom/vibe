import Avatar from "../../../Avatar/Avatar";
import Icon from "../../../Icon/Icon";
import styles from "./ChildrenContent.module.scss";

export const ChildrenContent = ({ data, children }) => {
  return (
    <div className={styles.valueContainer}>
      {data?.leftAvatar && (
        <Avatar src={data.leftAvatar} className={styles.avatar} size={Avatar.sizes.SMALL} type={Avatar.types.IMG} />
      )}
      {data?.leftIcon && <Icon icon={data.leftIcon} clickable={false} />}
      {children}
      {data?.rightIcon && <Icon icon={data.rightIcon} clickable={false} />}
      {data?.rightAvatar && (
        <Avatar src={data.rightAvatar} className={styles.avatar} size={Avatar.sizes.SMALL} type={Avatar.types.IMG} />
      )}
    </div>
  );
};
