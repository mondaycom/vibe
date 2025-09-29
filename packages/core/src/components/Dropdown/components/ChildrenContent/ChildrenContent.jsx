import React, { useCallback } from "react";
import Avatar from "../../../Avatar/Avatar";
import Icon from "../../../Icon/Icon";
import Text from "../../../Text/Text";
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
      {data?.leftRenderer || (
        <>
          {data?.leftAvatar && (
            <Avatar
              className={styles.avatar}
              withoutBorder
              square={data.square}
              src={data.leftAvatar}
              type="img"
              customSize={20}
            />
          )}
          {data?.leftIcon && <Icon className={styles.icon} iconSize={18} icon={data.leftIcon} />}
        </>
      )}
      <Text type={Text.types.TEXT2} color={Text.colors.INHERIT}>
        {children}
      </Text>
      {data?.rightIcon && <Icon iconSize={18} icon={data.rightIcon} />}
      {data?.rightAvatar && (
        <Avatar withoutBorder square={data.square} src={data.rightAvatar} type="img" customSize={20} />
      )}
    </div>
  );
};
