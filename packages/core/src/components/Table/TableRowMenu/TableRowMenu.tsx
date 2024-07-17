import React, { forwardRef, useCallback } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./TableRowMenu.module.scss";
import MenuButton from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";
import { createPortal } from "react-dom";
import { useTable } from "../context/TableContext/TableContext";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";
import { useTableContainer } from "../context/TableContainerContext/TableContainerContext";
import { TableMenuProps } from "./TableRowMenu.types";

const TableRowMenu = forwardRef(
  (
    { rowId, className, id, "data-testid": dataTestId, children }: TableMenuProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { menuContainerRef } = useTableContainer();
    const { size } = useTable();
    const {
      hoveredRowId,
      setTableMenuHidden,
      setTableMenuShown,
      menuButtonPosition,
      onMouseOverRowMenu,
      onMouseLeaveRowMenu
    } = useTableRowMenu();

    const onMenuHide = useCallback(() => {
      setTableMenuHidden();
    }, [setTableMenuHidden]);

    const onMenuShow = useCallback(() => {
      setTableMenuShown();
    }, [setTableMenuShown]);

    const shouldShowMenu = menuContainerRef.current && hoveredRowId && hoveredRowId === rowId;
    if (!shouldShowMenu) return null;

    return (
      <>
        {createPortal(
          <div
            className={cx(styles.rowMenuContainer, getStyle(styles, size))}
            style={{ top: menuButtonPosition }}
            onMouseOver={onMouseOverRowMenu}
            onMouseLeave={onMouseLeaveRowMenu}
          >
            <MenuButton
              id={id}
              ref={ref}
              className={cx(styles.tableMenu, className)}
              size={MenuButton.sizes.XS}
              onMenuHide={onMenuHide}
              onMenuShow={onMenuShow}
              data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_ROW_MENU, id)}
            >
              <Menu>{children}</Menu>
            </MenuButton>
          </div>,
          menuContainerRef.current
        )}
      </>
    );
  }
);

export default TableRowMenu;
