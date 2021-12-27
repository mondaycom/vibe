import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./ListItemIcon.scss";
import Icon from "../Icon/Icon";

const ListItemIcon = forwardRef(({ className, id, icon, margin }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      ref={mergedRef}
      className={cx("list-item-icon", className, `list-item-icon--${margin}`)}
      id={id}
      aria-hidden="true"
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
