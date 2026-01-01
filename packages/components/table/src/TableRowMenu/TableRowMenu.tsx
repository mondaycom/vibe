import React, { forwardRef, useCallback } from "react";
import cx from "classnames";
import { getTestId, ComponentDefaultTestId, getStyle } from "@vibe/shared";
import styles from "./TableRowMenu.module.scss";
import { MenuButton, Menu } from "@vibe/core";
import { createPortal } from "react-dom";
import { useTable } from "../context/TableContext/TableContext";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";
import { useTableContainer } from "../context/TableContainerContext/TableContainerContext";
import { type TableMenuProps } from "./TableRowMenu.types";

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
            onMouseEnter={onMouseOverRowMenu}
            onMouseLeave={onMouseLeaveRowMenu}
          >
            <MenuButton
              id={id}
              ref={ref}
              className={cx(styles.tableMenu, className)}
              size="xs"
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

