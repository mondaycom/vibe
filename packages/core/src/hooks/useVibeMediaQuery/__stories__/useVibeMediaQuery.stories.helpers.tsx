import React from "react";
import { TokenTable } from "vibe-storybook-components";

export const TableMediaQuery = () => {
  const theadData = ["Value", "Media query"];

  const tbodyData = [
    {
      id: "1",
      items: ["1", "screen and (max-width: 767px)"]
    },
    {
      id: "2",
      items: ["2", "screen and (max-width: 1023px) and (min-width: 768px) "]
    },
    {
      id: "3",
      items: ["3", "screen and (max-width: 1279px) and (min-width: 1024px)"]
    },
    { id: "4", items: ["4", "screen and (max-width: 1439px) and (min-width: 1278px)"] },
    { id: "5", items: ["5", "screen and (max-width: 1919px) and (min-width: 1440px)"] },
    { id: "6", items: ["6", "screen and (min-width: 1920px)"] }
  ];
  return <TokenTable theadData={theadData} tbodyData={tbodyData} />;
};
