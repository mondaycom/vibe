import React from "react";
import * as TableContextModule from "../../context/TableContext/TableContext";
import { TableContext } from "../../context/TableContext/TableContext.types";
import * as TableRowMenuContextModule from "../../context/TableRowMenuContext/TableRowMenuContext";
import { TableRowMenuContext } from "../../context/TableRowMenuContext/TableRowMenuContext.types";
import { RowSizes } from "../TableConsts";

export function mockUseTable() {
  vi.mock("../../context/TableContext/TableContext", () => ({
    __esModule: true,
    ...vi.requireActual("../../context/TableContext/TableContext")
  }));

  vi.spyOn(TableContextModule, "useTable").mockImplementation(
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
}

export function mockUseTableRowMenu() {
  vi.mock("../../context/TableRowMenuContext/TableRowMenuContext", () => ({
    __esModule: true,
    ...vi.requireActual("../../context/TableRowMenuContext/TableRowMenuContext")
  }));

  vi.spyOn(TableRowMenuContextModule, "useTableRowMenu").mockImplementation(
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
}
