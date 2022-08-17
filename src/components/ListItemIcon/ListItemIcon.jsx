import { camelCase } from "lodash";
import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./ListItemIcon.module.scss";

const ListItemIcon = forwardRef(({ className, id, icon, margin, "data-testid": dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      ref={mergedRef}
      className={cx(
        styles.listItemIcon,
        "list-item-icon",
        className,
        styles[`${camelCase("list-item-icon--" + margin)}`],
        `list-item-icon--${margin}`
      )}
      id={id}
      aria-hidden="true"
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.LIST_ITEM_ICON, id)}
    >
      <Icon icon={icon} clickable={false} ignoreFocusStyle iconSize={18} />
    </div>
  );
});

ListItemIcon.margin = { START: "start", END: "end" };

ListItemIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Add a classname to the icon wrapper
   */
  className: PropTypes.string,
  /**
   * Add the id  to the icon wrapper
   */
  id: PropTypes.string,
  /**
   * the position of the icon inside the list item (this sets the margins of the icon)
   */
  margin: PropTypes.oneOf([ListItemIcon.margin.START, ListItemIcon.margin.END])
};
ListItemIcon.defaultProps = {
  icon: undefined,
  className: "",
  id: undefined,
  margin: ListItemIcon.margin.START
};

export default ListItemIcon;
