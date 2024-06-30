import React, { forwardRef, useCallback, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../../hooks/useMergeRef";
import { VibeComponentProps } from "../../../types";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./TableMenu.module.scss";
import MenuButton from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";
import { createPortal } from "react-dom";
import { useTable } from "../context/TableContext/TableContext";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { useTableRowMenu } from "../context/TableRowMenuContext/TableRowMenuContext";
import { useTableContainer } from "../context/TableContainerContext/TableContainerContext";

export interface TableMenuProps extends VibeComponentProps {
  rowId: string;
  children?: React.ReactNode;
}

const TableMenu = forwardRef(
  (
    { rowId, className, id, "data-testid": dataTestId, children }: TableMenuProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(componentRef, ref);

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
      componentRef.current.blur();
    }, [setTableMenuHidden]);

    const onMenuShow = useCallback(() => {
      setTableMenuShown();
    }, [setTableMenuShown]);

    const shouldShowMenu = menuContainerRef.current && hoveredRowId && hoveredRowId === rowId;
    if (!shouldShowMenu) return null;

    return createPortal(
      <div
        className={cx(styles.rowMenuContainer, getStyle(styles, size))}
        style={{ top: menuButtonPosition }}
        onMouseOver={onMouseOverRowMenu}
        onMouseLeave={onMouseLeaveRowMenu}
      >
        <MenuButton
          id={id}
          ref={mergedRef}
          className={cx(styles.tableMenu, className)}
          size={MenuButton.sizes.XS}
          onMenuHide={onMenuHide}
          onMenuShow={onMenuShow}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_MENU, id)}
        >
          <Menu>{children}</Menu>
        </MenuButton>
      </div>,
      menuContainerRef.current
    );
  }
);

export default TableMenu;
