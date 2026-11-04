import React from "react";
import { vi } from "vitest";
import * as TableContextModule from "../../context/TableContext/TableContext";
import { type TableContext } from "../../context/TableContext/TableContext.types";
import * as TableRowMenuContextModule from "../../context/TableRowMenuContext/TableRowMenuContext";
import {
  type TableRowMenuCallbacksContext,
  type TableRowMenuContext
} from "../../context/TableRowMenuContext/TableRowMenuContext.types";
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

export function mockUseTableRowMenuCallbacks() {
  return vi.spyOn(TableRowMenuContextModule, "useTableRowMenuCallbacks").mockImplementation(
    () =>
      ({
        onMouseOverRow: vi.fn(),
        onMouseLeaveRow: vi.fn(),
        resetHoveredRow: vi.fn()
      } satisfies TableRowMenuCallbacksContext)
  );
}

export function mockUseTableRowMenu() {
  return vi.spyOn(TableRowMenuContextModule, "useTableRowMenu").mockImplementation(
    () =>
      ({
        hoveredRowId: null,
        onMouseOverRowMenu: vi.fn(),
        onMouseLeaveRowMenu: vi.fn(),
        menuButtonPosition: 0,
        setTableMenuShown: vi.fn(),
        setTableMenuHidden: vi.fn()
      } satisfies TableRowMenuContext)
  );
}
