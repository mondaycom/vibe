import React from "react";
import { vi } from "vitest";
import * as TableContextModule from "../../context/TableContext/TableContext";
import { type TableContext } from "../../context/TableContext/TableContext.types";
import * as TableRowMenuContextModule from "../../context/TableRowMenuContext/TableRowMenuContext";
import { type TableRowMenuContext } from "../../context/TableRowMenuContext/TableRowMenuContext.types";
import { RowSizes } from "../TableConsts";

export function mockUseTable() {
  const mockUseTable = vi.spyOn(TableContextModule, "useTable").mockImplementation(
    () =>
      ({
        columns: [],
        emptyState: <div />,
        errorState: <div />,
        size: RowSizes.MEDIUM,
        tableRootRef: { current: null },
        isVirtualized: false,
        markTableAsVirtualized: vi.fn(),
        isScrolled: false,
        setIsScrolled: vi.fn(),
        headRef: { current: null },
        onHeadScroll: vi.fn(),
        virtualizedListRef: { current: null },
        onVirtualizedListScroll: vi.fn()
      } satisfies TableContext)
  );

  return mockUseTable;
}

export function mockUseTableRowMenu() {
  const mockUseTableRowMenu = vi.spyOn(TableRowMenuContextModule, "useTableRowMenu").mockImplementation(
    () =>
      ({
        hoveredRowId: null,
        resetHoveredRow: vi.fn(),
        onMouseOverRow: vi.fn(),
        onMouseLeaveRow: vi.fn(),
        onMouseOverRowMenu: vi.fn(),
        onMouseLeaveRowMenu: vi.fn(),
        menuButtonPosition: 0,
        setTableMenuShown: vi.fn(),
        setTableMenuHidden: vi.fn()
      } satisfies TableRowMenuContext)
  );

  return mockUseTableRowMenu;
}
