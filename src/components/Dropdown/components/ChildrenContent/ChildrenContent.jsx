import Avatar from "../../../Avatar/Avatar";
import Icon from "../../../Icon/Icon";
import styles from "./ChildrenContent.module.scss";

export const ChildrenContent = ({ data, children }) => {
  return (
    <div className={styles.valueContainer}>
      {data?.leftAvatar && (
        <Avatar withoutBorder square={data.square} src={data.leftAvatar} type={Avatar.types.IMG} customSize={18} />
      )}
      {data?.leftIcon && <Icon icon={data.leftIcon} clickable={false} />}
      {children}
      {data?.rightIcon && <Icon icon={data.rightIcon} clickable={false} />}
      {data?.rightAvatar && (
        <Avatar withoutBorder square={data.square} src={data.rightAvatar} type={Avatar.types.IMG} customSize={18} />
      )}
    </div>
  );
};
