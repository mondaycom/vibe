import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { components } from "react-select";
import styles from "./menu.module.scss";

const Menu = ({
  children,
  Renderer,
  selectProps,
  dropdownMenuWrapperClassName,
  id,
  "data-testid": dataTestId,
  ...props
}) => {
  const withFixedPosition =
    selectProps?.selectProps?.insideOverflowContainer || selectProps?.selectProps?.insideOverflowWithTransformContainer;
  return (
    <components.Menu
      {...props}
      className={cx(
        styles.dropdownMenuWrapper,
        {
          [styles.dropdownMenuWrapperFixedPosition]: withFixedPosition
        },
        dropdownMenuWrapperClassName
      )}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN_MENU, id)}
    >
      {Renderer && Renderer(props)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
