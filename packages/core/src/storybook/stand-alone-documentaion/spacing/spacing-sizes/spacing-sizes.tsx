import React from "react";
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, Flex, Box } from "../../../../components";
import { TokenName } from "../spacing-token-name/spacing-token-name";

const spacingData = [
  {
    TokenName: "space-2",
    Value: "2px",
    Description: "Use for small, compact components"
  },
  {
    TokenName: "space-4",
    Value: "4px",
    Description: "Use for small, compact components"
  },
  {
    TokenName: "space-8",
    Value: "8px",
    Description: "Use for small, compact components"
  },
  {
    TokenName: "space-12",
    Value: "12px",
    Description: "Use for medium, less dense components"
  },
  {
    TokenName: "space-16",
    Value: "16px",
    Description: "Use for larger components or dense layouts"
  },
  {
    TokenName: "space-20",
    Value: "20px",
    Description: "Use for larger pieces of UI, patterns, or dense layouts"
  },
  {
    TokenName: "space-24",
    Value: "24px",
    Description: "Use for larger pieces of UI, patterns, or layouts"
  },
  {
    TokenName: "space-32",
    Value: "32px",
    Description: "Use for patterns or layouts"
  },
  {
    TokenName: "space-40",
    Value: "40px",
    Description: "Use for patterns or layouts"
  },
  {
    TokenName: "space-48",
    Value: "48px",
    Description: "Use for patterns or layouts with increased spacing"
  },
  {
    TokenName: "space-64",
    Value: "64px",
    Description: "Use for layouts with increased spacing"
  },
  {
    TokenName: "space-80",
    Value: "80px",
    Description: "Use for layouts with increased spacing"
  }
];
export const SpacingSizes = () => (
  <Box shadow="small" rounded="big" marginTop="xl">
    <Table
      withoutBorder
      columns={[
        {
          id: "TokenName",
          title: "Token name",
          width: "240px"
        },
        {
          id: "Value",
          title: "Value",
          width: "240px"
        },
        {
          id: "Description",
          title: "Description"
        }
      ]}
      errorState={<div />}
      emptyState={<div />}
      size="large"
    >
      <TableHeader>
        <TableHeaderCell title="Token name" />
        <TableHeaderCell title="Value" />
        <TableHeaderCell title="Description" />
      </TableHeader>
      <TableBody>
        {spacingData.map(rowItem => (
          <TableRow key={rowItem.TokenName}>
            <TableCell>
              <TokenName>{rowItem.TokenName}</TokenName>
            </TableCell>
            <TableCell>
              <Flex gap="small">
                <div
                  style={{
                    backgroundColor: "#6161FF",
                    height: "var(--sb-space-20)",
                    width: "var(--sb-" + rowItem.TokenName + ")"
                  }}
                ></div>
                {rowItem.Value}
              </Flex>
            </TableCell>
            <TableCell>{rowItem.Description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
);
