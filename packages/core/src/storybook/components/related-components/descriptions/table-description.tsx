import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Calendar, Doc, Status } from "../../../../components/Icon/Icons";
import { Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "../../../../components";
import {
  statusColumnToLabelColor,
  TableEmptyState,
  TableErrorState
} from "../../../../components/Table/Table/__stories__/Table.stories.helpers";

const tableColumns = [
  {
    id: "sentOn",
    title: "Sent",
    icon: Calendar,
    width: 75
  },
  {
    id: "subject",
    title: "Subject",
    icon: Doc
  },
  {
    id: "status",
    title: "Status",
    icon: Status,
    width: 120
  }
];

const tableData = [
  {
    id: "1",
    sentOn: "Apr 22",
    subject: "Limited time offer: AP Process",
    sentBy: "John Doe",
    status: "In progress"
  },
  {
    id: "2",
    sentOn: "Apr 22",
    subject: "Action required: Update your AP",
    sentBy: "Jane Doe",
    status: "Queued"
  },
  {
    id: "3",
    sentOn: "Apr 22",
    subject: "Limited time offer: AP Process",
    sentBy: "Peter Smith",
    status: "Sent"
  }
];

export const TableDescription = () => {
  const component = useMemo(
    () => (
      <div style={{ width: "95%" }}>
        <Table errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={tableColumns}>
          <TableHeader>
            {tableColumns.map(cell => (
              <TableHeaderCell key={cell.id} {...cell} />
            ))}
          </TableHeader>
          <TableBody>
            {tableData.map(rowItem => (
              <TableRow key={rowItem.id}>
                <TableCell>{rowItem.sentOn}</TableCell>
                <TableCell>{rowItem.subject}</TableCell>
                <TableCell>
                  <Label
                    text={rowItem.status}
                    color={statusColumnToLabelColor[rowItem.status as keyof typeof statusColumnToLabelColor]}
                    isAnimationDisabled
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="Table"
      href="/?path=/docs/data-display-table--docs"
      description="Tables are used to organize data, making it easier to understand."
    />
  );
};
