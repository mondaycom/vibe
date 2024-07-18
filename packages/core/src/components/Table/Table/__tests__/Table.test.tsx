import React from "react";
import { cleanup, render } from "@testing-library/react";
import TableCell from "../../TableCell/TableCell";
import Table, { ITableColumn } from "../Table";
import TableBody from "../../TableBody/TableBody";
import TableRow from "../../TableRow/TableRow";
import TableHeaderCell, { ITableHeaderCellProps } from "../../TableHeaderCell/TableHeaderCell";
import TableHeader from "../../TableHeader/TableHeader";
import TableCellSkeleton from "../../TableCellSkeleton/TableCellSkeleton";
import { mockUseTable, mockUseTableRowMenu } from "./tableTestUtils";

interface TableNode {
  role: string;
  children: TableNode[];
}

function traverse(element: Element, acc: TableNode[] = []): TableNode[] {
  for (const child of Array.from(element.children)) {
    const role = child.getAttribute("role");

    if (role) {
      const result: TableNode = { role, children: [] };
      acc.push(result);
      traverse(child, result.children);
    } else {
      traverse(child, acc);
    }
  }
  return acc;
}

describe("Table", () => {
  const tableBoilerplate = {
    columns: [{ id: "column-id", title: "Title", width: 20 }],
    errorState: <h1>Error State</h1>,
    emptyState: <h1>Empty State</h1>
  };

  afterEach(cleanup);

  describe("<TableCell />", () => {
    it("Should render string as a <Text /> component", () => {
      const { getByRole } = render(<TableCell>String</TableCell>);
      const cell = getByRole("cell");
      const textElement = cell.children[0];

      expect(textElement.classList).toContain("typography");
      expect(textElement.textContent).toBe("String");
    });

    it("Should render number as a <Text /> component", () => {
      const { getByRole } = render(<TableCell>{100}</TableCell>);
      const cell = getByRole("cell");
      const textElement = cell.children[0];

      expect(textElement.classList).toContain("typography");
      expect(textElement.textContent).toBe("100");
    });

    it("Should render HTML element as a child", () => {
      const { getByRole } = render(
        <TableCell>
          <div>Content</div>
        </TableCell>
      );
      const cell = getByRole("cell");

      expect(cell.innerHTML).toBe(`<div>Content</div>`);
    });
  });

  describe("TableRow", () => {
    beforeEach(() => {
      mockUseTable();
      mockUseTableRowMenu();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("should render without a highlight state", () => {
      const { getByRole } = render(<TableRow />);
      expect(getByRole("row")).toHaveAttribute("aria-selected", "false");
    });

    it("should render with a highlight state", () => {
      const { getByRole } = render(<TableRow highlighted />);
      expect(getByRole("row")).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("TableCellSkeleton", () => {
    it("should render with a specified type", () => {
      const { getByTestId } = render(<TableCellSkeleton type="long-text" />);
      expect(getByTestId("skeleton")).toHaveClass("longText");
    });
  });

  describe("loading state", () => {
    it("should render skeletons body in case loadingState is true", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate} dataState={{ isLoading: true }}>
          <TableBody></TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.children.length).toBe(5);
    });
  });

  describe("Empty/error states", () => {
    it("Should render empty state in case <TableBody /> is empty", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate}>
          <TableBody></TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.textContent).toBe("Empty State");
    });

    it("Should render empty state in case <TableBody /> has empty array children", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate}>
          <TableBody>
            {[].map(item => (
              <TableRow key={item.id}>
                <TableCell>Table Cell</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.textContent).toBe("Empty State");
    });

    it("Should render table rows instead of empty state", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate}>
          <TableBody>
            <TableRow>
              <TableCell>Table Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.textContent).toBe("Table Cell");
    });

    it("Should render error state", () => {
      const { getByRole } = render(
        <Table {...tableBoilerplate} dataState={{ isError: true }}>
          <TableBody></TableBody>
        </Table>
      );

      const tableBodyElement = getByRole("rowgroup");
      expect(tableBodyElement.textContent).toBe("Error State");
    });
  });

  describe("Layout", () => {
    it("Should apply column layout CSS variable to table's styling scope", () => {
      const columns: ITableColumn[] = [
        { id: "1", title: "Fixed width", width: 20 },
        { id: "2", title: "Min and max", width: { min: 10, max: 20 } },
        { id: "3", title: "Dynamic width" }
      ];

      const { getByRole } = render(<Table {...tableBoilerplate} columns={columns} />);

      const style = getByRole("table").getAttribute("style");
      expect(style).toMatch("20px minmax(10px, 20px) minmax(112px, 1fr)");
    });
  });

  describe("a11y", () => {
    it("Should have accessible DOM structure (roles hierarchy)", () => {
      const { baseElement } = render(
        <Table {...tableBoilerplate}>
          <TableHeader>
            <TableHeaderCell title="Title" sortState="asc" />
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Table Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(traverse(baseElement)).toMatchObject([
        {
          role: "table",
          children: [
            { role: "rowgroup", children: [{ role: "columnheader" }] },
            { role: "rowgroup", children: [{ role: "row", children: [{ role: "cell" }] }] }
          ]
        }
      ]);
    });

    describe.each([
      ["asc", "ascending"],
      ["desc", "descending"],
      ["none", "none"]
    ])("Sort", (sortState: ITableHeaderCellProps["sortState"], ariaSort) => {
      it(`Should apply aria-sort to header element (${sortState}, ${ariaSort}) when onSortClicked is defined`, () => {
        const onSortClicked = jest.fn();
        const { getByRole } = render(
          <TableHeaderCell title="Title" sortState={sortState} onSortClicked={onSortClicked} />
        );
        expect(getByRole("columnheader").getAttribute("aria-sort")).toBe(ariaSort);
      });

      it(`Should not apply aria-sort to header element (${sortState}, ${ariaSort}) when onSortClicked isn't defined`, () => {
        const { getByRole } = render(<TableHeaderCell title="Title" sortState={sortState} />);
        expect(getByRole("columnheader")).not.toHaveAttribute("aria-sort");
      });
    });
  });
});
