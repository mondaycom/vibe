import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import NavigationChevronRight from "../Icon/Icons/components/NavigationChevronRight";
import styles from "./BreadcrumbsBar.module.scss";

const BREADCRUMBS_BAR_TYPE = {
  NAVIGATION: "navigation",
  INDICATION: "indication"
};

const BreadcrumbsBar = ({ className, children, type, id, "data-testid": dataTestId }) => (
  <nav
    aria-label="Breadcrumb"
    className={cx(styles.breadcrumbsBarWrapper, "breadcrumbs-bar--wrapper", className)}
    data-testid={dataTestId || getTestId(ELEMENT_TYPES.BREADCRUMBS_BAR, id)}
  >
    <ol>
      {children &&
        React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? [
                index > 0 && (
                  <NavigationChevronRight
                    className={cx(styles.separatorIcon, "separatorIcon")}
                    size="14"
                    aria-hidden="true"
                  />
                ),
                React.cloneElement(child, {
                  ...child?.props,
                  isClickable: type !== BREADCRUMBS_BAR_TYPE.INDICATION
                })
              ]
            : null
        )}
    </ol>
  </nav>
);

BreadcrumbsBar.types = BREADCRUMBS_BAR_TYPE;

BreadcrumbsBar.propTypes = {
  className: PropTypes.string,
  /** The type of the bar is responsible for whether it will be navigational or for indication only  */
  type: PropTypes.oneOf([BreadcrumbsBar.types.INDICATION, BreadcrumbsBar.types.NAVIGATION])
};

BreadcrumbsBar.defaultProps = {
  className: "",
  type: BREADCRUMBS_BAR_TYPE.INDICATION
};

export default BreadcrumbsBar;
