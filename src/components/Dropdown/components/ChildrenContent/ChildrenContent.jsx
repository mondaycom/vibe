import Avatar from "../../../Avatar/Avatar";
import Icon from "../../../Icon/Icon";
import { useCallback } from "react";
import styles from "./ChildrenContent.module.scss";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";

export const ChildrenContent = ({ data, children, readOnly }) => {
  const onMouseDown = useCallback(
    event => {
      if (readOnly) {
        event.stopPropagation();
      }
    },
    [readOnly]
  );

  return (
    <div
      className={styles.valueContainer}
      onMouseDown={onMouseDown}
      data-testid={getTestId(ComponentDefaultTestId.DROPDOWN_OPTION_CONTENT)}
    >
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
