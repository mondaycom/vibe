import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Link from "../../Link/Link";
import styles from "./ToastLink.module.scss";

const ToastLink = ({ className, id, "data-testid": dataTestId, ...linkProps }) => {
  const classNames = cx(styles.actionLink, "monday-style-toast-action_link", className);
  return (
    <Link
      {...linkProps}
      componentClassName={classNames}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TOAST_LINK, id)}
    />
  );
};

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNamePropsType, ...linkPropsTypes } = Link.propTypes;
ToastLink.propTypes = {
  ...linkPropsTypes
};

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNameDefaultProp, ...linkDefaultPropTypes } = Link.defaultProps;
ToastLink.defaultProps = {
  ...linkDefaultPropTypes
};

export default ToastLink;
