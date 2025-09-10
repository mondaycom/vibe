import React, { type ReactElement } from "react";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { NavigationChevronRight } from "@vibe/icons";
import { BreadcrumbsBarType as BreadcrumbsBarTypeEnum } from "./BreadcrumbsConstants";
import { type BreadcrumbsBarType } from "./Breadcrumbs.types";
import { type BreadcrumbItemProps } from "./BreadcrumbItem/BreadcrumbItem";
import { withStaticPropsWithoutForwardRef } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import styles from "./BreadcrumbsBar.module.scss";
import { type BreadcrumbMenuProps } from "./BreadcrumbMenu/BreadcrumbMenu";
import { ComponentVibeId } from "../../tests/constants";

export interface BreadcrumbBarProps extends VibeComponentProps {
  /**
   * The type of the breadcrumb bar, determining if it is navigational or for indication only.
   */
  type: BreadcrumbsBarType;
  /**
   * The breadcrumb items displayed in the bar.
   */
  children:
    | ReactElement<BreadcrumbItemProps | BreadcrumbMenuProps>
    | ReactElement<BreadcrumbItemProps | BreadcrumbMenuProps>[];
}

const BreadcrumbsBar = ({
  className,
  children,
  type = "indication",
  id,
  "data-testid": dataTestId
}: BreadcrumbBarProps) => (
  <nav
    aria-label="Breadcrumb"
    className={cx(styles.breadcrumbsBar, className)}
    id={id}
    data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMBS_BAR, id)}
    data-vibe={ComponentVibeId.BREADCRUMBS_BAR}
  >
    <ol>
      {children &&
        React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? [
                index > 0 && <NavigationChevronRight className={styles.separatorIcon} size="14" aria-hidden="true" />,
                React.cloneElement(child, {
                  ...child?.props,
                  isClickable: type !== "indication"
                })
              ]
            : null
        )}
    </ol>
  </nav>
);

interface BreadcrumbsBarStaticProps {
  types: typeof BreadcrumbsBarTypeEnum;
}

export default withStaticPropsWithoutForwardRef<BreadcrumbBarProps, BreadcrumbsBarStaticProps>(BreadcrumbsBar, {
  types: BreadcrumbsBarTypeEnum
});
