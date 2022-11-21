/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import styles from "./SingleValue.module.scss";
import Avatar from "../../../Avatar/Avatar";
import Icon from "../../../Icon/Icon";

const SingleValue = props => {
  const { Renderer, data, children } = props;

  const value = Renderer ? (
    <Renderer {...data} />
  ) : (
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
  return (
    <components.SingleValue {...props} className="dropdown-wrapper__single-value--reset">
      {value}
    </components.SingleValue>
  );
};

export default SingleValue;
