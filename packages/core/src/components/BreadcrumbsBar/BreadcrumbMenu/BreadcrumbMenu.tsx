import React, { Children, forwardRef, ReactElement, Ref, useMemo } from "react";
import MenuButton, { MenuButtonProps } from "../../MenuButton/MenuButton";
import { VibeComponent, VibeComponentProps } from "../../../types";
import Menu from "../../Menu/Menu/Menu";
import { getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import styles from "./BreadcrumbMenu.module.scss";
import { BreadcrumbMenuItemProps } from "./BreadcrumbMenuItem"; // Assuming this path
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { ComponentDefaultTestId } from "../../../tests/test-ids-utils";
import { DropdownChevronDown } from "../../Icon/Icons";

export interface BreadcrumbMenuProps extends VibeComponentProps {
  /** Text to display in the Breadcrumb item acting as the menu trigger */
  text: string;
  /** Children should be BreadcrumbMenuItem components */
  children: ReactElement<BreadcrumbMenuItemProps> | ReactElement<BreadcrumbMenuItemProps>[];
  /** Optional: Pass props directly to the underlying MenuButton */
  menuButtonProps?: Partial<MenuButtonProps>;
  /** Is this the current/active item in the breadcrumbs path? */
  isCurrent?: boolean;
  /** Backward compatibility for props naming */
  componentClassName?: string;
}

const BreadcrumbMenu: VibeComponent<BreadcrumbMenuProps, HTMLElement> = forwardRef(
  (
    {
      className,
      componentClassName,
      id,
      "data-testid": dataTestId,
      text,
      children,
      menuButtonProps = {},
      isCurrent = false
    },
    ref: Ref<HTMLElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName], cx(styles.breadcrumbMenu));
    // Use BREADCRUMB_ITEM for test id
    const testId = dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_ITEM, id);

    const menuContent = useMemo(() => {
      // Ensure children are valid elements before mapping
      const validChildren = Children.toArray(children).filter(React.isValidElement);
      return <Menu>{validChildren}</Menu>;
    }, [children]);

    return (
      <MenuButton
        ref={ref} // Pass the ref to the underlying MenuButton
        id={id}
        data-testid={testId}
        className={overrideClassName}
        ariaLabel={`Actions for ${text}`}
        component={DropdownChevronDown} // Use chevron down icon by default
        componentPosition={MenuButton.componentPositions.END}
        text={text}
        size={MenuButton.sizes.SMALL} // Match breadcrumb item size
        dialogPaddingSize={MenuButton.paddingSizes.NONE} // Remove default padding if items handle it
        closeMenuOnItemClick={true}
        {...menuButtonProps} // Spread additional MenuButton props
        // Don't allow overriding children via menuButtonProps
        // eslint-disable-next-line react/no-children-prop
        children={menuContent}
        // Add aria-current if this is the last item
        aria-current={isCurrent ? "page" : undefined}
      />
    );
  }
);

export default BreadcrumbMenu;
