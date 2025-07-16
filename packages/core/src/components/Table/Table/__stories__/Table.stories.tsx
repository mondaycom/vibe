import React, { useState } from "react";
import Table, { TableColumn } from "../Table";
import TableHeader from "../../TableHeader/TableHeader";
import TableHeaderCell from "../../TableHeaderCell/TableHeaderCell";
import TableBody from "../../TableBody/TableBody";
import TableVirtualizedBody from "../../TableVirtualizedBody/TableVirtualizedBody";
import TableRow from "../../TableRow/TableRow";
import TableCell from "../../TableCell/TableCell";
import Label from "../../../Label/Label";
import Flex from "../../../Flex/Flex";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import {
  emailColumns,
  emailTableData,
  priorityColumnToLabelColor,
  scrollTableColumns,
  scrollTableData,
  sort,
  statusColumnToLabelColor,
  stickyColumns,
  stickyTableData,
  TableAvatar,
  virtualizedScrollTableColumns,
  virtualizedScrollTableData
} from "./Table.stories.helpers";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Table,
  ignoreControlsPropNamesArray: ["children", "errorState", "emptyState"]
});

export default {
  title: "Components/Table",
  component: Table,
  subcomponents: {
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
    TableVirtualizedBody
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { TableAvatar }
      }
    }
  }
};

export const Overview = {
  render: () => {
    const columns: TableColumn[] = [
      {
        id: "sentOn",
        title: "Sent on",
        width: 150,
        loadingStateType: "medium-text"
      },
      {
        id: "subject",
        title: "Subject",
        loadingStateType: "long-text"
      },
      {
        id: "sentBy",
        title: "Sent by",

        width: {
          min: 120,
          max: 200
        },

        infoContent: "This is the sender",
        loadingStateType: "circle"
      },
      {
        id: "status",
        title: "Status",
        width: 150,
        infoContent: "Info content for the status column",
        loadingStateType: "medium-text"
      },
      {
        id: "emailsSent",
        title: "Emails sent",
        width: 150,
        loadingStateType: "medium-text"
      }
    ];

    const data = [
      {
        id: "1",
        sentOn: "2020-01-01",
        sentBy: "John Doe",
        subject: "Lorem ipsum dolor",
        status: "Sent",
        emailsSent: 100
      },
      {
        id: "3",
        sentOn: "2023-03-03",
        sentBy: "Some Person",
        subject:
          "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
        status: "Sent",
        emailsSent: 999
      },
      {
        id: "2",
        sentOn: "2022-02-02",
        sentBy: "Other Name",
        subject: "This is the subject",
        status: "Sent",
        emailsSent: 99
      }
    ];

    return (
      <Table
        errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
        emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
        columns={columns}
      >
        <TableHeader>
          {columns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {data.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  name: "Overview"
};

export const Sizes = {
  render: () => {
    const columns: TableColumn[] = [
      {
        id: "sentOn",
        title: "Sent on",
        loadingStateType: "medium-text"
      },
      {
        id: "subject",
        title: "Subject",

        loadingStateType: "long-text"
      }
    ];
    const data = [
      {
        id: 1,
        sentOn: "2020-01-01",
        subject: "Lorem ipsum dolor"
      },
      {
        id: 2,
        sentOn: "2022-02-02",
        subject: "This is the subject"
      }
    ];
    return (
      <>
        <Table
          style={{ width: "auto" }}
          size="small"
          errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
          emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
          columns={columns}
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell
                key={index}
                title={headerCell.title}
                icon={headerCell.icon}
                infoContent={headerCell.infoContent}
              />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table
          style={{ width: "auto" }}
          size="medium"
          errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
          emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
          columns={columns}
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell
                key={index}
                title={headerCell.title}
                icon={headerCell.icon}
                infoContent={headerCell.infoContent}
              />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table
          style={{ width: "auto" }}
          size="large"
          errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
          emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
          columns={columns}
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell
                key={index}
                title={headerCell.title}
                icon={headerCell.icon}
                infoContent={headerCell.infoContent}
              />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
  decorators: [
    (Story: typeof React.Component) => (
      <Flex align="start" justify="space-between" gap="medium" style={{ flex: 1 }}>
        <Story />
      </Flex>
    )
  ],
  name: "Sizes"
};

export const Borders = {
  render: () => {
    const columns: TableColumn[] = [
      {
        id: "sentOn",
        title: "Sent on",
        width: 150,
        loadingStateType: "medium-text"
      },
      {
        id: "subject",
        title: "Subject",
        loadingStateType: "long-text"
      },
      {
        id: "sentBy",
        title: "Sent by",

        width: {
          min: 120,
          max: 200
        },

        infoContent: "This is the sender",
        loadingStateType: "circle"
      },
      {
        id: "status",
        title: "Status",
        width: 150,
        infoContent: "Info content for the status column",
        loadingStateType: "medium-text"
      },
      {
        id: "emailsSent",
        title: "Emails sent",
        width: 150,
        loadingStateType: "medium-text"
      }
    ];
    const data = [
      {
        id: "1",
        sentOn: "2020-01-01",
        sentBy: "John Doe",
        subject: "Lorem ipsum dolor",
        status: "Sent",
        emailsSent: 100
      },
      {
        id: "3",
        sentOn: "2023-03-03",
        sentBy: "Some Person",
        subject:
          "This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject",
        status: "Sent",
        emailsSent: 999
      },
      {
        id: "2",
        sentOn: "2022-02-02",
        sentBy: "Other Name",
        subject: "This is the subject",
        status: "Sent",
        emailsSent: 99
      }
    ];
    return (
      <>
        <Table
          errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
          emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
          columns={columns}
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell key={index} title={headerCell.title} />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <TableAvatar text={rowItem.sentBy} />
                </TableCell>
                <TableCell>
                  <Label text={rowItem.status} color="positive" />
                </TableCell>
                <TableCell>{rowItem.emailsSent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table
          errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
          emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
          columns={columns}
          withoutBorder
        >
          <TableHeader>
            {columns.map((headerCell, index) => (
              <TableHeaderCell key={index} title={headerCell.title} />
            ))}
          </TableHeader>
          <TableBody>
            {data.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <TableAvatar text={rowItem.sentBy} />
                </TableCell>
                <TableCell>
                  <Label text={rowItem.status} color="positive" />
                </TableCell>
                <TableCell>{rowItem.emailsSent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
  decorators: [
    (Story: typeof React.Component) => (
      <Flex direction="column" gap={40}>
        <Story />
      </Flex>
    )
  ],
  name: "Borders"
};

export const TableHeaderFunctionality = {
  render: () => {
    const [tableData, setTableData] = useState(emailTableData);
    const [sorting, setSorting] = useState<{ [key: string]: "asc" | "desc" | "none" }>({});

    const onSort = (columnId: string, sortState: "asc" | "desc" | "none") => {
      setSorting({
        [columnId]: sortState
      });

      setTableData(sort(columnId as keyof (typeof tableData)[number], sortState, tableData));
    };

    return (
      <Table
        errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
        emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
        columns={emailColumns}
      >
        <TableHeader>
          {emailColumns.map((headerCell, index) => (
            <TableHeaderCell
              key={index}
              title={headerCell.title}
              icon={headerCell.icon}
              infoContent={headerCell.infoContent}
              onSortClicked={sortState => onSort(headerCell.id, sortState)}
              sortState={sorting[headerCell.id]}
            />
          ))}
        </TableHeader>
        <TableBody>
          {tableData.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { emailTableData, emailColumns }
      }
    }
  },
  name: "Table Header Functionality"
};

export const Loading = {
  render: () => (
    <Table
      dataState={{
        isLoading: true
      }}
      errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
      emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
      columns={emailColumns}
    >
      <TableHeader>
        {emailColumns.map((headerCell, index) => (
          <TableHeaderCell key={index} title={headerCell.title} />
        ))}
      </TableHeader>
      <TableBody>
        {emailTableData.map(rowItem => (
          <TableRow key={rowItem.id}>
            <TableCell>{rowItem.sentOn}</TableCell>
            <TableCell>{rowItem.subject}</TableCell>
            <TableCell>
              <TableAvatar text={rowItem.sentBy} />
            </TableCell>
            <TableCell>
              <Label text={rowItem.status} color="positive" />
            </TableCell>
            <TableCell>{rowItem.emailsSent}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { emailTableData, emailColumns }
      }
    }
  },
  name: "Loading"
};

export const Scroll = {
  render: () => (
    <div
      style={{
        height: 220,
        width: "100%"
      }}
    >
      <Table
        errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
        emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
        columns={scrollTableColumns}
      >
        <TableHeader>
          {scrollTableColumns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {scrollTableData.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>
                <Label text={rowItem.priority} color={priorityColumnToLabelColor[rowItem.priority]} />
              </TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color={statusColumnToLabelColor[rowItem.status]} />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { scrollTableColumns, scrollTableData, priorityColumnToLabelColor, statusColumnToLabelColor }
      }
    }
  },
  name: "Scroll"
};

export const VirtualizedScroll = {
  render: () => {
    const Row = (data: (typeof virtualizedScrollTableData)[number]) => {
      return (
        <TableRow>
          {virtualizedScrollTableColumns.map(column => {
            return (
              <TableCell sticky={column.id === "id"} key={column.id}>
                {data[column.id as keyof typeof data]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    };

    const Header = React.useCallback((columns: TableColumn[]) => {
      return (
        <TableHeader>
          {columns.map((cell, index) => (
            <TableHeaderCell sticky={index === 0} key={index} {...cell} />
          ))}
        </TableHeader>
      );
    }, []);

    return (
      <Table
        errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
        emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
        columns={virtualizedScrollTableColumns}
        style={{
          height: 250
        }}
      >
        <TableVirtualizedBody
          rowRenderer={Row}
          items={virtualizedScrollTableData}
          columns={virtualizedScrollTableColumns}
          headerRenderer={Header}
        />
      </Table>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { virtualizedScrollTableColumns, virtualizedScrollTableData }
      }
    }
  },
  name: "Virtualized Scroll"
};

export const StickyColumn = {
  render: () => {
    return (
      <Table
        errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
        emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
        columns={stickyColumns}
      >
        <TableHeader>
          {stickyColumns.map((headerCell, index) => (
            <TableHeaderCell sticky={index === 0} key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {stickyTableData.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell sticky>{rowItem.projectName}</TableCell>
              <TableCell>
                <Label text={rowItem.status} color={statusColumnToLabelColor[rowItem.status]} />
              </TableCell>
              <TableCell>{rowItem.description}</TableCell>
              <TableCell>{rowItem.createdOn}</TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
              <TableCell>{rowItem.owner}</TableCell>
              <TableCell>{rowItem.priority}</TableCell>
              <TableCell>{rowItem.category}</TableCell>
              <TableCell>{rowItem.dueDate}</TableCell>
              <TableCell>{rowItem.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { stickyColumns, stickyTableData, statusColumnToLabelColor }
      }
    }
  },
  name: "Sticky column"
};

export const HighlightedRow = {
  render: () => {
    const shouldRowBeHighlighted = (rowItem: (typeof emailTableData)[number]) => {
      return rowItem.id === "2";
    };

    return (
      <Table
        errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
        emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
        columns={emailColumns}
      >
        <TableHeader>
          {emailColumns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {emailTableData.map(rowItem => (
            <TableRow key={rowItem.id} highlighted={shouldRowBeHighlighted(rowItem)}>
              <TableCell>{rowItem.sentOn}</TableCell>
              <TableCell>{rowItem.subject}</TableCell>
              <TableCell>
                <TableAvatar text={rowItem.sentBy} />
              </TableCell>
              <TableCell>
                <Label text={rowItem.status} color="positive" />
              </TableCell>
              <TableCell>{rowItem.emailsSent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { emailColumns, emailTableData }
      }
    }
  },
  name: "Highlighted row"
};
